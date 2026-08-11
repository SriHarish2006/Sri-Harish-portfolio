import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p className="font-[var(--font-display)] text-lg font-bold text-white">
            Sri<span className="gradient-text">.dev</span>
          </p>
          <p className="mt-1 text-sm text-slate-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          <a href={profile.social.github} className="text-slate-400 hover:text-cyan-400">
            <FaGithub size={18} />
          </a>
          <a href={profile.social.linkedin} className="text-slate-400 hover:text-cyan-400">
            <FaLinkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} className="text-slate-400 hover:text-cyan-400">
            <Mail size={18} />
          </a>
        </div>

        <a
          href="#home"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 hover:text-cyan-400"
          aria-label="Back to top"
        >
          <ArrowUp size={17} />
        </a>
      </div>
    </footer>
  );
}
