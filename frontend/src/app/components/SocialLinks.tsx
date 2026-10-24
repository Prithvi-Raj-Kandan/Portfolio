import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data";

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const links = [
  { href: profile.github, label: "GitHub", icon: <Github size={18} /> },
  { href: profile.linkedin, label: "LinkedIn", icon: <Linkedin size={18} /> },
  { href: profile.x, label: "X", icon: <XIcon /> },
  { href: `mailto:${profile.email}`, label: "Email", icon: <Mail size={18} /> },
];

export function SocialLinks({ tone = "ghost" }: { tone?: "ghost" | "solid" }) {
  const className =
    tone === "solid"
      ? "flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white text-[#111] transition hover:bg-[#d6ff4a]"
      : "flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-200 transition hover:border-[#d6ff4a]/60 hover:text-[#d6ff4a]";

  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
          aria-label={link.label}
          className={className}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
