export default function Home() {
  const problems = [
    "New enquiries sit too long in the inbox",
    "Good leads get missed or forgotten",
    "Replying takes time you do not have",
    "A weak website can cost you leads before they even contact you",
  ];

  const services = [
    {
      title: "AI Enquiry Automation",
      text: "A practical system that captures enquiries, logs leads, and drafts professional replies for review so your business responds faster.",
      href: "/ai-automation",
      cta: "View AI Automation",
    },
    {
      title: "Website Design & Build",
      text: "Clean, modern websites built for service businesses that want to look more professional and generate more enquiries.",
      href: "/website-design",
      cta: "View Website Design",
    },
    {
      title: "Complete Enquiry System",
      text: "A combined setup that gives your business both a stronger online presence and a better system for handling incoming leads.",
      href: "/complete-enquiry-system",
      cta: "View Bundle",
    },
  ];

  const steps = [
    "We understand your business, services, and current enquiry process",
    "We build your website and/or install your enquiry system",
    "Enquiries are captured, tracked, and drafted for review",
    "You stay in control while your business responds faster",
  ];

  const industries = [
    {
      title: "Trades Businesses",
      text: "Plumbers, electricians, builders, roofers, heating engineers and similar local trades.",
    },
    {
      title: "Cleaning Companies",
      text: "Domestic, commercial, and specialist cleaning businesses handling regular enquiries.",
    },
    {
      title: "Barbers & Hairdressers",
      text: "Service businesses managing bookings, pricing questions, and day-to-day customer enquiries.",
    },
    {
      title: "Pet Services",
      text: "Dog trainers, groomers, walkers, behaviourists, and related local service businesses.",
    },
  ];

  const examples = [
    {
      title: "Website only",
      text: "A local service business needs a cleaner, more professional website that gives customers a better first impression and a clearer route to enquire.",
    },
    {
      title: "Automation only",
      text: "A business already gets enquiries but needs a faster, more organised way to capture leads and draft replies without missing opportunities.",
    },
    {
      title: "Full bundle",
      text: "A business wants both a stronger online presence and a better way to manage incoming leads from first contact onward.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-animated text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071426]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
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
              href="#services"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Services
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
              Websites & smart enquiry systems for service businesses
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl">
              Get More Enquiries and Respond Faster Without Hiring Staff
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Rudd Ventures helps service businesses grow with clean websites
              and practical enquiry systems that capture leads, log them
              properly, and draft professional replies for review.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="rounded-full bg-[#D8BA74] px-7 py-3.5 text-center text-sm font-semibold text-[#0B1F3A] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e3c989]"
              >
                Explore Services
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Human approved",
                "No auto-send",
                "No false promises",
                "Built for service businesses",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-sm backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
              Built for trades, cleaning companies, barbers, hairdressers, pet
              services, and other local businesses that want better systems and
              a stronger online presence.
            </p>
          </div>

          <div className="fade-up-delay relative">
            <div className="floating-panel rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D8BA74]">
                    Rudd Ventures
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Website + enquiry system
                  </h2>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                  Done for you
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/90 p-5 text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    Website generates enquiries
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    A clean, modern website helps customers understand your
                    services and take the next step.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/90 p-5 text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    Lead captured automatically
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    The system records the enquiry details so nothing gets
                    missed or forgotten.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/90 p-5 text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    Draft reply created
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    A professional reply is prepared for review so your business
                    can respond faster.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#D8BA74] bg-[#F8F2E6] p-5 text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    You stay in control
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    No auto-send. No invented pricing. No false promises. Just
                    a stronger process for handling enquiries properly.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-20 left-0 hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-4 shadow-lg backdrop-blur md:block">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                Outcome
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                More enquiries. Faster replies.
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
              Good businesses still lose leads through weak systems
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Some businesses do not have a strong website, and many still
              handle enquiries manually. That means missed messages, slow
              replies, and potential customers going elsewhere.
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

      {/* Services Overview */}
      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-7xl fade-up">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
              Our services
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Choose the right starting point for your business
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Whether you need a better website, a better enquiry process, or
              both combined, Rudd Ventures gives you a practical setup built
              around your business.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((item) => (
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
                <a
                  href={item.href}
                  className="mt-6 inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
                >
                  {item.cta}
                </a>
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
              A straightforward process built around your business
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
              Built for local service businesses
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
              Flexible options depending on what your business needs
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Some businesses need a better website. Some need a better response
              system. Some need both.
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

      {/* Pricing Snapshot */}
      <section id="pricing" className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 fade-up">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Flexible service options for different business needs
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Pricing depends on whether you need website design, automation, or
              a complete combined setup.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Each service has its own page with more detail on what is included
              and how it can work for your business.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-sm backdrop-blur transition duration-300 hover:shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Starting points
            </p>

            <div className="mt-5 space-y-4 text-white">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-semibold text-white">AI Automation</p>
                <p className="mt-1 text-sm text-slate-300">From £250–£500</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-semibold text-white">Website Design & Build</p>
                <p className="mt-1 text-sm text-slate-300">From £300–£800</p>
              </div>

              <div className="rounded-2xl border border-[#D8BA74] bg-[#F8F2E6] p-4">
                <p className="font-semibold text-[#0B1F3A]">
                  Complete Enquiry System
                </p>
                <p className="mt-1 text-sm text-slate-700">From £500–£1,000+</p>
              </div>
            </div>

            <a
              href="#services"
              className="mt-8 inline-block rounded-full bg-[#D8BA74] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e3c989]"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/10 px-8 py-14 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-14 fade-up">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
                Get started
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Want a better way to generate and handle enquiries?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Book a quick conversation and we’ll show you the best starting
                point for your business, whether that is a website, an enquiry
                system, or a complete bundled setup.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#071426]/50 p-6">
              <div className="space-y-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-white">
                    AI enquiry automation
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-white">
                    Website design & build
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-white">
                    Complete enquiry system bundle
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
          <p>Websites and smart enquiry systems for service businesses.</p>
        </div>
      </footer>
    </main>
  );
}