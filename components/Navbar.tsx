"use client";
import { useState } from "react";
import { Home, User, Code2, Briefcase, Mail, FileText, Search } from "lucide-react";

const links = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Work", href: "#work", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar({ onSearchOpen }: { onSearchOpen: () => void }) {
  const [active, setActive] = useState("Home");

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-4xl">
      <nav className="flex items-center justify-between gap-4 bg-surface/80 backdrop-blur border border-white/10 rounded-2xl px-4 py-2">
        <a href="#home" className="font-bold text-lg tracking-wide">
          OC
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setActive(label)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition ${
                  active === label ? "bg-white/10" : "hover:bg-white/5"
                }`}
              >
                <Icon size={15} />
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={onSearchOpen}
            className="hidden sm:flex items-center gap-2 text-xs text-muted border border-white/10 rounded-full px-3 py-1.5"
          >
            <Search size={13} /> Search <kbd className="ml-1 bg-white/10 rounded px-1">Ctrl K</kbd>
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-1.5 bg-accent text-white text-sm px-3 py-1.5 rounded-full"
          >
            <FileText size={14} /> Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
