import Image from "next/image";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Layers3 } from "lucide-react";

import experiences from "./data/data";

const Experiences = () => {
  return (
    <section
      id="experience"
      className="section-shell"
    >
      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="section-kicker">Experience</p>
          <h2 className="section-heading">
            Real-world product work across internships, shipping practice, and MERN delivery.
          </h2>
        </div>
        <div className="glass-panel flex max-w-xl items-start gap-4 rounded-3xl p-5">
          <span className="rounded-2xl border border-white/10 bg-white/6 p-3 text-cyan-200">
            <Layers3 className="size-5" />
          </span>
          <p className="text-sm leading-7 text-slate-300">
            My experience is early-career, but it is already grounded in team collaboration, frontend implementation, and learning how to ship inside real product environments.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            className="glass-panel rounded-[2rem] p-6 sm:p-7"
          >
            <div className="grid gap-6 lg:grid-cols-[220px_1fr] lg:gap-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{experience.company}</p>
                    <p className="text-xs text-slate-400">{experience.period}</p>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-4">
                  <div className="flex items-center gap-2 text-cyan-200">
                    <BriefcaseBusiness className="size-4" />
                    <span className="text-xs uppercase tracking-[0.22em]">Role</span>
                  </div>
                  <p className="mt-3 font-display text-2xl font-semibold text-white">
                    {experience.job_title}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <p className="max-w-3xl text-base leading-8 text-slate-300">
                  {experience.summary}
                </p>

                <div className="grid gap-3 sm:grid-cols-3">
                  {experience.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
