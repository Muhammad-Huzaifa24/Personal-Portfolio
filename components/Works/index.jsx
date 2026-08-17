import React from "react";
import { motion } from "framer-motion";

// Works Data
import works from "./data/data.js";

// React Icons
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Works = () => {
	return (
		<div className="max-w-6xl m-auto px-4 py-16 sm:px-2 sm:py-24" id="projects">
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.5 }}
			>
				<span className="inline-block rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-300">
					Projects
				</span>
				<h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
					Latest Works
				</h2>
				<p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
					A selection of projects where creativity meets technology to
					build practical, working solutions.
				</p>
			</motion.div>

			<div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{works?.map((work, index) => {
					if (work.id === 10) {
						return (
							<motion.div
								key={work.id}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.4, delay: index * 0.05 }}
								className="flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-center"
							>
								<h3 className="text-lg font-semibold text-slate-400">
									More projects coming soon...
								</h3>
							</motion.div>
						);
					}

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
								{work.id === 9 && (
									<span className="absolute left-3 top-3 rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold text-white shadow-card">
										Latest
									</span>
								)}
							</div>

							<div className="flex flex-1 flex-col p-5">
								<b className="text-xs font-semibold uppercase tracking-wide text-teal-400">
									{work.genre}
								</b>
								<h3 className="mt-2 text-xl font-bold text-white">
									{work.work_title}
								</h3>
								<p className="mt-2 flex-1 text-sm leading-6 text-slate-300">
									{work.description}
								</p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={work.deploye_url}
									title={work.is_deployed ? "Visit website" : "View source code on GitHub"}
									className="mt-5 flex items-center justify-center gap-2 rounded-lg border-2 border-white/15 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:border-teal-400 hover:bg-teal-500/10 hover:text-teal-300"
								>
									{work.is_deployed ? (
										<span>Visit website</span>
									) : (
										<>
											<FaGithub aria-hidden="true" />
											<span>Source code</span>
										</>
									)}
									<HiOutlineArrowNarrowRight aria-hidden="true" />
								</a>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default Works;
