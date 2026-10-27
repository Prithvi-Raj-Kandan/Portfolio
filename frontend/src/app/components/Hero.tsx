import { ArrowUpRight, Download } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "../data";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-32 lg:pt-44">
      <div className="mx-auto max-w-3xl">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Prithvi Raj Kandan
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-6 font-display text-xl text-zinc-200 sm:text-2xl"
        >
          {profile.role}
        </motion.p>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-zinc-500"
        >
          {profile.focus}
        </motion.p>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-6 text-lg leading-relaxed text-zinc-400"
        >
          I build production AI agents, hybrid RAG systems, and multi-tenant data pipelines. I co-led
          enterprise AI delivery at Beagle Corporation, and Asta — an AI GST compliance co-pilot — won
          Best Final-Year Project.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.26 }}
          className="mt-8 flex flex-col gap-5"
        >
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#d6ff4a] px-5 py-2.5 text-sm font-semibold text-[#111] transition hover:bg-[#e8ff8f]"
            >
              View Projects
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-100 transition hover:border-white/40"
            >
              Experience
            </a>
            <a
              href={profile.resume}
              download={profile.resumeDownload}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-100 transition hover:border-white/40"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
}
