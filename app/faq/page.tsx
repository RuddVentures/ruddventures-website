export default function FAQPage() {
  const faqs = [
    {
      question: "What does Rudd Ventures actually do?",
      answer:
        "Rudd Ventures helps service-based businesses improve how they generate and handle enquiries. This includes website design and build, AI-powered enquiry automation, or a complete bundled setup combining both.",
    },
    {
      question: "What is the AI Automation service?",
      answer:
        "The AI Automation service is designed to help businesses respond faster to incoming enquiries. It can capture enquiries, log lead details, and draft professional replies for review, while keeping human approval in place.",
    },
    {
      question: "Does the system send replies automatically?",
      answer:
        "No. The system is designed to create draft replies for review, not auto-send them. That means your business stays in control and can approve messages before anything is sent.",
    },
    {
      question: "Can the system make up pricing or promises?",
      answer:
        "No. The setup is built with rules to avoid false promises, invented pricing, or inaccurate information. The goal is to help your business respond faster without losing control or creating risk.",
    },
    {
      question: "What is included in the Website Design service?",
      answer:
        "Website Design & Build includes a clean, modern website structure built for service businesses. The focus is on clarity, professionalism, mobile-friendliness, and creating a better path for customers to enquire.",
    },
    {
      question: "What is the Complete Enquiry System?",
      answer:
        "The Complete Enquiry System combines both website design and enquiry automation into one joined-up setup. It helps your business attract more enquiries online and handle them more effectively once they come in.",
    },
    {
      question: "Who is this best suited for?",
      answer:
        "Rudd Ventures is best suited to local service businesses such as trades, cleaning companies, barbers, hairdressers, pet services, and other businesses that rely on enquiries to generate work.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Typical starting points are around £250–£500 for AI Automation, £300–£800 for Website Design & Build, and £500–£1,000+ for the Complete Enquiry System. Final pricing depends on how tailored the setup needs to be.",
    },
    {
      question: "How long does setup take?",
      answer:
        "This depends on the service and how much customisation is needed. Smaller setups can be completed more quickly, while more tailored projects may take longer. Timing is discussed clearly before work begins.",
    },
    {
      question: "Do I need to understand the technical side?",
      answer:
        "No. The service is designed to be practical and done-for-you. The goal is to help your business get the benefits of a better system without drowning you in technical detail.",
    },
    {
      question: "Can this work alongside my current business setup?",
      answer:
        "In most cases, yes. Rudd Ventures is designed to work around how service businesses already operate, rather than forcing them into a completely different process.",
    },
    {
      question: "Can I start with one service and add the other later?",
      answer:
        "Yes. You can start with either Website Design or AI Automation first, then build toward the Complete Enquiry System later if that makes more sense for your business.",
    },
    {
      question: "What happens after I enquire?",
      answer:
        "You’ll have a short conversation about your business, your current setup, and what you need help with. From there, the best route can be recommended, whether that is a website, automation, or a full bundled system.",
    },
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
              <button className="text-sm font-medium text-slate-300 transition hover:text-white">
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

            <a href="/faq" className="text-sm font-medium text-white transition">
              FAQ
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
        <div className="mx-auto max-w-5xl fade-up text-center">
          <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 shadow-sm backdrop-blur">
            Frequently Asked Questions
          </div>

          <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl">
            Common Questions Answered
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            If you want to understand how the services work, what is included,
            and whether Rudd Ventures is the right fit for your business, these
            are the questions most people ask first.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/5 px-6 py-20 backdrop-blur">
        <div className="mx-auto max-w-5xl fade-up">
          <div className="space-y-6">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-sm backdrop-blur"
              >
                <h2 className="text-2xl font-semibold text-white">
                  {item.question}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/10 px-8 py-14 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-14 fade-up">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
                Still unsure?
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Ask directly and we’ll point you in the right direction
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                If you are not sure whether you need a website, automation, or a
                complete bundled setup, get in touch and we’ll help you work out
                the best starting point.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#071426]/50 p-6">
              <div className="space-y-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-white">
                    Website design &amp; build
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-white">
                    AI enquiry automation
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