export default function Home() {
  const problems = [
    "New enquiries sit too long in the inbox",
    "Good leads get missed or forgotten",
    "Replying takes time you do not have",
    "Responses can be rushed or inconsistent",
  ];

  const benefits = [
    {
      title: "Faster Replies",
      text: "Help customers hear back sooner without having to write every message from scratch.",
    },
    {
      title: "No Missed Leads",
      text: "Each enquiry is captured and logged so opportunities do not slip through the cracks.",
    },
    {
      title: "Full Human Control",
      text: "You approve everything before it is sent, so control stays with your business.",
    },
  ];

  const steps = [
    "We connect your enquiry source",
    "AI reviews and understands the message",
    "The lead is logged and a draft reply is created",
    "You review, approve, and send",
  ];

  const industries = [
    {
      title: "Trades Businesses",
      text: "Plumbers, electricians, builders, roofers, heating engineers and more.",
    },
    {
      title: "Cleaning Companies",
      text: "Domestic, commercial, and specialist cleaning businesses handling regular enquiries.",
    },
    {
      title: "Barbers & Hairdressers",
      text: "Service businesses managing appointment, pricing, and availability questions.",
    },
    {
      title: "Pet Services",
      text: "Dog trainers, groomers, walkers, and related local service businesses.",
    },
  ];

  const examples = [
    {
      title: "Plumbing business",
      text: "A customer asks about availability for a repair. The system logs the lead and prepares a professional draft response for review.",
    },
    {
      title: "Cleaning company",
      text: "A new enquiry comes in asking about domestic cleaning. The lead is captured immediately so it is not missed during the day.",
    },
    {
      title: "Dog groomer",
      text: "A customer asks about appointments and services. A clear reply is drafted without making up pricing or promises.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-animated text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071426]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Rudd Ventures"
              className="h-16 w-16 object-contain"
            />
            <div className="leading-none">
              <span className="block text-lg font-semibold tracking-tight text-white">
                Rudd Ventures
              </span>
              <span className="block pt-1 text-xs uppercase tracking-[0.22em] text-[#D8BA74]">
                AI Automation
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#solution"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Solution
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              How It Works
            </a>
            <a
              href="#use-cases"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Use Cases
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

          <a
            href="#contact"
            className="rounded-full bg-[#D8BA74] px-5 py-2.5 text-sm font-semibold text-[#0B1F3A] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e3c989]"
          >
            Book a Call
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div className="fade-up">
            <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 shadow-sm backdrop-blur">
              Done-for-you AI automation for service businesses
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl">
              Never Miss Another Enquiry Without Hiring Staff
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Rudd Ventures installs a practical AI-powered enquiry system that
              detects new emails, logs leads, and drafts professional replies
              for review — helping you respond faster while staying fully in
              control.
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

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
              Built for trades, cleaning companies, barbers, hairdressers, pet
              services, and other local businesses that still handle enquiries
              manually.
            </p>
          </div>

          <div className="fade-up-delay relative">
            <div className="floating-panel rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D8BA74]">
                    Enquiry Workflow
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Built to move faster
                  </h2>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                  Human approved
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/90 p-5 text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    Incoming Enquiry
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    A customer email arrives asking about availability, next
                    steps, or service information.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/90 p-5 text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    Lead Logged
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    The system captures the enquiry details so nothing gets
                    missed or forgotten.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/90 p-5 text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    Draft Reply Created
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    A professional reply is prepared for you to review before
                    sending.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#D8BA74] bg-[#F8F2E6] p-5 text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    You stay in control
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Nothing is auto-sent. No invented pricing. No false
                    promises. Just a faster, more reliable response process.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-4 shadow-lg backdrop-blur md:block">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                Outcome
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                Faster replies. Fewer missed leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-white/10 bg-white/5 px-6 py-20 backdrop-blur">
        <div className="mx-auto max-w-7xl fade-up">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
              The problem
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Slow replies quietly cost small businesses real opportunities
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Most business owners are busy doing the actual work, not sitting
              behind a screen answering every enquiry the moment it comes in.
              That leads to missed messages, delayed replies, and customers
              going elsewhere.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {problems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-lg"
              >
                <p className="text-base font-medium leading-7 text-slate-100">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="px-6 py-20">
        <div className="mx-auto max-w-7xl fade-up">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
              The solution
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              A simple enquiry response system built around your business
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Rudd Ventures sets up a done-for-you system that detects incoming
              customer emails, analyses the enquiry, logs the lead, and drafts a
              professional reply for your team to review.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              This is not generic software you have to figure out yourself. It
              is a practical setup service built around your workflow, your
              services, and the way you already operate.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/10 p-7 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl"
              >
                <div className="mb-4 h-1 w-14 rounded-full bg-[#D8BA74]" />
                <h3 className="text-xl font-semibold text-white">
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

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-t border-white/10 bg-white/5 px-6 py-20 backdrop-blur"
      >
        <div className="mx-auto max-w-7xl fade-up">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              A straightforward process with no loss of control
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-white/10 p-7 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-lg"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#D8BA74] text-sm font-semibold text-[#0B1F3A]">
                  {index + 1}
                </div>
                <p className="text-base font-semibold leading-7 text-white">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-slate-400">
            Built with safeguards to avoid false promises, inaccurate details,
            or made-up pricing.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl fade-up">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
              Who it’s for
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Designed for service businesses that want faster enquiry handling
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/10 p-7 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-lg"
              >
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

      {/* Use cases */}
      <section
        id="use-cases"
        className="border-t border-white/10 bg-white/5 px-6 py-20 backdrop-blur"
      >
        <div className="mx-auto max-w-7xl fade-up">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
              What this looks like
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Practical examples for real businesses
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              The system is designed to support the way service businesses
              already work — not complicate it.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {examples.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D8BA74]">
                  Example
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="border-t border-white/10 px-6 py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 fade-up">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Simple setup. Practical return.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Pricing depends on the complexity of your workflow and what your
              business needs.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              The service is offered as a one-time setup, with optional ongoing
              support if you want future updates and changes.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-sm backdrop-blur transition duration-300 hover:shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Typical setup fee
            </p>
            <p className="mt-3 text-5xl font-semibold tracking-tight text-white">
              £250–£500
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Final pricing depends on complexity, integrations, and any custom
              setup requirements.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-semibold text-white">
                  Optional monthly support
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Available for maintenance, updates, and further improvements.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-semibold text-white">
                  Low ongoing platform costs
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Clients usually cover Zapier and minimal AI usage separately.
                </p>
              </div>

              <div className="rounded-2xl border border-[#D8BA74] bg-[#F8F2E6] p-4">
                <p className="font-semibold text-[#0B1F3A]">
                  No bloated software fees
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Just a practical system designed to save time and improve
                  response speed.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-[#D8BA74] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e3c989]"
            >
              Get Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/10 px-8 py-14 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-14 fade-up">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
                Get started
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Want to stop missing enquiries?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Book a quick conversation and we’ll show you how this could work
                in your business, with no pressure and no overcomplicated tech
                talk.
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
                  Call 07917 006216
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Rudd Ventures. All rights reserved.</p>
          <p>AI-powered automation setup for small businesses.</p>
        </div>
      </footer>
    </main>
  );
}