import { skillGroups } from "../data";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#d6ff4a]">04 — Capabilities</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Skills
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            The stack I use to take an agent, a retriever, or a collector from a notebook into something another team
            can run.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.05}>
              <article className="h-full rounded-3xl border border-white/10 bg-[#0b0d0b] p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl text-white">{group.title}</h3>
                  <span className="font-mono text-xs text-zinc-600">{group.index}</span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300">
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
