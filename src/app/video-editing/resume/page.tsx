
import ContactPopup from "@/components/ContactPopup";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#F2EEE8]">

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
            className="text-[#B7CDBD]"
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

      {/* Resume Viewer */}
      <section className="mx-auto max-w-[1100px] px-5 pb-20 pt-8 md:px-10">

        <div className="mb-5 flex items-center justify-between">
          <p className="text-[10px] tracking-[0.2em] text-[#B7CDBD]">
            RESUMÉ
          </p>

          <a
            href="/resume.pdf"
            download
            
          >

          </a>
        </div>

        {/* PDF Preview */}
        <div className="min-h-[80vh] overflow-hidden bg-white">
          <iframe
            src="/resume.pdf"
            title="My Resume"
            className="h-[85vh] w-full"
          />
        </div>

      </section>

    </main>
  );
}
