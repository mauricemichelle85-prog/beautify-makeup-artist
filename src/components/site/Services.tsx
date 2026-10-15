"use client";

import { ArrowRight } from "lucide-react";

type Service = {
  title: string;
  desc: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Makeup Lesson",
    desc: "Integer faucibus odio cursus sitenim egestas ele imperdiet etiam eltrices.",
    image:
      "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/elementor/thumbs/services-card-phl6cqa8en44m48er3wenjagpqw37rt0cl6ouljpr4.jpg",
  },
  {
    title: "Personal Make-Over",
    desc: "Integer faucibus odio cursus sitenim egestas ele imperdiet etiam eltrices.",
    image:
      "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/elementor/thumbs/services-card-1-phl6cuzfctak861kznxji03roo8xa9bo18g48zcqw0.jpg",
  },
  {
    title: "Bridal Beauty",
    desc: "Integer faucibus odio cursus sitenim egestas ele imperdiet etiam eltrices.",
    image:
      "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/elementor/thumbs/services-card-2-phl6ct3qz57zky4ban4ad0kuhwi6uv47cz55affj8g.jpg",
  },
  {
    title: "Hairstyling",
    desc: "Integer faucibus odio cursus sitenim egestas ele imperdiet etiam eltrices.",
    image:
      "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/elementor/thumbs/services-card-3-phl6cs5wsb6p9c5og4pnsitdwimtn60h0uhnt5gxeo.jpg",
  },
  {
    title: "Hair Coloring",
    desc: "Integer faucibus odio cursus sitenim egestas ele imperdiet etiam eltrices.",
    image:
      "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/elementor/thumbs/services-card-4-phl6cr82lh5exq71lmb1811xb4rgfgwqopu6bvibkw.jpg",
  },
  {
    title: "Skincare",
    desc: "Integer faucibus odio cursus sitenim egestas ele imperdiet etiam eltrices.",
    image:
      "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/elementor/thumbs/services-card-5-phl6cr82lh5exq71lmb1811xb4rgfgwqopu6bvibkw.jpg",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-32 bg-blush-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our Services</p>
          <h2 className="section-title mt-4 text-4xl md:text-5xl">
            What We Can Do for You
          </h2>
          <p className="mt-5 text-[14px] leading-relaxed text-mist">
            Integer faucibus odio cursus facilisi sitenim egestas ele imperdiet
            etiam situ eltrices vestibulum sit. Integer faucibus odio cursus
            facilisi sitenim.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="section-title mt-5 text-2xl text-charcoal">
                {s.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-mist">
                {s.desc}
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-rose hover:text-rose-dark"
              >
                View Detail
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
