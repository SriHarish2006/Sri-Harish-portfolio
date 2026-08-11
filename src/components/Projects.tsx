import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";

type Project = (typeof projects)[number];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          description="A mix of full-stack engineering, applied machine learning, and data analytics work — each built end-to-end."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass glow-border flex flex-col overflow-hidden rounded-2xl"
            >
              <div className="h-40 w-full overflow-hidden bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-purple-600/30">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs text-slate-500">
                    Add a screenshot at public/projects
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-cyan-400/10 px-2.5 py-0.5 text-xs font-medium text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
                {p.summary}
              </p>
              <div className="mb-5 flex flex-wrap gap-2">
                {p.tech.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-slate-500">
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setActive(p)}
                className="flex items-center gap-1 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
              >
                View details <ArrowUpRight size={15} />
              </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-8"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-5 top-5 text-slate-400 hover:text-white"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {active.image && (
                <img
                  src={active.image}
                  alt={active.title}
                  className="mb-5 h-48 w-full rounded-xl object-cover"
                />
              )}
              <div className="mb-3 flex flex-wrap gap-2">
                {active.tags.map((t) => (
                  <span key={t} className="rounded-full bg-cyan-400/10 px-2.5 py-0.5 text-xs text-cyan-300">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">{active.title}</h3>

              <div className="space-y-4 text-sm leading-relaxed text-slate-400">
                <div>
                  <h4 className="mb-1 font-semibold text-slate-200">Problem</h4>
                  <p>{active.problem}</p>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-200">Solution</h4>
                  <p>{active.solution}</p>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-200">Key Features</h4>
                  <ul className="list-disc space-y-1 pl-5">
                    {active.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-slate-200">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {active.tech.map((t) => (
                      <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  <FaGithub size={16} /> View Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
