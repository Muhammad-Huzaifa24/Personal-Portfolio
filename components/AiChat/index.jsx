import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCommentDots, FaTimes, FaPaperPlane } from "react-icons/fa";

const GREETING = {
	role: "ai",
	text: "Hi! I'm Huzaifa's AI assistant. Ask me about his skills, projects, experience, or availability.",
};

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
				{msg.text}
			</div>
		</motion.div>
	);
}

const AiChat = () => {
	const [open, setOpen] = useState(false);
	const [messages, setMessages] = useState([GREETING]);
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(false);

	const bottomRef = useRef(null);
	const inputRef = useRef(null);
	const panelRef = useRef(null);

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

	async function send() {
		const text = input.trim();
		if (!text || loading) return;

		setInput("");
		setMessages((prev) => [...prev, { role: "user", text }]);
		setLoading(true);

		try {
			const res = await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ message: text }),
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
		// Enter without Shift submits
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
						className="fixed bottom-24 right-4 z-50 flex w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1e]/95 shadow-card-hover backdrop-blur-md sm:right-6 sm:w-96 lg:w-[420px]"
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

						{/* Messages */}
						<div className="flex h-80 flex-col gap-3 overflow-y-auto p-4">
							{messages.map((msg, i) => (
								<MessageBubble key={i} msg={msg} />
							))}
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
								onClick={send}
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

			{/* Floating toggle button */}
			<motion.button
				onClick={() => setOpen((prev) => !prev)}
				aria-label={open ? "Close chat" : "Open AI chat assistant"}
				title="Chat with Huzaifa's AI assistant"
				className="fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 text-white shadow-card-hover transition-colors hover:bg-teal-400 sm:right-6"
				// Idle pulse — stops when panel is open
				animate={
					open
						? { scale: 1 }
						: { scale: [1, 1.08, 1] }
				}
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
						>
							<FaTimes className="text-xl" />
						</motion.span>
					) : (
						<motion.span
							key="open"
							initial={{ rotate: 90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: -90, opacity: 0 }}
							transition={{ duration: 0.15 }}
						>
							<FaCommentDots className="text-xl" />
						</motion.span>
					)}
				</AnimatePresence>
			</motion.button>
		</>
	);
};

export default AiChat;
