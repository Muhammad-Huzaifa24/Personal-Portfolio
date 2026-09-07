import { GoogleGenAI } from "@google/genai";
import PERSONA from "./persona.js";

// Initialize once at module level — reused across all requests
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Primary model with a fallback — if primary is overloaded, retry with fallback
const MODELS = ["gemini-3.6-flash", "gemini-2.0-flash-lite"];

export default async function handler(req, res) {
	// Only allow POST
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	const { message } = req.body ?? {};

	// Validate input
	if (!message || typeof message !== "string" || message.trim().length === 0) {
		return res.status(400).json({ error: "Message is required" });
	}

	// Hard limit: 500 characters
	const trimmed = message.trim().slice(0, 500);

	let lastErr;
	for (const model of MODELS) {
		try {
			const result = await ai.models.generateContent({
				model,
				contents: trimmed,
				config: { systemInstruction: PERSONA },
			});
			return res.status(200).json({ reply: result.text });
		} catch (err) {
			lastErr = err;
			console.warn(`[chat API] model ${model} failed:`, err?.message ?? err);
		}
	}

	console.error("[chat API] All models failed:", lastErr?.message ?? lastErr);
	return res.status(500).json({
		reply: "Sorry, I couldn't process that right now. Please try again or reach out via huzaifakhawar100@gmail.com.",
	});
}
