"use client";

import { CalendarDays, MessageCircle, ArrowRight } from "lucide-react";

const posts = [
  {
    img: "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/2021/12/post-beautify-6-768x535.jpg",
    title: "Gravida amet aodiomet rhoncus integer.",
    excerpt:
      "Facilisi enim nisl nec sed in uturpis. Mauris pellentesque congue sodales ut sed vestibulum nibh.",
    date: "December 18, 2021",
    comments: "No Comments",
  },
  {
    img: "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/2021/12/post-beautify-7-768x535.jpg",
    title: "Facilisi enim nisl nec sed in uturpis.",
    excerpt:
      "Mauris pellentesque congue sodales ut sed vestibulum nibh. Integer tristique auctor eros.",
    date: "December 18, 2021",
    comments: "No Comments",
  },
  {
    img: "https://templatekits.themewarrior.com/beautify/wp-content/uploads/sites/41/2021/12/post-beautify-8-768x535.jpg",
    title: "Ornare et quam diam ullamcorper diam.",
    excerpt:
      "Integer tristique auctor eros. Donec vestibulum nibh a sollicitudin mollis adipiscing.",
    date: "December 18, 2021",
    comments: "No Comments",
  },
];

export function Blog() {
  return (
    <section id="blog" className="scroll-mt-32 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-2">
          <div>
            <p className="eyebrow">Blog</p>
            <h2 className="section-title mt-4 text-4xl md:text-5xl">
              Latest Blog
            </h2>
          </div>
          <p className="text-[14px] leading-relaxed text-mist md:text-right md:max-w-md md:ml-auto">
            Integer faucibus odio cursus facilisi sitenim egestas ele imperdiet
            etiam situ eltrices vestibulum sit. Integer faucibus odio cursus
            facilisi sitenim.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <article key={i} className="group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Date badge */}
                <div className="absolute left-4 top-4 bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-rose shadow-sm">
                  Beauty
                </div>
              </div>

              <div className="border-t border-blush/60 bg-blush-soft/40 p-6">
                <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider text-mist">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MessageCircle className="h-3.5 w-3.5" />
                    {post.comments}
                  </span>
                </div>

                <h3 className="section-title mt-4 text-2xl text-charcoal group-hover:text-rose transition-colors">
                  {post.title}
                </h3>

                <p className="mt-3 text-[13px] leading-relaxed text-mist">
                  {post.excerpt}
                </p>

                <a
                  href="#blog"
                  className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-rose hover:text-rose-dark"
                >
                  Read More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
