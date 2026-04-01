export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <p className="mt-6 text-sm leading-7 text-slate-300">
            Last updated: 1 April 2026
          </p>

          <div className="mt-10 space-y-10 text-slate-200">
            <section>
              <h2 className="text-2xl font-semibold text-white">1. Overview</h2>
              <p className="mt-4 leading-8">
                Rudd Ventures is committed to protecting your privacy. This
                policy explains how we collect, use, and store personal
                information when you use our website or contact us regarding our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                2. Information We Collect
              </h2>
              <p className="mt-4 leading-8">
                We may collect personal information such as your name, email
                address, phone number, business name, and any information you
                include when contacting us or enquiring about our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                3. How We Use Your Information
              </h2>
              <p className="mt-4 leading-8">
                We use your information to respond to enquiries, discuss
                projects, provide services, improve our website and systems, and
                communicate with you about any work or requested information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">4. Data Storage</h2>
              <p className="mt-4 leading-8">
                We take reasonable steps to store personal information securely.
                Data may be stored through trusted third-party platforms used to
                operate the business, such as email, hosting, automation, and
                document tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                5. Third-Party Services
              </h2>
              <p className="mt-4 leading-8">
                We may use third-party services such as website hosting, email
                providers, analytics tools, and automation platforms in order to
                run our website and deliver services. These providers may
                process personal information where necessary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">6. Data Sharing</h2>
              <p className="mt-4 leading-8">
                We do not sell personal information. We only share information
                where reasonably necessary to provide services, respond to
                enquiries, comply with legal obligations, or operate the
                business effectively.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">7. Cookies</h2>
              <p className="mt-4 leading-8">
                Our website may use cookies or similar technologies for basic
                site functionality, website performance, and analytics. By using
                the site, you accept that these technologies may be used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">8. Your Rights</h2>
              <p className="mt-4 leading-8">
                You may request access to the personal information we hold about
                you, ask for it to be corrected, or request deletion where
                appropriate. To do so, please contact us directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">9. Contact</h2>
              <p className="mt-4 leading-8">
                If you have any privacy-related questions, please contact:
                <br />
                ruddventures@gmail.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}