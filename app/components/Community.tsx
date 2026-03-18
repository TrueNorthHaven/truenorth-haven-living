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
          maxWidth: "900px",
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
          }}
        >
          Living Environment
        </p>

        <h2
          style={{
            fontSize: "42px",
            marginBottom: "20px",
            color: "#1E2A3A",
          }}
        >
          Structured, clean, and supportive shared housing
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#4A4A4A",
          }}
        >
          Our homes provide a calm, organized environment where residents can
          focus on stability, accountability, and forward progress. We emphasize
          respect, routine, and a shared commitment to maintaining a positive
          living space.
        </p>
      </div>
    </section>
  );
}
