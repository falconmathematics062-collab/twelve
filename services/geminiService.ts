
import { GoogleGenAI, Type, Schema } from "@google/genai";

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
    The user wants a very concise explanation of the topic: "${topic}" from the chapter "${chapterTitle}".

    Your Task:
    1.  **Concise Definition**: Provide a one-line explanation/definition of the concept.
    2.  **Key Points**: Provide 1 or 2 brief bullet points explaining the core concept.
    3.  **One Example**: Provide exactly ONE simple, solved example to illustrate the concept.

    Guidelines:
    - Keep it short and concise. Do not give long paragraphs.
    - Use Markdown for formatting.
    - **Do NOT use LaTeX.** Use standard Unicode characters for math (e.g., √, ∫, π, θ, x², a₁, ∈).
    - Strictly follow the NCERT curriculum level.
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

export async function* getPreviousYearQuestionsStream(chapterTitle: string): AsyncGenerator<string> {
  const model = "gemini-2.5-flash";
  const prompt = `
    You are an expert Karnataka State Board (PUC) Mathematics teacher.
    The student wants previous year board exam questions for the chapter: "${chapterTitle}".

    Your Task:
    Provide a collection of questions that have appeared in the Karnataka 2nd PUC Board exams for this specific chapter in the last 3-5 years (e.g., 2024, 2023, 2022, 2020).

    Formatting Requirements:
    1.  **Group by Marks/Section**: Organize the questions by their marks or section (typical 2nd PUC pattern).
        - **Part A (1 Mark / MCQ)**
        - **Part B (2 Marks)**
        - **Part C (3 Marks)**
        - **Part D (5 Marks)**
        - **Part E (4/6 Marks)** (if applicable for this chapter)
    
    2.  **Year Tagging**: For EACH question, append the Year and Exam Month in bold brackets at the end of the question text. 
        - Example: "Define a bijective function. **[March 2023]**"
        - Example: "Find the integral of sin(x). **[July 2022]**"
    
    3.  **No Solutions**: Only list the questions. Do not provide answers or solutions.
    
    4.  **Math Format**: **Do NOT use LaTeX.** Use standard Unicode text characters for mathematical symbols (e.g., x², ∫, √, π, θ, A⁻¹).
    
    5.  **Authenticity**: Ensure the questions are typical of the Karnataka PUC board pattern for this chapter.
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
    console.error("Error generating previous year questions:", error);
    throw new Error("Could not generate previous year questions.");
  }
}

// ---- GAME BASED LEARNING ENGINE ----

export type GameType = 'mcq' | 'true_false' | 'match' | 'fix_broken' | 'predict_next' | 'strategy' | 'derivation';

export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export type TrueFalseQuestion = {
  id: number;
  statement: string;
  isTrue: boolean;
  explanation: string;
};

export type MatchPair = {
  id: number;
  left: string;
  right: string;
};

export type FixBrokenGameData = {
    id: number;
    problem: string;
    steps: {
        id: number;
        text: string;
        isIncorrect: boolean;
        correction?: string;
    }[];
    finalAnswer: string;
};

export type PredictNextGameData = {
    id: number;
    problem: string;
    givenSteps: string[];
    options: string[];
    correctOption: number;
    explanation: string;
};

export type DerivationGameData = {
    id: number;
    title: string;
    steps: string[];
};

export async function generateGameContent(chapter: any, gameType: GameType): Promise<any> {
  const model = "gemini-2.5-flash";
  
  let contextText = `Chapter: ${chapter.chapter_number} - ${chapter.chapter_title}.\n`;
  if (chapter.sections) {
      chapter.sections.forEach((sec: any) => {
          contextText += `Section: ${sec.section_title}\n${sec.content}\n`;
          if (sec.definitions) {
              sec.definitions.forEach((def: any) => contextText += `Def: ${def.title} - ${def.text}\n`);
          }
      });
  }

  // Common instructions for the Game Engine
  const basePrompt = `
    ROLE & PURPOSE:
    You are the Advanced Game & Competitive Learning Engine for a 1st & 2nd PUC Mathematics app.
    Your job is to convert the provided textbook content into a smart, educational game.
    
    STRICT RULES (NO INVENTING CONTENT):
    1. You must NOT create new problems or use outside numbers/variables not typical of the textbook.
    2. All questions/pairs/cards must come ONLY from the provided Chapter Content.
    3. Preserve mathematical accuracy and notation (Use Unicode, NO LaTeX).
    4. Do not ask questions about topics not present in the provided text.
    5. No JEE/NEET level tricks. Stick to Board Exam level.
    
    CHAPTER CONTENT:
    ${contextText.substring(0, 15000)} 
  `;

  let specificPrompt = "";
  let responseSchema: Schema | undefined = undefined;

  if (gameType === 'mcq') {
      specificPrompt = `
        Create 5 Multiple Choice Questions (MCQs) based on the chapter.
        - Questions must be based on textbook logic, values, and concepts.
        - Include an explanation for the correct answer.
        - Options should be distinct.
      `;
      responseSchema = {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.INTEGER },
              question: { type: Type.STRING },
              options: { type: Type.ARRAY, items: { type: Type.STRING } },
              correctAnswer: { type: Type.INTEGER, description: "Index of correct option (0-3)" },
              explanation: { type: Type.STRING }
            },
            required: ["id", "question", "options", "correctAnswer", "explanation"]
          }
      };
  } else if (gameType === 'true_false') {
      specificPrompt = `
        Create 10 True or False questions.
        - Statements must be directly based on textbook concepts/theorems.
        - Example: "The derivative of a constant is zero."
        - Provide an explanation from the text.
      `;
      responseSchema = {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.INTEGER },
              statement: { type: Type.STRING },
              isTrue: { type: Type.BOOLEAN },
              explanation: { type: Type.STRING }
            },
            required: ["id", "statement", "isTrue", "explanation"]
          }
      };
  } else if (gameType === 'match') {
      specificPrompt = `
        Create 5 Pairs for a Match-the-Following game.
        - Pairs can be: Definition ↔ Term, Formula ↔ Symbol, Theorem ↔ Statement.
        - Ensure clear 1-to-1 mapping.
      `;
      responseSchema = {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.INTEGER },
              left: { type: Type.STRING },
              right: { type: Type.STRING }
            },
            required: ["id", "left", "right"]
          }
      };
  } else if (gameType === 'fix_broken') {
      specificPrompt = `
        Create 3 "Fix the Broken Solution" challenges.
        For each challenge:
        1. Pick a textbook problem.
        2. Solve it in 3-5 steps.
        3. INTENTIONALLY break ONE step (e.g. wrong sign, wrong formula, missed term).
        4. Mark which step is incorrect and provide the correction.
        5. Provide the final correct answer.
      `;
      responseSchema = {
          type: Type.ARRAY,
          items: {
              type: Type.OBJECT,
              properties: {
                  id: { type: Type.INTEGER },
                  problem: { type: Type.STRING },
                  steps: {
                      type: Type.ARRAY,
                      items: {
                          type: Type.OBJECT,
                          properties: {
                              id: { type: Type.INTEGER },
                              text: { type: Type.STRING },
                              isIncorrect: { type: Type.BOOLEAN },
                              correction: { type: Type.STRING }
                          },
                          required: ["id", "text", "isIncorrect"]
                      }
                  },
                  finalAnswer: { type: Type.STRING }
              },
              required: ["id", "problem", "steps", "finalAnswer"]
          }
      };
  } else if (gameType === 'predict_next') {
      specificPrompt = `
        Create 3 "Predict the Next Step" challenges.
        For each challenge:
        1. Pick a textbook problem.
        2. Show the first 1 or 2 steps (givenSteps).
        3. Ask "What is the next step?".
        4. Provide 4 options for the next step: 1 correct, 3 incorrect but plausible distractors.
      `;
      responseSchema = {
          type: Type.ARRAY,
          items: {
              type: Type.OBJECT,
              properties: {
                  id: { type: Type.INTEGER },
                  problem: { type: Type.STRING },
                  givenSteps: { type: Type.ARRAY, items: { type: Type.STRING } },
                  options: { type: Type.ARRAY, items: { type: Type.STRING } },
                  correctOption: { type: Type.INTEGER, description: "Index of correct option (0-3)" },
                  explanation: { type: Type.STRING }
              },
              required: ["id", "problem", "givenSteps", "options", "correctOption", "explanation"]
          }
      };
  } else if (gameType === 'strategy') {
      specificPrompt = `
        Create 5 "Choose Your Strategy" challenges.
        1. Pick a problem that requires a specific method (e.g. Substitution, Parts, Product Rule, etc.).
        2. Ask "Which method is best to solve this?".
        3. Provide 4 method options.
      `;
      responseSchema = {
          type: Type.ARRAY,
          items: {
              type: Type.OBJECT,
              properties: {
                  id: { type: Type.INTEGER },
                  question: { type: Type.STRING, description: "The math problem" },
                  options: { type: Type.ARRAY, items: { type: Type.STRING }, description: "List of methods" },
                  correctAnswer: { type: Type.INTEGER },
                  explanation: { type: Type.STRING }
              },
              required: ["id", "question", "options", "correctAnswer", "explanation"]
          }
      };
  } else if (gameType === 'derivation') {
      specificPrompt = `
        Create 2 "Derivation Rebuild" games.
        1. Pick a standard derivation or multi-step proof from the chapter.
        2. List the steps in the CORRECT order.
        (The game UI will shuffle them).
      `;
      responseSchema = {
          type: Type.ARRAY,
          items: {
              type: Type.OBJECT,
              properties: {
                  id: { type: Type.INTEGER },
                  title: { type: Type.STRING, description: "Name of derivation/proof" },
                  steps: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ["id", "title", "steps"]
          }
      };
  }

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: basePrompt + "\n" + specificPrompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    const text = response.text;
    if (!text) return [];
    return JSON.parse(text);
  } catch (e) {
    console.error("Error generating game content:", e);
    return [];
  }
}

// Deprecated in favor of generic generateGameContent, but kept for compatibility if needed elsewhere
export async function generateQuiz(chapterTitle: string): Promise<QuizQuestion[]> {
    // This is now a wrapper around the new engine, assuming we don't have full content passed
    // For now, we will just return empty or error, but the UI should use generateGameContent
    // Or we can mock a chapter object with just the title.
    return generateGameContent({ chapter_title: chapterTitle, chapter_number: "", sections: [] }, 'mcq');
}
