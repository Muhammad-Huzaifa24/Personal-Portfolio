import React from "react";

// React Icons
import {
	FaLinkedinIn,
	FaCodepen,
	FaGithub,
	FaTwitter,
	FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
	const MESSAGE = "Hello, I am Muhammad Huzaifa Khawar. How May I help you?";
	const whatsappUrl = `https://wa.me/${
		process.env.NEXT_PUBLIC_PHONE_NUMBER
	}?text=${encodeURIComponent(MESSAGE)}`;

	return (
		<div
			className="py-8 pb-0 px-2 max-w-6xl m-auto sm:py-20 "
			id="contact"
		>
			<h1 className=" text-3xl text-teal-500 font-bold sm:text-5xl">
				Feel free, <br /> Say hi;
			</h1>
			<div className=" my-10 flex justify-between flex-wrap gap-4">
				<ul>
					<li
						className="mb-4 text-gray-300 text-md w-max"
						title="GitHub"
					>
						<a
							rel="noreferrer"
							target="_blank"
							href="https://github.com/Muhammad-Huzaifa24"
							className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-teal-500"
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
							target="_blank"
							href="https://www.linkedin.com/in/muhammad-huzaifa-569794290/"
							className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-teal-500"
							rel="noreferrer"
						>
							<FaLinkedinIn className="text-blue-700" />
							<span className="text-sm font-initial">
								/in/muhammad-huzaifa-569794290/
							</span>
						</a>
					</li>
					<li
						className="mb-4 text-gray-300 text-md w-max"
						title="whatsapp me"
					>
						<a
							target="_blank"
							href={whatsappUrl}
							className="flex gap-1 justify-start items-center w-max px-2 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300 ease-in-out transform hover:scale-105 sm:px-2 sm:py-1.5 md:px-3 md:py-2 lg:px-3 lg:py-2 xl:px-3 xl:py-2"
							rel="noreferrer"
						>
							<FaWhatsapp className="text-white text-sm sm:text-base md:text-lg lg:text-base xl:text-lg" />
							<span className="text-xs font-semibold sm:text-xs md:text-sm lg:text-xs xl:text-sm">
								Chat with us on WhatsApp
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

				<div className="mt-10 sm:mt-0 ">
					<p className="text-2xl text-teal-500 font-bold mb-2 sm:text-3xl">
						Start project?
					</p>
					<p className="text-gray-400 sm:text-xl">
						huzaifakhawar100@gmail.com
					</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
