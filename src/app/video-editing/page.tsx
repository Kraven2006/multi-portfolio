import ContactPopup from "@/components/ContactPopup";
import VideoEditingFooter from "@/components/VideoEditingFooter";
import Link from "next/link";
const projects = [
  {
    number: "01",
    title: "Project Title One",
    category: "VIDEO EDITING",
    year: "2026",
    description:
      "A short description of the project, the creative approach, and the kind of work you contributed.",
  },
  {
    number: "02",
    title: "Project Title Two",
    category: "CINEMATIC EDIT",
    year: "2026",
    description:
      "Add a little context about this project and what makes the final edit distinctive.",
  },
  {
    number: "03",
    title: "Project Title Three",
    category: "CONTENT EDITING",
    year: "2025",
    description:
      "A brief introduction to the project, its visual style, and your role in bringing it together.",
  },
];

const showreels = [
  {
    number: "01",
    title: "SHORT-FORM EDITING",
    description: "A compilation of  reels I edited for Swasthio (Epidose 01 , 02 , 04 & 06)",
    src: "/videos/short-form-showreel.mp4",
    href: "https://www.instagram.com/swasthio_official/",
  },
  {
    number: "02",
    title: "LONG-FORM EDITING",
    description: "A compilation of selected moments from my long-form videos.",
    src: "/videos/long-form-showreel.mp4",
    href: "https://www.youtube.com/@Kraventamil007",
  },
];


export default function VideoEditingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#111111] text-[#F2EEE8]">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-7 md:px-12 lg:px-20">
        <div className="flex items-center gap-3">
  <a
    href="/video-editing"
    className="text-xs tracking-[0.2em] text-[#F2EEE8] hover:text-[#B7CDBD]"
  >
    HOME
  </a>

  <span className="text-[#444444]">|</span>

  <a
    href="/"
    className="text-[9px] tracking-[0.16em] text-[#77736F] transition hover:text-[#B7CDBD]"
    title="Back to all portfolios"
  >
    KRAVEN ↗
  </a>
</div>

        <div className="hidden items-center gap-9 text-[10px] tracking-[0.16em] text-[#A6A29D] md:flex">

  <a
    href="/video-editing/editing-portfolio"
    className="transition hover:text-white"
  >
    EDITING PORTFOLIO
  </a>

  <a
    href="/video-editing/creator-portfolio"
    className="transition hover:text-white"
  >
    CREATOR PORTFOLIO
  </a>

  <a
    href="/video-editing/resume"
    className="transition hover:text-white"
  >
    RESUMÉ
  </a>

  <a
    href="/video-editing/about"
    className="transition hover:text-white"
  >
    ABOUT
  </a>

</div>

        <ContactPopup />
      </nav>

      {/* Hero */}
      <section className="mx-auto grid min-h-[690px] max-w-[1440px] items-center gap-12 px-6 pb-24 pt-12 md:px-12 lg:grid-cols-[1fr_0.9fr] lg:px-20 lg:pb-32 lg:pt-16">
        <div className="relative z-10">
          <p className="mb-8 text-[10px] tracking-[0.3em] text-[#B7CDBD]">
            VIDEO EDITOR · PORTFOLIO
          </p>

          <h1 className="font-serif text-[clamp(4.5rem,10vw,9.5rem)] leading-[0.82] tracking-[-0.065em]">
            Chandhrabose 
            <br />
            Mohanraj<span className="text-[#B7CDBD]">.</span>
          </h1>

          <p className="mt-10 max-w-md text-sm leading-7 tracking-wide text-[#A6A29D] md:text-base">
            VIDEO EDITOR
            <br />
            Crafting engaging visual stories through thoughtful editing, pacing and storytelling.
          </p>

          <a
            href="/video-editing/editing-portfolio"
            className="mt-12 inline-flex items-center gap-5 border-b border-[#B7CDBD] pb-3 text-[10px] tracking-[0.2em] text-[#F2EEE8] transition hover:text-[#B7CDBD]"
          >
            EXPLORE MY WORK <span>↘</span>
          </a>
        </div>

        {/* Profile Photograph */}
<div className="relative mx-auto w-full max-w-[560px]">
  <div className="absolute -left-5 -top-5 h-full w-full border border-[#B7CDBD]/40" />

  <div className="relative aspect-[4/5] overflow-hidden bg-[#202521]">
    <img
      src="images/profile_pic01.jpg"
      alt="Portrait of Kraven"
      className="h-full w-full object-cover object-center"
    />
  </div>

  <p className="mt-4 text-right text-[9px] tracking-[0.18em] text-[#77736F]">
    KRAVEN · VIDEO EDITOR
  </p>
</div>
      </section>

      {/* Introduction */}
      <section
        id="about"
        className="border-y border-[#303030] bg-[#191919] px-6 py-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <p className="text-[10px] tracking-[0.25em] text-[#B7CDBD]">
            A LITTLE ABOUT ME
          </p>

          <div>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              Every Story<br></br> deserves to <br></br> be told well.
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#A6A29D]">
              I’m a video editor passionate about storytelling, visual rhythm and meaningful content. <br></br>I work across short-form videos, long-form content and cinematic projects.
            </p>
          </div>
        </div>
      </section>

     {/* Quick Showcase */}
<section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 lg:px-20">
  <h2 className="mb-20 text-center font-serif text-2xl text-[#B7CDBD]">
    QUICK SHOWCASE
  </h2>

  <div className="mx-auto max-w-[1250px] space-y-24">
    {showreels.map((reel, index) => (
      <div
        key={reel.number}
        className={`flex flex-col items-center gap-8 md:gap-14 ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Showreel Video */}
        <div className="w-full md:w-[60%]">
          <Link
            href={reel.href}
            aria-label={`View ${reel.title}`}
            className="group relative mx-auto block w-full overflow-hidden"
          >
            <div
              className={
                index === 0
                  ? "mx-auto aspect-[9/16] w-full max-w-[400px]"
                  : "aspect-video w-full"
              }
            >
              <video
                src={reel.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

            <span className="absolute bottom-5 right-5 text-xs tracking-widest text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              VIEW PROJECT ↗
            </span>
          </Link>
        </div>

        {/* Showreel Description */}
        <div className="w-full md:w-[40%]">
          <span className="mb-5 block text-xs tracking-[0.25em] text-[#B7CDBD]">
            {reel.number} / SELECTED WORK
          </span>

          <h3 className="mb-5 font-serif text-3xl text-[#F2EEE8] md:text-4xl">
            {reel.title}
          </h3>

          <p className="max-w-md text-sm leading-7 text-[#A6A29D]">
            {reel.description}
          </p>

          <Link
            href={reel.href}
            className="mt-8 inline-block border-b border-[#B7CDBD]/50 pb-2 text-xs tracking-[0.2em] text-[#B7CDBD] transition-colors hover:text-white"
          >
            EXPLORE WORK ↗
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>







      {/* Resume */}
      <section
        id="resume"
        className="border-y border-[#303030] bg-[#191919] px-6 py-20 md:px-12 lg:px-20"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.25em] text-[#B7CDBD]">
              EXPERIENCE & SKILLS
            </p>
            <h2 className="font-serif text-4xl md:text-6xl">
              More about my work.
            </h2>
          </div>

          <a
            href="/video-editing/resume"
            className="w-fit border border-[#B7CDBD] px-7 py-4 text-[10px] tracking-[0.18em] text-[#B7CDBD] transition hover:bg-[#B7CDBD] hover:text-[#111111]"
          >
            VIEW RESUMÉ ↗
          </a>
        </div>
      </section>

      {/* Contact */}
      <footer
        id="contact"
        className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 lg:px-20"
      >
      </footer>
      <VideoEditingFooter />
    </main>
  );
}
