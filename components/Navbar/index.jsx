import { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import {
	FaCode,
	FaBriefcase,
	FaProjectDiagram,
	FaEnvelope,
	FaDownload,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [showAlert, setShowAlert] = useState(true); // Show alert on page load

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<>
			<AnimatePresence>
				{showAlert && (
					<motion.div
						initial={{ y: -50, opacity: 0 }} // Start from above
						animate={{ y: 0, opacity: 1 }} // Slide down smoothly
						exit={{ y: -50, opacity: 0 }} // Slide up when closing
						transition={{ duration: 1, ease: "easeInOut" }}
						style={{ zIndex: 60 }}
						className="fixed top-0 left-5 right-5 lg:left-5 md:left-1/2 md:transform md:-translate-x-1/2 
						bg-teal-500 text-white px-4 py-4 rounded-md shadow-lg text-sm md:w-1/2 lg:w-auto 
						flex justify-between items-center mt-4"
					>
						<span>🚀 Check out my LATEST Project! 🎉</span>
						<button
							className="text-red-800 hover:text-white font-bold text-base"
							onClick={() => setShowAlert(false)}
						>
							✖
						</button>
					</motion.div>
				)}
			</AnimatePresence>
			<header
				className={`py-3 px-2 flex justify-between items-center flex-wrap lg:py-7 ${styles.header} ${
					menuOpen ? styles.open : ""
				}`}
			>
				<div className="z-50">
					<p id="title" className=" text-white font-thin font-sans">
						<a
							href="#"
							title="Muhammad Huzaifa Khawar"
							className="flex items-center font-thin hover:text-teal-400"
						>
							<FaCode className="inline mr-2" />
							FULL STACK DEVELOPER
						</a>
					</p>
				</div>

				{/* Menu */}
				<nav>
					<ul
						className={`absolute left-0 top-0 m-0 px-5 bg-[rgb(42_42_42)] z-40 w-full 
									rounded-br-3xl rounded-bl-3xl md:w-auto md:bg-transparent md:flex 
									transition-all duration-500 ease-in-out transform overflow-hidden 
									${menuOpen ? "max-h-[45vh] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-10"} 
									md:flex md:static md:left-auto md:top-auto md:max-h-none md:opacity-100 md:translate-y-0`}
					>
						<li className="mb-4 mt-2 sm:mb-0 sm:mt-0 sm:mx-3" title="Experiences">
							<a
								href="#experiences"
								className="group flex items-center text-1xs text-white font-semibold ease-in-out duration-150 relative hover:text-teal-400"
								onClick={closeMenu}
							>
								<FaBriefcase className="group-hover:text-white inline-block mr-2 text-teal-400" />
								<span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
									Experiences
								</span>
							</a>
						</li>
						<li className="mb-4 mx-0 sm:mb-0 sm:mx-3" title="Projects">
							<a
								href="#projects"
								className="group flex items-center text-1xs text-white font-semibold ease-in-out duration-150 relative hover:text-teal-400"
								onClick={closeMenu}
							>
								<FaProjectDiagram className="group-hover:text-white inline-block mr-2 text-teal-400" />
								<span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
									Projects
								</span>
							</a>
						</li>
						<li className="mb-4 mx-0 sm:mb-0 sm:mx-3" title="Contact">
							<a
								href="#contact"
								className="group flex items-center text-1xs text-white font-semibold ease-in-out duration-150 relative hover:text-teal-400"
								onClick={closeMenu}
							>
								<FaEnvelope className="group-hover:text-white inline-block mr-2 text-teal-400" />
								<span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
									Contact
								</span>
							</a>
						</li>
						<li className="mb-4 mx-0 sm:mb-0 sm:mx-3" title="Download CV">
							<a
								href="/assets/cv.pdf"
								download="Muhammad-Huzaifa.pdf"
								className="group flex items-center text-1xs text-white font-semibold ease-in-out duration-150 relative hover:text-teal-400"
							>
								<FaDownload className="group-hover:text-white inline-block mr-2 text-teal-400" />
								<span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
									Download CV
								</span>
							</a>
						</li>
					</ul>
				</nav>

				{/* Hamburger Icon */}
				<div
					className={`z-50 flex flex-col justify-center items-center md:hidden cursor-pointer ${
						styles.hamburger
					} ${menuOpen ? styles.open : ""}`}
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<span className="h-0.5 w-7 mb-1.5 bg-white transition-transform duration-300 ease-in-out transform origin-center"></span>
					<span className="h-0.5 w-7 mb-1.5 bg-white transition-transform duration-300 ease-in-out transform origin-center"></span>
					<span className="h-0.5 w-7 mb-1.5 bg-white transition-transform duration-300 ease-in-out transform origin-center"></span>
				</div>
			</header>
		</>
	);
};

export default Navbar;
