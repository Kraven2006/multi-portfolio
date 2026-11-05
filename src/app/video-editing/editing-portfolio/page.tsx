import ContactPopup from "@/components/ContactPopup";
import VideoEditingFooter from "@/components/VideoEditingFooter";
const reels = [
  {
    title: "Swasthio — Episode 01",
    category: "SOCIAL MEDIA · REELS",
    description:
      "An Informative promotional reel introducing the possibilities of Artificial Intelligence in healthcare.My editing approach focused on retention-driven pacing, maintaining continuous visual engagement through well-timed cuts, motion, and transitions, while ensuring that the informative content remained clear, accurate, and easy to follow.",
    url: "https://www.instagram.com/reel/DWvUmx2PZ1e/embed",
  },
  {
    title: "Episode 02",
    category: "SOCIAL MEDIA · REELS",
    description:
      "An Informative series exploring the role of Artificial Intelligence in healthcare.The editing focused on audience retention through dynamic visual pacing, continuous movement, and strategically timed cuts, while keeping the presentation informative and ensuring that visual engagement never compromised the clarity of the subject matter.",
    url: "https://www.instagram.com/reel/DW__0vJPwH5/embed",
  },
   {
    title: "Episode 04",
    category: "SOCIAL MEDIA · REELS",
    description:
      "AI-powered smart contact lenses could monitor biological signals in tears and identify potential health warning signs.Used continuous visual movement and retention-focused editing to keep viewers engaged, while ensuring the scientific information remained clear and responsible.",
    url: "https://www.instagram.com/reel/DX3qQItOUDu/embed",
  },
  {
    title: "Episode 06 // not yet uploaded",
    category: "SOCIAL MEDIA · REELS",
    description:
      "AI can analyse medical data to identify cardiovascular risks years before symptoms appear.Applied dynamic, retention-focused editing to maintain visual engagement while remaining conscious of content accuracy and clarity.",
    url: "https://www.youtube.com/embed/cmdi4eLpfYY",
  },
];

export default function EditingPortfolioPage() {
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

        <div className="hidden items-center gap-7 text-[10px] tracking-[0.14em] md:flex">
          <a
            href="/video-editing/editing-portfolio"
            className="text-[#B7CDBD]"
          >
            EDITING PORTFOLIO
          </a>

          <a
            href="/video-editing/creator-portfolio"
            className="text-[#A6A29D] transition hover:text-white"
          >
            CREATOR PORTFOLIO
          </a>

          <a
            href="/video-editing/about"
            className="text-[#A6A29D] transition hover:text-white"
          >
            ABOUT
          </a>

          <a
            href="/video-editing/resume"
            className="text-[#A6A29D] transition hover:text-white"
          >
            RESUMÉ
          </a>
        </div>

        <ContactPopup />
      </nav>

      {/* Page Introduction */}
      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-20 md:px-12 md:pt-28 lg:px-20">

        


      </section>

      {/* Featured Work */}
      <section className="mx-auto max-w-[1500px] px-6 pb-32 pt-10 md:px-12 lg:px-20">

        <h2 className="mb-24 text-center font-serif text-5xl tracking-tight md:text-6xl">
          Featured Work
        </h2>

        {/* Short Film */}
        <article className="mx-auto mb-32 max-w-[1050px]">

          <div className="mb-8 text-center">
            <p className="mb-5 text-[10px] tracking-[0.2em] text-[#B7CDBD]">
              SHORT FILM · 2026
            </p>

            <h3 className="font-serif text-3xl leading-tight md:text-4xl">
              Vaazhthu (The Appreciation)
            </h3>
            

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A6A29D]">
              Film Editor of a  short film exploring friendship, ego, separation, and reconciliation.
              </p>
             
<p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A6A29D]">
The film follows two friends whose bond breaks after a heated ego clash.

Through thoughtful editing, narrative pacing, and emotional timing, I shaped the story to capture the subtle emotions behind friendship, distance, and second chances.
            </p>
          </div>

          <div className="aspect-video w-full overflow-hidden bg-[#202521]">
            <iframe
              src="https://www.youtube.com/embed/g-1TYDWrnpM"
              title="Short Film"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

        </article>

        {/* Swasthio Reels */}
        <div className="space-y-24 md:space-y-32">

          {reels.map((reel, index) => (

            <article
              key={reel.title}
              className="grid items-center gap-10 md:grid-cols-2 md:gap-20"
            >

              {/* Odd reels: Video left, description right */}
              {index % 2 === 0 ? (
                <>
                  <div className="mx-auto w-full max-w-[350px] overflow-hidden bg-[#202521]">

                    <iframe
                      src={reel.url}
                      title={reel.title}
                      className="aspect-[9/16] w-full"
                      allowFullScreen
                    />

                  </div>

                  <div className="flex flex-col justify-center text-center md:text-left">

                    <p className="mb-5 text-[10px] tracking-[0.2em] text-[#B7CDBD]">
                      {reel.category}
                    </p>

                    <h3 className="font-serif text-3xl leading-tight md:text-5xl">
                      {reel.title}
                    </h3>

                    <p className="mt-6 max-w-lg text-sm leading-8 text-[#A6A29D]">
                      {reel.description}
                    </p>

                  </div>
                </>
              ) : (

                /* Even reels: Description left, video right */
                <>
                  <div className="order-2 flex flex-col justify-center text-center md:order-1 md:text-right">

                    <p className="mb-5 text-[10px] tracking-[0.2em] text-[#B7CDBD]">
                      {reel.category}
                    </p>

                    <h3 className="font-serif text-3xl leading-tight md:text-5xl">
                      {reel.title}
                    </h3>

                    <p className="mt-6 ml-auto max-w-lg text-sm leading-8 text-[#A6A29D]">
                      {reel.description}
                    </p>

                  </div>

                  <div className="order-1 mx-auto w-full max-w-[350px] overflow-hidden bg-[#202521] md:order-2">

                    <iframe
                      src={reel.url}
                      title={reel.title}
                      className="aspect-[9/16] w-full"
                      allowFullScreen
                    />

                  </div>
                </>
              )}

            </article>

          ))}

        </div>
      </section>

     <VideoEditingFooter />

    </main>
  );
}
