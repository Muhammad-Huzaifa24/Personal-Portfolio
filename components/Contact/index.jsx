import { ArrowUpRight, Download, Mail, MessageSquareMore } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  PERSONAL_INFO,
  RESUME_LINK,
  SOCIAL_LINK,
} from "../../constants";

const contactLinks = [
  {
    label: "Email",
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "/in/muhammad-huzaifa-569794290",
    href: SOCIAL_LINK.linkedIn,
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    value: "/Muhammad-Huzaifa24",
    href: SOCIAL_LINK.github,
    icon: FaGithub,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-shell"
    >
      <div className="glass-panel overflow-hidden rounded-[2rem]">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="section-kicker">Contact</p>
            <h2 className="section-heading max-w-2xl">
              Let&apos;s build a portfolio piece, product surface, or frontend experience that feels intentional.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              I enjoy collaborating on clean, modern interfaces and turning rough ideas into responsive products that look polished and work well across devices.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="h-12 rounded-full border border-cyan-300/40 bg-cyan-300/16 px-5 text-white hover:bg-cyan-300/24"
              >
                <a href={`mailto:${PERSONAL_INFO.email}`}>
                  Start a Conversation
                  <MessageSquareMore className="size-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-white/12 bg-white/5 px-5 text-white hover:bg-white/10 hover:text-white"
              >
                <a
                  href={RESUME_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Resume
                  <Download className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/38 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                Reach Out
              </p>
              <div className="mt-5 space-y-3">
                {contactLinks.map(({ label, value, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/8 hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/45 text-cyan-200">
                        <Icon />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-[0.18em] text-slate-400">
                          {label}
                        </span>
                        <span className="mt-1 block text-sm font-medium">{value}</span>
                      </span>
                    </span>
                    <ArrowUpRight className="size-4 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(245,158,11,0.12),rgba(29,205,254,0.12))] p-5">
              <p className="text-sm font-semibold text-white">
                Best for freelance help, frontend implementation, and React-based portfolio or dashboard work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
