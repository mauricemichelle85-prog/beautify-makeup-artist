"use client";

import { Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Phone } from "lucide-react";

const columns = [
  {
    title: "Quick Menu",
    links: ["Home", "About", "Services", "Portfolio", "Blog"],
  },
  {
    title: "Services",
    links: [
      "Makeup Lesson",
      "Personal Make-Over",
      "Bride Makeup",
      "Hairstyling",
      "Hair Coloring",
    ],
  },
  {
    title: "About Us",
    links: [
      "Terms & Conditions",
      "Cookie Statement",
      "Privacy Statement",
      "Our Team",
      "Testimonials",
    ],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-32">
      {/* Diamond-pattern background */}
      <div className="pattern-diamonds">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          {/* Brand block */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="relative inline-block">
                <span className="font-serif text-5xl tracking-tight text-charcoal">
                  Beautify
                </span>
                <span className="absolute -left-4 -top-4 h-8 w-8 border-l-2 border-t-2 border-rose" />
                <span className="absolute -bottom-4 -right-4 h-8 w-8 border-b-2 border-r-2 border-rose" />
              </div>
              <p className="mt-6 max-w-sm text-[13px] leading-relaxed text-ink/80">
                Integer faucibus odio cursus facilisi sitenim egestas ele
                imperdiet etiam situ eltrices vestibulum sit. Integer faucibus
                odio cursus facilisi sitenim.
              </p>
              <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-ink/80">
                We are a small team of passionate artists dedicated to making
                every moment feel a little more beautiful.
              </p>
            </div>

            {/* Columns */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
              {columns.map((col) => (
                <div key={col.title}>
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose">
                    {col.title}
                  </h4>
                  <ul className="mt-5 space-y-3">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a
                          href="#"
                          className="text-[13px] text-ink/80 hover:text-rose transition-colors"
                        >
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact row */}
          <div className="mt-14 border-t border-rose/30 pt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose">
                  Contact Us
                </h4>
                <ul className="mt-5 space-y-3 text-[13px] text-ink/80">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 text-rose" />
                    <span>021 Hollywood Boulevard, LA</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-rose" />
                    <a
                      href="mailto:customer@domain.com"
                      className="hover:text-rose transition-colors"
                    >
                      customer@domain.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-rose" />
                    <a
                      href="tel:+0213456789"
                      className="hover:text-rose transition-colors"
                    >
                      (021) 345-6789
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose">
                  Opening Hours
                </h4>
                <ul className="mt-5 space-y-3 text-[13px] text-ink/80">
                  <li className="flex justify-between gap-3">
                    <span>Mon – Fri</span>
                    <span>09:00 – 19:00</span>
                  </li>
                  <li className="flex justify-between gap-3">
                    <span>Saturday</span>
                    <span>10:00 – 18:00</span>
                  </li>
                  <li className="flex justify-between gap-3">
                    <span>Sunday</span>
                    <span className="text-rose">Closed</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose">
                  Follow Us
                </h4>
                <p className="mt-5 text-[13px] text-ink/80">
                  Behind the scenes, fresh looks, and last-minute appointment
                  openings — straight to your feed.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="inline-flex h-9 w-9 items-center justify-center border border-rose/40 text-rose hover:bg-rose hover:text-white transition-colors"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="inline-flex h-9 w-9 items-center justify-center border border-rose/40 text-rose hover:bg-rose hover:text-white transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="inline-flex h-9 w-9 items-center justify-center border border-rose/40 text-rose hover:bg-rose hover:text-white transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="inline-flex h-9 w-9 items-center justify-center border border-rose/40 text-rose hover:bg-rose hover:text-white transition-colors"
                  >
                    <Youtube className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-charcoal text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-3 py-5 text-center sm:flex-row sm:text-left">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">
              © 2021 beautify. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-[11px] uppercase tracking-[0.2em] text-white/70">
              <a href="#" className="hover:text-rose-soft transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-rose-soft transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-rose-soft transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-rose-soft transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
