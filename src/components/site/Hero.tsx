"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const heroImg =
  "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/elementor/thumbs/hero-home-beautify-phlw721v3zub3a78yj3cgo5nas8mwb35agc1sd20a0.png";

export function Hero() {
  const [form, setForm] = useState({ name: "", email: "", date: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", date: "", phone: "" });
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-blush-soft"
    >
      {/* Soft layered backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush via-blush-soft to-white" />
      {/* Decorative dots in bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-6 hidden md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d6336c 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
          width: 130,
          height: 130,
          opacity: 0.65,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 pt-10 pb-16 lg:grid-cols-12 lg:items-stretch lg:gap-6 lg:pt-16 lg:pb-20">
          {/* LEFT — copy + image */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div className="pr-0 lg:pr-6">
                <p className="eyebrow">Beautify</p>
                <h1 className="section-title mt-4 text-5xl md:text-6xl lg:text-[64px]">
                  Professional <br />
                  Makeup Artist
                </h1>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-mist">
                  Integer faucibus odio cursus facilisi sitenim egestas arcu
                  elementum imperdiet etiam situ eltrices vestibulum sit. We bring
                  the studio to your door with bespoke makeup and hair styling
                  services for every occasion.
                </p>
                <div className="mt-7">
                  <a
                    href="#services"
                    className="inline-flex items-center gap-3 bg-rose px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-rose-dark transition-colors"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={heroImg}
                    alt="Professional makeup artist at work"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
                {/* Decorative wavy ring */}
                <svg
                  aria-hidden
                  viewBox="0 0 100 100"
                  className="absolute -right-4 -top-4 h-16 w-16 text-rose/40"
                  fill="none"
                >
                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M20 50 Q35 35, 50 50 T80 50"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT — booking form */}
          <div className="lg:col-span-5">
            <div
              id="book"
              className="bg-white p-7 shadow-xl lg:p-8 scroll-mt-32"
            >
              <h2 className="section-title text-3xl text-charcoal">
                Book Makeup Schedule
              </h2>
              <p className="mt-3 text-[13px] leading-relaxed text-mist">
                Integer faucibus odio cursus facilisi sitenim egestas arcu. Tell
                us your preferred date and we&apos;ll be in touch within 24
                hours.
              </p>
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="hero-name" className="block text-[11px] font-semibold uppercase tracking-wider text-mist">
                    Name
                  </label>
                  <input
                    id="hero-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 w-full border-0 border-b border-blush bg-transparent px-0 py-2 text-[14px] text-ink placeholder-mist focus:border-rose focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="hero-email" className="block text-[11px] font-semibold uppercase tracking-wider text-mist">
                    Email
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1 w-full border-0 border-b border-blush bg-transparent px-0 py-2 text-[14px] text-ink placeholder-mist focus:border-rose focus:outline-none"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="hero-date" className="block text-[11px] font-semibold uppercase tracking-wider text-mist">
                    Date
                  </label>
                  <input
                    id="hero-date"
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="mt-1 w-full border-0 border-b border-blush bg-transparent px-0 py-2 text-[14px] text-ink placeholder-mist focus:border-rose focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="hero-phone" className="block text-[11px] font-semibold uppercase tracking-wider text-mist">
                    Phone
                  </label>
                  <input
                    id="hero-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-1 w-full border-0 border-b border-blush bg-transparent px-0 py-2 text-[14px] text-ink placeholder-mist focus:border-rose focus:outline-none"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 bg-rose px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-rose-dark transition-colors"
                >
                  {submitted ? "Request Received" : "Book Now"}
                </button>
                {submitted && (
                  <p className="text-center text-[12px] text-rose">
                    Thanks! We&apos;ll be in touch shortly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
