import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import works from "./data/data";

const Works = () => {
  return (
    <section
      id="projects"
      className="section-shell"
    >
      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-heading">
            Projects that reflect how I approach frontend quality, interaction design, and full-stack execution.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-300">
          These projects range from UI-focused builds to full-stack systems, with an emphasis on responsive interfaces, practical architecture, and iterative learning.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {works.map((work, index) => (
          <motion.article
            key={work.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
            className={`glass-panel overflow-hidden rounded-[2rem] ${
              work.featured ? "lg:col-span-1" : "lg:col-span-1"
            }`}
          >
            <div className="overflow-hidden border-b border-white/10">
              <Image
                src={work.image_url}
                alt={work.work_title}
                width={1200}
                height={720}
                className="h-64 w-full object-cover transition duration-500 hover:scale-[1.03]"
              />
            </div>

            <div className="space-y-5 p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-100">
                    {work.genre}
                  </span>
                  <span className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    {work.year}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  <Globe className="size-3.5" />
                  {work.is_deployed ? "Live project" : "Source code"}
                </span>
              </div>

              <div>
                <h3 className="font-display text-3xl font-semibold text-white">
                  {work.work_title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {work.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {work.stack.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-2 text-xs font-medium text-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <Button
                asChild
                className="h-12 w-full rounded-full border border-white/10 bg-white/6 text-white hover:bg-white/10"
              >
                <a
                  href={work.deploye_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {work.is_deployed ? "Visit project" : "View source"}
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Works;
