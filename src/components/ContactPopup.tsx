
"use client";

import { useState } from "react";

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">

      {/* Contact Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="border border-[#B7CDBD]/60 px-5 py-3 text-[9px] tracking-[0.16em] text-[#B7CDBD] transition hover:bg-[#B7CDBD] hover:text-[#111111]"
      >
        CONTACT
      </button>

      {/* Popup */}
      {isOpen && (
        <>
          <button
            aria-label="Close contact popup"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 cursor-default"
          />

          <div className="absolute right-0 top-full z-50 mt-4 w-[280px] border border-[#383838] bg-[#191919] p-6 shadow-2xl">

            <div className="mb-6 flex items-center justify-between">
              <p className="text-[10px] tracking-[0.2em] text-[#B7CDBD]">
                GET IN TOUCH
              </p>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                className="text-lg text-[#77736F] hover:text-white"
              >
                ×
              </button>
            </div>
<div>
              <p className="mb-2 text-[9px] tracking-[0.15em] text-[#77736F]">
                Phone Number
              </p>

              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#F2EEE8] underline decoration-[#B7CDBD]/50 underline-offset-4 hover:text-[#B7CDBD]"
              >
                +91 9790070257 ↗
              </a>
            </div>
            {/* Gmail */}
            <div className="mb-6">
              <p className="mb-2 text-[9px] tracking-[0.15em] text-[#77736F]">
                EMAIL
              </p>

              <a
                target="_blank"
                className="break-all text-sm text-[#F2EEE8] underline decoration-[#B7CDBD]/50 underline-offset-4 hover:text-[#B7CDBD]"
              >
                chandhrabosemohan@gmail.com
              </a>
            </div>

            {/* Instagram */}
            <div>
              <p className="mb-2 text-[9px] tracking-[0.15em] text-[#77736F]">
                INSTAGRAM
              </p>

              <a
                href="https://www.instagram.com/kraven2006/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#F2EEE8] underline decoration-[#B7CDBD]/50 underline-offset-4 hover:text-[#B7CDBD]"
              >
                @kraven2006 ↗
              </a>
            </div>

          </div>
        </>
      )}

    </div>
  );
}
