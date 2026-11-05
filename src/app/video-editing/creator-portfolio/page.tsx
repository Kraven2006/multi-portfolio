
import VideoCard from "@/components/VideoCard";
import ContactPopup from "@/components/ContactPopup";
import VideoEditingFooter from "@/components/VideoEditingFooter";

const featuredVideo = {
  title: "Featured Creator Work",
  category: "CONTENT CREATION",
  description:
    "A showcase of my work as a content creator, including videos, creative ideas and visual storytelling.",
  videoId: "S1XLE2YhiB0",
};

const videos = [
  {
    title: "Video Project One",
    category: "CINEMA",
    description:
      "A short description about this video and the creative idea behind it.",
    videoId: "MK7POlFJLbU",
  },
  {
    title: "Video Project Two",
    category: "GAMING",
    description:
      "A short description about this video and the content I created.",
    videoId: "j4FiG7wOutA",
  },
  {
    title: "Video Project Three",
    category: "PODCAST",
    description:
      "A short description about this episode and its content.",
    videoId: "Uq5b4roZVgo",
  },
  {
    title: "Video Project Four",
    category: "OTHER WORK",
    description:
      "A short description about this project and my creative contribution.",
    videoId: "v5hJ2KBd9as",
  },
];

export default function CreatorPortfolioPage() {
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
            className="text-[#A6A29D] hover:text-white"
          >
            EDITING PORTFOLIO
          </a>

          <a
            href="/video-editing/creator-portfolio"
            className="text-[#B7CDBD]"
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
            className="text-[#A6A29D] hover:text-white"
          >
            ABOUT
          </a>
        </div>

        <ContactPopup />
      </nav>

      {/* Featured Creator Video */}
      <section className="mx-auto max-w-[1440px] px-6 pb-20 pt-14 md:px-12 lg:px-20">

        <h1 className="mb-2 text-center font-serif text-4xl tracking-tight text-[#F2EEE8] md:text-6xl">
          CREATOR PORTFOLIO
        </h1>

        <div className="mx-auto mt-8 max-w-[850px]">

          <VideoCard
            videoId={featuredVideo.videoId}
            title={featuredVideo.title}
          />

          <div className="mt-5 text-center">
            <h2 className="font-serif text-xl md:text-2xl">
              {featuredVideo.title}
            </h2>

            <p className="mt-3 text-[10px] tracking-[0.2em] text-[#B7CDBD]">
              {featuredVideo.category}
            </p>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#A6A29D]">
              {featuredVideo.description}
            </p>
          </div>

        </div>
      </section>

      {/* Four Video Projects */}
      <section className="mx-auto max-w-[1250px] px-6 pb-32 pt-10 md:px-12 lg:px-16">

        <h2 className="mb-16 text-center font-serif text-3xl md:text-4xl">
          More From My Work
        </h2>

        <div className="grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2">

          {videos.map((video) => (
            <article key={video.videoId} className="min-w-0">

              <VideoCard
                videoId={video.videoId}
                title={video.title}
              />

              <div className="mt-6">
                <p className="mb-3 text-[10px] tracking-[0.2em] text-[#B7CDBD]">
                  {video.category}
                </p>

                <h3 className="font-serif text-2xl leading-snug">
                  {video.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[#A6A29D]">
                  {video.description}
                </p>
              </div>

            </article>
          ))}

        </div>
      </section>

      {/* Channel Links */}
      <section className="border-y border-[#303030] bg-[#191919] px-6 py-20 md:px-12 lg:px-20">

        <div className="mx-auto max-w-[1200px] text-center">

          <p className="mb-5 text-[10px] tracking-[0.25em] text-[#B7CDBD]">
            FIND ME ONLINE
          </p>

          <h2 className="font-serif text-4xl md:text-6xl">
            My Channels<span className="text-[#B7CDBD]">.</span>
          </h2>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="https://www.youtube.com/@kraventamil007"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#B7CDBD] px-8 py-4 text-[10px] tracking-[0.16em] text-[#B7CDBD] transition hover:bg-[#B7CDBD] hover:text-[#111111]"
            >
              Kraven ↗
            </a>

            <a
              href="https://www.youtube.com/@kraven2tamil007"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#B7CDBD] px-8 py-4 text-[10px] tracking-[0.16em] text-[#B7CDBD] transition hover:bg-[#B7CDBD] hover:text-[#111111]"
            >
              Kraven 2 ↗
            </a>

          </div>
        </div>
      </section>

      <VideoEditingFooter />

    </main>
  );
}
