import React from "react";

// React Icons
import { SiHey } from "react-icons/si";
import { RiProfileLine, RiContactsBookLine } from "react-icons/ri";
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF } from "react-icons/fa";
import { SiX } from "react-icons/si";
import {SOCIAL_LINK, RESUME_LINK} from "../../constants"
const Hero = () => {
	return (
		<div className="py-12 px-2 max-w-4xl m-auto sm:pt-24">
			<h2 className="flex justify-start items-center gap-2 text-xl font-bold text-teal-500 mb-4 sm:text-2xl">
				<span>Hello there</span>
				<SiHey />
				<span>I am</span>
			</h2>
			<h1 className="text-2xl font-semibold text-white sm:text-7xl">
				Muhammad Huzaifa Khawar
			</h1>
			<p className=" text-gray-400 leading-7 my-4 sm:text-lg sm:leading-8 text-justify">
				Cuber and Self-Taught Front-end Software Developer, I enjoy building
				responsive web apps & designs using HTML5, CSS3, JavaScript, Next.js,
				React.js, MongoDB, NodeJS, ExpressJS Restful APIs.., I have been working
				on the web for around 1+ years building Youtube/learning projects.
			</p>
			<div className="my-7 flex sm:justify-start justify-center items-center gap-2 flex-wrap">
				<button
					className="bg-teal-500 py-2 px-4 font-semibold text-white border-2 border-teal-500 rounded-md ease-in-out duration-150 hover:text-white hover:bg-transparent hover:border-white"
					title="View Resume"
				>
					<a
						href={RESUME_LINK}
						target="_blank"
						rel="noopener noreferrer"
						className="flex justify-start items-center gap-1"
					>
						<span>View Resume</span>
						<RiProfileLine />
					</a>
				</button>
				<button
					className="bg-white py-2 px-4 font-semibold text-teal-500 border-2 border-white rounded-md ease-in-out duration-150 hover:text-white hover:bg-transparent hover:border-white"
					title="Get in touch"
				>
					<a
						href="#contact"
						className="flex justify-start items-center gap-1"
					>
						<span>Get in touch</span>
						<RiContactsBookLine />
					</a>
				</button>
			</div>
			<div className="flex flex-col justify-start items-start gap-3">
				<h4 className="text-xl text-white font-bold">Find me on :</h4>
				<ul className="flex justify-start items-center flex-wrap gap-2">
					<li title="GitHub">
						<a
							target="_blank"
							rel="noreferrer"
							href={SOCIAL_LINK.github}
							className="text-teal-500 text-md ease-in-out duration-150 hover:text-white"
						>
							<FaGithub />
						</a>
					</li>
					<li title="LinkedIn">
						<a
							target="_blank"
							href={SOCIAL_LINK.linkedIn}
							className="text-teal-500 text-md ease-in-out duration-150 hover:text-white"
							rel="noreferrer"
						>
							<FaLinkedinIn />
						</a>
					</li>
					<li title="Facebook">
						<a
							target="_blank"
							href={SOCIAL_LINK.facebook}
							className="text-teal-500 text-md ease-in-out duration-150 hover:text-white"
							rel="noreferrer"
						>
							<FaFacebookF />
						</a>
					</li>
					<li title="Instagram">
						<a
							target="_blank"
							href={SOCIAL_LINK.instagram}
							className="text-teal-500 text-md ease-in-out duration-150 hover:text-white"
							rel="noreferrer"
						>
							<FaInstagram />
						</a>
					</li>
					<li title="Twitter">
						<a
							target="_blank"
							href={SOCIAL_LINK.twitter}
							className="text-teal-500 text-md ease-in-out duration-150 hover:text-white"
							rel="noreferrer"
						>
							<SiX />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Hero;
