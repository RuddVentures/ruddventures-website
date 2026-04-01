export default function LegalDisclaimerPage() {
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
            Legal Disclaimer
          </h1>

          <p className="mt-6 text-sm leading-7 text-slate-300">
            Last updated: 1 April 2026
          </p>

          <div className="mt-10 space-y-10 text-slate-200">
            <section>
              <h2 className="text-2xl font-semibold text-white">
                1. General Information
              </h2>
              <p className="mt-4 leading-8">
                The information provided on this website is for general business
                information purposes only. While we aim to keep information
                clear and accurate, we make no guarantees that all content will
                always be complete, current, or suitable for every situation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                2. No Professional Advice
              </h2>
              <p className="mt-4 leading-8">
                Nothing on this website constitutes legal, financial,
                regulatory, or professional advice. Any decisions made based on
                information provided on this website are made at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                3. AI &amp; Automation Disclaimer
              </h2>
              <p className="mt-4 leading-8">
                Any AI or automation systems provided by Rudd Ventures are
                intended to support business processes. These systems may assist
                with drafting responses or improving workflow, but they should
                not be relied upon without appropriate human review and
                oversight unless explicitly agreed otherwise in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                4. Website Content Disclaimer
              </h2>
              <p className="mt-4 leading-8">
                We are not responsible for any loss or damage resulting from
                reliance on information displayed on this website. Users are
                responsible for checking that any service, pricing, or business
                information is suitable for their own needs before acting on it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                5. Limitation of Liability
              </h2>
              <p className="mt-4 leading-8">
                Rudd Ventures will not be liable for any indirect or
                consequential loss, loss of business, loss of revenue, missed
                opportunities, or interruption arising from the use of this
                website or any related services, except where liability cannot
                legally be excluded.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">6. Contact</h2>
              <p className="mt-4 leading-8">
                Rudd Ventures
                <br />
                Email: ruddventures@gmail.com
                <br />
                Phone: 07917 006216
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}