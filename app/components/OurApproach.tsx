export default function OurApproach() {
  return (
    <section
      className="fade-in"
      id="our-approach"
      style={{
        padding: "90px 20px",
        backgroundColor: "#FFFDF9",
        scrollMarginTop: "110px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#B68C35",
            textTransform: "uppercase",
            letterSpacing: "3px",
            fontSize: "14px",
            marginBottom: "14px",
            fontWeight: 700,
            fontFamily: "Arial, sans-serif",
          }}
        >
          Our Approach
        </p>

        <h2
          style={{
            fontSize: "42px",
            marginBottom: "20px",
            color: "#1E2A3A",
          }}
        >
          Structured housing built on accountability, respect, and stability
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#4A4A4A",
            maxWidth: "750px",
            margin: "0 auto 40px auto",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Our mission is to provide safe, structured, and professionally managed
          shared housing environments that support individuals working toward
          stability, independence, and long-term progress.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
            textAlign: "left",
          }}
        >
          {[
            "Accountability and personal responsibility",
            "Respect for residents, property, and community",
            "Clean, organized, and structured environments",
            "Consistency in rules, expectations, and communication",
            "Support for stability and independent living",
            "Professional and reliable housing management",
          ].map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "18px",
                padding: "24px",
                boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#333",
                fontFamily: "Arial, sans-serif",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
