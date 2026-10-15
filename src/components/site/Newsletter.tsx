"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 4000);
  }

  return (
    <section id="newsletter" className="scroll-mt-32 bg-blush-soft py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left copy */}
          <div className="lg:col-span-6">
            <h3 className="section-title text-3xl md:text-4xl">
              Join Our Newsletter
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed text-mist">
              Integer faucibus odio cursus facilisi sitenim egestas ele imperdiet
              etiam situ eltrices vestibulum sit. Subscribe for monthly beauty
              tips, exclusive offers, and first dibs on new services.
            </p>
          </div>

          {/* Right form */}
          <div className="lg:col-span-6 lg:pl-6">
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full border-b border-blush bg-transparent px-2 py-3 text-[14px] text-ink placeholder-mist focus:border-rose focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-rose px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-rose-dark transition-colors"
              >
                Subscribe Now
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
            {done && (
              <p className="mt-3 text-[12px] text-rose">
                You&apos;re subscribed. Watch your inbox for our next dispatch.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
