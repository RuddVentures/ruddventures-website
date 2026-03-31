"use client";

import { useState } from "react";

export default function AIAutomationPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    "Incoming enquiry emails detected automatically",
    "Lead details logged into a simple tracker",
    "Professional draft replies created for review",
    "No auto-send and no loss of control",
    "Built with rules to avoid false promises or invented pricing",
    "Tailored to your business and how you already work",
  ];

  const process = [
    {
      title: "Enquiry comes in",
      text: "A customer sends an enquiry by email asking about your service, pricing, or availability.",
    },
    {
      title: "Lead is captured",
      text: "The enquiry is logged automatically so nothing gets missed or forgotten.",
    },
    {
      title: "Reply is drafted",
      text: "A professional reply is generated for your review, helping you respond faster.",
    },
    {
      title: "You approve and send",
      text: "You stay in control by reviewing the draft before anything goes back to the customer.",
    },
  ];

  const idealFor = [
    "Trades businesses handling quote requests",
    "Cleaning companies receiving regular service enquiries",
    "Barbers and hairdressers answering bookings and pricing questions",
    "Pet services responding to appointments, sessions, and service questions",
    "Any local service business that still handles enquiries manually",
  ];

  const included = [
    "Enquiry trigger setup",
    "Lead logging system setup",
    "Draft reply workflow setup",
    "Prompt and business rule setup",
    "Testing and refinement",
    "One round of setup adjustments",
  ];

  return (
    <main className="relative overflow-hidden bg-animated text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071426]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 relative">
          <a href="/" className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Rudd Ventures"
              className="h-16 w-16 object-contain"
            />
            <div className="leading-none">
              <span className="block text-lg font-semibold tracking-tight text-white">
                Rudd Ventures
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Home
            </a>

            <div className="group relative flex items-center">
              <button
                type="button"
                className="text-sm font-medium text-white transition"
              >
                Services
              </button>

              <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="w-72 rounded-2xl border border-white/10 bg-[#0b1f3a]/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                  <a
                    href="/ai-automation"
                    className="block rounded-xl px-4 py-3 transition hover:bg-white/10"
                  >
                    <p className="text-sm font-semibold text-white">
                      AI Automation
                    </p>
                    <p className="mt-1 text-xs leading-6 text-slate-300">
                      Capture leads, log enquiries, and draft replies.
                    </p>
                  </a>

                  <a
                    href="/website-design"
                    className="mt-1 block rounded-xl px-4 py-3 transition hover:bg-white/10"
                  >
                    <p className="text-sm font-semibold text-white">
                      Website Design &amp; Build
                    </p>
                    <p className="mt-1 text-xs leading-6 text-slate-300">
                      Clean websites built to generate more enquiries.
                    </p>
                  </a>

                  <a
                    href="/complete-enquiry-system"
                    className="mt-1 block rounded-xl px-4 py-3 transition hover:bg-white/10"
                  >
                    <p className="text-sm font-semibold text-white">
                      Complete Enquiry System
                    </p>
                    <p className="mt-1 text-xs leading-6 text-slate-300">
                      Website + automation combined into one setup.
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <a
              href="/faq"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              FAQ
            </a>

            <a
              href="#pricing"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Contact
            </a>
          </nav>

          <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
            <a
              href="#contact"
              className="rounded-full bg-[#D8BA74] px-4 py-2 text-sm font-semibold text-[#0B1F3A] transition duration-300 hover:bg-[#e3c989]"
            >
              Book
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-[#D8BA74] px-5 py-2.5 text-sm font-semibold text-[#0B1F3A] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e3c989] md:inline-block"
            >
              Book a Call
            </a>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur transition hover:bg-white/10 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#071426]/95 px-6 py-5 backdrop-blur md:hidden">
            <nav className="flex flex-col gap-2">
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Home
              </a>

              <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                <p className="px-2 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Services
                </p>

                <a
                  href="/ai-automation"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
                >
                  AI Automation
                </a>

                <a
                  href="/website-design"
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 block rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
                >
                  Website Design &amp; Build
                </a>

                <a
                  href="/complete-enquiry-system"
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 block rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
                >
                  Complete Enquiry System
                </a>
              </div>

              <a
                href="/faq"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                FAQ
              </a>

              <a
                href="#pricing"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                Pricing
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                Contact
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-[#D8BA74] px-5 py-3 text-center text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#e3c989]"
              >
                Book a Call
              </a>
            </nav>
          </div>
        )}
      </header>

      <section className="relative px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div className="fade-up">
            <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 shadow-sm backdrop-blur">
              AI Enquiry Automation
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl">
              Respond Faster Without Handling Every Enquiry Manually
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Rudd Ventures installs a practical enquiry handling system that
              captures incoming leads, logs them automatically, and drafts
              professional replies for review so your business can respond
              faster without losing control.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#D8BA74] px-7 py-3.5 text-center text-sm font-semibold text-[#0B1F3A] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e3c989]"
              >
                Book a Free Discovery Call
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {["Human approved", "No auto-send", "No false promises"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-sm backdrop-blur"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="fade-up-delay">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D8BA74]">
                What it solves
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Fewer missed leads. Faster follow-up.
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/90 p-5 text-slate-900">
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    Lead captured automatically
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Every enquiry is logged so you have a clearer record of what
                    is coming in.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/90 p-5 text-slate-900">
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    Reply drafted for review
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    A professional draft is created so your team is not starting
                    from scratch every time.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#D8BA74] bg-[#F8F2E6] p-5 text-slate-900">
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    You stay in control
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Nothing is auto-sent, which means your business stays
                    protected while still moving faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/5 px-6 py-20 backdrop-blur">
        <div className="mx-auto max-w-7xl fade-up">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
              What’s included
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              A practical setup built around how your business already works
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/10 p-7 shadow-sm backdrop-blur"
              >
                <p className="text-base font-medium leading-7 text-slate-100">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-20">
        <div className="mx-auto max-w-7xl fade-up">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              A simple four-step process
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/10 p-7 shadow-sm backdrop-blur"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#D8BA74] text-sm font-semibold text-[#0B1F3A]">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/5 px-6 py-20 backdrop-blur">
        <div className="mx-auto max-w-7xl fade-up">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
              Best fit
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Ideal for businesses that still handle enquiries manually
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {idealFor.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/10 p-7 shadow-sm backdrop-blur"
              >
                <p className="text-base font-medium leading-7 text-slate-100">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl fade-up">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
                Setup included
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Done-for-you setup with practical implementation
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                This is not generic software you have to work out yourself. The
                system is set up around your business, your enquiry flow, and
                the way you already operate.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-sm backdrop-blur">
              <div className="space-y-4">
                {included.map((item) => (
                  <div key={item} className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 fade-up">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Clear starting point for automation setup
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Pricing is kept simple, but every setup is slightly different
              depending on your enquiry volume, workflow, and how tailored the
              automation needs to be.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              We’ll confirm the exact scope and pricing during a short
              consultation once we understand what your business needs.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-sm backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              AI Automation
            </p>
            <p className="mt-3 text-5xl font-semibold tracking-tight text-white">
              From £250
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Final pricing depends on complexity, custom rules, and how your
              business currently handles enquiries.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-semibold text-white">What this can include</p>
                <p className="mt-1 text-sm text-slate-300">
                  Simple setups may include basic lead logging and draft reply
                  creation, while more tailored workflows and integrations
                  increase based on scope.
                </p>
              </div>

              <div className="rounded-2xl border border-[#D8BA74] bg-[#F8F2E6] p-4">
                <p className="font-semibold text-[#0B1F3A]">
                  Exact pricing confirmed in consultation
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  We’ll recommend the simplest and most effective setup for your
                  business before confirming the final quote.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-[#D8BA74] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e3c989]"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/10 px-8 py-14 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-14 fade-up">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
                Get started
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Want to improve how your business handles enquiries?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Book a quick conversation and we’ll show you how this can work
                in your business without overcomplicating things.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#071426]/50 p-6">
              <div className="space-y-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-white">
                    Done-for-you setup
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-white">
                    Built around your workflow
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-white">
                    Human approval stays in place
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:ruddventures@gmail.com"
                  className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#0B1F3A] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Email Us
                </a>
                <a
                  href="tel:07917006216"
                  className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white"
                >
                  Call 07386 478310
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}