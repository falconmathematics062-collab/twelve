
import { GoogleGenAI, Type } from "@google/genai";

// Always use the direct process.env.API_KEY when initializing GoogleGenAI
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const FORMATTING_AI_INSTRUCTIONS = `
ROLE: You are the "Mathematics Textbook Formatting AI".
MISSION: Take raw mathematical content and REFORMAT it into a premium, accessible textbook style. Make it easy to understand for average and below-average students.

STRICT RULES:
1. NO LATEX, NO KATEX, NO $ symbols.
2. USE UNICODE: ∫ (integral), ∑ (sum), √ (root), π (pi), θ (theta), α (alpha), β (beta), Δ (delta), ∞ (infinity), ≠ (not equal), ≤, ≥, ±, ×, ÷, ∈, ⊂, ∪, ∩.
3. POWERS & SUBSCRIPTS: Use Unicode superscripts (e.g., x², y³, eˣ) and standard subscripts (e.g., a_n).
4. MATRICES (CRITICAL): Always use monospaced code blocks (\`\`\`) for matrices. Format them as vertical, multi-line ASCII, ensuring clear vertical alignment of elements within columns for readability. For each column, determine the maximum character length of its elements across all rows. Then, pad each element in that column with spaces to match this maximum length, ensuring perfect vertical alignment.
   Example of a 2x2 matrix:
   \`\`\`
   [  1   2  ]
   [ -3   5  ]
   \`\`\`
   Example of a 3x1 matrix:
   \`\`\`
   [  1  ]
   [  0  ]
   [  3  ]
   \`\`\`
   Example of a 1x3 matrix:
   \`\`\`
   [  -1   4   5  ]
   \`\`\`
   Example of a matrix with varying element lengths, ensuring alignment:
   \`\`\`
   [   2      5    19    -7   ]
   [  35     -2    5/2   12   ]
   [  √3      1    -5    17   ]
   \`\`\`
5. DERIVATIVES: Use dy/dx or d/dx(f(x)).
6. FRACTIONS: Use (a/b) for inline, or clear multi-line layouts for complex expressions.
7. HEADINGS: Use ### for "Step 1", "Step 2", etc.
8. SINGLE-VALUE ANSWERS (CRITICAL): When presenting a single number or short textual answer (e.g., the number of rows, or the value of an element), embed it directly into the narrative text or a clear bullet point using **bold markdown**, instead of trying to create a table or a separate "Value:" field.
   Example: "The number of rows (m) is **3**." or "The element a₁₃ is **19**."
9. TONE: Professional, minimalist, and clear, like a good textbook.
`;

/**
 * Stage 2: The Refiner / Formatting AI pass
 * This function is now only used where a separate formatting step is still desired or necessary,
 * but for explainTopicStream, the formatting instructions are integrated into the primary prompt.
 */
async function formatAsTextbook(rawContent: string): Promise<string> {
    const model = "gemini-flash-latest"; // Changed to gemini-flash-latest
    const prompt = `${FORMATTING_AI_INSTRUCTIONS}\n\nRAW CONTENT TO REFORMAT:\n${rawContent}\n\nREFORMATTED CONTENT:`;
    try {
        const response = await ai.models.generateContent({ model, contents: prompt });
        return response.text || rawContent;
    } catch (e) {
        console.error("Refining failed, returning raw content:", e);
        return rawContent;
    }
}

export async function* solveTextProblemStream(problem: any, chapterContext: any): AsyncGenerator<string> {
    const model = "gemini-flash-latest"; // Changed to gemini-flash-latest
    const primaryPrompt = `Solve this step-by-step, formatted as a textbook solution for average students using only plain text and Unicode. No LaTeX. 
    Chapter ${chapterContext.number} ${chapterContext.title}, Q${problem.id}: ${problem.text}.
    
    When a matrix is explicitly mentioned in the problem, display it immediately in a properly formatted matrix code block in the solution.
    For matrix identification questions, explicitly state all calculated values (rows, columns, number of elements) and for each requested element (e.g., a13: 19) directly within the narrative, using bold for the final values. Ensure clear and complete formatting within markdown. Each step must be self-contained and provide all necessary information.`;
    const rawResponse = await ai.models.generateContent({ model, contents: `${FORMATTING_AI_INSTRUCTIONS}\n\n${primaryPrompt}` });
    const chunks = (rawResponse.text || "").split(' ');
    for (const chunk of chunks) {
        yield chunk + ' ';
        await new Promise(r => setTimeout(r, 10));
    }
}

export async function* solveCustomProblemStream(text: string, imageBase64: string | null, mimeType: string | null, mode: string): AsyncGenerator<string> {
    const model = "gemini-flash-latest"; // Changed to gemini-flash-latest
    const primaryPrompt = `Task: ${mode === 'mistake' ? 'Find mistakes' : 'Solve'}. Question: ${text}. Provide a step-by-step solution formatted as a textbook for average students using only plain text and Unicode. No LaTeX.`;
    const parts: any[] = [];
    if (imageBase64 && mimeType) parts.push({ inlineData: { mimeType, data: imageBase64 } });
    parts.push({ text: `${FORMATTING_AI_INSTRUCTIONS}\n\n${primaryPrompt}` });
    const rawResponse = await ai.models.generateContent({ model, contents: { parts } });
    const chunks = (rawResponse.text || "").split(' ');
    for (const chunk of chunks) {
        yield chunk + ' ';
        await new Promise(r => setTimeout(r, 10));
    }
}

export async function* explainTopicStream(topic: string, chapterTitle: string): AsyncGenerator<string> {
    const model = "gemini-flash-latest"; // Changed to gemini-flash-latest
    // Prompt updated to directly include formatting instructions and request concise explanation.
    const combinedPrompt = `${FORMATTING_AI_INSTRUCTIONS}
    
    Explain "${topic}" from "${chapterTitle}" in Class 12 NCERT style. Provide a concise explanation with exactly two main points and one illustrative example. Focus on clarity for average students. The explanation should be brief and to the point, avoiding unnecessary verbosity.
    
    EXPLANATION:`;
    
    const response = await ai.models.generateContent({ 
        model, 
        contents: combinedPrompt 
    });
    const chunks = (response.text || "").split(' ');
    for (const chunk of chunks) {
        yield chunk + ' ';
        await new Promise(r => setTimeout(r, 10));
    }
}

export async function* generateFormulaSheetStream(chapterTitle: string): AsyncGenerator<string> {
    const model = "gemini-flash-latest"; // Changed to gemini-flash-latest
    const primaryPrompt = `Create a formula sheet for "${chapterTitle}". Format it as a textbook for average students using only plain text and Unicode. No LaTeX.`;
    const rawResponse = await ai.models.generateContent({ model, contents: `${FORMATTING_AI_INSTRUCTIONS}\n\n${primaryPrompt}` });
    const chunks = (rawResponse.text || "").split(' ');
    for (const chunk of chunks) {
        yield chunk + ' ';
        await new Promise(r => setTimeout(r, 10));
    }
}

export async function* getPreviousYearQuestionsStream(chapterTitle: string): AsyncGenerator<string> {
    const model = "gemini-flash-latest"; // Changed to gemini-flash-latest
    const primaryPrompt = `List PUC board questions (past 3+ years) for "${chapterTitle}". Format it as a textbook for average students using only plain text and Unicode. No LaTeX.`;
    const rawResponse = await ai.models.generateContent({ model, contents: `${FORMATTING_AI_INSTRUCTIONS}\n\n${primaryPrompt}` });
    const chunks = (rawResponse.text || "").split(' ');
    for (const chunk of chunks) {
        yield chunk + ' ';
        await new Promise(r => setTimeout(r, 10));
    }
}

export async function* getHintStream(question: string, imageBase64: string | null, mimeType: string | null, level: number, chapterContext?: string): AsyncGenerator<string> {
    const model = "gemini-flash-latest"; // Changed to gemini-flash-latest
    const prompt = `Provide a level ${level} hint for: ${question}. ${chapterContext ? `Context: ${chapterContext}` : ''}. Format it as a textbook for average students using only plain text and Unicode. No LaTeX.`;
    const parts: any[] = [];
    if (imageBase64 && mimeType) parts.push({ inlineData: { mimeType, data: imageBase64 } });
    parts.push({ text: `${FORMATTING_AI_INSTRUCTIONS}\n\n${prompt}` });
    const rawResponse = await ai.models.generateContent({ model, contents: { parts } });
    const chunks = (rawResponse.text || "").split(' ');
    for (const chunk of chunks) {
        yield chunk + ' ';
        await new Promise(r => setTimeout(r, 10));
    }
}

export type GameType = 'mcq' | 'true_false' | 'match' | 'fix_broken' | 'predict_next' | 'strategy' | 'derivation';

export async function generateGameContent(chapter: any, gameType: GameType): Promise<any> {
    const model = "gemini-flash-latest"; // Changed to gemini-flash-latest
    // Prompt refined for game content, maintaining no LaTeX rule.
    const prompt = `You are a Math Game Engine. Use the provided chapter: "${chapter.chapter_title}".
    Create a ${gameType} game. Ensure all math is formatted using pure text and Unicode symbols, no LaTeX or MathML. Make content clear for average students.
    
    RULES FOR ${gameType.toUpperCase()}:
    - DERIVATION: Pick a standard textbook derivation. Provide "title" and "steps" as an ordered array of strings, with each step a single coherent line.
    - STRATEGY: Provide a math question and exactly 4 distinct methods/strategies (e.g., Substitution, Integration by Parts, Graphical Method, etc.) as options.
    `;
    
    let responseSchema: any;
    if (gameType === 'mcq' || gameType === 'strategy' || gameType === 'fix_broken' || gameType === 'predict_next') {
        responseSchema = {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    id: { type: Type.INTEGER },
                    question: { type: Type.STRING },
                    options: { type: Type.ARRAY, items: { type: Type.STRING } },
                    correctAnswer: { type: Type.INTEGER },
                    explanation: { type: Type.STRING }
                },
                required: ["id", "question", "options", "correctAnswer", "explanation"]
            }
        };
    } else if (gameType === 'true_false') {
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
    } else { // derivation
        responseSchema = {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    id: { type: Type.INTEGER },
                    title: { type: Type.STRING },
                    steps: { type: Type.ARRAY, items: { type: Type.STRING } }
                },
                required: ["id", "title", "steps"]
            }
        };
    }

    try {
        const response = await ai.models.generateContent({
            model,
            contents: prompt,
            config: { responseMimeType: "application/json", responseSchema }
        });
        return JSON.parse(response.text || "[]");
    } catch (e) {
        console.error(e);
        return [];
    }
}