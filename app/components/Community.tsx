export default function Community() {
  return (
    <section
  className="fade-in"
      id="community"
      style={{
        padding: "90px 20px",
        backgroundColor: "#FFFDF9",
        scrollMarginTop: "110px",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "50px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              color: "#B68C35",
              fontFamily: "Arial, sans-serif",
              textTransform: "uppercase",
              letterSpacing: "3px",
              fontSize: "14px",
              marginBottom: "14px",
              fontWeight: 700,
            }}
          >
            Welcome Home
          </p>

          <h2
            style={{
              fontSize: "clamp(34px, 4vw, 50px)",
              lineHeight: 1.15,
              margin: "0 0 22px 0",
              color: "#1E2A3A",
            }}
          >
            Warm, welcoming housing designed for stability and growth
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              color: "#4A4A4A",
              marginBottom: "18px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            TrueNorth Haven Living provides a clean, comfortable, and
            structured shared housing environment for adults who benefit from
            stability, routine, and supportive community.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              color: "#4A4A4A",
              fontFamily: "Arial, sans-serif",
              margin: 0,
            }}
          >
            Our goal is to create a peaceful home atmosphere where residents
            feel respected, encouraged, and positioned to move forward with
            confidence.
          </p>
        </div>

        <div>
          <img
            src="/community-support.jpg"
            alt="Supportive community environment"
            style={{
              width: "100%",
              borderRadius: "24px",
              boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}