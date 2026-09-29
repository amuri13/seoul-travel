import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize Gemini SDK on the server with recommended User-Agent header
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// REST endpoints for places / external integrations
app.get('/api/places', async (_req, res) => {
  try {
    // In production or when MCP is integrated, this can query live databases or services
    res.json({ status: 'ok', message: 'Seoul Travel Data Endpoint ready for MCP / live sync' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve places data' });
  }
});

// Natural language AI Guide endpoint
app.post('/api/guide/ask', async (req, res) => {
  try {
    const { question, contextSummary } = req.body;

    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'Question string is required' });
    }

    if (!ai) {
      return res.json({
        fallback: true,
        answer: 'Server is currently operating in offline mode. Please review the curated sections directly or ensure GEMINI_API_KEY is configured in Secrets.',
      });
    }

    const systemInstruction = `You are an expert, knowledgeable Seoul local travel guide, food curator, and transport specialist.
You are helping a traveller discover and understand Seoul through practical, authentic, and well-organized information.

GUARDRAILS & RULES:
1. Do not invent restaurants, shops, addresses, opening hours, fares, or policies.
2. Do not describe any place as "the best" unless clearly attributed to an official source (e.g. "Michelin Bib Gourmand", "Seoul Heritage").
3. Clearly distinguish between verified information, general travel guidance, and helpful suggestions.
4. Always note that hours, prices, and policies can change and travellers should verify before setting out.
5. Emphasize practical local advice (e.g. Naver Map instead of Google Maps, T-money vs Climate Card rules, table call buttons, no tipping).
6. Never output a rigid day-by-day itinerary; keep it focused on information discovery, neighbourhoods, food, and shopping.
7. Keep answers structured, friendly, concise, and scannable with bullet points and Hangeul names where relevant.`;

    const prompt = `Traveller's Question: "${question}"

Guide Context & Knowledge:
${contextSummary || 'Standard Seoul Travel Guide curated data'}

Please provide a helpful, scannable local guide answer. Mention specific areas, dishes, transit tips, or shopping spots if relevant, keeping guardrails in mind.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const answerText = response.text || 'Unable to generate an answer at this time.';

    return res.json({
      fallback: false,
      answer: answerText,
    });
  } catch (error: any) {
    console.error('Gemini API error in /api/guide/ask:', error);
    return res.status(500).json({
      error: 'Failed to generate guide response',
      message: error?.message || 'Unknown error',
    });
  }
});

// Mount Vite or serve static assets
async function startServer() {
  if (!isProd) {
    // Development mode: Mount Vite middleware
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production mode: Serve built dist folder
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Seoul Travel Guide server running on port ${PORT} (prod: ${isProd})`);
  });
}

startServer();
