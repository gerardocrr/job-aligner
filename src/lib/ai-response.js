import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";

const perplexity = createOpenAI({
  apiKey: import.meta.env.VITE_PERPLEXITY_API_KEY,
  baseURL: "https://api.perplexity.ai",
});

export async function getFeedback(dataCV, dataJob) {
  const prompt = `Analiza el siguiente CV y la descripción del trabajo proporcionada. Evalúa la aptitud del candidato para el 
  puesto y proporciona recomendaciones específicas sobre áreas de mejora o habilidades adicionales que el candidato podría necesitar para 
  aumentar sus posibilidades de ser seleccionado.
  Datos del candidato:
  ${dataCV}

  Descripción del trabajo:
  ${dataJob}

  Tu respuesta debe incluir:

  1. Un análisis de la compatibilidad del candidato con los requisitos del trabajo.
  2. Las fortalezas del candidato en relación al puesto.
  3. Las áreas donde el candidato podría mejorar o adquirir más habilidades.
  4. Consejos específicos para mejorar el CV del candidato en función de la descripción del trabajo.`;

  const { text } = await generateText({
    model: perplexity("llama-3-sonar-large-32k-online"),
    prompt: prompt,
    maxTokens: 1000,
    temperature: 0.75,
    frequencyPenalty: 1,
  });

  return text;
}
