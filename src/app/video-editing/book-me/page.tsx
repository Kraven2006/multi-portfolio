import ContactPopup from "@/components/ContactPopup";
export default function BookMePage() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#F2EEE8]">

      {/* Navigation */}
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-7 md:px-12 lg:px-16">

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
          <a href="/video-editing/editing-portfolio" className="text-[#A6A29D] hover:text-white">
            EDITING PORTFOLIO
          </a>
          <a href="/video-editing/creator-portfolio" className="text-[#A6A29D] hover:text-white">
            CREATOR PORTFOLIO
          </a>
          <a href="/video-editing/resume" className="text-[#A6A29D] hover:text-white">
            RESUMÉ
          </a>
          <a href="/video-editing/about" className="text-[#A6A29D] hover:text-white">
            ABOUT
          </a>
        </div>

      </nav>

      {/* Contact Section */}
      <section className="grid min-h-[650px] md:grid-cols-2">

        {/* Left: Contact Form */}
        <div className="flex flex-col justify-center bg-[radial-gradient(ellipse_at_20%_20%,rgba(183,205,189,0.12),transparent_60%),#171719] px-7 py-16 md:px-12 lg:px-16">

          <ContactPopup />

            <form
      action="https://formspree.io/f/xnppwzkg"
      method="POST"
      className="mx-auto w-full max-w-[520px]"
    >
      <input
        type="hidden"
        name="_subject"
        value="New Portfolio Enquiry - Kraven"
      />

  {/* Name */}
  <label className="mb-2 block text-xs text-[#A6A29D]">
    Name <span className="text-[#B7CDBD]">(required)</span>
  </label>

            {/* Name */}
            <label className="mb-2 block text-xs text-[#A6A29D]">
              Name <span className="text-[#B7CDBD]">(required)</span>
            </label>

            <div className="mb-6 grid grid-cols-2 gap-3">

              <div>
                <span className="mb-2 block text-[10px] text-[#77736F]">
                  First Name
                </span>
                <input
                  type="text"
                  name="First Name"
                  required
                  className="w-full border border-[#555555] bg-[#202020] px-3 py-3 text-sm outline-none focus:border-[#B7CDBD]"
                />
              </div>

              <div>
                <span className="mb-2 block text-[10px] text-[#77736F]">
                  Last Name
                </span>
                <input
                  type="text"
                  name="Last Name"
                  required
                  className="w-full border border-[#555555] bg-[#202020] px-3 py-3 text-sm outline-none focus:border-[#B7CDBD]"
                />
              </div>

            </div>

            {/* Email */}
            <label className="mb-2 block text-xs text-[#A6A29D]">
              Email <span className="text-[#B7CDBD]">(required)</span>
            </label>

            <input
              type="email"
              name="Email"
              required
              className="mb-6 w-full border border-[#555555] bg-[#202020] px-3 py-3 text-sm outline-none focus:border-[#B7CDBD]"
            />

            {/* Subject */}
            <label className="mb-2 block text-xs text-[#A6A29D]">
              Subject <span className="text-[#B7CDBD]">(required)</span>
            </label>

            <input
              type="text"
              name="Subject"
              required
              className="mb-6 w-full border border-[#555555] bg-[#202020] px-3 py-3 text-sm outline-none focus:border-[#B7CDBD]"
            />

            {/* Message */}
            <label className="mb-2 block text-xs text-[#A6A29D]">
              Message <span className="text-[#B7CDBD]">(required)</span>
            </label>

            <textarea
              name="Message"
              required
              rows={5}
              className="mb-7 w-full resize-y border border-[#555555] bg-[#202020] px-3 py-3 text-sm outline-none focus:border-[#B7CDBD]"
            />

            <button
              type="submit"
              className="rounded-full border border-[#B7CDBD] px-9 py-3 text-[10px] tracking-[0.15em] text-[#B7CDBD] transition hover:bg-[#B7CDBD] hover:text-[#111111]"
            >
              SUBMIT ↗
            </button>

          </form>
        </div>

        {/* Right: Photograph */}
        <div className="relative min-h-[450px] overflow-hidden bg-[#252329] md:min-h-full">

          <img
            src="/images/book-me.jpg"
            alt="Creative work and behind the scenes"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

        </div>

      </section>

      {/* Contact Footer */}
      <footer className="bg-[#FFF6ED] px-6 py-20 text-center text-[#183D2A]">

        <a
          href="/video-editing"
          className="font-serif text-2xl hover:opacity-70"
        >
          KRAVEN
        </a>

        <div className="mt-6 space-y-2 text-xs">
          <a
            target="_blank"
            className="underline underline-offset-2"
          >
            chandhrabosemohan@gmail.com
          </a>

          <p>Video Editor · Content Creator</p>
        </div>

        <div className="mt-7 flex justify-center gap-7 text-xs">
          <a
            href="https://www.youtube.com/@kraventamil007"
            target="_blank"
            rel="noopener noreferrer"
          >
            YOUTUBE ↗
          </a>

          <a
            href="https://www.instagram.com/kraven2006/"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM ↗
          </a>
        </div>

        <p className="mt-16 text-[9px] tracking-[0.15em] text-[#77736F]">
          © 2026 KRAVEN. ALL RIGHTS RESERVED.
        </p>

      </footer>

    </main>
  );
}
