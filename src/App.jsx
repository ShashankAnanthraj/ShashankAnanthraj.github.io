import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useInView, animate } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
  Download, Mail, Phone, MapPin, Linkedin, Github, Moon, Sun, Menu, X,
  ChevronDown, ArrowUp, Check, Copy, Award, ExternalLink, Sparkles, Briefcase,
} from "lucide-react";

import profileImg from "./assets/profile.jpg";
import {
  CONTACT, ROLES, SUMMARY, STATS, TECH_STACK, SKILL_TABS, SKILL_GROUPS, HIGHLIGHT_BADGE,
  MEDALLION, EXPERIENCES, PROJECT_TAGS, PROJECTS, CERTIFICATIONS, EDUCATION, SECTIONS,
} from "./data";

const CARD =
  "rounded-2xl border border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-900/60 backdrop-blur-sm";
const MUTED = "text-slate-600 dark:text-slate-400";

/* ---------------------------------- hooks --------------------------------- */

function useTheme() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") !== "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return [dark, setDark];
}

/** Highlights the nav link for whichever section is currently on screen. */
function useActiveSection() {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

/* -------------------------------- primitives ------------------------------- */

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function Typewriter({ words }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];

    if (!deleting && text === word) {
      const hold = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(hold);
    }
    const tick = setTimeout(
      () => {
        if (deleting && text === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
          return;
        }
        setText((prev) => (deleting ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1)));
      },
      deleting ? 35 : 85
    );
    return () => clearTimeout(tick);
  }, [text, deleting, index, words]);

  return (
    <span>
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="ml-0.5 inline-block w-[3px] translate-y-[2px] self-center bg-blue-500"
        style={{ height: "1em" }}
      />
    </span>
  );
}

/** Company/client logo, falling back to initials when no image is available. */
function LogoBadge({ src, name, size = "w-16 h-16", rounded = "rounded-2xl" }) {
  if (src) {
    return (
      <img src={src} alt={name} className={`${size} ${rounded} flex-shrink-0 bg-white object-contain p-1`} />
    );
  }
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={`${size} ${rounded} flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 font-bold text-white`}
      aria-label={name}
    >
      {initials}
    </div>
  );
}

function Section({ id, kicker, title, subtitle, children, width = "max-w-6xl" }) {
  return (
    <section id={id} className={`${width} mx-auto scroll-mt-24 px-6 py-20`}>
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          {kicker && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">{kicker}</p>
          )}
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          {subtitle && <p className={`mx-auto mt-4 max-w-2xl ${MUTED}`}>{subtitle}</p>}
        </motion.div>
      )}
      {children}
    </section>
  );
}

/* -------------------------------- chrome ---------------------------------- */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400"
    />
  );
}

function Navbar({ dark, setDark }) {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled
          ? "border-b border-slate-200 bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-sm text-white">
            SA
          </span>
          <span className="hidden sm:inline">Shashank</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                active === s.id ? "text-blue-500" : `${MUTED} hover:text-blue-500`
              }`}
            >
              {active === s.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-blue-500/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{s.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-full border border-slate-200 p-2 transition-colors hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={dark ? "moon" : "sun"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                {dark ? <Moon size={18} /> : <Sun size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <a
            href={CONTACT.resume}
            download={CONTACT.resumeFileName}
            className="hidden items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 sm:flex"
          >
            <Download size={16} /> Resume
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            className="rounded-full border border-slate-200 p-2 dark:border-slate-800 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 lg:hidden"
          >
            <div className="flex flex-col p-4">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium ${
                    active === s.id ? "bg-blue-500/10 text-blue-500" : MUTED
                  }`}
                >
                  {s.label}
                </a>
              ))}
              <a
                href={CONTACT.resume}
                download={CONTACT.resumeFileName}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-3 text-sm font-semibold text-white"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ y: -3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 rounded-full bg-blue-500 p-3 text-white shadow-lg shadow-blue-500/30"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function Background({ dark }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine((engine) => loadSlim(engine)).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      particles: {
        number: { value: 45, density: { enable: true, area: 900 } },
        color: { value: dark ? "#38bdf8" : "#0284c7" },
        size: { value: { min: 1, max: 3 } },
        opacity: { value: dark ? 0.5 : 0.35 },
        move: { enable: true, speed: 0.8, outModes: { default: "bounce" } },
        links: { enable: true, distance: 140, color: dark ? "#38bdf8" : "#0284c7", opacity: dark ? 0.25 : 0.2, width: 1 },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "grab" } },
        modes: { grab: { distance: 160, links: { opacity: 0.6 } } },
      },
      detectRetina: true,
    }),
    [dark]
  );

  if (!ready) return null;
  return <Particles id="tsparticles" options={options} className="fixed inset-0 -z-10" />;
}

/* -------------------------------- sections -------------------------------- */

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-14 text-center md:pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto mb-8 w-fit"
      >
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.15, 0.35] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-blue-500 blur-2xl"
        />
        <img
          src={profileImg}
          alt={CONTACT.name}
          className="relative h-44 w-44 rounded-full border-4 border-blue-400 object-cover md:h-52 md:w-52"
        />

        {/* Credential badge pinned to the portrait */}
        <motion.a
          href={HIGHLIGHT_BADGE.href}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55, type: "spring", stiffness: 260, damping: 16 }}
          className="group absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2"
          aria-label={`${HIGHLIGHT_BADGE.title} — ${HIGHLIGHT_BADGE.subtitle}`}
        >
          <motion.img
            src={HIGHLIGHT_BADGE.img}
            alt=""
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, y: -6 }}
            className="h-16 w-16 rounded-full bg-white shadow-lg shadow-orange-500/20 ring-2 ring-white dark:ring-slate-950 md:h-20 md:w-20"
          />
          <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 dark:bg-slate-800">
            {HIGHLIGHT_BADGE.title} · {HIGHLIGHT_BADGE.subtitle}
          </span>
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mx-auto mb-6 flex w-fit flex-wrap items-center justify-center gap-2"
      >
        <span className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Data Engineer @ Canarys Automations
        </span>

        <a
          href={HIGHLIGHT_BADGE.href}
          className="flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-600 transition hover:border-orange-500 hover:bg-orange-500/20 dark:text-orange-400"
        >
          <img src={HIGHLIGHT_BADGE.img} alt="" className="h-4 w-4 rounded-full" />
          {HIGHLIGHT_BADGE.title}
        </a>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold tracking-tight md:text-6xl"
      >
        {CONTACT.name}
      </motion.h1>

      <p className="mt-5 flex min-h-[2.5rem] items-center justify-center text-xl font-semibold text-blue-500 md:text-3xl">
        <Typewriter words={ROLES} />
      </p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`mt-4 text-lg ${MUTED}`}
      >
        Snowflake · Databricks · PySpark · DBT · Delta Lake
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="mt-9 flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href="#projects"
          className="flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
        >
          <Sparkles size={18} /> View my work
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold transition hover:border-blue-500 hover:text-blue-500 dark:border-slate-700"
        >
          <Mail size={18} /> Get in touch
        </a>
        <div className="flex gap-2">
          {[
            { href: CONTACT.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: CONTACT.github, icon: Github, label: "GitHub" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="rounded-full border border-slate-300 p-3 transition hover:border-blue-500 hover:text-blue-500 dark:border-slate-700"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Stats() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-8">
      <div className={`grid grid-cols-2 gap-4 p-6 md:grid-cols-4 ${CARD}`}>
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className={`mt-1 text-sm ${MUTED}`}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <Section id="about" kicker="Profile" title="About me" width="max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-8 ${CARD}`}
      >
        <p className="text-lg leading-relaxed">{SUMMARY}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {TECH_STACK.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="cursor-default rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

function Skills() {
  const [tab, setTab] = useState("All");
  const visible = SKILL_GROUPS.filter((g) => tab === "All" || g.tab === tab);

  return (
    <Section
      id="skills"
      kicker="Toolbox"
      title="Technical Skills"
      subtitle="Filter by area to see what I work with day to day."
    >
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {SKILL_TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              tab === t ? "text-white" : `${MUTED} hover:text-blue-500`
            }`}
          >
            {tab === t && (
              <motion.span
                layoutId="skill-tab"
                className="absolute inset-0 rounded-full bg-blue-500"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">{t}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((group) => (
            <motion.div
              key={group.category}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -6 }}
              className={`group cursor-default p-6 ${CARD} hover:border-blue-400 dark:hover:border-blue-500/60`}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${group.color} transition-transform group-hover:scale-110`}
              >
                <group.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold">{group.category}</h3>
              <p className={`mb-4 text-sm ${MUTED}`}>{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm transition-colors hover:bg-blue-500 hover:text-white dark:bg-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

function ExperienceCard({ exp, index }) {
  const [open, setOpen] = useState(index === 0);
  const [client, setClient] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true, margin: "-60px" }}
      className="relative pl-10 md:pl-16"
    >
      {/* timeline dot */}
      <span
        className={`absolute left-[9px] top-7 h-4 w-4 rounded-full border-4 border-white dark:border-slate-950 md:left-[25px] ${
          exp.current ? "bg-emerald-500" : "bg-blue-500"
        }`}
      >
        {exp.current && <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400" />}
      </span>

      <div className={`overflow-hidden ${CARD}`}>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center gap-4 p-6 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40"
        >
          <LogoBadge
            src={exp.logo}
            name={exp.company}
            size={exp.logoWide ? "w-28 h-16" : "w-16 h-16"}
          />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-bold">{exp.company}</h3>
              {exp.current && (
                <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  Current
                </span>
              )}
            </div>
            <p className="font-medium text-blue-500">{exp.role}</p>
            <p className={`text-sm ${MUTED}`}>{exp.period}</p>
          </div>
          <motion.span animate={{ rotate: open ? 180 : 0 }} className={MUTED}>
            <ChevronDown size={20} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-slate-200 px-6 pb-6 pt-5 dark:border-slate-800">
                <p className={`mb-5 ${MUTED}`}>{exp.summary}</p>

                {exp.clients.length > 1 && (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {exp.clients.map((c, i) => (
                      <button
                        key={c.name}
                        onClick={() => setClient(i)}
                        className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                          client === i
                            ? "border-blue-500 bg-blue-500/10 text-blue-500"
                            : `border-slate-200 dark:border-slate-800 ${MUTED}`
                        }`}
                      >
                        <LogoBadge src={c.logo} name={c.name} size="w-5 h-5" rounded="rounded" />
                        {c.name}
                      </button>
                    ))}
                  </div>
                )}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={client}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
                      <Briefcase size={14} /> Client: {exp.clients[client].name}
                    </p>
                    <ul className="space-y-2.5">
                      {exp.clients[client].points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <Check size={16} className="mt-1 flex-shrink-0 text-blue-500" />
                          <span className={MUTED}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-200 pt-5 dark:border-slate-800">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium dark:bg-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function Experience() {
  return (
    <Section
      id="experience"
      kicker="Career"
      title="Professional Experience"
      subtitle="Tap any role to expand the detail — multi-client engagements have their own tabs."
      width="max-w-4xl"
    >
      <div className="relative space-y-6">
        <span className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-blue-500 via-slate-300 to-transparent dark:via-slate-700 md:left-8" />
        {EXPERIENCES.map((exp, i) => (
          <ExperienceCard key={exp.company} exp={exp} index={i} />
        ))}
      </div>
    </Section>
  );
}

function Architecture() {
  const [selected, setSelected] = useState(0);
  const layer = MEDALLION[selected];

  return (
    <Section
      id="architecture"
      kicker="How I build"
      title="Medallion Architecture"
      subtitle="Select a layer to see how data moves from raw ingestion to business-ready marts."
      width="max-w-5xl"
    >
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        {MEDALLION.map((l, i) => (
          <motion.button
            key={l.name}
            onClick={() => setSelected(i)}
            whileHover={{ y: -4 }}
            className={`relative overflow-hidden p-6 text-left transition ${CARD} ${
              selected === i ? "border-blue-500 dark:border-blue-500" : ""
            }`}
          >
            <div className={`mb-3 h-1.5 w-12 rounded-full bg-gradient-to-r ${l.accent}`} />
            <p className="text-xl font-bold">{l.name}</p>
            <p className={`text-sm ${MUTED}`}>{l.tagline}</p>
            {selected === i && (
              <motion.span
                layoutId="layer-glow"
                className="absolute inset-0 -z-10 bg-blue-500/5"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={layer.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25 }}
          className={`p-8 ${CARD}`}
        >
          <h3 className={`mb-3 bg-gradient-to-r text-2xl font-bold ${layer.accent} bg-clip-text text-transparent`}>
            {layer.name} Layer
          </h3>
          <p className={`mb-6 text-lg ${MUTED}`}>{layer.desc}</p>
          <div className="grid gap-3 md:grid-cols-3">
            {layer.points.map((p) => (
              <div key={p} className="flex items-center gap-3 rounded-xl bg-slate-100 p-4 dark:bg-slate-800/60">
                <Check size={16} className="flex-shrink-0 text-blue-500" />
                <span className="text-sm">{p}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = PROJECTS.filter((p) => filter === "All" || p.tags.includes(filter));

  return (
    <Section
      id="projects"
      kicker="Selected work"
      title="Projects"
      subtitle="Migration tooling, LLM-assisted converters and lakehouse applications."
    >
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {PROJECT_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              filter === tag
                ? "border-blue-500 bg-blue-500 text-white"
                : `border-slate-200 dark:border-slate-800 ${MUTED} hover:border-blue-500 hover:text-blue-500`
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -6 }}
              className={`flex flex-col p-7 ${CARD} ${
                project.featured ? "border-blue-400 dark:border-blue-500/60 md:col-span-2" : ""
              }`}
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-blue-500">{project.title}</h3>
                {project.status && (
                  <span className="flex-shrink-0 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {project.status}
                  </span>
                )}
              </div>
              <p className={`flex-1 leading-relaxed ${MUTED}`}>{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section
      id="certifications"
      kicker="Credentials"
      title="Certifications & Education"
      width="max-w-5xl"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: (i % 4) * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className={`flex items-center gap-4 p-5 ${CARD} ${
              cert.highlight ? "border-orange-400 dark:border-orange-500/60" : ""
            }`}
          >
            {cert.img ? (
              <img src={cert.img} alt="" className="h-12 w-12 flex-shrink-0 object-contain" />
            ) : (
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <Award className="h-6 w-6 text-blue-500" />
              </div>
            )}
            <div className="min-w-0">
              <p className="font-semibold leading-snug">{cert.title}</p>
              <p className={`text-sm ${MUTED}`}>
                {cert.issuer}
                {cert.inProgress && (
                  <span className="ml-2 rounded-full bg-amber-500/15 px-2 py-0.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
                    In progress
                  </span>
                )}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`mt-6 flex flex-col items-center gap-5 p-8 text-center sm:flex-row sm:text-left ${CARD}`}
      >
        <img src={EDUCATION.logo} alt="" className="h-20 w-20 flex-shrink-0 object-contain" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Education</p>
          <h3 className="mt-1 text-xl font-bold">{EDUCATION.degree}</h3>
          <p className={MUTED}>{EDUCATION.college}</p>
        </div>
      </motion.div>
    </Section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  const links = [
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/[^+\d]/g, "")}` },
    { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: CONTACT.linkedin, external: true },
    { icon: Github, label: "GitHub", value: "See my code", href: CONTACT.github, external: true },
  ];

  return (
    <Section
      id="contact"
      kicker="Say hello"
      title="Let's build something"
      subtitle="Open to conversations about data platform, migration and AI engineering work."
      width="max-w-4xl"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className={`group flex items-center gap-4 p-5 ${CARD} hover:border-blue-400 dark:hover:border-blue-500/60`}
          >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition group-hover:bg-blue-500 group-hover:text-white">
              <link.icon size={20} />
            </div>
            <div className="min-w-0">
              <p className={`text-xs font-semibold uppercase tracking-wider ${MUTED}`}>{link.label}</p>
              <p className="truncate font-medium">{link.value}</p>
            </div>
            {link.external && <ExternalLink size={16} className={`ml-auto flex-shrink-0 ${MUTED}`} />}
          </motion.a>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <span className={`flex items-center gap-2 text-sm ${MUTED}`}>
          <MapPin size={16} /> {CONTACT.location}
        </span>
        <button
          onClick={copyEmail}
          className="flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold transition hover:border-blue-500 hover:text-blue-500 dark:border-slate-700"
        >
          {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
          {copied ? "Copied!" : "Copy email"}
        </button>
        <a
          href={CONTACT.resume}
          download={CONTACT.resumeFileName}
          className="flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
        >
          <Download size={16} /> Download Resume
        </a>
      </div>
    </Section>
  );
}

/* ----------------------------------- app ---------------------------------- */

export default function App() {
  const [dark, setDark] = useTheme();

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <Background dark={dark} />
      <ScrollProgress />
      <Navbar dark={dark} setDark={setDark} />

      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Architecture />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 py-10 text-center text-sm dark:border-slate-800">
        <span className="font-semibold">{CONTACT.name}</span>
        <span className={`mx-2 ${MUTED}`}>|</span>
        <span className={MUTED}>{CONTACT.title}</span>
      </footer>

      <BackToTop />
    </div>
  );
}
