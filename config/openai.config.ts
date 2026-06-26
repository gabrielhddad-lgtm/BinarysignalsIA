import { OpenAI } from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

export interface OpenAIConfig {
  apiKey: string;
  model: string;
  maxTokens: number;
  temperature: number;
  topP: number;
}

const openaiConfig: OpenAIConfig = {
  apiKey: process.env.OPENAI_API_KEY || '',
  model: process.env.OPENAI_MODEL || 'gpt-4',
  maxTokens: parseInt(process.env.OPENAI_MAX_TOKENS || '2048'),
  temperature: parseFloat(process.env.OPENAI_TEMPERATURE || '0.7'),
  topP: 1,
};

// Validar configuração
if (!openaiConfig.apiKey) {
  throw new Error('OPENAI_API_KEY is not configured in environment variables');
}

export const openaiClient = new OpenAI({
  apiKey: openaiConfig.apiKey,
});

export default openaiConfig;
