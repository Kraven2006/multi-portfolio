
import ContactPopup from "@/components/ContactPopup";
import VideoEditingFooter from "@/components/VideoEditingFooter";

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#111111] text-[#F2EEE8]">

      {/* Navigation */}
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-7 md:px-12 lg:px-20">

        <div className="flex items-center gap-3">
          <a
            href="/video-editing"
            className="text-xs tracking-[0.2em] hover:text-[#B7CDBD]"
          >
            HOME
          </a>

          <span className="text-[#444444]">|</span>

          <a
            href="/"
            className="text-[9px] tracking-[0.16em] text-[#77736F] hover:text-[#B7CDBD]"
          >
            KRAVEN ↗
          </a>
        </div>

        <div className="hidden items-center gap-7 text-[10px] tracking-[0.14em] md:flex">
          <a
            href="/video-editing/editing-portfolio"
            className="text-[#A6A29D] hover:text-white"
          >
            EDITING PORTFOLIO
          </a>

          <a
            href="/video-editing/creator-portfolio"
            className="text-[#A6A29D] hover:text-white"
          >
            CREATOR PORTFOLIO
          </a>

          <a
            href="/video-editing/resume"
            className="text-[#A6A29D] hover:text-white"
          >
            RESUMÉ
          </a>

          <a
            href="/video-editing/about"
            className="text-[#B7CDBD]"
          >
            ABOUT
          </a>
        </div>

        <ContactPopup />
      </nav>

      {/* About Heading */}
      <section className="mx-auto max-w-[1200px] px-6 pt-16 md:px-12">
        <h1 className="text-center font-serif text-6xl tracking-[-0.06em] md:text-8xl lg:text-[110px]">
          ABOUT ME<span className="text-[#B7CDBD]">.</span>
        </h1>
      </section>

      {/* Portrait Section */}
      <section className="mx-auto max-w-[1250px] px-6 pt-10 md:px-24">

        <div className="relative flex min-h-[480px] items-center justify-center overflow-hidden border border-[#B7CDBD]/30 bg-[radial-gradient(ellipse_at_50%_50%,rgba(183,205,189,0.10),transparent_65%),linear-gradient(135deg,#201e24,#151517)] py-12 md:min-h-[560px]">

          {/* Editorial Portrait Backdrop */}
          <div className="absolute left-1/2 top-1/2 h-[82%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-t-full rounded-b-[8px] border border-[#B7CDBD]/40 bg-gradient-to-b from-[#B7CDBD]/[0.10] via-[#806047]/20 to-[#806047]/[0.06]" />

          <div className="absolute left-[53%] top-[48%] h-[82%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-t-full rounded-b-[8px] border border-[#B7CDBD]/20" />

          {/* Portrait Frame */}
          <div className="relative z-10 h-[380px] w-[270px] overflow-hidden rounded-t-[48%] rounded-b-[3px] border border-[#B7CDBD]/50 shadow-[0_25px_70px_rgba(0,0,0,0.4)] sm:h-[430px] sm:w-[310px] md:h-[470px] md:w-[340px]">

            <img
              src="/images/profile_pic.png"
              alt="Portrait of Kraven"
              className="h-full w-full object-cover object-[center_35%]"
            />

            {/* Editorial details inside portrait */}
            <p className="absolute left-4 top-5 z-20 text-[8px] tracking-[0.2em] text-white/75">
              KRAVEN / 001
            </p>

            <p className="absolute right-4 top-5 z-20 font-serif text-sm text-white/70">
              01
            </p>

         

           

            {/* Subtle image overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111]/20 via-transparent to-transparent" />

          </div>

          {/* Frame Labels */}
          <p className="absolute bottom-6 left-7 text-[9px] tracking-[0.22em] text-[#B7CDBD]/70">
            BEHIND THE EDITS
          </p>

          <p className="absolute bottom-6 right-7 font-serif text-sm text-[#A6A29D]">
            Chandhrabose Mohanraj - KRAVEN
          </p>

        </div>
      </section>

      {/* Story Section */}
      <section className="mx-auto max-w-[1050px] px-6 pb-12 pt-5 md:px-12">

        <div className="border-t border-[#B7CDBD]/50 pt-6">

          <div className="grid gap-7 md:grid-cols-[55px_1fr]">

            <p className="pt-2 text-[9px] tracking-[0.2em] text-[#B7CDBD]">
              STORY
            </p>

            <div className="space-y-5 text-sm leading-7 text-[#C3BFB8]">

              <p>
                I'm a video editor interested in the art of visual
                storytelling, cinema and the creative possibilities
                of editing.
              </p>

              <p>
                My interest in films and visual media gradually
                developed into an interest in understanding how
                stories are constructed through images, sound,
                rhythm and transitions.
              </p>

              <p>
                I enjoy exploring different editing styles, experimenting
                with colour grading and sound design, and finding
                ways to make every frame contribute to the story.
              </p>

              <p>
                Alongside editing, I create content, explore game
                development and work on independent creative projects.
                These interests continuously influence how I approach
                visual storytelling.
              </p>

              <p>
                I'm always learning, experimenting and looking for
                opportunities to work on interesting creative projects.
              </p>

            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-10 border-t border-[#B7CDBD]/50 pt-6">

          <div className="grid gap-7 md:grid-cols-[55px_1fr]">

            <p className="pt-2 text-[9px] tracking-[0.2em] text-[#B7CDBD]">
              LOCATION
            </p>

            <div className="text-sm leading-7 text-[#C3BFB8]">
              <p>
                Vellore,<br />
                Tamil Nadu,<br />
                India.
              </p>
            </div>

          </div>
        </div>


      </section>


    </main>
  );
}
