
export default function VideoEditingFooter() {
  return (
    <footer className="overflow-hidden bg-[#111111] text-[#F2EEE8]">

      {/* Scrolling Message */}
      <div className="overflow-hidden border-t border-[#303030] py-9">
        <div className="marquee-track flex w-max items-center">
          {Array.from({ length: 6 }).map((_, index) => (
            <span
              key={index}
              className="whitespace-nowrap px-8 font-serif text-4xl tracking-tight text-[#F2EEE8] md:text-5xl"
            >
              Let's make something together!
              <span className="text-[#B7CDBD]"> </span>
            </span>
          ))}
        </div>
      </div>

      {/* Book Me Button */}
      <div className="flex justify-center pb-10">
        <a
          href="/video-editing/book-me"
          className="rounded-full border border-[#B7CDBD]/70 px-16 py-5 text-[10px] tracking-[0.16em] text-[#B7CDBD] transition duration-300 hover:bg-[#B7CDBD] hover:text-[#111111]"
        >
          BOOK ME
        </a>
      </div>

      {/* Contact Details */}
      <div className="border-t border-[#303030] px-6 py-20 text-center">

        <a
          href="/video-editing"
          className="font-serif text-3xl tracking-tight transition hover:text-[#B7CDBD]"
        >
          KRAVEN<span className="text-[#B7CDBD]">.</span>
        </a>

        {/* Email */}
        <div className="mt-7 space-y-3 text-xs text-[#A6A29D]">
          <a
            target="_blank"
            className="underline underline-offset-4 transition hover:text-[#B7CDBD]"
          >
            chandhrabosemohan@gmail.com
          </a>

          <p>Video Editor · Content Creator</p>
        </div>

        {/* Social Links */}
        <div className="mt-14 flex justify-center gap-8 text-[10px] tracking-[0.16em] text-[#B7CDBD]">

          <a
            href="https://www.youtube.com/@kraventamil007"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            YOUTUBE ↗
          </a>

          <a
            href="https://www.instagram.com/kraven2006/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            INSTAGRAM ↗
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=chandhrabosemohan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            EMAIL ↗
          </a>

        </div>

        {/* Copyright */}
        <div className="mx-auto mt-20 max-w-[1200px] border-t border-[#303030] pt-7">

          <p className="text-[9px] tracking-[0.18em] text-[#77736F]">
            © 2026 KRAVEN. ALL RIGHTS RESERVED.
          </p>

          <a
            href="/video-editing"
            className="mt-5 inline-block text-[9px] tracking-[0.18em] text-[#77736F] transition hover:text-[#B7CDBD]"
          >
            BACK TO HOME ↑
          </a>

        </div>

      </div>

    </footer>
  );
}
