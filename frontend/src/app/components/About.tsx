import { profile } from "../data";
import { Reveal } from "./Reveal";

const principles = [
  {
    title: "Agents that survive production",
    copy: "Tool discovery, schema wiring, and single-iteration execution — the unglamorous work that keeps an agent from looping, dropping fields, or wrapping the wrong payload.",
  },
  {
    title: "Retrieval you can score",
    copy: "Hybrid search is only useful when faithfulness, relevancy, and latency are measured. I treat evaluation as part of the system, not a demo afterthought.",
  },
  {
    title: "Pipelines with tenants",
    copy: "Multi-tenant collectors need isolation, merge-key correctness, and load audits. The data path has to be as deliberate as the model path.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#d6ff4a]">01 — About</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Full-stack AI systems, delivered close to the work.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)]">
          <Reveal delay={0.05}>
            <div className="space-y-5 text-lg leading-relaxed text-zinc-400">
              <p>
                I&apos;m an AI engineer and forward deployed engineer studying for a B.E. in Artificial Intelligence
                & Machine Learning at Global Academy of Technology, Bengaluru, expected June 2027.
              </p>
              <p>
                The work I want is the stretch between a model and a workflow a team will actually run: agents with
                explicit contracts, hybrid RAG with an eval set, and data collectors that stay correct when a second
                tenant shows up.
              </p>
              <p>
                Based in {profile.location}. {profile.availability}.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">Education</p>
              <p className="mt-3 font-display text-xl text-white">B.E. Artificial Intelligence & Machine Learning</p>
              <p className="mt-2 text-zinc-400">Global Academy of Technology, Bengaluru</p>
              <p className="mt-1 font-mono text-xs text-[#d6ff4a]">Expected June 2027</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">Focus</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  Production agents, hybrid RAG, and multi-tenant data pipelines for teams that need the system to hold
                  up after the demo.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={0.08 * index}>
              <article className="h-full rounded-3xl border border-white/10 bg-[#0b0d0b] p-6">
                <p className="font-mono text-[11px] text-[#d6ff4a]">0{index + 1}</p>
                <h3 className="mt-3 font-display text-xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
