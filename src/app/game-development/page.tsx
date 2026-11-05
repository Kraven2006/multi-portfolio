import ContactPopup from "@/components/ContactPopup";
const games = [
  {
    number: "01",
    title: "ASTRIO: THE VEIL OF VENUS",
    type: "2D SURVIVAL / EXPLORATION",
    year: "2026",
    description:
      "Navigate a hostile planet, manage resources and survive environmental disasters.",
    tags: ["UNITY", "C#", "2D"],
    color: "from-orange-950 to-neutral-950",
  },
  {
    number: "02",
    title: "PROJECT TWO",
    type: "GAME PROJECT",
    year: "2026",
    description: "A space for another game development project.",
    tags: ["UNITY", "C#"],
    color: "from-violet-950 to-neutral-950",
  },
  {
    number: "03",
    title: "PROJECT THREE",
    type: "EXPERIMENT",
    year: "2025",
    description: "Experiments, prototypes and interactive ideas.",
    tags: ["GAME DESIGN", "PROTOTYPING"],
    color: "from-emerald-950 to-neutral-950",
  },
];

export default function GameDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#101010] text-[#ededed]">
      <nav className="flex items-center justify-between border-b border-white/10 px-8 py-7 md:px-16">
        <a href="/" className="text-sm font-bold tracking-widest">
          YOURSPACE<span className="text-orange-500">.</span>
        </a>
        <div className="flex gap-7 text-xs text-neutral-400">
          <a href="#games" className="hover:text-white">GAMES</a>
          <a href="#about" className="hover:text-white">ABOUT</a>
          <ContactPopup />
        </div>
      </nav>

      <section className="px-8 py-28 md:px-16 md:py-40">
        <p className="mb-8 text-xs tracking-[0.35em] text-orange-500">
          INDEPENDENT GAME DEVELOPER
        </p>

        <h1 className="max-w-6xl text-6xl font-bold uppercase leading-[0.95] tracking-tighter md:text-8xl">
          Building
          <br />
          worlds<span className="text-orange-500">.</span>
          <br />
          Creating experiences.
        </h1>

        <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-md text-sm leading-7 text-neutral-400">
            Exploring game mechanics, interactive storytelling and
            experiences through independent game development.
          </p>
          <p className="text-xs tracking-widest text-neutral-500">
            UNITY · C# · GAME DESIGN
          </p>
        </div>
      </section>

      <section id="games" className="px-8 pb-28 md:px-16">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs tracking-[0.3em] text-neutral-500">
              SELECTED PROJECTS
            </p>
            <h2 className="text-4xl font-bold uppercase tracking-tight md:text-5xl">
              Games & Experiments
            </h2>
          </div>
          <span className="text-xs text-neutral-500">01 — 03</span>
        </div>

        <div className="space-y-20">
          {games.map((game) => (
            <article key={game.number}>
              <div
                className={`relative flex aspect-[16/8] items-center justify-center overflow-hidden border border-white/10 bg-gradient-to-br ${game.color}`}
              >
                <span className="text-xs tracking-[0.4em] text-white/30">
                  GAME ARTWORK / SCREENSHOTS
                </span>
                <span className="absolute bottom-6 left-6 text-xs text-white/50">
                  PROJECT {game.number}
                </span>
                <span className="absolute bottom-6 right-6 text-xs text-white/50">
                  {game.year}
                </span>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-[1fr_1fr]">
                <div>
                  <p className="mb-3 text-[10px] tracking-[0.25em] text-orange-500">
                    {game.type}
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                    {game.title}
                  </h3>
                </div>

                <div>
                  <p className="text-sm leading-7 text-neutral-400">
                    {game.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {game.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/15 px-3 py-2 text-[10px] tracking-widest text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="border-t border-white/10 px-8 py-28 md:px-16">
        <p className="mb-6 text-xs tracking-[0.3em] text-orange-500">
          THE DEVELOPER
        </p>
        <h2 className="max-w-4xl text-4xl font-bold uppercase leading-tight md:text-6xl">
          Ideas become worlds through experimentation.
        </h2>
        <p className="mt-8 max-w-xl text-sm leading-7 text-neutral-400">
          A little about my development journey, design philosophy,
          tools and creative process.
        </p>
      </section>

      <footer id="contact" className="border-t border-white/10 px-8 py-16 md:px-16">
        <p className="text-xs tracking-[0.3em] text-neutral-500">
          LET'S CONNECT
        </p>
        <h2 className="mt-5 text-4xl font-bold uppercase md:text-6xl">
          Make something playable.
        </h2>
        <a
          href="mailto:your@email.com"
          className="mt-8 inline-block text-sm text-orange-500 underline underline-offset-8"
        >
          GET IN TOUCH ↗
        </a>
        <p className="mt-20 border-t border-white/10 pt-6 text-xs text-neutral-600">
          GAME DEVELOPMENT PORTFOLIO · 2026
        </p>
      </footer>
    </main>
  );
}
