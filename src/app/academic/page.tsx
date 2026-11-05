import ContactPopup from "@/components/ContactPopup";
const education = [
  {
    degree: "B.Tech — Computer Science and Business Systems",
    institution: "Vellore Institute of Technology",
    period: "2023 — 2027",
  },
];

const projects = [
  {
    title: "Project One",
    category: "SOFTWARE DEVELOPMENT",
    description: "A project description will go here.",
  },
  {
    title: "Project Two",
    category: "ARTIFICIAL INTELLIGENCE",
    description: "A project description will go here.",
  },
  {
    title: "Project Three",
    category: "GAME DEVELOPMENT",
    description: "A project description will go here.",
  },
];

export default function AcademicPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#252525]">
      <nav className="flex items-center justify-between border-b border-neutral-200 px-8 py-7 md:px-16">
        <a href="/" className="text-sm font-semibold tracking-wide">
          YOURSPACE.
        </a>
        <div className="flex gap-6 text-xs text-neutral-500">
          <a href="#education">EDUCATION</a>
          <a href="#projects">PROJECTS</a>
          <ContactPopup />
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-8 py-28 md:px-16 md:py-36">
        <p className="mb-8 text-xs tracking-[0.3em] text-neutral-500">
          ACADEMIC PORTFOLIO
        </p>

        <h1 className="max-w-4xl text-5xl font-medium leading-tight tracking-tight md:text-7xl">
          Learning, building
          <br />
          and <span className="font-serif italic">exploring.</span>
        </h1>

        <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-lg text-sm leading-8 text-neutral-600">
            An overview of my academic journey, technical interests,
            projects and continuous learning.
          </p>
          <a
            href="#education"
            className="text-xs tracking-widest underline underline-offset-8"
          >
            EXPLORE MY JOURNEY ↓
          </a>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-8 py-16 md:px-16">
        <div className="grid gap-12 border-t border-neutral-300 py-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs tracking-[0.25em] text-neutral-500">
              01 / EDUCATION
            </p>
          </div>

          <div className="space-y-10">
            {education.map((item) => (
              <div key={item.degree}>
                <h2 className="text-2xl font-medium leading-snug">
                  {item.degree}
                </h2>
                <p className="mt-3 text-sm text-neutral-600">
                  {item.institution}
                </p>
                <p className="mt-2 text-xs text-neutral-400">
                  {item.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-8 py-20 md:px-16">
        <div className="grid gap-12 border-t border-neutral-300 py-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs tracking-[0.25em] text-neutral-500">
              02 / SELECTED WORK
            </p>
            <h2 className="mt-5 text-4xl font-medium">Projects</h2>
          </div>

          <div>
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="border-b border-neutral-200 py-8 first:pt-0"
              >
                <p className="mb-3 text-[10px] tracking-[0.2em] text-neutral-400">
                  {project.category} · 0{index + 1}
                </p>
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-8 py-20 md:px-16">
        <div className="grid gap-12 border-t border-neutral-300 py-12 md:grid-cols-[1fr_2fr]">
          <p className="text-xs tracking-[0.25em] text-neutral-500">
            03 / INTERESTS
          </p>
          <div>
            <h2 className="text-3xl font-medium">Areas of Interest</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Artificial Intelligence", "Software Development",
                "Game Development", "Computer Science", "Creative Technology"].map(
                (interest) => (
                  <span
                    key={interest}
                    className="border border-neutral-300 px-4 py-3 text-xs text-neutral-600"
                  >
                    {interest}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#242424] px-8 py-16 text-white md:px-16">
        <p className="text-xs tracking-[0.3em] text-white/50">
          GET IN TOUCH
        </p>
        <h2 className="mt-5 text-4xl font-medium md:text-6xl">
          Let's connect.
        </h2>
        <a
          href="mailto:your@email.com"
          className="mt-8 inline-block text-sm underline underline-offset-8"
        >
          CONTACT ME ↗
        </a>
        <p className="mt-20 border-t border-white/20 pt-6 text-xs text-white/40">
          ACADEMIC PORTFOLIO · 2026
        </p>
      </footer>
    </main>
  );
}
