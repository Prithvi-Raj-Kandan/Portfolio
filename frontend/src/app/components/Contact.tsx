import { FileText, Mail } from "lucide-react";
import { profile } from "../data";
import { Reveal } from "./Reveal";
import { SocialLinks } from "./SocialLinks";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0d0b] px-6 py-12 sm:px-10 sm:py-16">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#d6ff4a]">05 — Contact</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Feel free to reach out if you have any opportunities, projects, or ideas to discuss.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-zinc-400">{profile.availability}</p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-3 font-display text-2xl text-white transition hover:text-[#d6ff4a] sm:text-3xl"
            >
              <Mail className="text-[#d6ff4a]" size={26} />
              {profile.email}
            </a>

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <SocialLinks tone="solid" />
              <a
                href={profile.resume}
                download={profile.resumeDownload}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-100 transition hover:border-[#d6ff4a]/50 hover:text-[#d6ff4a]"
              >
                <FileText size={16} />
                View resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
