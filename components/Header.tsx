"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071426]/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-4">
          <img src="/logo.png" alt="Rudd Ventures" className="h-16 w-16 object-contain" />
          <span className="text-lg font-semibold text-white">
            Rudd Ventures
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-sm text-white">Home</a>

          <a href="/ai-automation" className="text-sm text-slate-300 hover:text-white">
            AI Automation
          </a>

          <a href="/website-design" className="text-sm text-slate-300 hover:text-white">
            Website Design
          </a>

          <a href="/complete-enquiry-system" className="text-sm text-slate-300 hover:text-white">
            Complete System
          </a>

          <a href="/faq" className="text-sm text-slate-300 hover:text-white">
            FAQ
          </a>

          <a href="#contact" className="text-sm text-slate-300 hover:text-white">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block rounded-full bg-[#D8BA74] px-5 py-2.5 text-sm font-semibold text-[#0B1F3A]"
        >
          Book a Call
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#071426] px-6 py-6 space-y-4">
          <a href="/" className="block text-white">Home</a>
          <a href="/ai-automation" className="block text-slate-300">AI Automation</a>
          <a href="/website-design" className="block text-slate-300">Website Design</a>
          <a href="/complete-enquiry-system" className="block text-slate-300">Complete System</a>
          <a href="/faq" className="block text-slate-300">FAQ</a>
          <a href="#contact" className="block text-[#D8BA74] font-semibold">Contact</a>
        </div>
      )}
    </header>
  );
}