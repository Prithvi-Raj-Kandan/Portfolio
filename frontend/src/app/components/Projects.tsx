import { ExternalLink, Github, Trophy } from "lucide-react";
import { projects } from "../data";
import { ProjectMedia } from "./ProjectMedia";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#d6ff4a]">03 — Projects</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Featured projects
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            Four pinned systems. Hover or tap a preview — a still becomes a loop when a demo file is present, and a
            system diagram holds the frame until then.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index % 2 === 0 ? 0 : 0.08} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d0b]">
                <ProjectMedia project={project} />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">{project.kicker}</p>
                  {project.badge && (
                    <p className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#d6ff4a]/30 bg-[#d6ff4a]/10 px-2.5 py-1 text-xs text-[#d6ff4a]">
                      <Trophy size={13} />
                      {project.badge}
                    </p>
                  )}
                  <h3 className="mt-3 font-display text-2xl leading-snug tracking-tight text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <li key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-300">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-4 text-sm">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-zinc-100 transition hover:text-[#d6ff4a]"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-zinc-100 transition hover:text-[#d6ff4a]"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
