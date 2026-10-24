import { Award, Flag, Trophy, Users } from "lucide-react";
import { beagleStack } from "../data";
import { Reveal } from "./Reveal";

const bullets = [
  "Co-led a 5-person engineering pod delivering 48 CortexOne functions, agents, and visual workflows across 5 enterprise client engagements (Whittier Trust, Nissan, Kia, TravelAgency, and Legal Research).",
  "Architected and hardened multi-tenant dlt + MotherDuck (DuckDB) data collectors for X and Ahrefs with tenant isolation, merge-key correctness, load auditing, and GA4 conformance testing.",
  "Built and deployed Whittier Trust's deterministic email assembly layer (locked templates, validation, CRM-ready rendering, security hardening) integrated with the CortexOne Email Agent and production workflow.",
  "Resolved complex agent orchestration failure modes (tool discovery, JSON field-mapping, repeated generation, wrapped-output bugs) via single-iteration execution and explicit schema wiring.",
];

const highlights = [
  {
    icon: Trophy,
    title: "Winner — Best Final-Year Project Award",
    meta: "Oct 2026",
    copy: "Won the college-wide Best Project Award at Global Academy of Technology for Asta, an AI-powered SME GST and compliance co-pilot.",
  },
  {
    icon: Flag,
    title: "2nd Place — EcoQuest Hackathon",
    meta: "24 hours",
    copy: "Built an automated carbon footprint tracking app in 24 hours using Python and React, parsing receipt data to compute real-time emissions for 200+ users.",
  },
  {
    icon: Users,
    title: "Chair — IEEE Computer Society Chapter",
    meta: "Global Academy of Technology",
    copy: "Led technical workshops, hackathons, and student engineering initiatives.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#d6ff4a]">02 — Experience</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Experience & Leadership
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            Enterprise delivery at Beagle, plus the awards and chapter work that sit next to it.
          </p>
        </Reveal>

        <div className="mt-10 grid items-start gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.8fr)]">
          <Reveal>
            <article className="rounded-3xl border border-white/10 bg-[#0b0d0b] p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#d6ff4a]">Beagle Corporation</p>
                  <h3 className="mt-2 font-display text-2xl text-white sm:text-3xl">AI Engineer Intern (Tech Lead)</h3>
                </div>
                <p className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-zinc-300">
                  May 2026 – Oct 2026
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6ff4a]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-2">
                {beagleStack.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>

          <div className="grid gap-4">
            <Reveal>
              <div className="flex items-center gap-2 px-1 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                <Award size={14} />
                Awards & leadership
              </div>
            </Reveal>
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={0.06 * index}>
                  <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#d6ff4a]/30 bg-[#d6ff4a]/10 text-[#d6ff4a]">
                        <Icon size={18} />
                      </span>
                      <div>
                        <h3 className="font-display text-lg leading-snug text-white">{item.title}</h3>
                        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">{item.meta}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-400">{item.copy}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
