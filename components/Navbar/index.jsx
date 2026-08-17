import { useEffect, useState } from "react";
import {
	FaCode,
	FaBriefcase,
	FaProjectDiagram,
	FaEnvelope,
	FaDownload,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { RESUME_DOWNLOAD_LINK } from "../../constants";

const NAV_LINKS = [
	{ href: "#experiences", label: "Experience", icon: FaBriefcase },
	{ href: "#projects", label: "Projects", icon: FaProjectDiagram },
	{ href: "#contact", label: "Contact", icon: FaEnvelope },
];

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [showAlert, setShowAlert] = useState(true);
	const [scrolled, setScrolled] = useState(false);

	const closeMenu = () => setMenuOpen(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Lock body scroll while the mobile menu is open, close on Escape
	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		const onKeyDown = (e) => {
			if (e.key === "Escape") setMenuOpen(false);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [menuOpen]);

	return (
		<>
			<AnimatePresence>
				{showAlert && (
					<motion.div
						role="status"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.35, ease: "easeInOut" }}
						className="overflow-hidden sticky top-0 z-[60] flex items-center justify-center gap-3 border-b border-teal-400/20 bg-teal-500 px-4 py-2.5 text-center text-xs font-medium text-white sm:text-sm"
					>
						<span>
							🚀 Check out my latest project — scroll down to Projects
						</span>
						<button
							type="button"
							aria-label="Dismiss announcement"
							className="ml-1 rounded p-0.5 text-white/90 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
							onClick={() => setShowAlert(false)}
						>
							✕
						</button>
					</motion.div>
				)}
			</AnimatePresence>

			<header
				className={`sticky top-0 z-50 transition-colors duration-300 ${
					scrolled
						? "bg-ink-900/80 backdrop-blur-md border-b border-white/10"
						: "bg-transparent border-b border-transparent"
				}`}
			>
				<div className="max-w-7xl m-auto flex items-center justify-between px-4 py-4 sm:px-6">
					<a
						href="#"
						title="Muhammad Huzaifa Khawar"
						className="group flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-teal-400"
					>
						<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400 ring-1 ring-teal-400/30 transition-colors group-hover:bg-teal-500/20">
							<FaCode />
						</span>
						<span>Software Engineer</span>
					</a>

					{/* Desktop nav */}
					<nav aria-label="Primary" className="hidden md:block">
						<ul className="flex items-center gap-1">
							{NAV_LINKS.map(({ href, label, icon: Icon }) => (
								<li key={href}>
									<a
										href={href}
										className="group relative flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
									>
										<Icon className="text-teal-400" aria-hidden="true" />
										<span>{label}</span>
										<span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-teal-400 transition-transform duration-300 ease-out group-hover:scale-x-100" />
									</a>
								</li>
							))}
							<li className="ml-2">
								<a
									href={RESUME_DOWNLOAD_LINK}
									download="Muhammad-Huzaifa-resume.pdf"
									className="flex items-center gap-2 rounded-md border border-teal-400/40 px-3 py-2 text-sm font-semibold text-teal-400 transition-colors hover:bg-teal-500 hover:text-white hover:border-teal-500"
								>
									<FaDownload aria-hidden="true" />
									<span>Resume</span>
								</a>
							</li>
						</ul>
					</nav>

					{/* Hamburger */}
					<button
						type="button"
						className="z-[70] flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md md:hidden"
						aria-label={menuOpen ? "Close menu" : "Open menu"}
						aria-expanded={menuOpen}
						aria-controls="mobile-menu"
						onClick={() => setMenuOpen((o) => !o)}
					>
						<span
							className={`h-0.5 w-6 rounded-full bg-white transition-transform duration-300 ${
								menuOpen ? "translate-y-2 rotate-45" : ""
							}`}
						/>
						<span
							className={`h-0.5 w-6 rounded-full bg-white transition-opacity duration-200 ${
								menuOpen ? "opacity-0" : "opacity-100"
							}`}
						/>
						<span
							className={`h-0.5 w-6 rounded-full bg-white transition-transform duration-300 ${
								menuOpen ? "-translate-y-2 -rotate-45" : ""
							}`}
						/>
					</button>
				</div>

				{/* Mobile menu */}
				<AnimatePresence>
					{menuOpen && (
						<motion.nav
							id="mobile-menu"
							aria-label="Mobile"
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.25, ease: "easeInOut" }}
							className="overflow-hidden border-b border-white/10 bg-ink-900/95 backdrop-blur-md md:hidden"
						>
							<ul className="flex flex-col gap-1 px-4 py-4">
								{NAV_LINKS.map(({ href, label, icon: Icon }) => (
									<li key={href}>
										<a
											href={href}
											onClick={closeMenu}
											className="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-teal-400"
										>
											<Icon className="text-teal-400" aria-hidden="true" />
											{label}
										</a>
									</li>
								))}
								<li>
									<a
										href={RESUME_DOWNLOAD_LINK}
										download="Muhammad-Huzaifa-resume.pdf"
										onClick={closeMenu}
										className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-3 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-600"
									>
										<FaDownload aria-hidden="true" />
										Download CV
									</a>
								</li>
							</ul>
						</motion.nav>
					)}
				</AnimatePresence>
			</header>
		</>
	);
};

export default Navbar;
