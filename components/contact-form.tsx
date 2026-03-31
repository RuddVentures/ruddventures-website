type ContactFormProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
};

export default function ContactForm({
  eyebrow,
  title,
  description,
  highlights,
}: ContactFormProps) {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/10 px-8 py-14 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          
          {/* LEFT SIDE */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BA74]">
              {eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {title}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {description}
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4"
                >
                  <p className="text-sm font-semibold text-white">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="rounded-[2rem] border border-white/10 bg-[#071426]/60 p-6">
            <form
              action="https://formsubmit.co/ruddventures@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input
                type="hidden"
                name="_subject"
                value="New website enquiry - Rudd Ventures"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="text"
                name="_honey"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* NAME */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-[#D8BA74]"
                  placeholder="Your name"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-[#D8BA74]"
                  placeholder="your@email.com"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-[#D8BA74]"
                  placeholder="Your phone number"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Query
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-[#D8BA74]"
                  placeholder="Tell us what you need"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B1F3A] hover:bg-slate-100"
              >
                Send Enquiry
              </button>
            </form>

            {/* CALL BUTTON */}
            <div className="mt-6">
              <a
                href="tel:07917006216"
                className="block rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white hover:border-white"
              >
                Call 07386 478310
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Enquiries go directly to{" "}
              <span className="text-slate-200">
                ruddventures@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}