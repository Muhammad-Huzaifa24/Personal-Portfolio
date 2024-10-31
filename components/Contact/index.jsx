import React from "react";

// React Icons
import { FaLinkedinIn, FaCodepen, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
	return (
		<div
			className="py-8 pb-0 px-2 max-w-6xl m-auto sm:py-20"
			id="contact"
		>
			<h1 className="text-3xl text-teal-500 font-bold sm:text-5xl">
				Feel free, <br /> Say hi;
			</h1>
			<div className="my-10 grid grid-cols-2 gap-0 lg:grid-cols-5 sm:grid-cols-3 sm:gap-4">
				<ul>
					<li
						className="mb-4 text-gray-300 text-md w-max"
						title="GitHub"
					>
						<a
							target="_blank"
							href="https://github.com/Muhammad-Huzaifa24"
							className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-teal-500"
							rel="noreferrer"
						>
							<FaGithub />
							<span className="text-sm font-initial">/Muhammad-Huzaifa24</span>
						</a>
					</li>
					<li
						className="mb-4 text-gray-300 text-md w-max"
						title="LinkedIn"
					>
						<a
							rel="noreferrer"
							target="_blank"
							href="https://www.linkedin.com/in/muhammad-huzaifa-569794290/"
							className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-teal-500"
						>
							<FaLinkedinIn />
							<span className="text-sm font-initial">
								/in/muhammad-huzaifa-569794290/
							</span>
						</a>
					</li>
				</ul>
				<ul>
					<li
						className="mb-4 text-gray-300 text-md w-max"
						title="LinkedIn"
					>
						<a
							href=""
							className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-teal-500"
						>
							<span className="text-sm font-initial"></span>
						</a>
					</li>
				</ul>

				<div className="mt-10 sm:mt-0">
					<h2 className="text-1xl text-teal-500 font-bold mb-2 sm:text-3xl">
						Start project?
					</h2>
					<h3 className="text-sm text-gray-400 sm:text-xl">
						huzaifakhawar100@gmail.com
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Contact;
