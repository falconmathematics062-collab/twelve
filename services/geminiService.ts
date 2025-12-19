
import { GoogleGenAI, Type } from "@google/genai";

// Always use the direct process.env.API_KEY when initializing GoogleGenAI
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const FORMATTING_AI_INSTRUCTIONS = `
ROLE: You are the "Mathematics Textbook Formatting AI".
MISSION: Take raw mathematical content and REFORMAT it into a premium, accessible textbook style.

STRICT RULES:
1. NO LATEX, NO KATEX, NO $ symbols.
2. USE UNICODE: ∫ (integral), ∑ (sum), √ (root), π (pi), θ (theta), α (alpha), β (beta), Δ (delta), ∞ (infinity), ≠ (not equal), ≤, ≥, ±, ×, ÷, ∈, ⊂, ∪, ∩.
3. POWERS & SUBSCRIPTS: Use Unicode (x², y³, eˣ) and standard subscripts (a_n).
4. MATRICES (CRITICAL): Always use monospaced code blocks (\`\`\`) for matrices. Format them as vertical, multi-line ASCII.
   Example:
   \`\`\`
   [  1   2  ]
   [ -3   5  ]
   \`\`\`
5. DERIVATIVES: Use dy/dx or d/dx(f(x)).
6. FRACTIONS: Use (a/b) for inline, or clear multi-line layouts if complex.
7. HEADINGS: Use ### for "Step 1", "Step 2", etc.
`;

/**
 * Stage 2: The Refiner / Formatting AI pass
 */
async function formatAsTextbook(rawContent: string): Promise<string> {
    const model = "gemini-3-flash-preview";
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
    const model = "gemini-3-flash-preview";
    const primaryPrompt = `Solve this step-by-step: Chapter ${chapterContext.number} ${chapterContext.title}, Q${problem.id}: ${problem.text}. Use standard math notation.`;
    const rawResponse = await ai.models.generateContent({ model, contents: primaryPrompt });
    const formattedText = await formatAsTextbook(rawResponse.text || "");
    const chunks = formattedText.split(' ');
    for (const chunk of chunks) {
        yield chunk + ' ';
        await new Promise(r => setTimeout(r, 10));
    }
}

export async function* solveCustomProblemStream(text: string, imageBase64: string | null, mimeType: string | null, mode: string): AsyncGenerator<string> {
    const model = "gemini-3-flash-preview";
    const primaryPrompt = `Task: ${mode === 'mistake' ? 'Find mistakes' : 'Solve'}. Question: ${text}.`;
    const parts: any[] = [];
    if (imageBase64 && mimeType) parts.push({ inlineData: { mimeType, data: imageBase64 } });
    parts.push({ text: primaryPrompt });
    const rawResponse = await ai.models.generateContent({ model, contents: { parts } });
    const formattedText = await formatAsTextbook(rawResponse.text || "");
    const chunks = formattedText.split(' ');
    for (const chunk of chunks) {
        yield chunk + ' ';
        await new Promise(r => setTimeout(r, 10));
    }
}

export async function* explainTopicStream(topic: string, chapterTitle: string): AsyncGenerator<string> {
    const model = "gemini-3-flash-preview";
    const rawResponse = await ai.models.generateContent({ model, contents: `Explain "${topic}" in "${chapterTitle}".` });
    const formattedText = await formatAsTextbook(rawResponse.text || "");
    const chunks = formattedText.split(' ');
    for (const chunk of chunks) {
        yield chunk + ' ';
        await new Promise(r => setTimeout(r, 10));
    }
}

export async function* generateFormulaSheetStream(chapterTitle: string): AsyncGenerator<string> {
    const model = "gemini-3-flash-preview";
    const rawResponse = await ai.models.generateContent({ model, contents: `Create a formula sheet for "${chapterTitle}".` });
    const formattedText = await formatAsTextbook(rawResponse.text || "");
    const chunks = formattedText.split(' ');
    for (const chunk of chunks) {
        yield chunk + ' ';
        await new Promise(r => setTimeout(r, 10));
    }
}

export async function* getPreviousYearQuestionsStream(chapterTitle: string): AsyncGenerator<string> {
    const model = "gemini-3-flash-preview";
    const rawResponse = await ai.models.generateContent({ model, contents: `List PUC board questions for "${chapterTitle}".` });
    const formattedText = await formatAsTextbook(rawResponse.text || "");
    const chunks = formattedText.split(' ');
    for (const chunk of chunks) {
        yield chunk + ' ';
        await new Promise(r => setTimeout(r, 10));
    }
}

export async function* getHintStream(question: string, imageBase64: string | null, mimeType: string | null, level: number, chapterContext?: string): AsyncGenerator<string> {
    const model = "gemini-3-flash-preview";
    const prompt = `Provide a level ${level} hint for: ${question}. ${chapterContext ? `Context: ${chapterContext}` : ''}`;
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
    const prompt = `Create a ${gameType} game for chapter: "${chapter.chapter_title}". Use pure text/unicode symbols. No LaTeX.`;
    
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
    } else if (gameType === 'fix_broken' || gameType === 'predict_next') {
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
