"use client";

const partners = [
  "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/2021/12/logo-color-11.png",
  "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/2021/12/logo-color-2.png",
  "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/2021/12/logo-color-3.png",
  "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/2021/12/logo-color-8.png",
];

export function Partners() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow text-center">Our partners</p>

        <div className="mt-10 grid grid-cols-2 items-center gap-8 sm:grid-cols-4">
          {partners.map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center grayscale opacity-70 transition-all hover:opacity-100 hover:grayscale-0"
            >
              <img
                src={p}
                alt={`Partner ${i + 1}`}
                className="max-h-16 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
