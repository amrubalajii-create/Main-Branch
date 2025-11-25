import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const streamBiotechResponse = async (
  prompt: string, 
  onChunk: (text: string) => void
) => {
  if (!apiKey) {
    onChunk("Error: API Key is missing. Please check your environment configuration.");
    return;
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are Hyprova AI, an advanced research assistant for a biotechnology platform. 
        Your tone is professional, scientific, yet accessible. 
        You specialize in explaining complex biological concepts, drug discovery processes, and genomic data analysis.
        Keep answers concise and structured, suitable for a web interface.
        If asked about Hyprova, describe it as a leading platform for AI-driven biological discovery.`,
      }
    });

    const result = await chat.sendMessageStream({ message: prompt });
    
    for await (const chunk of result) {
      if (chunk.text) {
        onChunk(chunk.text);
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    onChunk("I encountered an error while processing your request. Please try again later.");
  }
};
