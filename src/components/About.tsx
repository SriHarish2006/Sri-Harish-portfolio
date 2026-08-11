import { motion } from "framer-motion";
import { GraduationCap, Target, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education, experience } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering intelligent, data-driven products"
          description="I'm a Computer Science Engineering student focused on the intersection of AI/ML, data analytics, and full-stack development — turning research and data into working software."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Mission",
              text: "Build practical, well-engineered systems that translate data and research into real value — from screening models to enterprise platforms.",
            },
            {
              icon: Sparkles,
              title: "Strengths",
              text: "Comfortable across the stack: Python/ML on one end, Java/Spring Boot and React/TypeScript on the other, with strong SQL and BI fundamentals.",
            },
            {
              icon: GraduationCap,
              title: "Goals",
              text: "Looking for fresher roles in Data Analytics, BI, AI/ML Engineering, or Software Development at teams that value rigorous, shipped work.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass glow-border rounded-2xl p-6"
            >
              <card.icon className="mb-4 text-cyan-400" size={26} />
              <h3 className="mb-2 text-lg font-semibold text-white">{card.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{card.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">Education</h3>
            <div className="relative border-l border-white/10 pl-6">
              {education.map((e) => (
                <motion.div
                  key={e.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative mb-8 last:mb-0"
                >
                  <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)]" />
                  <p className="text-xs font-medium text-cyan-400">{e.period}</p>
                  <h4 className="mt-1 font-semibold text-white">{e.degree}</h4>
                  <p className="text-sm text-slate-400">{e.school}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{e.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">Experience</h3>
            <div className="relative border-l border-white/10 pl-6">
              {experience.map((e) => (
                <motion.div
                  key={e.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative mb-8 last:mb-0"
                >
                  <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_10px_2px_rgba(168,85,247,0.6)]" />
                  <p className="text-xs font-medium text-purple-400">{e.period}</p>
                  <h4 className="mt-1 font-semibold text-white">
                    {e.role} · <span className="text-slate-400">{e.company}</span>
                  </h4>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-500">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {e.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
