export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-animated px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="mb-8 inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
        >
          Back to Home
        </a>

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
            Legal
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Terms &amp; Conditions
          </h1>

          <p className="mt-6 text-sm leading-7 text-slate-300">
            Last updated: 1 April 2026
          </p>

          <div className="mt-10 space-y-10 text-slate-200">
            <section>
              <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
              <p className="mt-4 leading-8">
                These Terms &amp; Conditions apply to your use of the website
                operated by Rudd Ventures and to any services provided by us.
                By using this website or engaging our services, you agree to
                these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">2. Services</h2>
              <p className="mt-4 leading-8">
                Rudd Ventures provides services including AI enquiry automation,
                website design and build, and complete enquiry system solutions.
                All services are tailored to each client and agreed before work
                begins.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">3. No Guarantees</h2>
              <p className="mt-4 leading-8">
                We aim to improve enquiry handling, response speed, and online
                presence. However, we do not guarantee specific results,
                revenue, lead volume, or business performance. Outcomes depend
                on your business, market, service offering, and how any system
                is used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">4. Pricing</h2>
              <p className="mt-4 leading-8">
                Pricing is discussed and agreed during consultation. Final
                pricing depends on the project scope, complexity, and business
                requirements. No pricing is guaranteed unless confirmed in
                writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">5. Payments</h2>
              <p className="mt-4 leading-8">
                Payment terms are agreed before work starts. Projects may
                require upfront or staged payments. If payment is not made in
                line with agreed terms, work may be paused or stopped until the
                balance is resolved.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                6. Client Responsibilities
              </h2>
              <p className="mt-4 leading-8">
                Clients are responsible for providing accurate business
                information, reviewing materials provided, and approving final
                content or workflows before use. Clients are also responsible
                for ensuring that business-specific details such as pricing,
                availability, and service information are correct.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                7. AI &amp; Automation Disclaimer
              </h2>
              <p className="mt-4 leading-8">
                Any automation or AI-assisted system provided by Rudd Ventures
                is intended to support business operations by drafting responses
                or improving workflow. Unless otherwise clearly agreed in
                writing, systems are designed for review before use and should
                not be relied on without human oversight.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                8. Intellectual Property
              </h2>
              <p className="mt-4 leading-8">
                All work, materials, systems, and designs remain the property of
                Rudd Ventures until paid for in full. Once full payment has been
                received, ownership of the final agreed deliverables transfers
                to the client unless otherwise stated in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">9. Liability</h2>
              <p className="mt-4 leading-8">
                Rudd Ventures is not liable for business losses, missed
                opportunities, indirect damages, or issues caused by inaccurate
                client information, misuse of delivered systems, or actions
                taken without review and approval.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">10. Changes</h2>
              <p className="mt-4 leading-8">
                We may update these Terms &amp; Conditions from time to time.
                Continued use of the website or services after any updates
                indicates acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">11. Contact</h2>
              <p className="mt-4 leading-8">
                Rudd Ventures
                <br />
                Email: ruddventures@gmail.com
                <br />
                Phone: 07386 478310
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}