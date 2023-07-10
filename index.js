// src/index.js
import { Configuration, OpenAIApi } from "openai"; // import openai npm package
import tokenizer from "./token-calc";
// export a function that creates an OpenAIApi instance with a given API key
export function createOpenAI(apiKey) {
  const configuration = new Configuration({
    apiKey: apiKey,
  });
  const openai = new OpenAIApi(configuration);
  return openai;
}

export function calcTokenLength(prompt) {
  const encoded = tokenizer.encode(prompt);
  return encoded.bpe.length;
}
window.calcTokenLength = calcTokenLength;