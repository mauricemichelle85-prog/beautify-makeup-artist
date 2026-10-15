"use client";

import { ArrowRight } from "lucide-react";

const aboutImg =
  "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/elementor/thumbs/about-sect-phks5t4eo0mg9lidp0fond9m7cakjxbkwcjrprd4gc.jpg";

const features = [
  "Premium hair styling for any occasion",
  "Award-winning color & cut techniques",
  "Personalized skin consultation",
  "Bridal packages with on-site service",
];

export function WelcomeAbout() {
  return (
    <section id="about" className="scroll-mt-32 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image with double frame */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -left-3 -top-3 h-full w-full border border-rose/30"
            />
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={aboutImg}
                alt="Professional makeup artist working with a client"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Wavy ring decoration */}
            <svg
              aria-hidden
              viewBox="0 0 100 100"
              className="absolute -bottom-6 -right-6 h-20 w-20 text-rose/40"
              fill="none"
            >
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" />
              <path
                d="M18 50 Q33 35, 50 50 T82 50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          {/* Copy */}
          <div className="lg:pl-8">
            <p className="eyebrow">Welcome to</p>
            <h2 className="section-title mt-4 text-4xl md:text-5xl">
              Best Professional Makeup Artist
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-mist">
              Integer faucibus odio cursus facilisi sitenim egestas ele imperdiet
              etiam situ eltrices vestibulum sit. Integer faucibus odio cursus
              facilisi sitenim egestas arcu elementum imperdiet etiam situ eltrices
              vestibulum sit.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-mist">
              With over a decade of experience in bridal, editorial, and personal
              beauty, our team brings precision, calm, and a touch of glamour to
              every appointment. Whether you are walking down the aisle or
              stepping onto a red carpet, your look will last from the first toast
              to the last dance.
            </p>

            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-[13px] text-ink"
                >
                  <span className="mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-rose/15 text-rose">
                    <svg viewBox="0 0 20 20" className="h-2.5 w-2.5" fill="currentColor">
                      <path d="M7.5 13.5L4 10l1.4-1.4 2.1 2.1L14.6 4l1.4 1.4z" />
                    </svg>
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-ink/80 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink hover:bg-ink hover:text-white transition-colors"
              >
                Learn More
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
