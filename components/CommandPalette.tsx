"use client";
import { Command } from "cmdk";
import { useEffect } from "react";

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Research & Education", href: "#research" },
  { label: "Awards & Leadership", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function CommandPalette({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center pt-32"
      onClick={() => setOpen(false)}
    >
      <Command
        className="w-full max-w-md bg-surface border border-white/10 rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Command.Input
          placeholder="Jump to a section..."
          className="w-full bg-transparent px-4 py-3 outline-none border-b border-white/10 text-sm"
        />
        <Command.List className="p-2">
          <Command.Empty className="px-3 py-2 text-sm text-muted">No results.</Command.Empty>
          {items.map((item) => (
            <Command.Item
              key={item.label}
              onSelect={() => {
                window.location.hash = item.href;
                setOpen(false);
              }}
              className="px-3 py-2 rounded-lg text-sm cursor-pointer aria-selected:bg-white/10"
            >
              {item.label}
            </Command.Item>
          ))}
        </Command.List>
      </Command>
    </div>
  );
}
