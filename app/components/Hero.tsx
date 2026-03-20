export default function Hero() {
  return (
    <section
      style={{
        padding: "100px 24px",
        textAlign: "center",
        backgroundColor: "#F7F2EA",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 78px)",
            lineHeight: 1.06,
            margin: "0 0 18px 0",
            fontWeight: 700,
            color: "#1E2A3A",
          }}
        >
          Safe, Structured Shared Housing in Clark County
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto",
            fontFamily: "Arial, sans-serif",
            color: "#1E2A3A",
          }}
        >
          Providing stable, non-medical housing for adults in Las Vegas,
          Henderson, and surrounding areas.
        </p>

        <div style={{ marginTop: "24px" }}>
          <a
            href="/apply"
            style={{
              display: "inline-block",
              padding: "14px 26px",
              backgroundColor: "#D6C28A",
              color: "#1E2A3A",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Apply for Housing
          </a>
        </div>
      </div>
    </section>
  );
}
