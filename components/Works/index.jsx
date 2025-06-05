/* eslint-disable @next/next/no-img-element */
import React from "react";

// Works Data
import works from "./data/data.js";

// React Icons
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
//
const Works = () => {
	// const sortedWorks = works.sort((a, b) => b.id - a.id);

	return (
		<div
			className="max-w-6xl m-auto p-4 pt-8 px-2 sm:pt-20"
			id="projects"
		>
			<h1 className="text-4xl text-teal-500 font-bold sm:text-5xl">
				#Latest Works
			</h1>
			<p className="text-sm text-teal-500 font-semibold mt-4 mb-8 leading-6">
				Explore my latest projects, where creativity meets technology to build innovative and impactful solutions.

			</p>
			<div className="grid grid-cols-1 gap-3 lg:grid-cols-3 sm:grid-cols-2 sm:gap-4">
				{works
					? works.map((work, index) => (
							<div
								key={index}
								title={`${work.work_title} - ${work.genre}`}
								className="bg-cyan-900 rounded-lg p-4 max-w-4xl m-auto mb-4 w-full grid grid-cols-1 gap-0 ease-in-out duration-150 hover:bg-cyan-800 sm:mb-0 h-full"
							>
								{work.id === 10 ? (
									<div className="flex justify-center items-center h-full">
										<h2 className="text-xl text-white font-bold">
											More projects coming soon...
										</h2>
									</div>
								) : (
									<>
										<div className="w-45 flex justify-center items-center">
											<img
												className="rounded-lg w-100"
												src={work.image_url}
												alt="Work-Image"
											/>
										</div>
										<div className="flex flex-col justify-center items-start w-55 pb-0">
											<h2 className="text-2xl text-white font-bold my-5 mb-2">
												{work.work_title}
											</h2>
											{work.id === 9 && (
											<span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full mb-2">
													Latest
												</span>
											)}
											<b className="text-teal-500 mb-2">⎯⎯ {work.genre}</b>
											<p className="text-gray-300 text-sm leading-6 m-0 text-justify">
												{work.description}
											</p>
											<button
												className="py-2 px-4 bg-white mt-4 text-black ease-in-out duration-150 border-2 border-white rounded-md hover:bg-gray-900 hover:border-gray-900 hover:text-white"
												style={{ width: "100%" }}
												title="Visit website"
											>
												<a
													target="_blank"
													href={work.deploye_url}
													className="flex justify-between items-center gap-1 font-semibold text-md p-0 m-0"
													rel="noreferrer"
												>
													{work.is_deployed ? (
														<span>Visit website</span>
													) : (
														<span>Github Source Code</span>
													)}
													<HiOutlineArrowNarrowRight />
												</a>
											</button>
										</div>
									</>
								)}
							</div>
					  ))
					: null}
			</div>
		</div>
	);
};

export default Works;
