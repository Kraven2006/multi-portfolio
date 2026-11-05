
const portfolios = [
  {
    number: "01",
    title: "Video Editing",
    description: "Films, edits, showreels and visual storytelling.",
    category: "CREATIVE",
    href: "/video-editing",
    accent: "from-orange-500/20 to-transparent",
  },
  {
    number: "02",
    title: "Game Development",
    description: "Games, experiments and interactive experiences.",
    category: "DEVELOPMENT",
    href: "/game-development",
    accent: "from-violet-500/20 to-transparent",
  },
  {
    number: "03",
    title: "Academic",
    description: "Education, projects, achievements and research.",
    category: "ACADEMIC",
    href: "/academic",
    accent: "from-emerald-500/20 to-transparent",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <nav className="flex items-center justify-between border-b border-white/10 px-8 py-6">
        <h1 className="text-lg font-semibold tracking-tight">
          Kraven<span className="text-neutral-500"></span>
        </h1>
        <span className="text-xs text-neutral-500">PERSONAL PORTFOLIO SYSTEM</span>
      </nav>

      <section className="mx-auto max-w-6xl px-8 py-20">
        <p className="mb-5 text-xs tracking-[0.3em] text-neutral-500">
          YOUR CREATIVE IDENTITY
        </p>

        <h2 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
          Multiple interests.
          <br />
          <span className="text-neutral-500">One place.</span>
        </h2>

        <p className="mt-6 max-w-lg text-sm leading-7 text-neutral-400">
          A collection of my work, experiments and journey across different
          disciplines.
        </p>

        <div className="mt-20 flex items-center justify-between">
          <h3 className="text-sm font-medium">MY PORTFOLIOS</h3>
          <span className="text-xs text-neutral-500">03 COLLECTIONS</span>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {portfolios.map((portfolio) => (
            <a
              key={portfolio.number}
              href={portfolio.href}
              className={`group relative flex min-h-72 flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${portfolio.accent} p-7 transition duration-300 hover:-translate-y-1 hover:border-white/30`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">
                  {portfolio.number}
                </span>
                <span className="text-[10px] tracking-widest text-neutral-500">
                  {portfolio.category}
                </span>
              </div>

              <div>
                <h4 className="text-2xl font-medium tracking-tight">
                  {portfolio.title}
                </h4>
                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  {portfolio.description}
                </p>
                <div className="mt-8 text-sm text-neutral-300 transition group-hover:translate-x-2">
                  Explore portfolio ↗
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-8 py-6 text-center text-xs text-neutral-600">
        PERSONAL SPACE © 2026
      </footer>
    </main>
  );
}
