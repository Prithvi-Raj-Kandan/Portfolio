import { FileText, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "../data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition ${scrolled ? "border-white/10 bg-[#050505]/85 backdrop-blur-xl" : "border-transparent bg-[#050505]/40 backdrop-blur-md"}`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-sm text-zinc-100">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[#d6ff4a]/40 font-mono text-[11px] text-[#d6ff4a]">
            PR
          </span>
          <span className="font-display hidden font-medium tracking-tight sm:inline">Prithvi Raj Kandan</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="text-sm text-zinc-400 transition hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href={profile.resume}
            download={profile.resumeDownload}
            className="inline-flex items-center gap-2 rounded-full border border-[#d6ff4a]/40 px-3.5 py-1.5 text-sm text-[#d6ff4a] transition hover:bg-[#d6ff4a] hover:text-[#111]"
          >
            <FileText size={15} />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-200 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#050505] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-zinc-200 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resume}
              download={profile.resumeDownload}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#d6ff4a] px-4 py-3 text-sm font-medium text-[#111]"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
