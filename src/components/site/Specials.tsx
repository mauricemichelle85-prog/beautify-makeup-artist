"use client";

const img1 =
  "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/elementor/thumbs/special-sect-phl38pum09d0xj1u1tnkz2a2wejg820p35kcpv3tsa.jpg";
const img2 =
  "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/elementor/thumbs/special-sect-1-phl38qsg73eb950gwc27jk1jhsetfr4ffa7u752fm2.jpg";

export function Specials() {
  return (
    <section className="relative bg-blush-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left copy */}
          <div className="lg:col-span-4">
            <p className="eyebrow">Specials</p>
            <h2 className="section-title mt-4 text-4xl md:text-5xl">
              We&apos;re Here to Make Your Day Memorable
            </h2>
            <p className="mt-5 text-[14px] leading-relaxed text-mist">
              Integer faucibus odio cursus facilisi sitenim egestas ele imperdiet
              etiam situ eltrices vestibulum sit. Integer faucibus odio cursus
              facilisi sitenim egestas arcu elementum imperdiet etiam situ eltrices
              vestibulum sit.
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-mist">
              Every wedding, photoshoot, and special-occasion look is treated as
              its own creative project — with consultations, trials, and on-site
              touch-ups included.
            </p>
          </div>

          {/* Right two-image collage */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-5">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={img1}
                  alt="Bridal makeup look"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden translate-y-8">
                <img
                  src={img2}
                  alt="Hair styling detail"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
