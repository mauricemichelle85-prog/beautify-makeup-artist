"use client";

const whyImg =
  "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/2021/12/why-us-sect.jpg";

const reasons = [
  "We travel to you, no matter how far",
  "We provide full services for you",
  "We you pick out the perfect makeup",
  "We keep calm & fun on your special day",
  "We are a very professional team",
];

export function WhyUs() {
  return (
    <section id="why" className="relative scroll-mt-32 bg-white py-20 lg:py-28">
      {/* Decorative double rectangle frame */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-12 hidden h-[calc(100%-6rem)] w-[calc(100%-4rem)] max-w-6xl -translate-x-1/2 border border-blush/60 lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-16 hidden h-[calc(100%-8rem)] w-[calc(100%-6rem)] max-w-5xl -translate-x-1/2 border border-blush/60 lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left image */}
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={whyImg}
                alt="Why choose Beautify"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right copy */}
          <div className="lg:col-span-7 lg:pl-6">
            <p className="eyebrow">Why Us</p>
            <h2 className="section-title mt-4 text-4xl md:text-5xl">
              Why Choose Us?
            </h2>
            <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-mist">
              Integer faucibus odio cursus facilisi sitenim egestas ele imperdiet
              etiam situ eltrices vestibulum sit. Integer faucibus odio cursus
              facilisi sitenim.
            </p>

            <ul className="mt-8 space-y-4">
              {reasons.map((r, i) => (
                <li
                  key={r}
                  className="flex items-center gap-4 border-b border-blush/60 pb-4"
                >
                  <span className="font-serif text-2xl text-rose">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] text-ink">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
