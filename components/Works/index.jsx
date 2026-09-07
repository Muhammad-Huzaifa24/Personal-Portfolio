import React from "react";
import { motion } from "framer-motion";

// Works Data
import works from "./data/data.js";

// React Icons
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaGithub, FaLayerGroup } from "react-icons/fa";

const Works = () => {
	// Sort descending by id so the highest id (latest project) always renders first.
	const sortedWorks = [...works].sort((a, b) => b.id - a.id);

	// The project with the highest id gets the LATEST badge.
	const latestProjectId = sortedWorks[0]?.id;

	return (
		<div className="max-w-6xl m-auto px-4 py-16 sm:px-6 sm:py-24" id="projects">
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.5 }}
			>
				<span className="inline-block rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-300">
					Projects
				</span>
				<h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl flex items-center gap-3">
					<FaLayerGroup className="text-teal-400" aria-hidden="true" />
					Builds & Projects
				</h2>
				<p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
					A selection of projects where creativity meets technology to
					build practical, working solutions.
				</p>
			</motion.div>

			<div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{sortedWorks?.map((work, index) => {
					return (
						<motion.div
							key={work.id}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.4, delay: index * 0.05 }}
							title={`${work.work_title} - ${work.genre}`}
							className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-200 hover:-translate-y-1 hover:border-teal-400/30 hover:shadow-card-hover"
						>
							<div className="relative aspect-video w-full overflow-hidden bg-ink-800">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src={work.image_url}
									alt={`${work.work_title} preview screenshot`}
									loading="lazy"
									className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
								/>
								{work.id === latestProjectId && (
									<span className="absolute left-3 top-3 rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold text-white shadow-card">
										Latest
									</span>
								)}
							</div>

							<div className="flex flex-1 flex-col p-5">
								{/* Genre tags as individual pills */}
								<div className="flex flex-wrap gap-1.5">
									{work.genre.split("|").map((tag) => (
										<span
											key={tag.trim()}
											className="rounded-md border border-teal-400/20 bg-teal-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-teal-400"
										>
											{tag.trim()}
										</span>
									))}
								</div>
								<h3 className="mt-3 text-lg font-bold leading-snug text-white">
									{work.work_title}
								</h3>
								<p className="mt-2 flex-1 text-sm leading-6 text-slate-400">
									{work.description}
								</p>
								<div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
									{work.deploye_url && (
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={work.deploye_url}
											title="Visit website"
											className="flex items-center justify-center gap-2 rounded-xl bg-teal-500 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-teal-400"
										>
											<span>Visit website</span>
											<HiOutlineArrowNarrowRight aria-hidden="true" />
										</a>
									)}
									{work.repo_url && (
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={work.repo_url}
											title="View source code on GitHub"
											className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.05] py-3 text-sm font-semibold text-white transition-all duration-150 hover:border-white/40 hover:bg-white/10"
										>
											<FaGithub aria-hidden="true" />
											<span>Source code</span>
										</a>
									)}
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>

			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.4, delay: 0.1 }}
				className="mt-5 flex min-h-[100px] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-center"
			>
				<h3 className="text-lg font-semibold text-slate-400">
					More projects to be added soon!
				</h3>
			</motion.div>
		</div>
	);
};

export default Works;
