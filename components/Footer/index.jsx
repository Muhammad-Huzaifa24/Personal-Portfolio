import React from "react";

// React Icons
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { SOCIAL_LINK } from "../../constants";

const SOCIALS = [
	{ label: "LinkedIn", href: SOCIAL_LINK.linkedIn, icon: FaLinkedinIn },
	{ label: "GitHub", href: SOCIAL_LINK.github, icon: FaGithub },
	{ label: "Facebook", href: SOCIAL_LINK.facebook, icon: FaFacebookF },
	{ label: "X (Twitter)", href: SOCIAL_LINK.twitter, icon: SiX },
	{ label: "Instagram", href: SOCIAL_LINK.instagram, icon: FaInstagram },
];

const FOOTER_LINKS = [
	{ href: "#experiences", label: "Experience" },
	{ href: "#projects", label: "Projects" },
	{ href: "#contact", label: "Contact" },
];

const Footer = () => {
	return (
		<footer className="px-4 sm:px-6">
			<div className="max-w-6xl m-auto flex flex-col gap-6 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8 flex-wrap">
					<p className="text-sm font-semibold text-white">
						Muhammad Huzaifa Khawar
					</p>
					<ul className="flex flex-wrap items-center gap-4">
						{FOOTER_LINKS.map(({ href, label }) => (
							<li key={href}>
								<a
									href={href}
									className="text-sm text-slate-400 transition-colors hover:text-teal-400"
								>
									{label}
								</a>
							</li>
						))}
					</ul>
				</div>

				<div className="flex items-center gap-4 flex-wrap">
					<ul className="flex items-center gap-4">
						{SOCIALS.map(({ label, href, icon: Icon }) => (
							<li key={label}>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={href}
									aria-label={label}
									title={label}
									className="text-slate-400 transition-colors duration-150 hover:text-teal-400"
								>
									<Icon />
								</a>
							</li>
						))}
					</ul>
					<span className="hidden h-4 w-px bg-white/10 sm:block" aria-hidden="true" />
					<p className="text-xs text-slate-500">
						&copy; {new Date().getFullYear()} Muhammad Huzaifa Khawar
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
