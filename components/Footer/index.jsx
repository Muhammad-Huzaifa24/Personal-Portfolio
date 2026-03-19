import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { SiX } from "react-icons/si";

import { NAV_ITEMS, PERSONAL_INFO, SOCIAL_LINK } from "../../constants";

const socialItems = [
  { label: "LinkedIn", href: SOCIAL_LINK.linkedIn, icon: FaLinkedinIn },
  { label: "GitHub", href: SOCIAL_LINK.github, icon: FaGithub },
  { label: "Facebook", href: SOCIAL_LINK.facebook, icon: FaFacebookF },
  { label: "X", href: SOCIAL_LINK.twitter, icon: SiX },
  { label: "Instagram", href: SOCIAL_LINK.instagram, icon: FaInstagram },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-xl font-semibold text-white">
            {PERSONAL_INFO.name}
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Frontend-focused software engineer building modern web products.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {socialItems.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-white"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
