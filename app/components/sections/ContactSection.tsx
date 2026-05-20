"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Github, Linkedin, Mail, Send, Loader2, AlertCircle, Clock, ShieldAlert } from "lucide-react";
import { useTranslations } from "next-intl";

// Rate-limit constants

const RATE_KEY        = "contact_rate";
const COOLDOWN_MS     = 5 * 60 * 1000; // 5 min cooldown between sends
const MAX_PER_HOUR    = 3;
const HOUR_MS         = 60 * 60 * 1000;

interface RateData {
  lastSent:    number;
  count:       number;
  windowStart: number;
}

function loadRate(): RateData {
  try {
    const raw = localStorage.getItem(RATE_KEY);
    if (raw) return JSON.parse(raw) as RateData;
  } catch { /* ignore parse errors */ }
  return { lastSent: 0, count: 0, windowStart: 0 };
}

function saveRate(data: RateData) {
  localStorage.setItem(RATE_KEY, JSON.stringify(data));
}

function formatCountdown(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

// Component

type FormStatus = "idle" | "sending" | "success" | "error" | "limit_reached";

export function ContactSection() {
  const t = useTranslations("contact");
  const [copied, setCopied]         = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [cooldown, setCooldown]     = useState(0); // seconds remaining
  const honeypotRef = useRef<HTMLInputElement>(null);

  // Initialise cooldown from localStorage on mount
  useEffect(() => {
    const data = loadRate();
    const remaining = Math.ceil((data.lastSent + COOLDOWN_MS - Date.now()) / 1000);
    if (remaining > 0) setCooldown(remaining);
  }, []);

  // Tick the countdown every second
  useEffect(() => {
    if (cooldown <= 0) return;
    const id = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) { clearInterval(id); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [cooldown]);

  const handleCopy = () => {
    navigator.clipboard.writeText(t("email"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Honeypot check: bots fill hidden fields, humans don't
    if (honeypotRef.current?.value) {
      // Silently pretend success without sending anything
      setFormStatus("success");
      (event.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus("idle"), 5000);
      return;
    }

    // Cooldown check
    if (cooldown > 0) return;

    const data = loadRate();
    const remaining = Math.ceil((data.lastSent + COOLDOWN_MS - Date.now()) / 1000);
    if (remaining > 0) {
      setCooldown(remaining);
      return;
    }

    // Hourly limit check
    const inWindow = data.windowStart > 0 && Date.now() - data.windowStart < HOUR_MS;
    if (inWindow && data.count >= MAX_PER_HOUR) {
      setFormStatus("limit_reached");
      return;
    }

    // Send
    setFormStatus("sending");

    const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_URL;
    if (!FORMSPREE_URL) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
      return;
    }

    try {
      const formData = new FormData(event.target as HTMLFormElement);
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        // Record successful send
        const newCount       = inWindow ? data.count + 1 : 1;
        const newWindowStart = inWindow ? data.windowStart : Date.now();
        saveRate({ lastSent: Date.now(), count: newCount, windowStart: newWindowStart });
        setCooldown(Math.ceil(COOLDOWN_MS / 1000));

        setFormStatus("success");
        (event.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  }

  const isCoolingDown  = cooldown > 0;
  const isLimitReached = formStatus === "limit_reached";
  const isBlocked      = isCoolingDown || isLimitReached;

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LADO ESQUERDO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
              {t("title")} <span className="text-primary animate-pulse">_</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-md leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 p-5 bg-surface border border-white/10 rounded-xl hover:border-primary/30 transition-colors group">
              <div className="p-3 bg-white/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-black transition-all">
                <Mail size={24} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 font-mono mb-1 uppercase tracking-wider">{t("emailLabel")}</p>
                <a href={`mailto:${t("email")}`} className="text-white font-medium hover:text-primary transition-colors text-lg">
                  {t("email")}
                </a>
              </div>
              <button
                onClick={handleCopy}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors relative"
                title={t("copyEmail")}
              >
                {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} className="text-gray-400 hover:text-white" />}
              </button>
            </div>
          </div>

          <div>
            <p className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">{t("socialLabel")}</p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/josevbrito/" target="_blank" className="flex items-center gap-2 px-5 py-3 bg-surface border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-primary hover:bg-white/5 transition-all group">
                <Linkedin size={20} className="group-hover:text-primary transition-colors" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/josevbrito" target="_blank" className="flex items-center gap-2 px-5 py-3 bg-surface border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-primary hover:bg-white/5 transition-all group">
                <Github size={20} className="group-hover:text-primary transition-colors" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* LADO DIREITO (Formulário) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl relative"
        >
          <div className="absolute -top-1 -right-1 w-20 h-20 bg-primary/20 blur-3xl rounded-full opacity-20 pointer-events-none"></div>

          <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4 relative z-10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
            </div>
            <span className="text-[10px] font-mono text-gray-600">SECURE TRANSMISSION</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            {/* Honeypot — hidden from real users, bots fill it */}
            <input
              ref={honeypotRef}
              name="_trap"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-mono text-primary/80 uppercase tracking-wider">
                  {t("form.nameLabel")}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder={t("form.namePlaceholder")}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-700 focus:border-primary focus:bg-black/60 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-sans"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono text-primary/80 uppercase tracking-wider">
                  {t("form.emailLabel")}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder={t("form.emailPlaceholder")}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-700 focus:border-primary focus:bg-black/60 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-sans"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-mono text-primary/80 uppercase tracking-wider">
                {t("form.messageLabel")}
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                placeholder={t("form.messagePlaceholder")}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-700 focus:border-primary focus:bg-black/60 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none font-sans leading-relaxed"
              ></textarea>
            </div>

            {/* Rate-limit feedback banners */}
            {isCoolingDown && (
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-mono">
                <Clock size={14} className="shrink-0" />
                {t("form.cooldown", { time: formatCountdown(cooldown) })}
              </div>
            )}
            {isLimitReached && (
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
                <ShieldAlert size={14} className="shrink-0" />
                {t("form.limitReached")}
              </div>
            )}

            <button
              type="submit"
              disabled={formStatus === "sending" || formStatus === "success" || isBlocked}
              className={`w-full flex items-center justify-center gap-3 py-4 rounded-lg font-bold transition-all overflow-hidden relative group ${
                formStatus === "success"
                  ? "bg-green-500/10 text-green-500 border border-green-500/50 cursor-default"
                  : formStatus === "error"
                  ? "bg-red-500/10 text-red-500 border border-red-500/50"
                  : isBlocked
                  ? "bg-white/5 text-gray-600 border border-white/5 cursor-not-allowed"
                  : "bg-primary text-black hover:bg-primary-glow hover:scale-[1.01] border border-transparent"
              }`}
            >
              {formStatus === "idle" && !isBlocked && (
                <>
                  {t("form.sendButton")}
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
              {formStatus === "sending" && (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>{t("form.sending")}</span>
                </>
              )}
              {formStatus === "success" && (
                <>
                  <Check size={20} />
                  <span>{t("form.successMessage")}</span>
                </>
              )}
              {formStatus === "error" && (
                <>
                  <AlertCircle size={20} />
                  <span>{t("form.errorMessage")}</span>
                </>
              )}
              {formStatus === "idle" && isCoolingDown && (
                <>
                  <Clock size={18} />
                  <span>{formatCountdown(cooldown)}</span>
                </>
              )}
              {isLimitReached && (
                <>
                  <ShieldAlert size={18} />
                  <span>{t("form.limitReached")}</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
