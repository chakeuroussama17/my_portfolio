"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail, Phone, MapPin, Clock, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Contact({ isOpen, onClose }: ContactProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 2000);
    } else {
      setStatus("idle");
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-surface border border-white/10 rounded-2xl backdrop-blur max-w-2xl w-full max-h-[85vh] overflow-y-auto"
          >
            {/* Network visualization background */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                {/* Network lines */}
                <circle cx="100" cy="100" r="200" fill="none" stroke="url(#grad)" strokeWidth="0.5" opacity="0.3" />
                <circle cx="200" cy="200" r="150" fill="none" stroke="url(#grad)" strokeWidth="0.5" opacity="0.2" />
              </svg>
            </div>

            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
            >
              <X size={16} />
            </motion.button>

            <div className="relative grid md:grid-cols-2 gap-3 p-5 md:p-6">
              {/* Left side - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-4"
              >
                <div>
                  <h2 className="text-xl font-bold mb-1">Let&apos;s Connect</h2>
                  <p className="text-muted text-xs">
                    I&apos;m always open to discussing new projects and opportunities.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-2">
                  {/* Email */}
                  <motion.a
                    href="mailto:chakeuroussama@gmail.com"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:border-accent/50 transition group cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-accent/20 rounded flex items-center justify-center flex-shrink-0">
                      <Mail className="text-accent" size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted uppercase tracking-wider">Email</p>
                      <p className="text-xs font-medium group-hover:text-accent transition truncate">
                        chakeuroussama@gmail.com
                      </p>
                    </div>
                  </motion.a>

                  {/* Phone */}
                  <motion.a
                    href="tel:+60172246462"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:border-accent/50 transition group cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-teal-400/20 rounded flex items-center justify-center flex-shrink-0">
                      <Phone className="text-teal-400" size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted uppercase tracking-wider">Phone</p>
                      <p className="text-xs font-medium group-hover:text-accent transition truncate">
                        +60 17 224 6462
                      </p>
                    </div>
                  </motion.a>

                  {/* Location */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:border-accent/50 transition"
                  >
                    <div className="w-10 h-10 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-secondary" size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted uppercase tracking-wider">Location</p>
                      <p className="text-xs font-medium truncate">Selangor, Malaysia</p>
                    </div>
                  </motion.div>

                  {/* Response Time */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:border-accent/50 transition"
                  >
                    <div className="w-10 h-10 bg-indigo-400/20 rounded flex items-center justify-center flex-shrink-0">
                      <Clock className="text-indigo-400" size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted uppercase tracking-wider">Response Time</p>
                      <p className="text-xs font-medium truncate">Within 24 hours</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-xs text-muted uppercase tracking-wide mb-3">Follow Me</p>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com"
                      target="_blank"
                      className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition"
                    >
                      <FaGithub size={16} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition"
                    >
                      <FaLinkedin size={16} />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition"
                    >
                      <FaTwitter size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="space-y-3"
              >
                <h3 className="text-xl font-bold">Send a Message</h3>
                <p className="text-muted text-xs mb-3">
                  Fill out the form and I&apos;ll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-accent/50 transition placeholder:text-muted"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-accent/50 transition placeholder:text-muted"
                    />
                  </div>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-accent/50 transition placeholder:text-muted"
                  />

                  <textarea
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-accent/50 transition placeholder:text-muted resize-none"
                  />

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-gradient-to-r from-accent to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-accent/25 transition disabled:opacity-70"
                  >
                    {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent! ✓" : "Send Message →"}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
