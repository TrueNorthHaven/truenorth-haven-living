export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-wide">
            TrueNorth Haven Living
          </div>
          <div className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-[#7b5e57]">
              About
            </a>
            <a href="#who-we-serve" className="hover:text-[#7b5e57]">
              Who We Serve
            </a>
            <a href="#expectations" className="hover:text-[#7b5e57]">
              Expectations
            </a>
            <a href="#referral-partners" className="hover:text-[#7b5e57]">
              Referral Partners
            </a>
            <a href="#placement-process" className="hover:text-[#7b5e57]">
              Placement Inquiry
            </a>
            <a href="#contact" className="hover:text-[#7b5e57]">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#f8f4f1]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#7b5e57]">
              Structured Supportive Living
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Structured Shared Housing in Las Vegas &amp; Henderson
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4b4b4b]">
              Safe, stable, and professionally managed housing for independent
              adults seeking structure, accountability, and a supportive living
              environment.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#placement-process"
                className="rounded-full bg-[#7b5e57] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#684d47]"
              >
                Submit Placement Inquiry
              </a>
              <a
                href="#property-owners"
                className="rounded-full border border-[#7b5e57] px-6 py-3 text-sm font-semibold text-[#7b5e57] transition hover:bg-[#7b5e57] hover:text-white"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold md:text-4xl">
            About TrueNorth Haven Living
          </h2>
          <p className="mt-6 text-base leading-8 text-[#4b4b4b]">
            TrueNorth Haven Living provides structured, non-medical shared
            housing for adults who are capable of independent living but benefit
            from a stable and supportive residential environment.
          </p>
          <p className="mt-4 text-base leading-8 text-[#4b4b4b]">
            Our homes are designed to promote accountability, consistency, and
            respect while maintaining a calm and organized household structure.
          </p>
          <p className="mt-4 text-base leading-8 text-[#4b4b4b]">
            We serve residents across Las Vegas and Henderson and work with both
            individuals and referral partners to provide reliable housing
            solutions.
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section
        id="who-we-serve"
        className="bg-[#fcfaf8] px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold md:text-4xl">Who We Serve</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Independent adults with stable income",
              "Individuals working with case managers",
              "Residents transitioning from re-entry programs",
              "Veterans seeking stable housing",
              "Adults rebuilding stability and independence",
              "Workforce individuals seeking affordable housing",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border bg-white p-5 shadow-sm"
              >
                <p className="text-base font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accepted Payment Sources */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Accepted Payment Sources
          </h2>
          <p className="mt-6 text-base leading-8 text-[#4b4b4b]">
            We accept multiple forms of housing payment, including:
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Verified personal income",
              "Housing vouchers",
              "Program-funded placements",
              "Nonprofit and agency placements",
              "Veterans housing assistance",
              "Re-entry housing program funding",
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl border bg-white px-4 py-3 text-base shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Expectations */}
      <section
        id="expectations"
        className="bg-[#f8f4f1] px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Community Expectations
            </h2>
            <p className="mt-6 text-base leading-8 text-[#4b4b4b]">
              Residents are expected to live cooperatively in a shared
              environment and follow clear household guidelines designed to
              maintain a peaceful, respectful, and stable home.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              "Accountability",
              "Respect for others",
              "Clean shared spaces",
              "Consistent household structure",
              "Calm and supportive living",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-5 text-center shadow-sm"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section
        id="placement-process"
        className="mx-auto max-w-7xl px-6 py-16 md:py-20"
      >
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Placement Process
          </h2>
          <p className="mt-6 text-base leading-8 text-[#4b4b4b]">
            Our placement process is simple and structured:
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Submit a placement inquiry or referral",
              "Application and screening review",
              "Approval and housing match",
              "Move-in coordination",
            ].map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-4 rounded-2xl border bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7b5e57] font-semibold text-white">
                  {index + 1}
                </div>
                <p className="pt-2 text-base font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Partners */}
      <section
        id="referral-partners"
        className="bg-[#fcfaf8] px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold md:text-4xl">
              For Referral Partners
            </h2>
            <p className="mt-6 text-base leading-8 text-[#4b4b4b]">
              TrueNorth Haven Living works with case managers, agencies, and
              organizations seeking stable housing placements for clients.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Structured shared housing environments",
              "Clear house rules and expectations",
              "Reliable communication",
              "Consistent placement availability",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border bg-white p-5 shadow-sm"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-[#7b5e57] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#684d47]"
            >
              Submit a Referral Today
            </a>
          </div>
        </div>
      </section>

      {/* Property Owners */}
      <section
        id="property-owners"
        className="mx-auto max-w-7xl px-6 py-16 md:py-20"
      >
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold md:text-4xl">
            For Property Owners
          </h2>
          <p className="mt-6 text-base leading-8 text-[#4b4b4b]">
            TrueNorth Haven Living partners with property owners to provide
            professionally managed shared housing.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            "Structured resident screening",
            "Clear house rules and enforcement",
            "Routine property inspections",
            "Clean and organized living environments",
            "Stable occupancy and consistent rent",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border bg-white p-5 shadow-sm"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="#contact"
            className="inline-flex rounded-full border border-[#7b5e57] px-6 py-3 text-sm font-semibold text-[#7b5e57] transition hover:bg-[#7b5e57] hover:text-white"
          >
            Partner With Us
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#1f1f1f] px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Contact TrueNorth Haven Living
              </h2>
              <p className="mt-6 text-base leading-8 text-white/80">
                Las Vegas &amp; Henderson, Nevada
              </p>
              <div className="mt-6 space-y-3 text-base">
                <p>Phone: (702) 401-5416</p>
                <p>Email: info@truenorthhavenliving.com</p>
              </div>
              <p className="mt-6 text-base text-white/80">
                All inquiries are reviewed within 24–48 hours.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Quick Trust Points</h3>
              <ul className="mt-6 space-y-3 text-white/85">
                <li>• Non-medical supportive housing</li>
                <li>• Structured shared living</li>
                <li>• Adults 18+</li>
                <li>• Las Vegas &amp; Henderson service area</li>
                <li>• Agency referrals welcome</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
