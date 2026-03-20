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
          TrueNorth Haven Living provides non-medical shared housing for adults
          who are capable of independent living and benefit from a stable,
          respectful household environment.
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
