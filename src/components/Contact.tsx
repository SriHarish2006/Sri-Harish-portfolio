import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [sent, setSent] = useState(false);

  const onSubmit = (data: FormData) => {
    // Wire up EmailJS here, e.g.:
    // emailjs.send('service_id', 'template_id', data, 'public_key')
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`)}`;
    window.location.href = mailto;
    setSent(true);
    reset();
  };

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to fresher roles in Data Analytics, BI, AI/ML Engineering, and Software Development."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            <div className="glass rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3 text-slate-300">
                <Mail className="text-cyan-400" size={18} /> {profile.email}
              </div>
              <div className="mb-4 flex items-center gap-3 text-slate-300">
                <MapPin className="text-cyan-400" size={18} /> {profile.location}
              </div>
              <div className="flex gap-3">
                <a
                  href={profile.social.github}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 hover:text-cyan-400"
                >
                  <FaGithub size={17} />
                </a>
                <a
                  href={profile.social.linkedin}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 hover:text-cyan-400"
                >
                  <FaLinkedin size={17} />
                </a>
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for opportunities
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            className="glass glow-border space-y-4 rounded-2xl p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <input
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">Name is required</p>}
              </div>
              <div>
                <input
                  {...register("email", { required: true })}
                  placeholder="Your Email"
                  type="email"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">Valid email required</p>}
              </div>
            </div>
            <div>
              <input
                {...register("subject", { required: true })}
                placeholder="Subject"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
              />
              {errors.subject && <p className="mt-1 text-xs text-red-400">Subject is required</p>}
            </div>
            <div>
              <textarea
                {...register("message", { required: true })}
                placeholder="Your Message"
                rows={5}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">Message is required</p>}
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-transform hover:scale-105"
            >
              <Send size={16} /> Send Message
            </button>
            {sent && (
              <p className="text-sm text-emerald-400">
                Your email client should open — thanks for reaching out!
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
