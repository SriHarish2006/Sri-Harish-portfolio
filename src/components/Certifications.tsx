import { motion } from "framer-motion";
import { Award, ExternalLink, BadgeCheck, FileText } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/portfolio";


export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications & Achievements"
          description="Professional certifications, internships, and industry-recognized credentials."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div
              key={`${c.name ?? "certificate"}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: (i % 3) * 0.1,
                duration: 0.5,
              }}
              whileHover={{ y: -6 }}
              className="glass glow-border overflow-hidden rounded-2xl"
            >
              {/* Certificate Preview */}
              <div className="flex h-52 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-purple-600/20">
                {c.image ? (
                  c.image.toLowerCase().endsWith(".pdf") ? (
                    <a
                      href={c.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-full w-full flex-col items-center justify-center text-center transition hover:bg-black/10"
                    >
                      <FileText
                        size={60}
                        className="mb-3 text-red-500"
                      />

                      <span className="text-sm font-semibold text-white">
                        View PDF Certificate
                      </span>
                    </a>
                  ) : (
                    <a
                      href={c.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full w-full"
                    >
                      <img
                        src={c.image}
                        alt={c.name ?? "Certificate"}
                        className="h-full w-full object-cover transition duration-300 hover:scale-105"
                      />
                    </a>
                  )
                ) : (
                  <Award
                    size={50}
                    className="text-cyan-300/70"
                  />
                )}
              </div>

              {/* Certificate Details */}
              <div className="p-5">
                <h3 className="mb-1 text-lg font-semibold text-white">
                  {c.name ?? "Certificate"}
                </h3>

                <p className="mb-3 text-sm text-slate-400">
                  {c.issuer ?? ""}
                </p>

                <div className="mb-4 flex flex-wrap gap-3 text-xs text-slate-500">
                  {c.date && <span>{c.date}</span>}

                  {c.credentialId && (
                    <span className="flex items-center gap-1">
                      <BadgeCheck
                        size={14}
                        className="text-emerald-400"
                      />
                      {c.credentialId}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  {c.verifyUrl && (
                    <a
                      href={c.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
                    >
                      Verify
                      <ExternalLink size={15} />
                    </a>
                  )}

                  {c.image && (
                    <a
                      href={c.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 rounded-full bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-300 transition hover:bg-purple-500/20"
                    >
                      <FileText size={15} />
                      View Full Certificate
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
