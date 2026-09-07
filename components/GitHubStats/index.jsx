import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaCodeBranch, FaStar, FaUsers, FaCode } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { SOCIAL_LINK } from "../../constants";

// Animated number count-up hook
function useCountUp(target, isInView, duration = 1500) {
	const [value, setValue] = useState(0);
	const rafRef = useRef(null);

	useEffect(() => {
		if (!isInView || target === 0) {
			setValue(target);
			return;
		}
		let startTime = null;
		const start = 0;

		function step(timestamp) {
			if (!startTime) startTime = timestamp;
			const progress = Math.min((timestamp - startTime) / duration, 1);
			// easeOut cubic
			const eased = 1 - Math.pow(1 - progress, 3);
			setValue(Math.floor(eased * (target - start) + start));
			if (progress < 1) {
				rafRef.current = requestAnimationFrame(step);
			} else {
				setValue(target);
			}
		}

		rafRef.current = requestAnimationFrame(step);
		return () => cancelAnimationFrame(rafRef.current);
	}, [isInView, target, duration]);

	return value;
}

// Individual stat card
function StatCard({ icon: Icon, value, label, isText, isInView, delay }) {
	const count = useCountUp(isText ? 0 : value, isInView);

	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.4, delay }}
			className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/30 hover:shadow-card-hover"
		>
			<span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-500/10 text-xl text-teal-400">
				<Icon aria-hidden="true" />
			</span>
			<span className={`font-bold text-white ${isText ? "text-base sm:text-lg leading-tight break-words text-center" : "text-3xl sm:text-4xl"}`}>
				{isText ? value : count}
			</span>
			<span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
				{label}
			</span>
		</motion.div>
	);
}

const GitHubStats = ({ stats }) => {
	const { repos = 0, followers = 0, stars = 0, topLanguage = "JavaScript" } = stats ?? {};

	// Trigger count-up when section enters viewport
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

	const cards = [
		{ icon: FaCodeBranch, value: repos,       label: "Public Repos",  isText: false, delay: 0.05 },
		{ icon: FaStar,       value: stars,        label: "Total Stars",   isText: false, delay: 0.1  },
		{ icon: FaUsers,      value: followers,    label: "Followers",     isText: false, delay: 0.15 },
		{ icon: FaCode,       value: topLanguage,  label: "Top Language",  isText: true,  delay: 0.2  },
	];

	return (
		<div
			ref={sectionRef}
			className="max-w-6xl m-auto px-4 py-16 sm:px-6 sm:py-24"
			id="github"
		>
			{/* Section header */}
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.5 }}
			>
				<span className="inline-block rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-300">
					GitHub
				</span>
				<h2 className="mt-4 flex items-center gap-3 text-3xl font-bold text-white sm:text-4xl">
					<FaGithub className="shrink-0 text-teal-400" aria-hidden="true" />
					Open Source Activity
				</h2>
				<p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
					A live snapshot of my GitHub profile — repos, stars, and the language I reach for most.
				</p>
			</motion.div>

			{/* Stat cards grid */}
			<div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
				{cards.map((card) => (
					<StatCard
						key={card.label}
						{...card}
						isInView={isInView}
					/>
				))}
			</div>

			{/* CTA */}
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.4, delay: 0.25 }}
				className="mt-8 flex justify-center sm:justify-start"
			>
				<a
					href={SOCIAL_LINK.github}
					target="_blank"
					rel="noopener noreferrer"
					title="View GitHub Profile"
					className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 transition-colors duration-150 hover:text-teal-300"
				>
					View GitHub Profile
					<HiOutlineArrowNarrowRight aria-hidden="true" />
				</a>
			</motion.div>
		</div>
	);
};

export default GitHubStats;
