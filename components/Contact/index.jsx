import React from "react";
import { motion } from "framer-motion";

// React Icons
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope, FaCommentDots } from "react-icons/fa";

const EMAIL = "huzaifakhawar100@gmail.com";

const Contact = () => {
	const MESSAGE = "Hello, I am Muhammad Huzaifa Khawar. How May I help you?";
	const whatsappUrl = `https://wa.me/${
		process.env.NEXT_PUBLIC_PHONE_NUMBER
	}?text=${encodeURIComponent(MESSAGE)}`;

	const channels = [
		{
			label: "GitHub",
			sub: "/Muhammad-Huzaifa24",
			href: "https://github.com/Muhammad-Huzaifa24",
			icon: FaGithub,
		},
		{
			label: "LinkedIn",
			sub: "/in/muhammad-huzaifa-569794290",
			href: "https://www.linkedin.com/in/muhammad-huzaifa-569794290/",
			icon: FaLinkedinIn,
		},
		{
			label: "WhatsApp",
			sub: "Chat with me directly",
			href: whatsappUrl,
			icon: FaWhatsapp,
		},
	];

	return (
		<div className="max-w-6xl m-auto px-4 py-16 sm:px-6 sm:py-24" id="contact">
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.5 }}
				className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10 lg:p-14"
			>
				<div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
					<div>
						<span className="inline-block rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-300">
							Contact
						</span>
						<h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl flex items-center gap-3">
						<FaCommentDots className="text-teal-400" aria-hidden="true" />
						Feel free, say hi
					</h2>
						<p className="mt-4 max-w-md text-sm leading-6 text-slate-400 sm:text-base">
							Have a project in mind or just want to connect? My
							inbox is always open.
						</p>

						<div className="mt-8">
							<p className="text-sm font-semibold uppercase tracking-wide text-teal-400">
								Start a project
							</p>
							<a
								href={`mailto:${EMAIL}`}
								className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-teal-300 sm:text-2xl break-all"
							>
								<FaEnvelope className="text-teal-400" aria-hidden="true" />
								{EMAIL}
							</a>
						</div>
					</div>

					<ul className="grid gap-3 sm:grid-cols-1">
						{channels.map(({ label, sub, href, icon: Icon }) => (
							<li key={label}>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={href}
									title={label}
									className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors duration-150 hover:border-teal-400/40 hover:bg-teal-500/5"
								>
									<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-lg text-teal-400">
										<Icon />
									</span>
									<span className="flex flex-col">
										<span className="text-sm font-semibold text-white">
											{label}
										</span>
										<span className="text-xs text-slate-400">{sub}</span>
									</span>
								</a>
							</li>
						))}
					</ul>
				</div>
			</motion.div>
		</div>
	);
};

export default Contact;
