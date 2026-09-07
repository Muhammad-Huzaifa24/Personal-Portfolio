import { GoogleGenAI } from "@google/genai";
import PERSONA from "./persona.js";

// Vercel: extend serverless function timeout to 30s (max on Hobby plan)
export const config = {
	maxDuration: 30,
};

// Initialize once at module level — reused across all requests
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Primary model with a fallback — if primary is overloaded, retry with fallback
const MODELS = ["gemini-3.6-flash", "gemini-2.0-flash-lite"];

// Per-model timeout: fail fast and try fallback rather than hanging
const MODEL_TIMEOUT_MS = 8000;

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
		// Race the Gemini call against a timeout so a slow model doesn't eat the whole budget
		const controller = new AbortController();
		const timer = setTimeout(() => controller.abort(), MODEL_TIMEOUT_MS);

		try {
			const result = await ai.models.generateContent({
				model,
				contents: trimmed,
				config: { systemInstruction: PERSONA },
				// Pass abort signal so the SDK can cancel in-flight
				signal: controller.signal,
			});
			clearTimeout(timer);
			return res.status(200).json({ reply: result.text });
		} catch (err) {
			clearTimeout(timer);
			lastErr = err;
			const reason = controller.signal.aborted ? "timed out" : err?.message ?? err;
			console.warn(`[chat API] model ${model} failed (${reason})`);
		}
	}

	console.error("[chat API] All models failed:", lastErr?.message ?? lastErr);
	return res.status(500).json({
		reply: "Sorry, I couldn't process that right now. Please try again or reach out via huzaifakhawar100@gmail.com.",
	});
}
