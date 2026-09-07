import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPaperPlane } from "react-icons/fa";

const GREETING = {
	role: "ai",
	text: "Hi! I'm Huzaifa's AI assistant. Ask me about his skills, projects, experience, or availability.",
};

// Recruiter-focused preset questions
const PRESETS = [
	"What is Huzaifa's tech stack?",
	"How many years of experience does he have?",
	"What projects has he built?",
	"Where has he worked?",
	"Is he available for hire?",
	"How can I contact him?",
];

// Typing indicator — three animated dots
function TypingIndicator() {
	return (
		<div className="mr-auto flex max-w-[80%] items-center gap-1.5 rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.05] px-4 py-3">
			{[0, 1, 2].map((i) => (
				<motion.span
					key={i}
					className="h-1.5 w-1.5 rounded-full bg-teal-400"
					animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
					transition={{
						duration: 0.9,
						repeat: Infinity,
						delay: i * 0.18,
						ease: "easeInOut",
					}}
				/>
			))}
		</div>
	);
}

// Regex to detect URLs in plain text
const URL_REGEX = /(https?:\/\/[^\s]+)/g;

// Renders text with URLs converted to styled clickable links
function RichText({ text }) {
	const parts = text.split(URL_REGEX);
	return (
		<>
			{parts.map((part, i) =>
				URL_REGEX.test(part) ? (
					<a
						key={i}
						href={part}
						target="_blank"
						rel="noopener noreferrer"
						className="text-teal-400 underline underline-offset-2 decoration-teal-400/50 hover:text-teal-300 hover:decoration-teal-300 transition-colors"
					>
						{part}
					</a>
				) : (
					<span key={i}>{part}</span>
				)
			)}
		</>
	);
}

// Single message bubble
function MessageBubble({ msg }) {
	const isUser = msg.role === "user";
	return (
		<motion.div
			initial={{ opacity: 0, y: 8 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.2 }}
			className={`flex ${isUser ? "justify-end" : "justify-start"}`}
		>
			<div
				className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-6 break-words ${
					isUser
						? "rounded-tr-sm border border-teal-500/30 bg-teal-500/20 text-white"
						: "rounded-tl-sm border border-white/10 bg-white/[0.05] text-slate-300"
				}`}
			>
				<RichText text={msg.text} />
			</div>
		</motion.div>
	);
}

const AiChat = () => {
	const [open, setOpen] = useState(false);
	const [messages, setMessages] = useState([GREETING]);
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(false);

	const [showScrollTop, setShowScrollTop] = useState(false);

	const bottomRef = useRef(null);
	const inputRef = useRef(null);
	const panelRef = useRef(null);

	// Show scroll-to-top after scrolling down 300px
	useEffect(() => {
		function onScroll() { setShowScrollTop(window.scrollY > 300); }
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Only show presets when no user message has been sent yet
	const showPresets = messages.length === 1;

	// Auto-scroll to latest message
	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, loading]);

	// Focus input when panel opens
	useEffect(() => {
		if (open) {
			setTimeout(() => inputRef.current?.focus(), 150);
		}
	}, [open]);

	// Close on Escape key
	useEffect(() => {
		function onKey(e) {
			if (e.key === "Escape" && open) setOpen(false);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);

	async function send(text) {
		const trimmed = (text ?? input).trim();
		if (!trimmed || loading) return;

		setInput("");
		setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
		setLoading(true);

		try {
			const res = await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ message: trimmed }),
			});
			const data = await res.json();
			setMessages((prev) => [
				...prev,
				{ role: "ai", text: data.reply ?? "Sorry, something went wrong." },
			]);
		} catch {
			setMessages((prev) => [
				...prev,
				{
					role: "ai",
					text: "Something went wrong. Please try again or reach out via email.",
				},
			]);
		} finally {
			setLoading(false);
		}
	}

	function onKeyDown(e) {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			send();
		}
	}

	return (
		<>
			{/* Chat panel */}
			<AnimatePresence>
				{open && (
					<motion.div
						key="chat-panel"
						ref={panelRef}
						initial={{ opacity: 0, y: 20, scale: 0.97 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 20, scale: 0.97 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
						className="fixed bottom-24 right-4 z-50 flex w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-teal-400/20 bg-[#0a0f1e]/95 shadow-[0_0_0_1px_rgba(45,212,191,0.1),0_8px_32px_rgba(0,0,0,0.6),0_0_40px_rgba(45,212,191,0.12)] backdrop-blur-md sm:right-6 sm:w-96 lg:w-[420px]"
						role="dialog"
						aria-label="Chat with Huzaifa's AI assistant"
					>
						{/* Header */}
						<div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
							<div className="flex items-center gap-2.5">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src="/assets/gemini-icon.png"
									alt="Gemini AI"
									className="h-6 w-6 object-contain"
								/>
								<div>
									<p className="text-sm font-semibold text-white">
										Ask about Huzaifa
									</p>
									<p className="text-[11px] text-slate-500">
										Powered by Gemini
									</p>
								</div>
							</div>
							<button
								onClick={() => setOpen(false)}
								aria-label="Close chat"
								className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
							>
								<FaTimes className="text-xs" />
							</button>
						</div>

						{/* Messages + presets */}
						<div className="flex h-80 flex-col gap-3 overflow-y-auto p-4">
							{messages.map((msg, i) => (
								<MessageBubble key={i} msg={msg} />
							))}

							{/* Preset chips — only before first user message */}
							<AnimatePresence>
								{showPresets && !loading && (
									<motion.div
										initial={{ opacity: 0, y: 8 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 4 }}
										transition={{ duration: 0.2, delay: 0.15 }}
										className="flex flex-wrap gap-2 pt-1"
									>
										{PRESETS.map((q) => (
											<button
												key={q}
												onClick={() => send(q)}
												disabled={loading}
												className="rounded-full border border-teal-400/25 bg-teal-500/10 px-3 py-1.5 text-left text-xs font-medium text-teal-300 transition-colors hover:border-teal-400/50 hover:bg-teal-500/20 hover:text-teal-200 disabled:opacity-40"
											>
												{q}
											</button>
										))}
									</motion.div>
								)}
							</AnimatePresence>

							{loading && <TypingIndicator />}
							<div ref={bottomRef} />
						</div>

						{/* Input */}
						<div className="flex items-end gap-2 border-t border-white/10 p-3">
							<textarea
								ref={inputRef}
								rows={1}
								value={input}
								onChange={(e) => setInput(e.target.value)}
								onKeyDown={onKeyDown}
								disabled={loading}
								placeholder="Type a question..."
								maxLength={500}
								className="flex-1 resize-none rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm leading-5 text-white placeholder:text-slate-500 focus:border-teal-400/50 focus:outline-none disabled:opacity-50"
							/>
							<button
								onClick={() => send()}
								disabled={loading || !input.trim()}
								aria-label="Send message"
								className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-500 text-white transition-colors hover:bg-teal-400 disabled:cursor-not-allowed disabled:opacity-40"
							>
								<FaPaperPlane className="text-xs" />
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Scroll to top button — appears above chat button when scrolled down */}
			<AnimatePresence>
				{showScrollTop && (
					<motion.button
						key="scroll-top"
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						aria-label="Scroll to top"
						title="Back to top"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 10 }}
						transition={{ duration: 0.2 }}
						className="fixed bottom-24 right-[1.375rem] z-50 flex h-11 w-11 items-center justify-center rounded-full bg-teal-500 shadow-card-hover transition-opacity hover:opacity-90 sm:right-[1.875rem]"
					>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src="/assets/scroll-top-icon.png"
							alt="Scroll to top"
							className="h-11 w-11 rounded-full object-cover mix-blend-luminosity brightness-150"
						/>
					</motion.button>
				)}
			</AnimatePresence>

			{/* Floating chat toggle button */}
			<motion.button
				onClick={() => setOpen((prev) => !prev)}
				aria-label={open ? "Close chat" : "Open AI chat assistant"}
				title="Chat with Huzaifa's AI assistant"
				className="fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-card-hover transition-opacity hover:opacity-90 sm:right-6"
				animate={open ? { scale: 1 } : { scale: [1, 1.08, 1] }}
				transition={
					open
						? { duration: 0.15 }
						: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
				}
			>
				<AnimatePresence mode="wait">
					{open ? (
						<motion.span
							key="close"
							initial={{ rotate: -90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: 90, opacity: 0 }}
							transition={{ duration: 0.15 }}
							className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-500"
						>
							<FaTimes className="text-xl text-white" />
						</motion.span>
					) : (
						<motion.span
							key="open"
							initial={{ rotate: 90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: -90, opacity: 0 }}
							transition={{ duration: 0.15 }}
							className="relative flex h-14 w-14 items-center justify-center rounded-full bg-teal-500"
						>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src="/assets/chatbot-icon.png"
								alt="Open chat"
								className="h-14 w-14 rounded-full object-cover mix-blend-luminosity brightness-150"
							/>
						</motion.span>
					)}
				</AnimatePresence>
			</motion.button>
		</>
	);
};

export default AiChat;
