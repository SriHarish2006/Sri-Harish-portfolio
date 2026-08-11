import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { research } from "../data/portfolio";

export default function Research() {
  return (
    <section id="research" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Research"
          title="Research Publications"
          description="Peer-reviewed international conference publications in Artificial Intelligence, Deep Learning and Educational Technology."
        />

        <div className="space-y-8">
          {research.publications.map((paper, index) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass glow-border overflow-hidden rounded-2xl"
            >
              <div className="grid lg:grid-cols-2">
                <img
                  src={paper.image}
                  alt={paper.title}
                  className="h-full w-full object-cover"
                />

                <div className="p-8">
                  <div className="mb-3 flex items-center gap-2 text-cyan-400">
                    <Award size={18} />
                    <span>{paper.conference}</span>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {paper.title}
                  </h3>

                  <p className="mb-5 text-slate-400">
                    {paper.description}
                  </p>

                  <div className="space-y-2 text-sm text-slate-300">
                    <p>
                      <strong>Date:</strong> {paper.date}
                    </p>

                    <p>
                      <strong>Venue:</strong> {paper.venue}
                    </p>

                    {paper.isbn && (
                      <p>
                        <strong>ISBN:</strong> {paper.isbn}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}