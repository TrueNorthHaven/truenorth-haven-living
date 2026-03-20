export default function About() {
  return (
    <section
      style={{
        padding: "80px 24px",
        backgroundColor: "#F7F2EA",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            marginBottom: "24px",
            color: "#1E2A3A",
            fontWeight: 700,
          }}
        >
          Who We Serve
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#1E2A3A",
            fontFamily: "Arial, sans-serif",
            marginBottom: "18px",
          }}
        >
          TrueNorth Haven Living provides structured, non-medical shared housing for adults in Clark County.

Our focus is simple: provide safe, stable environments where individuals can maintain structure, rebuild consistency, and move forward with purpose.

We are not a treatment program or clinical facility. Instead, we provide housing designed for individuals who are ready to live responsibly within a structured environment.

We work with referral partners, case managers, and property owners to ensure placements are appropriate, stable, and sustainable.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#1E2A3A",
            fontFamily: "Arial, sans-serif",
            marginBottom: "18px",
          }}
        >
          We do not provide medical care, clinical supervision, behavioral
          intervention, or intensive personal care.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#1E2A3A",
            fontFamily: "Arial, sans-serif",
            marginBottom: "0",
          }}
        >
          Placements may be supported through verified personal income, agency
          referral, approved program funding, or other reliable payment sources.
        </p>
      </div>
    </section>
  );
}
