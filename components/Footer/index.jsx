import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF, FaCode } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { SOCIAL_LINK, RESUME_LINK } from "../../constants";

const SOCIALS = [
	{ label: "LinkedIn",    href: SOCIAL_LINK.linkedIn,  icon: FaLinkedinIn },
	{ label: "GitHub",      href: SOCIAL_LINK.github,    icon: FaGithub },
	{ label: "Facebook",    href: SOCIAL_LINK.facebook,  icon: FaFacebookF },
	{ label: "X (Twitter)", href: SOCIAL_LINK.twitter,   icon: SiX },
	{ label: "Instagram",   href: SOCIAL_LINK.instagram, icon: FaInstagram },
];

const NAV_LINKS = [
	{ href: "#experiences", label: "Experience" },
	{ href: "#projects",    label: "Projects" },
	{ href: "#github",      label: "GitHub Stats" },
	{ href: "#contact",     label: "Contact" },
];

const QUICK_LINKS = [
	{ href: RESUME_LINK,              label: "View Resume",    external: true },
	{ href: SOCIAL_LINK.github,       label: "GitHub Profile", external: true },
	{ href: SOCIAL_LINK.linkedIn,     label: "LinkedIn",       external: true },
	{ href: "mailto:huzaifakhawar100@gmail.com", label: "Send Email", external: true },
];

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-8 border-t border-white/10 px-4 sm:px-6">
			{/* Top section */}
			<div className="max-w-6xl m-auto grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">

				{/* Brand column */}
				<div className="flex flex-col gap-4">
					<a
						href="#"
						className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-teal-400"
					>
						<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400 ring-1 ring-teal-400/30 transition-colors group-hover:bg-teal-500/20">
							<FaCode />
						</span>
						<span>Muhammad Huzaifa Khawar</span>
					</a>
					<p className="text-sm leading-6 text-slate-400 max-w-xs">
						Full-Stack Developer building modern web apps with React, Next.js, and AI-assisted workflows.
					</p>
					{/* Social icons */}
					<ul className="flex items-center gap-3 mt-1">
						{SOCIALS.map(({ label, href, icon: Icon }) => (
							<li key={label}>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={href}
									aria-label={label}
									title={label}
									className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-150 hover:border-teal-400/40 hover:bg-teal-500/10 hover:text-teal-400"
								>
									<Icon className="text-sm" />
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Navigate column */}
				<div className="flex flex-col gap-4">
					<h4 className="text-xs font-semibold uppercase tracking-widest text-teal-400">
						Navigate
					</h4>
					<ul className="flex flex-col gap-2.5">
						{NAV_LINKS.map(({ href, label }) => (
							<li key={href}>
								<a
									href={href}
									className="text-sm text-slate-400 transition-colors hover:text-white"
								>
									{label}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Quick links column */}
				<div className="flex flex-col gap-4">
					<h4 className="text-xs font-semibold uppercase tracking-widest text-teal-400">
						Quick Links
					</h4>
					<ul className="flex flex-col gap-2.5">
						{QUICK_LINKS.map(({ href, label, external }) => (
							<li key={label}>
								<a
									href={href}
									target={external ? "_blank" : undefined}
									rel={external ? "noopener noreferrer" : undefined}
									className="text-sm text-slate-400 transition-colors hover:text-white"
								>
									{label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="max-w-6xl m-auto flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 sm:flex-row">
				<p className="text-xs text-slate-500 text-center sm:text-left">
					&copy; {year} Muhammad Huzaifa Khawar. All rights reserved.
				</p>
				<p className="text-xs text-slate-600 text-center sm:text-right">
					Built with Next.js &amp; Tailwind CSS
				</p>
			</div>
		</footer>
	);
};

export default Footer;
