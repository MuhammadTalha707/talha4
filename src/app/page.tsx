
"use client";

import { useState } from "react";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const skills = [
    { name: "HTML", level: "Beginner" },
    { name: "CSS & Tailwind CSS", level: "Learning" },
    { name: "JavaScript", level: "Learning" },
    { name: "Next.js", level: "Learning" },
    { name: "Python", level: "Learning" },
    { name: "AI Tools", level: "Exploring" },
    { name: "Chatbot Development", level: "Exploring" },
    { name: "Git & GitHub", level: "Learning" },
    { name: "MS Office", level: "Basic" },
  ];

  const projects = [
    {
      number: "01",
      title: "Personal Portfolio",
      category: "Web Development",
      description:
        "A responsive personal portfolio showcasing my skills, learning journey, projects, and professional goals.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      number: "02",
      title: "AI Chatbot Assistant",
      category: "Artificial Intelligence",
      description:
        "A chatbot concept designed to answer common questions and provide helpful information through a simple interface.",
      tags: ["AI", "Chatbots", "Python"],
    },
    {
      number: "03",
      title: "Student Management System",
      category: "Programming",
      description:
        "A beginner-friendly student management project for organizing student details and academic records.",
      tags: ["Python", "OOP", "Problem Solving"],
    },
  ];

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:talhaofficial445@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-slate-100 selection:bg-blue-500/40 selection:text-white">
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-40 top-[500px] h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#07111f]/85 shadow-lg shadow-black/5 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 font-mono text-sm font-bold text-blue-400 transition duration-300 group-hover:border-blue-400 group-hover:bg-blue-500/20">
              MT.
            </div>
            <div>
              <p className="font-bold tracking-wide text-white">
                Muhammad Talha
              </p>
              <p className="text-xs text-slate-400">Student & Developer</p>
            </div>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 transition duration-200 hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Let&apos;s Talk
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white transition hover:border-blue-400/50 md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#07111f] px-5 py-4 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-blue-500/10 hover:text-blue-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <div className="relative z-10">
        {/* Hero */}
        <section
          id="home"
          className="mx-auto flex min-h-[650px] max-w-7xl scroll-mt-24 flex-col items-center justify-center gap-12 px-5 py-24 sm:px-8 lg:min-h-[740px] lg:flex-row lg:justify-between lg:px-10 lg:py-28"
        >
          <div className="max-w-3xl flex-1 text-center lg:text-left">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 text-sm text-blue-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
              </span>
              BS IT Student · Learning & Building
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Muhammad
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Talha<span className="text-blue-400">.</span>
              </span>
            </h1>

            <h2 className="mt-7 text-xl font-semibold text-slate-200 sm:text-2xl">
              Future Developer. <span className="text-blue-400">AI Explorer.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0">
              I&apos;m a BS Information Technology student at the University of
              Sargodha, passionate about web development, artificial
              intelligence, and building useful digital experiences. I&apos;m
              learning, experimenting, and improving with every project.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                Explore My Work
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10"
              >
                Get In Touch <span>↗</span>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-400 lg:justify-start">
              <span className="flex items-center gap-2">
                <span className="text-blue-400">⌘</span> Web Development
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
              <span className="flex items-center gap-2">
                <span className="text-cyan-400">✳</span> AI & Chatbots
              </span>
            </div>
          </div>

          {/* Decorative Profile Card - No Image Required */}
          <div className="relative w-full max-w-sm flex-shrink-0 sm:max-w-md">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#12243a] to-[#091525] p-7 shadow-2xl shadow-black/30 sm:p-9">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-slate-500">
                  TALHA / PROFILE
                </span>
                <span className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  Learning
                </span>
              </div>

              <div className="relative mx-auto my-10 flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56">
                <div className="absolute inset-0 animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-blue-400/30" />
                <div className="absolute inset-4 rounded-full border border-cyan-400/20" />
                <div className="absolute inset-8 rounded-full bg-blue-500/10 blur-xl" />
                <div className="relative flex h-36 w-36 items-center justify-center rounded-[2rem] border border-blue-400/30 bg-gradient-to-br from-blue-500/25 to-cyan-400/10 shadow-2xl shadow-blue-500/10 sm:h-40 sm:w-40">
                  <span className="bg-gradient-to-br from-white via-blue-200 to-cyan-400 bg-clip-text text-6xl font-black text-transparent sm:text-7xl">
                    MT
                  </span>
                </div>
                <div className="absolute right-0 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#10233b] text-xl shadow-xl">
                  ✦
                </div>
                <div className="absolute bottom-4 left-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#10233b] text-xl shadow-xl">
                  {"</>"}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">
                  Building My Future
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Learning today. Creating tomorrow.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 transition hover:border-blue-400/30">
                  <span className="text-xs text-slate-500">EDUCATION</span>
                  <p className="mt-2 font-semibold text-white">BS Information</p>
                  <p className="text-sm text-slate-400">Technology</p>
                </div>
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 transition hover:border-cyan-400/30">
                  <span className="text-xs text-slate-500">FOCUS AREA</span>
                  <p className="mt-2 font-semibold text-white">AI & Web</p>
                  <p className="text-sm text-slate-400">Development</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-24 hidden rounded-2xl border border-white/10 bg-[#12243a]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block sm:-right-6">
              <p className="text-xs text-slate-400">Current Focus</p>
              <p className="mt-1 text-sm font-semibold text-cyan-300">
                AI + Development
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015] px-5 py-24 sm:px-8 lg:px-10"
        >
          <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                Get to know me
              </p>
              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                A little about
                <span className="block text-blue-400">my journey.</span>
              </h2>
              <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-400 sm:text-lg">
              <p>
                I&apos;m Muhammad Talha, a BS IT student at the University of
                Sargodha with a growing interest in technology and software
                development. I enjoy exploring how websites work and how
                technology can solve everyday problems.
              </p>
              <p>
                My current learning journey includes HTML, CSS, Python, modern
                web development, AI tools, and chatbot development. I believe
                in learning by doing, building small projects, understanding
                the fundamentals, and gradually taking on bigger challenges.
              </p>
              <p>
                My goal is to develop strong technical skills and create
                practical, user-friendly applications that combine creative
                thinking with useful technology.
              </p>

              <div className="grid grid-cols-1 gap-4 pt-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/[0.08] bg-[#0c1a2b] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                    ◈
                  </div>
                  <h3 className="font-bold text-white">My Approach</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Practice consistently, learn from mistakes, and keep
                    improving.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-[#0c1a2b] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-300">
                    ✧
                  </div>
                  <h3 className="font-bold text-white">My Direction</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Grow in web development, AI, and intelligent chatbot
                    applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10"
        >
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              My Toolkit
            </p>
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Skills I&apos;m <span className="text-blue-400">developing.</span>
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              The tools and technologies I&apos;m exploring as I build my
              foundation in information technology.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#0c1a2b]/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-[#102139] hover:shadow-xl hover:shadow-blue-950/20"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/[0.08] font-mono text-sm font-bold text-blue-300 transition duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/15">
                  {["HT", "TW", "JS", "NX", "PY", "AI", "CB", "GH", "MS"][
                    index
                  ]}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white">{skill.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{skill.level}</p>
                </div>
                <span className="text-lg text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-400">
                  →
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-blue-400/15 bg-gradient-to-r from-blue-500/[0.08] to-cyan-400/[0.04] p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-2xl text-blue-300">
                ✦
              </div>
              <div>
                <h3 className="font-bold text-white">Always learning</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  These are my current learning areas, not claims of
                  professional mastery. I&apos;m focused on strengthening my
                  fundamentals and gaining experience through practical work.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Problem Solving",
              "Creative Thinking",
              "Continuous Learning",
              "Teamwork",
              "Adaptability",
            ].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-slate-300 transition duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300"
              >
                ✧ {badge}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015] px-5 py-24 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                  Selected Work
                </p>
                <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                  Projects & <span className="text-blue-400">ideas.</span>
                </h2>
                <p className="mt-5 max-w-xl leading-7 text-slate-400">
                  A showcase of my learning interests and the kinds of
                  practical projects I&apos;m working toward.
                </p>
              </div>
              <span className="text-sm text-slate-500">
                03 projects · Learning portfolio
              </span>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b192a] transition duration-300 hover:-translate-y-2 hover:border-blue-400/35 hover:shadow-2xl hover:shadow-blue-950/30"
                >
                  <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-[#122744] via-[#0d1b2f] to-[#081321]">
                    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl transition duration-500 group-hover:bg-blue-500/20" />
                    <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-cyan-400/[0.07] blur-2xl" />

                    <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-blue-300/20 bg-blue-500/10 text-4xl text-blue-300 shadow-2xl shadow-blue-950/20 transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                      {project.number === "01"
                        ? "</>"
                        : project.number === "02"
                          ? "✳"
                          : "▤"}
                    </div>

                    <span className="absolute left-5 top-5 font-mono text-xs text-slate-500">
                      PROJECT_{project.number}
                    </span>
                    <span className="absolute right-5 top-5 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-xl font-bold text-white transition group-hover:text-blue-300">
                      {project.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/[0.07] bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 border-t border-white/[0.07] pt-5">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400">
                        Learning & Development
                        <span className="transition group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-7 text-center text-xs leading-6 text-slate-500">
              Project descriptions represent portfolio concepts and learning
              work. Add your actual project links and completed work as they
              become available.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10"
        >
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                Contact Me
              </p>
              <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                Let&apos;s build
                <span className="block text-blue-400">something useful.</span>
              </h2>
              <p className="mt-6 max-w-lg leading-8 text-slate-400">
                Have an idea, want to collaborate on a learning project, or
                simply want to connect? Send me a message. I&apos;d be happy to
                hear from you.
              </p>

              <div className="mt-9 space-y-4">
                <a
                  href="mailto:talhaofficial445@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.05]"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                    @
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">EMAIL ME</p>
                    <p className="mt-1 break-all text-sm font-semibold text-slate-200 transition group-hover:text-blue-300 sm:text-base">
                      talhaofficial445@gmail.com
                    </p>
                  </div>
                  <span className="ml-auto text-slate-500 transition group-hover:translate-x-1 group-hover:text-blue-400">
                    ↗
                  </span>
                </a>

                <a
                  href="https://www.tiktok.com/@itxtalha701"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.05]"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-300">
                    ♪
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">TIKTOK</p>
                    <p className="mt-1 text-base font-semibold text-slate-200 transition group-hover:text-cyan-300">
                      @itxtalha701
                    </p>
                  </div>
                  <span className="ml-auto text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-400">
                    ↗
                  </span>
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Open to learning, collaboration, and new ideas.
              </div>
            </div>

            <div className="rounded-3xl border border-white/[0.08] bg-[#0b192a]/90 p-6 shadow-2xl shadow-black/20 sm:p-9">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white">
                  Send a message
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Fill in the details below to open an email with your message.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      setSubmitted(false);
                    }}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-[#07111f] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      setSubmitted(false);
                    }}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-[#07111f] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      setSubmitted(false);
                    }}
                    placeholder="Tell me about your idea..."
                    className="w-full resize-y rounded-xl border border-white/10 bg-[#07111f] px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  Open Email to Send
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>

                {submitted && (
                  <p
                    role="status"
                    className="text-center text-sm leading-6 text-blue-300"
                  >
                    Your email app should open with your message. Send the
                    email there to complete your message.
                  </p>
                )}

                <p className="text-center text-xs leading-5 text-slate-500">
                  This form uses your email application. It does not store or
                  send messages directly from the website.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/[0.08] bg-[#050d18]/80 px-5 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10 font-mono text-xs font-bold text-blue-400">
                MT.
              </div>
              <div>
                <p className="text-sm font-bold text-white">Muhammad Talha</p>
                <p className="mt-1 text-xs text-slate-500">
                  Student · Developer · AI Enthusiast
                </p>
              </div>
            </a>

            <div className="flex flex-wrap justify-center gap-5 text-sm text-slate-400">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-blue-400"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Muhammad Talha. Built with curiosity.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
