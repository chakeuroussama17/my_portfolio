"use client";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  matchIntent,
  GREETING,
  QUICK_REPLIES,
  FALLBACK,
  type ChatLink,
} from "@/data/chatbot";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
  links?: ChatLink[];
};

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, from: "bot", text: GREETING },
  ]);

  // Incrementing counter rather than Date.now()/Math.random(), which would
  // differ between server and client and trip a hydration mismatch.
  const nextId = useRef(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function send(text: string) {
    const question = text.trim();
    if (!question) return;

    setMessages((prev) => [
      ...prev,
      { id: nextId.current++, from: "user", text: question },
    ]);
    setInput("");
    setIsTyping(true);

    // Small delay so the reply doesn't appear instantly — reads as a real reply.
    const intent = matchIntent(question);
    window.setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: nextId.current++,
          from: "bot",
          text: intent?.answer ?? FALLBACK,
          links: intent?.links,
        },
      ]);
    }, 550);
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="mb-3 w-[22rem] max-w-[calc(100vw-3rem)] bg-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-gradient-to-r from-accent/20 to-secondary/10">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center font-bold text-sm">
                  O
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-surface rounded-full" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold leading-tight">Ask about Oussama</p>
                <p className="text-[11px] text-muted">Usually replies instantly</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center transition"
              >
                <X size={15} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="h-72 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed whitespace-pre-line ${
                      m.from === "user"
                        ? "bg-accent text-white rounded-br-sm"
                        : "bg-white/5 border border-white/10 text-muted rounded-bl-sm"
                    }`}
                  >
                    {m.text}

                    {m.links && m.links.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {m.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-[11px] font-medium hover:bg-accent/30 transition"
                          >
                            <ExternalLink size={10} /> {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm px-3.5 py-3 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 bg-muted rounded-full"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick replies — only while the conversation is fresh */}
            {messages.length <= 3 && (
              <div className="px-4 pb-3 flex flex-wrap gap-1.5">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="px-2.5 py-1 rounded-full text-[11px] bg-white/5 border border-white/10 text-muted hover:border-accent/50 hover:text-accent transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 px-3 py-3 border-t border-white/10"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question…"
                aria-label="Ask a question"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-3.5 py-2 text-xs outline-none focus:border-accent/50 transition placeholder:text-muted"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send message"
                className="w-8 h-8 rounded-full bg-accent flex items-center justify-center disabled:opacity-40 hover:bg-accent/90 transition flex-shrink-0"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? "Close chat" : "Open chat"}
        className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/25"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </motion.button>
    </div>
  );
}
