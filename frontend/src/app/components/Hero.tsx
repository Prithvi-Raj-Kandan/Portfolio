import { ArrowUpRight, Download } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "../data";
import { SocialLinks } from "./SocialLinks";

const signals = [
  { value: "48", label: "CortexOne functions, agents, and workflows" },
  { value: "5", label: "Enterprise client engagements at Beagle" },
  { value: "Award", label: "Best Final-Year Project for Asta" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-36">
      <div className="mx-auto grid max-w-6xl items-end gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)]">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="font-mono text-xs uppercase tracking-[0.22em] text-[#d6ff4a]"
          >
            {profile.location} · Open to Hyderabad & remote
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Prithvi Raj Kandan
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-5 font-display text-xl text-zinc-200 sm:text-2xl"
          >
            {profile.role}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-zinc-500"
          >
            {profile.focus}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400"
          >
            I build production AI agents, hybrid RAG systems, and multi-tenant data pipelines. I co-led
            enterprise AI delivery at Beagle Corporation, and Asta — an AI GST compliance co-pilot — won
            Best Final-Year Project.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mt-8 flex flex-col gap-4"
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
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-100 transition hover:border-white/40"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
            <SocialLinks />
          </motion.div>
        </div>

        <motion.aside
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d0b]/90 p-6 shadow-[0_0_80px_rgba(214,255,74,0.05)]"
        >
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#d6ff4a]/10 blur-3xl" />
          <div className="relative flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em]">
            <span className="text-zinc-500">Delivery brief</span>
            <span className="flex items-center gap-2 text-[#d6ff4a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d6ff4a]" />
              Beagle
            </span>
          </div>
          <h2 className="relative mt-5 font-display text-2xl font-semibold tracking-tight text-white">
            AI Engineer Intern
            <span className="mt-1 block text-base font-medium text-zinc-400">Tech Lead · May 2026 – Oct 2026</span>
          </h2>
          <dl className="relative mt-6 space-y-4">
            {signals.map((signal) => (
              <div key={signal.label} className="flex items-baseline gap-4 border-t border-white/10 pt-4">
                <dt className="w-12 font-display text-3xl font-semibold text-white">{signal.value}</dt>
                <dd className="text-sm leading-snug text-zinc-400">{signal.label}</dd>
              </div>
            ))}
          </dl>
          <p className="relative mt-6 font-mono text-[11px] leading-relaxed text-zinc-500">
            Whittier Trust · Nissan · Kia · TravelAgency · Legal Research
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
