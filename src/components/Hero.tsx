import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Download, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/portfolio";

function useTypingEffect(words: string[], speed = 60, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!words.length) return;

    // Respect prefers-reduced-motion: show the first role statically instead of animating.
    if (reduceMotion) {
      setText(words[0]);
      return;
    }

    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        speed
      );
    } else if (!deleting) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        speed / 2
      );
    } else {
      setDeleting(false);
      setWordIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause, reduceMotion]);

  return text;
}

export default function Hero() {
  const typed = useTypingEffect(profile.roles);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center gap-16 px-6 pb-12 pt-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1 text-xs text-cyan-300"
          >
            Available for Opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <div className="mt-4 h-9 text-xl sm:text-2xl">
            <span className="gradient-text">{typed}</span>
            {!reduceMotion && (
              <span className="ml-1 animate-pulse text-cyan-400">|</span>
            )}
          </div>

<p className="mt-6 max-w-xl text-lg text-slate-400">
  {profile.tagline}
</p>

<div className="mt-4 space-y-2 text-slate-300">
  <p> {profile.location}</p>
  <p>
    {" "}
    <a
      href={`mailto:${profile.email}`}
      className="hover:text-cyan-400"
    >
      {profile.email}
    </a>
  </p>
  <p>
    {" "}
    <a
      href={`tel:${profile.phone}`}
      className="hover:text-cyan-400"
    >
      {profile.phone}
    </a>
  </p>
</div>


          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 px-6 py-3 text-white transition hover:scale-105"
            >
              <Download size={16} />
              Download Resume
            </a>

            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white transition hover:bg-white/10"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-8 flex gap-5">
            {[
              {
                icon: FaGithub,
                href: profile.social.github,
                label: "GitHub",
                external: true,
              },
              {
                icon: FaLinkedin,
                href: profile.social.linkedin,
                label: "LinkedIn",
                external: true,
              },
              {
                icon: Mail,
                href: `mailto:${profile.email}`,
                label: "Email",
                external: false,
              },
            ].map(({ icon: Icon, href, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="flex h-11 w-11 items-center justify-center rounded-full glass text-slate-300 transition hover:text-cyan-400"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Profile Image */}
        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  className="relative mx-auto"
>
  <div className="relative h-80 w-80 sm:h-[420px] sm:w-[420px]">

    {/* Right-side glow */}
    <div className="absolute -right-12 top-1/2 h-[340px] w-[340px] -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-400/50 via-blue-500/40 to-purple-600/30 blur-[100px]" />

    {/* Image */}
    <div className="absolute inset-3 overflow-hidden rounded-full border-2 border-cyan-400 shadow-2xl">
      <img
        src={profile.image}
        alt={profile.name}
        className="h-full w-full object-cover object-center"
      />
    </div>

  </div>
</motion.div>
      </div>

      {/* Stats — normal flow instead of absolutely positioned, so it can't overlap
          the CTA/social row on short viewports and instead pushes section height. */}
      <motion.div className="grid w-full max-w-4xl grid-cols-2 gap-4 px-6 sm:grid-cols-4">
        {profile.stats.map((item) => (
          <div
            key={item.label}
            className="glass rounded-2xl px-4 py-5 text-center"
          >
            <div className="gradient-text text-2xl font-bold">
              {item.value}+
            </div>
            <div className="mt-1 text-xs text-slate-400">{item.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
