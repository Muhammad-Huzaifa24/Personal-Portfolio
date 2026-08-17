import React from "react";
import Image from "next/image.js";
import { motion } from "framer-motion";

// Experiences Data
import experiences from "./data/data.js";

const Experiences = () => {
	return (
		<div
			className="max-w-6xl m-auto px-4 py-16 sm:px-2 sm:py-24"
			id="experiences"
		>
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.5 }}
			>
				<span className="inline-block rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-300">
					Experience
				</span>
				<h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
					1+ years of professional experience
				</h2>
			</motion.div>

			<div className="relative mt-12">
				{/* vertical line */}
				<div
					aria-hidden="true"
					className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-teal-400/60 via-white/10 to-transparent sm:left-[19px]"
				/>

				<ol className="space-y-8">
					{experiences?.map((experience, index) => (
						<motion.li
							key={experience.id ?? index}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.4, delay: index * 0.05 }}
							className="relative pl-10 sm:pl-14"
						>
							{/* timeline dot */}
							<span
								aria-hidden="true"
								className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-teal-400/40 bg-ink-900 sm:h-10 sm:w-10"
							>
								<Image
									src={experience.logo}
									width={22}
									height={22}
									alt=""
									className="rounded-sm"
								/>
							</span>

							<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-200 hover:border-teal-400/30 hover:bg-white/[0.05] sm:p-6">
								<div className="flex flex-wrap items-center justify-between gap-2">
									<h3 className="text-xl font-semibold text-white sm:text-2xl">
										{experience.job_title}
									</h3>
									<span className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-300">
										{experience.year}
									</span>
								</div>
								<p className="mt-1 text-sm font-medium text-teal-400">
									{experience.company}
								</p>
								<p className="mt-3 text-sm leading-6 text-slate-300 sm:text-[15px] sm:leading-7">
									{experience.description}
								</p>
							</div>
						</motion.li>
					))}
				</ol>
			</div>
		</div>
	);
};

export default Experiences;
