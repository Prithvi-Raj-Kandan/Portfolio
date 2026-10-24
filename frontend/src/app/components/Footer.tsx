import { profile } from "../data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. {profile.location}.</p>
        <div className="flex flex-wrap gap-5">
          <a className="hover:text-zinc-200" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-zinc-200" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-zinc-200" href={profile.x} target="_blank" rel="noreferrer">
            X
          </a>
          <a className="hover:text-zinc-200" href={`mailto:${profile.email}`}>
            Email
          </a>
          <a className="hover:text-zinc-200" href="#home">
            Top
          </a>
        </div>
      </div>
    </footer>
  );
}
