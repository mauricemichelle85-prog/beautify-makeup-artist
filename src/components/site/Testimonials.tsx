"use client";

import { useState } from "react";
import { Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Integer faucibus odio cursus facilisi sitenim egestas ele imperdiet etiam situ eltrices vestibulum. Orcinteger faucibus odio cursus facilisi sitenim egestas elementum imperdiet etiam situ eltrices vestibulum sit. The team was punctual, professional, and the look lasted all night. I felt like the best version of myself.",
    name: "Danielle Jenkins",
    role: "Super Model",
    image:
      "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/elementor/thumbs/testimonials-sect-phlg9jsmsjjqkio00ce8ob5tshar10163wel6ag536.jpg",
  },
  {
    quote:
      "From the trial to the wedding morning, everything felt effortless. The makeup looked flawless in every photo and survived tears, hugs, and dancing. I cannot recommend Beautify enough for brides who want to feel themselves — only better.",
    name: "Mia Thompson",
    role: "Bride",
    image:
      "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/elementor/thumbs/testimonials-sect-1-phlg9lob67n8kduuvd97bhao07wxmsk9exv88kerds.jpg",
  },
  {
    quote:
      "I booked Beautify for an editorial shoot and the results were nothing short of spectacular. Sharp lines, glowing skin, hair that held up under hot lights for hours. They are now my go-to team for any production.",
    name: "Olivia Bennett",
    role: "Creative Director",
    image:
      "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/elementor/thumbs/testimonials-sect-2-phlg9kqgzdly8rw80uukqzj7eu1kf3gj2t7qrag5k0.jpg",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-32 overflow-hidden bg-charcoal text-white py-24 lg:py-32"
    >
      {/* Decorative dotted pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-10 top-12 hidden md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
          width: 130,
          height: 130,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-10 hidden md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
          width: 130,
          height: 130,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Left portrait */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={t.image}
                alt={t.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {/* Decorative gold border accent */}
              <div className="absolute -bottom-3 -right-3 h-full w-full border border-gold/40" />
            </div>
          </div>

          {/* Right quote */}
          <div className="lg:col-span-7">
            <p className="eyebrow text-rose-soft">Testimonials</p>
            <h2 className="section-title mt-4 text-4xl md:text-5xl text-white">
              Words from Clients
            </h2>

            <div className="mt-6 flex items-center gap-1 text-gold-bright">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
              <span className="ml-3 text-[12px] uppercase tracking-wider text-white/60">
                Rated 5 out of 5
              </span>
            </div>

            <blockquote className="mt-6 text-[15px] leading-relaxed text-white/85 md:text-[17px]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="mt-8 flex items-center justify-between gap-6 border-t border-white/15 pt-6">
              <div>
                <div className="section-title text-2xl text-white">
                  {t.name}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/55">
                  {t.role}
                </div>
              </div>

              {/* Pagination dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`View testimonial ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      i === active
                        ? "bg-rose-soft w-6"
                        : "bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-soft hover:text-white transition-colors"
            >
              View All Testimonials →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
