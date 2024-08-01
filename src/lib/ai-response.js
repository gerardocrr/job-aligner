import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";

const perplexity = createOpenAI({
  apiKey: import.meta.env.VITE_PERPLEXITY_API_KEY,
  baseURL: "https://api.perplexity.ai",
});

export async function getFeedback() {
  const prompt = "Dime un cuento muy corto sobre la amistad";

  const { text } = await generateText({
    model: perplexity("llama-3-sonar-large-32k-online"),
    prompt: prompt,
    maxTokens: 1000,
    temperature: 0.75,
    frequencyPenalty: 1,
  });

  return text;
}
