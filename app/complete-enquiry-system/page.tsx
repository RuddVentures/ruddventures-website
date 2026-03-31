export default function CompleteEnquirySystemPage() {
  const features = [
    "Website design and build included",
    "AI enquiry automation setup included",
    "Lead capture and tracking system included",
    "Draft reply workflow included",
    "Built around your business and services",
    "Designed to help you attract and handle more enquiries",
  ];

  const process = [
    {
      title: "We understand your business",
      text: "We look at how your business currently generates enquiries and how you handle them now.",
    },
    {
      title: "We build your website",
      text: "Your website is designed to create a stronger first impression and give customers a clear way to enquire.",
    },
    {
      title: "We install the enquiry system",
      text: "Your new enquiries are captured, logged, and draft replies are created for review.",
    },
    {
      title: "You launch with a full system",
      text: "You end up with a more complete setup that helps your business look professional and respond faster.",
    },
  ];

  const idealFor = [
    "Businesses that need both a better website and better enquiry handling",
    "Businesses starting from scratch and wanting a stronger setup from day one",
    "Service businesses that want a cleaner online presence and better organisation",
    "Owners who want a more complete system rather than separate fixes",
    "Businesses that want to attract leads and handle them properly",
  ];

  const included = [
    "Homepage design and build",
    "Service section structure",
    "Contact-focused website layout",
    "Enquiry automation setup",
    "Lead tracking setup",
    "Draft reply workflow setup",
    "Prompt and business rule setup",
    "Testing and refinement",
  ];

  return (
    <main className="relative overflow-hidden bg-animated text-white">
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

          <a
            href="#contact"
            className="rounded-full bg-[#D8BA74] px-5 py-2.5 text-sm font-semibold text-[#0B1F3A] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e3c989]"
          >
            Book a Call
          </a>
        </div>
      </header>

      <section className="relative px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div className="fade-up">
            <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 shadow-sm backdrop-blur">
              Complete Enquiry System
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl">
              A Complete System to Help Your Business Attract and Handle More Enquiries
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Rudd Ventures combines website design and enquiry automation into
              one practical setup, helping service businesses create a stronger
              online presence and respond to leads faster without adding more
              admin.
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
              {[
                "Website included",
                "Automation included",
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
          </div>

          <div className="fade-up-delay">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D8BA74]">
                What it solves
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Stronger online presence. Stronger lead handling.
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/90 p-5 text-slate-900">
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    Website brings enquiries in
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Customers get a cleaner first impression and a clearer path
                    to enquire.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/90 p-5 text-slate-900">
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    System handles enquiries properly
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    New leads are captured, logged, and prepared for follow-up
                    more efficiently.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#D8BA74] bg-[#F8F2E6] p-5 text-slate-900">
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    Better all-round setup
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Instead of fixing one part of the problem, this gives your
                    business a stronger full system.
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
              A complete setup designed to help your business grow
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
              A simple four-step bundled process
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
              Ideal for businesses that want a stronger full setup
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
                Website and automation delivered as one joined-up system
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                This is the strongest option for businesses that want to improve
                both how they attract leads and how they handle them once they
                come in.
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
              Stronger value through a complete bundled setup
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Pricing is kept simple, but every bundled setup is slightly
              different depending on the website scope, automation requirements,
              and how tailored the full system needs to be.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              We’ll confirm the exact scope and pricing during a short
              consultation once we understand what your business needs.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-sm backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Complete Enquiry System
            </p>
            <p className="mt-3 text-5xl font-semibold tracking-tight text-white">
              From £500
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Final pricing depends on the website build, the automation logic,
              and how tailored the full setup needs to be for your business.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-semibold text-white">What this can include</p>
                <p className="mt-1 text-sm text-slate-300">
                  Standard bundled setups start from £500, while more advanced
                  websites, deeper automation, and more tailored structure
                  increase based on scope.
                </p>
              </div>

              <div className="rounded-2xl border border-[#D8BA74] bg-[#F8F2E6] p-4">
                <p className="font-semibold text-[#0B1F3A]">
                  Exact pricing confirmed in consultation
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  We’ll recommend the simplest and most effective combined setup
                  for your business before confirming the final quote.
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
                Want a complete system for generating and handling enquiries?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Book a quick conversation and we’ll show you what a more
                complete setup could look like for your business.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#071426]/50 p-6">
              <div className="space-y-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-white">
                    Website included
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-white">
                    Enquiry automation included
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-white">
                    Built as one joined-up system
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
    </main>
  );
}