import { motion } from "framer-motion";
import { Download, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { resume } from "../data/portfolio";

export default function Resume() {
  return (
    <section id="resume" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Resume" title="Resume Highlights" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass glow-border rounded-2xl p-8"
        >
          <ul className="mb-8 grid gap-4 sm:grid-cols-2">
            {resume.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-400" size={18} />
                {h}
              </li>
            ))}
          </ul>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-transform hover:scale-105"
          >
            <Download size={16} /> Download Full Resume (PDF)
          </a>
          <p className="mt-3 text-xs text-slate-500">
            Place your resume file at <code className="text-slate-400">/public/resume.pdf</code> to enable this download.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
