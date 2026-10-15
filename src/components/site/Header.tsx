"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { navItems } from "./TopBar";

function Logo() {
  return (
    <a href="#home" className="inline-flex flex-col items-center group" aria-label="Beautify home">
      <span className="font-serif text-3xl md:text-4xl tracking-tight text-charcoal leading-none">
        Beautify
      </span>
      <span className="relative mt-1 inline-flex items-center gap-2">
        <span className="h-px w-6 bg-rose/60" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-mist">
          Makeup Artist
        </span>
        <span className="h-px w-6 bg-rose/60" />
      </span>
    </a>
  );
}

function NavItem({
  item,
  onNavigate,
}: {
  item: (typeof navItems)[number];
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a
        href={item.href}
        onClick={onNavigate}
        className="inline-flex items-center gap-1 px-3 py-2 text-[13px] font-medium uppercase tracking-wider text-ink hover:text-rose transition-colors"
      >
        {item.label}
        {hasChildren && <ChevronDown className="h-3 w-3" />}
      </a>
      {hasChildren && open && (
        <ul className="absolute left-1/2 top-full z-50 min-w-[200px] -translate-x-1/2 bg-white shadow-lg ring-1 ring-black/5">
          {item.children?.map((child) => (
            <li key={child.label}>
              <a
                href={child.href}
                onClick={onNavigate}
                className="block px-4 py-3 text-[13px] uppercase tracking-wider text-ink hover:text-rose hover:bg-blush-soft transition-colors"
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-40 w-full bg-white transition-shadow ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      {/* Logo row */}
      <div className="border-b border-blush/40">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-5 sm:px-6 lg:px-8">
          <Logo />
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="absolute right-4 inline-flex items-center justify-center rounded-md p-2 text-ink hover:bg-blush-soft lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden border-b border-blush/40 lg:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center gap-1 py-3">
            {navItems.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 max-w-[80%] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-blush/40 px-4 py-4">
              <span className="font-serif text-2xl text-charcoal">Menu</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-md p-2 text-ink hover:bg-blush-soft"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="flex flex-col gap-1 overflow-y-auto p-4 custom-scroll">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 text-sm font-medium uppercase tracking-wider text-ink hover:text-rose"
                  >
                    {item.label}
                  </a>
                  {item.children?.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-6 py-2 text-xs uppercase tracking-wider text-mist hover:text-rose"
                    >
                      {child.label}
                    </a>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
