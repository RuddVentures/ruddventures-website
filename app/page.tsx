export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-semibold">Rudd Ventures</h1>

        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          <a href="#solution">Solution</a>
          <a href="#how">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="#contact"
          className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90"
        >
          Book a Call
        </a>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm bg-gray-100 inline-block px-3 py-1 rounded-full mb-4">
            Done-for-you AI automation for service businesses
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Never Miss Another Enquiry — Without Hiring Staff
          </h2>

          <p className="text-gray-600 mb-8 text-lg">
            We install a simple AI system that reads incoming enquiries,
            logs leads, and drafts professional replies for you to approve —
            so you respond faster without extra workload.
          </p>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-black text-white px-6 py-3 rounded-full font-medium"
            >
              Book a Free Call
            </a>

            <a
              href="#how"
              className="border px-6 py-3 rounded-full font-medium"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border">
          <div className="space-y-4 text-sm">

            <div className="p-4 bg-white rounded-xl border">
              <strong>Incoming Enquiry</strong>
              <p className="text-gray-600">
                Customer email asking about availability or pricing
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border">
              <strong>Lead Logged</strong>
              <p className="text-gray-600">
                Enquiry details stored so nothing gets missed
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border">
              <strong>Draft Reply Created</strong>
              <p className="text-gray-600">
                Professional response ready for you to review
              </p>
            </div>

            <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
              <strong>You stay in control</strong>
              <p className="text-gray-700">
                Nothing is auto-sent. No false promises. No made-up pricing.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Most Small Businesses Lose Enquiries Without Realising
          </h3>

          <p className="text-gray-600">
            Slow replies, missed emails, and inconsistent responses cost you
            real customers. When you're busy, replying properly isn’t always
            the priority — but it directly affects your revenue.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="py-20 max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">
          A Simple System That Handles Enquiries For You
        </h3>

        <p className="text-gray-600 mb-10">
          We install a done-for-you system into your business that helps you
          respond faster, stay organised, and never miss opportunities.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="p-6 border rounded-xl">
            <h4 className="font-medium mb-2">Faster Replies</h4>
            <p className="text-gray-600 text-sm">
              Respond quickly without having to think through every message.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h4 className="font-medium mb-2">No Missed Leads</h4>
            <p className="text-gray-600 text-sm">
              Every enquiry is tracked and stored automatically.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h4 className="font-medium mb-2">Full Control</h4>
            <p className="text-gray-600 text-sm">
              You approve everything before it’s sent.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-center mb-10">
            How It Works
          </h3>

          <div className="space-y-6">
            <div className="p-6 bg-white rounded-xl border">
              1. We connect your email or enquiry source
            </div>
            <div className="p-6 bg-white rounded-xl border">
              2. AI reads and understands each enquiry
            </div>
            <div className="p-6 bg-white rounded-xl border">
              3. A professional draft reply is created
            </div>
            <div className="p-6 bg-white rounded-xl border">
              4. You review and send when ready
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-6">
            Simple, One-Time Setup
          </h3>

          <p className="text-gray-600 mb-4">
            Pricing depends on your setup and requirements.
          </p>

          <p className="text-gray-600 mb-8">
            For full details, contact us directly or book a call.
          </p>

          <a
            href="#contact"
            className="bg-black text-white px-6 py-3 rounded-full font-medium"
          >
            Get Pricing
          </a>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-4">
            Want to Stop Missing Enquiries?
          </h3>

          <p className="mb-6 text-gray-300">
            Book a quick call and we’ll show you how this can work in your business.
          </p>

          <a
            href="mailto:info@ruddventures.co.uk"
            className="bg-white text-black px-6 py-3 rounded-full font-medium"
          >
            Contact Us
          </a>
        </div>
      </section>

    </main>
  );
}