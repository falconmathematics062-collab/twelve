
import { GoogleGenAI, Type } from "@google/genai";

// Assume API_KEY is set in the environment.
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

type Exercise = { id: string; text: string; sectionTitle: string };
type ChapterContext = { number: string; title: string };

const COMMON_RULES = `
    Guidelines:
    1.  **Format**: Use Markdown.
    2.  **Math**: **Do NOT use LaTeX or KaTeX formatting.** Use standard Unicode text characters for mathematical symbols.
        - Use superscripts for powers (e.g., x², y³, eˣ).
        - Use symbols like √, ∫, π, θ, α, β, ≠, ≤, ≥, ±, ∞, →, ∈, ∪, ∩, Δ.
        - Use / for division or write fractions clearly like (a/b).
    3.  **Textbook Approved Methods**: You cannot invent new methods — only use textbook-approved methods (NCERT).
    4.  **Error Checking & Clarity**:
        - Ensure steps are mathematically correct.
        - Ensure they match the textbook’s method.
        - If a student misunderstands something, politely correct them.
        - Always encourage, never discourage.
    5.  **Tables for Data (CRITICAL)**:
        - **ALWAYS** use Markdown tables for presenting structured data such as:
          - Domain and Range of functions (especially Inverse Trigonometric Functions).
          - Substitution tables/rules.
          - Lists of Standard Integrals or Derivatives.
          - Probability distributions.
        - **Format Example**:
          | Function | Domain | Range (Principal Value Branch) |
          | :--- | :--- | :--- |
          | y = sin⁻¹ x | [-1, 1] | [-π/2, π/2] |
`;

export async function* solveTextProblemStream(problem: Exercise, chapterContext: ChapterContext): AsyncGenerator<string> {
  const model = "gemini-2.5-flash";

  const prompt = `
    You are an expert PUC (Class 11/12) math tutor following the NCERT curriculum.
    The user is asking for a solution to a problem from their textbook.
    
    Textbook Context:
    - Chapter: ${chapterContext.number} - ${chapterContext.title}
    - Exercise Set: ${problem.sectionTitle}

    Problem to Solve:
    - Question ${problem.id}: "${problem.text}"

    Your Task:
    1.  Provide a clear, detailed, step-by-step solution to the problem.
    2.  Strictly follow the methods, notations, and logic used in the NCERT Mathematics textbooks.
    3.  **Format Structure (IMPORTANT):**
        - Use Markdown Headings (###) for structure markers like "### Given:", "### To Prove:", "### Step 1:", "### Step 2:". These will be colored Blue.
        - Write the solution **step-by-step**, with each distinct step on a **new line**.
        - Explain the logic briefly between steps.
    4.  **Highlight the Main Answer (IMPORTANT):**
        - At the very end, provide the final answer.
        - **YOU MUST WRAP THE ENTIRE FINAL ANSWER BLOCK IN BOLD MARKDOWN (**...**) to highlight it in pale blue.**
        - Inside the final answer block, if there are multiple points, list them on separate lines.
        
        Example format for Final Answer:
        **Final Answer:
        The value of x is 5.
        The value of y is 10.**
    5.  **NO Conversational Filler (CRITICAL):**
        - Start directly with the solution steps (e.g. "### Given..." or "### Solution").
        - **DO NOT** write "Hello there!", "Here is the solution", "I can help with that", "Let's solve this", or any other introductory text.
        - **DO NOT** write concluding remarks like "Hope this helps!".
        - Just provide the math solution content.

    ${COMMON_RULES}
  `;

  try {
    const responseStream = await ai.models.generateContentStream({
        model: model,
        contents: prompt,
        config: {
            thinkingConfig: { thinkingBudget: 0 } 
        }
    });
    
    for await (const chunk of responseStream) {
        const text = chunk.text;
        if (text) {
            yield text;
        }
    }

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
      if (error.message.includes('API key not valid')) {
        throw new Error("The configured Gemini API key is not valid. Please check your environment configuration.");
      }
    }
    throw new Error("Could not get a response from the AI model.");
  }
}

export async function* solveCustomProblemStream(
  questionText: string, 
  imageBase64: string | null, 
  mimeType: string | null,
  mode: 'solve' | 'mistake' = 'solve'
): AsyncGenerator<string> {
  const model = "gemini-2.5-flash";

  let prompt = "";

  if (mode === 'mistake') {
      prompt = `
      You are an expert PUC (Class 11/12) math tutor. The user has uploaded an image of their ATTEMPT at solving a math problem.
      Your task is to act as a "Mistake Finder".

      User's Note (optional): "${questionText}"

      Your Goal:
      1.  **Analyze** the handwritten solution in the image carefully.
      2.  **Identify** if there are any mistakes (calculation errors, logical flaws, incorrect formula application, etc.).
      3.  **If the solution is Correct:**
          - Confirm it is correct.
          - Briefly summarize the method used and why it works.
          - Offer a word of encouragement.
      4.  **If the solution is Incorrect:**
          - Point out exactly **where** the first mistake occurred (e.g., "In the third step, you integrated x² as 2x instead of x³/3").
          - **Explain** why it is a mistake.
          - Provide the **Correct Step-by-Step Solution** from that point onwards.
      
      Formatting Rules:
      1.  Use Markdown Headings (###) for sections like "### Analysis:", "### Mistake Found:", "### Correct Solution:".
      2.  **Highlight the Final Correct Answer** in bold at the end.

      ${COMMON_RULES}
      `;
  } else {
      prompt = `
      You are an expert PUC (Class 11/12) math tutor following the NCERT curriculum.
      The user has asked a custom question, possibly with an image.

      User Question: "${questionText}"

      Your Task:
      1.  Analyze the question (and image if provided).
      2.  Provide a clear, detailed, step-by-step solution.
      3.  Strictly follow the methods, notations, and logic used in the NCERT Mathematics textbooks.
      4.  **Format Structure (IMPORTANT):**
          - Use Markdown Headings (###) for structure markers like "### Given:", "### To Prove:", "### Step 1:", "### Step 2:". These will be colored Blue.
          - Write the solution **step-by-step**, with each distinct step on a **new line**.
          - Explain the logic briefly between steps.
      5.  **Highlight the Main Answer (IMPORTANT):**
          - At the very end, provide the final answer.
          - **YOU MUST WRAP THE ENTIRE FINAL ANSWER BLOCK IN BOLD MARKDOWN (**...**) to highlight it in pale blue.**
          - Inside the final answer block, if there are multiple points, list them on separate lines.

      ${COMMON_RULES}
      `;
  }

  const contents: any = [{
    role: "user",
    parts: []
  }];

  if (imageBase64 && mimeType) {
    contents[0].parts.push({
      inlineData: {
        mimeType: mimeType,
        data: imageBase64
      }
    });
  }

  // Add text prompt
  contents[0].parts.push({ text: prompt });

  try {
    const responseStream = await ai.models.generateContentStream({
        model: model,
        contents: contents,
        config: {
            thinkingConfig: { thinkingBudget: 0 } 
        }
    });
    
    for await (const chunk of responseStream) {
        const text = chunk.text;
        if (text) {
            yield text;
        }
    }

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Could not get a response from the AI model.");
  }
}

export async function* getHintStream(
    questionText: string,
    imageBase64: string | null,
    mimeType: string | null,
    level: 1 | 2 | 3 | 4,
    context?: string
): AsyncGenerator<string> {
    const model = "gemini-2.5-flash";

    let hintInstruction = "";
    switch(level) {
        case 1:
            hintInstruction = "Provide a **Hint Level 1 (Very Light Hint)**. A small clue that nudges the student toward the first step. Do not reveal formulas or answers yet. Keep it brief and encouraging.";
            break;
        case 2:
            hintInstruction = "Provide a **Hint Level 2 (Medium Hint)**. A clue about which formula/method to use.";
            break;
        case 3:
            hintInstruction = "Provide a **Hint Level 3 (Strong Hint)**. Shows the first one or two steps from the textbook solution.";
            break;
        case 4:
            hintInstruction = "Provide a **Hint Level 4 (Full Step)**. A complete step (not the entire solution).";
            break;
    }

    const prompt = `
        You are an expert PUC (Class 11/12) math tutor. The student is stuck on a problem and needs a specific level of help.
        
        Problem: "${questionText}"
        ${context ? `Context: ${context}` : ''}

        Your Task:
        ${hintInstruction}

        ${COMMON_RULES}
    `;

    const contents: any = [{
        role: "user",
        parts: []
    }];

    if (imageBase64 && mimeType) {
        contents[0].parts.push({
            inlineData: {
                mimeType: mimeType,
                data: imageBase64
            }
        });
    }

    contents[0].parts.push({ text: prompt });

    try {
        const responseStream = await ai.models.generateContentStream({
            model: model,
            contents: contents,
            config: {
                thinkingConfig: { thinkingBudget: 0 }
            }
        });

        for await (const chunk of responseStream) {
            const text = chunk.text;
            if (text) {
                yield text;
            }
        }
    } catch (error) {
        console.error("Error generating hint:", error);
        throw new Error("Could not get hint.");
    }
}

export async function* explainTopicStream(topic: string, chapterTitle: string): AsyncGenerator<string> {
  const model = "gemini-2.5-flash";
  const prompt = `
    You are an expert PUC (Class 12) Mathematics tutor.
    The user wants a detailed explanation of the topic: "${topic}" from the chapter "${chapterTitle}".

    Your Task:
    1.  **Definition**: Provide a clear, mathematical definition of the concept.
    2.  **Explanation**: Explain the concept simply but thoroughly, as if teaching a student who is seeing it for the first time.
    3.  **Key Properties/Formulas**: List any important formulas or properties associated with this topic.
    4.  **Examples**: Provide 2 distinct, solved examples to illustrate the concept.

    Guidelines:
    - Use Markdown for formatting. Use Bold and Headings to structure the response.
    - **Do NOT use LaTeX.** Use standard Unicode characters for math (e.g., √, ∫, π, θ, x², a₁, ∈).
    - Be precise and strictly follow the NCERT curriculum level.
  `;

  try {
    const responseStream = await ai.models.generateContentStream({
        model: model,
        contents: prompt,
        config: {
            thinkingConfig: { thinkingBudget: 0 }
        }
    });

    for await (const chunk of responseStream) {
        const text = chunk.text;
        if (text) {
            yield text;
        }
    }
  } catch (error) {
    console.error("Error explaining topic:", error);
    throw new Error("Could not generate explanation.");
  }
}

export async function* generateFormulaSheetStream(chapterTitle: string): AsyncGenerator<string> {
  const model = "gemini-2.5-flash";
  let prompt = "";

  if (chapterTitle === "General & Short Formulas") {
    prompt = `
    Generate a comprehensive "Short Formula Sheet" for Mathematics.
    
    Part 1: General Formulas
    Include essential formulas from Basic Algebra (identities), Trigonometry (basic values, identities), and Geometry (areas, volumes) that are prerequisite/fundamental for Class 12 Math.
    
    Part 2: Chapter-wise Short Summary
    For EACH chapter of 2nd PUC (Class 12) Mathematics, provide ONLY the most critical 3-5 formulas/identities in a concise manner.
    Chapters: Relations & Functions, Inverse Trig, Matrices, Determinants, Continuity & Diff, Application of Derivatives, Integrals, Application of Integrals, Differential Equations, Vector Algebra, 3D Geometry, Linear Programming, Probability.
    
    Guidelines:
    1.  **Format**: Use Markdown. Use clear headers for each section.
    2.  **Tables**: **YOU MUST USE MARKDOWN TABLES** for any data that is presented as a table in textbooks.
        - Example: Trigonometric Values table, Domain/Range tables.
    3.  **Math**: **Do NOT use LaTeX or KaTeX formatting.** Use standard Unicode text characters for mathematical symbols.
        - Use superscripts for powers (e.g., x², y³, eˣ).
        - Use symbols like √, ∫, π, θ, α, β, ≠, ≤, ≥, ±, ∞, →, ∈, ∪, ∩, Δ.
        - Use / for division or write fractions clearly like (a/b).
    4.  **Style**: Concise, high-yield, "Cheat Sheet" style.
    `;
  } else {
    prompt = `
    Generate a comprehensive mathematical formula sheet for the 2nd PUC (Class 12) Mathematics chapter: "${chapterTitle}".
    
    Guidelines:
    1.  **Format**: Use Markdown. Group formulas logically under clear headings (###).
    2.  **Tables (MANDATORY)**: 
        - If the chapter (e.g., Inverse Trigonometric Functions) contains **Domain and Range** data, **YOU MUST FORMAT IT AS A MARKDOWN TABLE**.
        - If the chapter contains **Substitution Rules** (e.g. for Integrals or Inverse Trig), **YOU MUST FORMAT IT AS A MARKDOWN TABLE**.
        - Example Table Format:
          | Expression | Substitution |
          | :--- | :--- |
          | a² + x² | x = a tan θ |
    3.  **Math**: **Do NOT use LaTeX or KaTeX formatting.** Use standard Unicode text characters for mathematical symbols.
        - Use superscripts for powers (e.g., x², y³, eˣ).
        - Use symbols like √, ∫, π, θ, α, β, ≠, ≤, ≥, ±, ∞, →, ∈, ∪, ∩, Δ.
        - Use / for division or write fractions clearly like (a/b).
    4.  **Content**: Include all key definitions, theorems, and formulas required for this chapter.
    5.  **Clarity**: Provide a brief label or name for each formula (e.g., "**Distance Formula**:") followed by the formula.
    `;
  }

  try {
    const responseStream = await ai.models.generateContentStream({
      model: model,
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    for await (const chunk of responseStream) {
      const text = chunk.text;
      if (text) {
        yield text;
      }
    }
  } catch (error) {
    console.error("Error generating formula sheet:", error);
    throw new Error("Could not generate formula sheet.");
  }
}

export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export async function generateQuiz(chapterTitle: string): Promise<QuizQuestion[]> {
  const model = "gemini-2.5-flash";
  const prompt = `
    Generate 10 multiple choice questions for the 2nd PUC (Class 12) Mathematics chapter: "${chapterTitle}".
    Target level: Intermediate (suitable for board exams and KCET).
    
    Important: Do NOT use LaTeX. Use simple unicode text for math (e.g., x^2, theta, pi, sqrt).
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.INTEGER },
              question: { type: Type.STRING },
              options: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              correctAnswer: { type: Type.INTEGER },
              explanation: { type: Type.STRING }
            },
            required: ["id", "question", "options", "correctAnswer", "explanation"]
          }
        },
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    const text = response.text;
    if (!text) return [];
    
    const parsed = JSON.parse(text);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("Error generating quiz:", e);
    return [];
  }
}
