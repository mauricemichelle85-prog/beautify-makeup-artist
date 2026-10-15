"use client";

import { Facebook, Twitter, Youtube, Instagram, Phone, Mail } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Service Details", href: "#services" },
    ],
  },
  {
    label: "Pages",
    href: "#pages",
    children: [
      { label: "Pricing", href: "#why" },
      { label: "Our Team", href: "#testimonials" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#newsletter" },
      { label: "Coming Soon", href: "#blog" },
    ],
  },
  { label: "Blog", href: "#blog" },
  { label: "Book Schedule", href: "#book" },
  { label: "Contact", href: "#contact" },
];

export function TopBar() {
  return (
    <div className="bg-[#1f1d1d] text-white/90 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center justify-between">
          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/80 hover:text-rose-soft transition-colors"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white/80 hover:text-rose-soft transition-colors"
            >
              <Twitter className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-white/80 hover:text-rose-soft transition-colors"
            >
              <Youtube className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/80 hover:text-rose-soft transition-colors"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Contact info */}
          <div className="hidden sm:flex items-center gap-6 text-white/80">
            <a
              href="tel:+0213456789"
              className="flex items-center gap-2 hover:text-rose-soft transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>(021) 345 6789</span>
            </a>
            <a
              href="mailto:customer@domain.com"
              className="flex items-center gap-2 hover:text-rose-soft transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>customer@domain.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { navItems };
