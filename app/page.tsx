export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold tracking-tight">
            Rudd Ventures
          </a>

          <nav className="hidden gap-6 md:flex">
            <a href="#solution" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              Solution
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              Pricing
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Book a Call
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              Done-for-you AI automation for service businesses
            </p>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Done-for-You AI Enquiry Response Systems for Small Businesses
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Rudd Ventures helps service-based businesses respond faster by
              detecting new enquiries, logging leads, and drafting professional
              replies for review — while keeping full human control.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Book a Free Discovery Call
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-900"
              >
                See How It Works
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Built for trades, cleaning companies, barbers, hairdressers, pet
              services, and other local businesses that still handle enquiries manually.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="space-y-5">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Incoming Enquiry</p>
                <p className="mt-2 text-sm text-slate-600">
                  A customer email comes in asking about availability, service details, or next steps.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Lead Logged</p>
                <p className="mt-2 text-sm text-slate-600">
                  The system captures the enquiry details so nothing gets missed.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Draft Reply Created</p>
                <p className="mt-2 text-sm text-slate-600">
                  A professional reply is prepared for review. Nothing is auto-sent.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-sm font-semibold text-emerald-800">
                  You stay in control
                </p>
                <p className="mt-2 text-sm text-emerald-700">
                  Faster response process. No missed leads. No invented pricing. No false promises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-slate-200 bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              The problem
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Slow replies can cost you real business
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Most small businesses are busy doing the actual work, not sitting
              behind a screen answering every email the moment it comes in.
              That means enquiries get delayed, forgotten, or answered too late.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "New enquiries sit in the inbox too long",
              "Good leads get missed or forgotten",
              "Replying takes time you do not have",
              "Responses can be inconsistent or rushed",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-base font-medium text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              The solution
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              A practical enquiry system that helps you reply faster
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Rudd Ventures installs a custom Enquiry Response System for your
              business. When a customer email comes in, the system can detect
              the enquiry, analyse the message, log the lead, and prepare a
              professional draft reply for you to review.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              This is not a generic AI tool you have to figure out yourself. It
              is a done-for-you setup built around your business, your services,
              and the way you already work.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-t border-slate-200 bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Simple process. Full control.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "1. Enquiry comes in",
                text: "When a new customer email arrives, the system detects it automatically.",
              },
              {
                title: "2. AI analyses it",
                text: "The message is reviewed so the system can understand what the customer is asking.",
              },
              {
                title: "3. Lead is logged",
                text: "Important details are recorded so nothing gets missed or forgotten.",
              },
              {
                title: "4. Draft reply is created",
                text: "A clear and professional email draft is prepared for review.",
              },
              {
                title: "5. You approve and send",
                text: "Nothing is auto-sent. Human approval stays in control.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-slate-500">
            Built with safeguards to avoid false promises, invented pricing, or inaccurate replies.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Who it’s for
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Built for service businesses that receive regular enquiries
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
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            If your business loses time to admin or misses opportunities because
            replies are delayed, this system is likely a strong fit.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-slate-200 bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Benefits
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              What this gives your business
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Faster response times",
                text: "Help customers hear back sooner, even when you are busy.",
              },
              {
                title: "Fewer missed leads",
                text: "Every enquiry is captured and logged properly.",
              },
              {
                title: "Consistent professional replies",
                text: "No more rushed or uneven responses.",
              },
              {
                title: "Less admin",
                text: "Save time without hiring extra staff.",
              },
              {
                title: "Human control stays in place",
                text: "Drafts are reviewed before anything is sent.",
              },
              {
                title: "Built around your business",
                text: "Configured for your services, your workflow, and your tone.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Simple setup. Practical results.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Rudd Ventures offers this as a done-for-you installation service,
              not a complicated software product.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              You get a custom system configured for your business, your enquiry
              flow, and your response process.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">Setup Fee</p>
            <p className="mt-2 text-4xl font-bold text-slate-900">£250–£500</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Final pricing depends on workflow complexity and custom requirements.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-white p-4">
                <p className="font-semibold text-slate-900">Optional monthly support</p>
                <p className="mt-1 text-sm text-slate-600">
                  Available for updates, changes, and maintenance.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4">
                <p className="font-semibold text-slate-900">Client platform costs</p>
                <p className="mt-1 text-sm text-slate-600">
                  Zapier is usually around £20/month, plus minimal AI usage costs.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4">
                <p className="font-semibold text-slate-900">No inflated software fees</p>
                <p className="mt-1 text-sm text-slate-600">
                  Just a practical setup designed to save time and improve response speed.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Request Your Setup Quote
            </a>
          </div>
        </div>
      </section>

      {/* Why Rudd Ventures */}
      <section className="border-t border-slate-200 bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Why Rudd Ventures
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Practical automation for real businesses
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              This is not about hype or overcomplicated tech. It is about
              installing useful systems that save time, improve response speed,
              and help business owners stay in control.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 px-8 py-12 text-white md:px-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Get started
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Want to see if this would work for your business?
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            If your business receives regular enquiries and you want faster,
            more consistent replies without giving up control, Rudd Ventures can
            build a system around the way you work.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:hello@ruddventures.co.uk"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Email Rudd Ventures
            </a>
            <a
              href="tel:+447000000000"
              className="rounded-full border border-slate-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white"
            >
              Call Now
            </a>
          </div>

          <p className="mt-5 text-sm text-slate-400">
            No pressure. Just a straightforward conversation about whether the setup is right for your business.
          </p>
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