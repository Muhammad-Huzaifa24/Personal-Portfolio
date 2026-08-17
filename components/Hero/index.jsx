import React from "react";
import { motion } from "framer-motion";

// React Icons
import { RiProfileLine, RiContactsBookLine } from "react-icons/ri";
import {
	FaLinkedinIn,
	FaGithub,
	FaInstagram,
	FaFacebookF,
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaNodeJs,
} from "react-icons/fa";
import { SiX, SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";
import { SOCIAL_LINK, RESUME_LINK } from "../../constants";

const TECH_STACK = [
	{ label: "HTML5", icon: FaHtml5 },
	{ label: "CSS3", icon: FaCss3Alt },
	{ label: "JavaScript", icon: FaJs },
	{ label: "React", icon: FaReact },
	{ label: "Next.js", icon: SiNextdotjs },
	{ label: "Node.js", icon: FaNodeJs },
	{ label: "Express", icon: SiExpress },
	{ label: "MongoDB", icon: SiMongodb },
];

const SOCIALS = [
	{ label: "GitHub", href: SOCIAL_LINK.github, icon: FaGithub },
	{ label: "LinkedIn", href: SOCIAL_LINK.linkedIn, icon: FaLinkedinIn },
	{ label: "Facebook", href: SOCIAL_LINK.facebook, icon: FaFacebookF },
	{ label: "Instagram", href: SOCIAL_LINK.instagram, icon: FaInstagram },
	{ label: "X (Twitter)", href: SOCIAL_LINK.twitter, icon: SiX },
];

const fadeUp = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0 },
};

const Hero = () => {
	return (
		<div className="relative py-16 px-4 max-w-4xl m-auto sm:pt-28 sm:px-6">
			{/* soft ambient glow, purely decorative */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl"
			/>

			<motion.div
				initial="hidden"
				animate="show"
				variants={{ show: { transition: { staggerChildren: 0.08 } } }}
			>
				<motion.h2
					variants={fadeUp}
					className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-300 sm:text-sm"
				>
					<span aria-hidden="true">👋</span>
					Hello, I&apos;m
				</motion.h2>

				<motion.h1
					variants={fadeUp}
					className="mt-5 text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
				>
					Muhammad Huzaifa Khawar
				</motion.h1>

				<motion.p
					variants={fadeUp}
					className="mt-3 text-lg font-medium text-teal-400 sm:text-xl"
				>
					Self-Taught Front-End Software Developer
				</motion.p>

				<motion.p
					variants={fadeUp}
					className="mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
				>
					I enjoy building responsive web apps and interfaces using
					HTML5, CSS3, JavaScript, Next.js, React.js, MongoDB, Node.js
					and Express.js REST APIs. I&apos;ve been working on the web
					for around 1+ years, building projects through YouTube
					tutorials and hands-on learning.
				</motion.p>

				{/* Tech stack */}
				<motion.ul
					variants={fadeUp}
					className="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start"
					aria-label="Core technologies"
				>
					{TECH_STACK.map(({ label, icon: Icon }) => (
						<li
							key={label}
							className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300"
						>
							<Icon className="text-teal-400" aria-hidden="true" />
							{label}
						</li>
					))}
				</motion.ul>

				{/* CTAs */}
				<motion.div
					variants={fadeUp}
					className="my-8 flex flex-wrap items-center justify-center gap-3 sm:justify-start"
				>
					<a
						href={RESUME_LINK}
						target="_blank"
						rel="noopener noreferrer"
						title="View Resume"
						className="flex items-center gap-2 rounded-lg border-2 border-teal-500 bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-transparent hover:text-teal-400 sm:text-base"
					>
						<span>View Resume</span>
						<RiProfileLine aria-hidden="true" />
					</a>
					<a
						href="#contact"
						title="Get in touch"
						className="flex items-center gap-2 rounded-lg border-2 border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:border-teal-400 hover:text-teal-400 sm:text-base"
					>
						<span>Get in touch</span>
						<RiContactsBookLine aria-hidden="true" />
					</a>
				</motion.div>

				{/* Socials */}
				<motion.div
					variants={fadeUp}
					className="flex flex-col items-center gap-3 sm:items-start"
				>
					<h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
						Find me on
					</h4>
					<ul className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
						{SOCIALS.map(({ label, href, icon: Icon }) => (
							<li key={label}>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={href}
									aria-label={label}
									title={label}
									className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-teal-400 transition-colors duration-150 hover:border-teal-400 hover:bg-teal-500/10 hover:text-white"
								>
									<Icon />
								</a>
							</li>
						))}
					</ul>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Hero;
