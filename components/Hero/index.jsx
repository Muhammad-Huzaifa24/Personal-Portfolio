import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { SiX } from "react-icons/si";

import { Button } from "@/components/ui/button";
import {
  COLLABORATION_POINTS,
  FEATURED_METRICS,
  FEATURED_SKILLS,
  PERSONAL_INFO,
  RESUME_LINK,
  SOCIAL_LINK,
} from "../../constants";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const socialLinks = [
  { label: "GitHub", href: SOCIAL_LINK.github, icon: FaGithub },
  { label: "LinkedIn", href: SOCIAL_LINK.linkedIn, icon: FaLinkedinIn },
  { label: "Facebook", href: SOCIAL_LINK.facebook, icon: FaFacebookF },
  { label: "Instagram", href: SOCIAL_LINK.instagram, icon: FaInstagram },
  { label: "X", href: SOCIAL_LINK.twitter, icon: SiX },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="section-shell pt-10 sm:pt-16"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10"
      >
        <div className="space-y-8">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100"
          >
            <Sparkles className="size-4 text-cyan-300" />
            Frontend craft with product-minded execution
          </motion.div>

          <motion.div
            variants={item}
            className="space-y-5"
          >
            <p className="section-kicker">Muhammad Huzaifa Khawar</p>
            <h1 className="font-display max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              Building responsive products that feel sharp, modern, and ready to ship.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {PERSONAL_INFO.summary}
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap gap-3"
          >
            <Button
              asChild
              className="h-12 rounded-full border border-cyan-300/40 bg-cyan-300/16 px-5 text-white hover:bg-cyan-300/24"
            >
              <a href="#projects">
                View Projects
                <ArrowRight className="size-4" />
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
                Open Resume
                <Download className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-12 rounded-full px-5 text-slate-200 hover:bg-white/6 hover:text-white"
            >
              <a href={`mailto:${PERSONAL_INFO.email}`}>
                Email Me
                <Mail className="size-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="grid gap-3 sm:grid-cols-3"
          >
            {FEATURED_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="glass-panel rounded-3xl px-5 py-5"
              >
                <p className="font-display text-3xl font-semibold text-white">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {metric.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative"
        >
          <div className="hero-orb absolute -left-12 top-8 hidden h-36 w-36 rounded-full blur-3xl sm:block" />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-7">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

            <div className="flex flex-col gap-6">
              <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(29,205,254,0.16),rgba(245,158,11,0.14))] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-cyan-100/70">
                      Current Focus
                    </p>
                    <h2 className="font-display mt-3 text-3xl font-semibold text-white">
                      Modern React interfaces with real product polish.
                    </h2>
                  </div>
                  <span className="rounded-full border border-white/15 bg-slate-950/35 px-3 py-1 text-xs font-medium text-slate-100">
                    Available
                  </span>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-medium text-slate-200">Core toolbox</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {FEATURED_SKILLS.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-2 text-xs font-medium text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-medium text-slate-200">Best fit</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                    {COLLABORATION_POINTS.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/38 px-5 py-4">
                <div>
                  <p className="text-sm font-medium text-white">{PERSONAL_INFO.availability}</p>
                  <p className="mt-1 text-sm text-slate-400">{PERSONAL_INFO.location}</p>
                </div>

                <div className="flex items-center gap-2">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
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
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
