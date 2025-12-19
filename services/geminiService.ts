
import { GoogleGenAI, Type } from "@google/genai";

// Always use the direct process.env.API_KEY when initializing GoogleGenAI as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Fix: Escaped triple backticks to prevent premature termination of the template literal which caused syntax errors
const FORMATTING_AI_INSTRUCTIONS = `
ROLE: You are the "Mathematics Textbook Formatting AI".
MISSION: Take raw mathematical content and REFORMAT it to look like a premium, printed arithmetic textbook.

STRICT FORMATTING RULES:
1. NO LATEX, NO KATEX, NO $ symbols.
2. USE UNICODE: ∫ (integral), ∑ (sum), √ (root), π (pi), θ (theta), α (alpha), β (beta), Δ (delta), ∞ (infinity), ≠ (not equal), ≤, ≥, ±, ×, ÷, ∈, ⊂, ∪, ∩.
3. POWERS & SUBSCRIPTS: Use Unicode superscripts (x², y³, eˣ) and standard subscripts (a_n).
4. MATRICES (CRITICAL): Always use monospaced code blocks (\`\`\`) for matrices. Format them as vertical, multi-line ASCII.
   Example:
   \`\`\`
   [  1   2  ]
   [ -3   5  ]
   \`\`\`
5. DERIVATIVES: Use dy/dx or d/dx(f(x)) notation.
6. FRACTIONS: Use (a/b) for inline, or clear multi-line layouts if complex.
7. HEADINGS: Use ### for "Step 1", "Step 2", etc.
8. TONE: Professional, minimalist, and clear.
`;

/**
 * Stage 2: The Refiner / Formatting AI
 * This function takes raw generated content and beautifies it according to the textbook style.
 */
async function formatAsTextbook(rawContent: string): Promise<string> {
    const model = "gemini-3-flash-preview";
    const prompt = `
    ${FORMATTING_AI_INSTRUCTIONS}
    
    RAW CONTENT TO REFORMAT:
    ${rawContent}
    
    REFORMATTED TEXTBOOK CONTENT:
    `;

    try {
        const response = await ai.models.generateContent({ model, contents: prompt });
        return response.text || rawContent;
    } catch (e) {
        console.error("Refining failed, returning raw content:", e);
        return rawContent;
    }
}

/**
 * Sequential process: Generate -> Format
 */
export async function* solveTextProblemStream(problem: any, chapterContext: any): AsyncGenerator<string> {
    const model = "gemini-3-flash-preview";
    const primaryPrompt = `Solve this NCERT problem step-by-step: Chapter ${chapterContext.number} ${chapterContext.title}, Q${problem.id}: ${problem.text}. Just provide the math logic.`;
    
    // To satisfy the "First generated, then formatted" requirement:
    // 1. Get full raw content
    const rawResponse = await ai.models.generateContent({ model, contents: primaryPrompt });
    const rawText = rawResponse.text || "";
    
    // 2. Refine it using the Formatting AI
    const formattedText = await formatAsTextbook(rawText);
    
    // Yield in chunks to simulate streaming for the UI
    const chunks = formattedText.split(' ');
    for (const chunk of chunks) {
        yield chunk + ' ';
        await new Promise(r => setTimeout(r, 10)); // Tiny delay for effect
    }
}

export async function* solveCustomProblemStream(text: string, imageBase64: string | null, mimeType: string | null, mode: string): AsyncGenerator<string> {
    const model = "gemini-3-flash-preview";
    const primaryPrompt = `Task: ${mode === 'mistake' ? 'Find mistakes in this student attempt' : 'Solve this question'}. Question: ${text}. Provide pure math steps.`;
    
    const parts: any[] = [];
    if (imageBase64 && mimeType) parts.push({ inlineData: { mimeType, data: imageBase64 } });
    parts.push({ text: primaryPrompt });

    const rawResponse = await ai.models.generateContent({ model, contents: { parts } });
    const rawText = rawResponse.text || "";
    
    const formattedText = await formatAsTextbook(rawText);
    
    const chunks = formattedText.split(' ');
    for (const chunk of chunks) {
        yield chunk + ' ';
        await new Promise(r => setTimeout(r, 10));
    }
}

export async function* explainTopicStream(topic: string, chapterTitle: string): AsyncGenerator<string> {
    const model = "gemini-3-flash-preview";
    const rawResponse = await ai.models.generateContent({ 
        model, 
        contents: `Explain "${topic}" from "${chapterTitle}" in Class 12 NCERT style. Be concise.` 
    });
    const formattedText = await formatAsTextbook(rawResponse.text || "");
    
    const chunks = formattedText.split(' ');
    for (const chunk of chunks) {
        yield chunk + ' ';
        await new Promise(r => setTimeout(r, 10));
    }
}

export async function* generateFormulaSheetStream(chapterTitle: string): AsyncGenerator<string> {
    const model = "gemini-3-flash-preview";
    const rawResponse = await ai.models.generateContent({ 
        model, 
        contents: `Create a comprehensive formula sheet for "${chapterTitle}".` 
    });
    const formattedText = await formatAsTextbook(rawResponse.text || "");
    
    const chunks = formattedText.split(' ');
    for (const chunk of chunks) {
        yield chunk + ' ';
        await new Promise(r => setTimeout(r, 10));
    }
}

export async function* getPreviousYearQuestionsStream(chapterTitle: string): AsyncGenerator<string> {
    const model = "gemini-3-flash-preview";
    const rawResponse = await ai.models.generateContent({ 
        model, 
        contents: `List Karnataka 2nd PUC board exam questions for "${chapterTitle}" from the last 5 years with marks.` 
    });
    const formattedText = await formatAsTextbook(rawResponse.text || "");
    
    const chunks = formattedText.split(' ');
    for (const chunk of chunks) {
        yield chunk + ' ';
        await new Promise(r => setTimeout(r, 10));
    }
}

// Fix: Added the optional chapterContext parameter to match the function call signature in ExerciseView.tsx
export async function* getHintStream(question: string, imageBase64: string | null, mimeType: string | null, level: number, chapterContext?: string): AsyncGenerator<string> {
    const model = "gemini-3-flash-preview";
    const prompt = `Provide a level ${level} hint for: ${question}. ${chapterContext ? `Context: ${chapterContext}.` : ''} Level 1 is a vague clue, Level 4 is almost the next step.`;
    
    const parts: any[] = [];
    if (imageBase64 && mimeType) parts.push({ inlineData: { mimeType, data: imageBase64 } });
    parts.push({ text: prompt });

    const rawResponse = await ai.models.generateContent({ model, contents: { parts } });
    const formattedText = await formatAsTextbook(rawResponse.text || "");
    
    const chunks = formattedText.split(' ');
    for (const chunk of chunks) {
        yield chunk + ' ';
        await new Promise(r => setTimeout(r, 10));
    }
}

export type GameType = 'mcq' | 'true_false' | 'match' | 'fix_broken' | 'predict_next' | 'strategy' | 'derivation';

export async function generateGameContent(chapter: any, gameType: GameType): Promise<any> {
    const model = "gemini-3-flash-preview";
    const prompt = `
    You are a Math Game Engine. Use the provided chapter: "${chapter.chapter_title}".
    Create a ${gameType} game. 
    
    RULES FOR ${gameType.toUpperCase()}:
    - DERIVATION: Pick a standard textbook derivation. Provide "title" and "steps" as an ordered array of strings. 
    - STRATEGY: Provide a math question and 4 methods (e.g., Substitution, Parts). 
    - ${FORMATTING_AI_INSTRUCTIONS}
    `;

    let responseSchema: any;
    if (gameType === 'mcq' || gameType === 'strategy') {
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
    } else if (gameType === 'fix_broken') {
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
        responseSchema = {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    id: { type: Type.INTEGER },
                    problem: { type: Type.STRING },
                    givenSteps: { type: Type.ARRAY, items: { type: Type.STRING } },
                    options: { type: Type.ARRAY, items: { type: Type.STRING } },
                    correctOption: { type: Type.INTEGER },
                    explanation: { type: Type.STRING }
                },
                required: ["id", "problem", "givenSteps", "options", "correctOption", "explanation"]
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
