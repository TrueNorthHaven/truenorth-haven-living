export default function Community() {
  return (
    <section
      className="fade-in"
      id="community"
      style={{
        padding: "90px 20px",
        backgroundColor: "#FFFDF9",
        scrollMarginTop: "160px",
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
            Living Environment
          </p>

          <h2
            style={{
              fontSize: "clamp(34px, 4vw, 50px)",
              lineHeight: 1.15,
              margin: "0 0 22px 0",
              color: "#1E2A3A",
            }}
          >
            Clean, structured housing designed for stability and daily consistency
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
            TrueNorth Haven Living provides a well-maintained, organized, and
            structured shared housing environment where residents can focus on
            stability, routine, and forward progress.
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
            Our homes are designed to support accountability, respect, and
            independence while maintaining a calm and cooperative living
            atmosphere for all residents.
          </p>
        </div>

        <div>
          <img
            src="/community-support.jpg"
            alt="Structured shared living environment"
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
