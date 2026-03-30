export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Rudd Ventures"
              className="h-16 w-16 object-contain"
            />
            <div className="leading-none">
              <span className="block text-lg font-semibold tracking-tight text-slate-900">
                Rudd Ventures
              </span>
              <span className="block pt-1 text-xs uppercase tracking-[0.22em] text-[#C8A24D]">
                AI Automation
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#solution"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Solution
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#0B1F3A] px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#10284b]"
          >
            Book a Call
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="hero-glow absolute left-1/2 top-0 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-[#0B1F3A]/8 blur-3xl" />
          <div className="hero-glow-delayed absolute right-[8%] top-[30%] h-[260px] w-[260px] rounded-full bg-[#C8A24D]/10 blur-3xl" />
          <div className="hero-glow absolute left-[10%] top-[45%] h-[220px] w-[220px] rounded-full bg-slate-200/50 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div className="fade-up">
            <div className="mb-5 inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              Done-for-you AI automation for service businesses
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight text-[#0B1F3A] md:text-7xl">
              Never Miss Another Enquiry Without Hiring Staff
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Rudd Ventures installs a practical AI-powered enquiry system that
              detects new emails, logs leads, and drafts professional replies
              for review — helping you respond faster while staying fully in
              control.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#0B1F3A] px-7 py-3.5 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#10284b]"
              >
                Book a Free Discovery Call
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-center text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:border-slate-900"
              >
                See How It Works
              </a>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500">
              Built for trades, cleaning companies, barbers, hairdressers, pet
              services, and other local businesses that still handle enquiries
              manually.
            </p>
          </div>

          <div className="fade-up-delay relative">
            <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C8A24D]">
                    Enquiry Workflow
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-[#0B1F3A]">
                    Built to move faster
                  </h2>
                </div>
                <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                  Human approved
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    Incoming Enquiry
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    A customer email arrives asking about availability, next
                    steps, or service information.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    Lead Logged
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    The system captures the enquiry details so nothing gets
                    missed or forgotten.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    Draft Reply Created
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    A professional reply is prepared for you to review before
                    sending.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#D8BA74] bg-[#F8F2E6] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
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

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-lg md:block">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Outcome
              </p>
              <p className="mt-2 text-lg font-semibold text-[#0B1F3A]">
                Faster replies. Fewer missed leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-slate-200 bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl fade-up">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C8A24D]">
              The problem
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1F3A] md:text-5xl">
              Slow replies quietly cost small businesses real opportunities
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Most business owners are busy doing the actual work, not sitting
              behind a screen answering every enquiry the moment it comes in.
              That leads to missed messages, delayed replies, and customers
              going elsewhere.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "New enquiries sit too long in the inbox",
              "Good leads get missed or forgotten",
              "Replying takes time you do not have",
              "Responses can be rushed or inconsistent",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-base font-medium leading-7 text-slate-800">
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C8A24D]">
              The solution
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1F3A] md:text-5xl">
              A simple enquiry response system built around your business
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Rudd Ventures sets up a done-for-you system that detects incoming
              customer emails, analyses the enquiry, logs the lead, and drafts a
              professional reply for your team to review.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              This is not generic software you have to figure out yourself. It
              is a practical setup service built around your workflow, your
              services, and the way you already operate.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Faster Replies",
                text: "Help customers hear back sooner without having to write every response from scratch.",
              },
              {
                title: "No Missed Leads",
                text: "Each enquiry is captured and logged so opportunities do not slip through the cracks.",
              },
              {
                title: "Full Control",
                text: "You approve everything before it is sent, so human judgment stays part of the process.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-[#0B1F3A]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
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
        className="border-t border-slate-200 bg-slate-50 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl fade-up">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C8A24D]">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1F3A] md:text-5xl">
              A straightforward process with no loss of control
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "1. We connect your enquiry source",
              "2. AI reviews and understands the message",
              "3. The lead is logged and a draft is created",
              "4. You review, approve, and send",
            ].map((step) => (
              <div
                key={step}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-base font-semibold leading-7 text-[#0B1F3A]">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-slate-500">
            Built with safeguards to avoid false promises, inaccurate details,
            or made-up pricing.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl fade-up">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C8A24D]">
              Who it’s for
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1F3A] md:text-5xl">
              Designed for service businesses that want faster enquiry handling
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Trades businesses",
              "Cleaning companies",
              "Barbers and hairdressers",
              "Pet services",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[#0B1F3A]">{item}</h3>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            If your business gets regular enquiries and you lose time replying
            manually, this is built for you.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="border-t border-slate-200 bg-slate-50 px-6 py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 fade-up">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C8A24D]">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1F3A] md:text-5xl">
              Simple setup. Practical return.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Pricing depends on the complexity of your workflow and what your
              business needs.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              The service is offered as a one-time setup, with optional ongoing
              support if you want future updates and changes.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Typical setup fee
            </p>
            <p className="mt-3 text-5xl font-semibold tracking-tight text-[#0B1F3A]">
              £250–£500
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Final pricing depends on complexity, integrations, and any custom
              setup requirements.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-[#0B1F3A]">
                  Optional monthly support
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Available for maintenance, updates, and further improvements.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-[#0B1F3A]">
                  Low ongoing platform costs
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Clients usually cover Zapier and minimal AI usage separately.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#10284b]"
            >
              Get Pricing
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#0B1F3A] px-8 py-14 text-white md:px-14 fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
            Get started
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Want to stop missing enquiries?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Book a quick conversation and we’ll show you how this could work in
            your business, with no pressure and no overcomplicated tech talk.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:info@ruddventures.co.uk"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#0B1F3A] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Contact Us
            </a>
            <a
              href="tel:+447000000000"
              className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Rudd Ventures. All rights reserved.</p>
          <p>AI-powered automation setup for small businesses.</p>
        </div>
      </footer>
    </main>
  );
}