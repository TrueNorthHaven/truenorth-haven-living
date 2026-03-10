export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#172334",
        color: "white",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h3
          style={{
            fontSize: "28px",
            marginBottom: "10px",
          }}
        >
          TrueNorth Haven Living
        </h3>

        <p
          style={{
            color: "#C9A449",
            letterSpacing: "2px",
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          STRUCTURED SUPPORTIVE LIVING
        </p>

        <p
          style={{
            fontSize: "16px",
            opacity: 0.85,
            marginBottom: "16px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Guidance. Stability. Home.
        </p>

        <p
          style={{
            fontSize: "14px",
            opacity: 0.75,
            fontFamily: "Arial, sans-serif",
            lineHeight: 1.8,
            marginBottom: "16px",
          }}
        >
          Structured supportive housing serving the Las Vegas and Henderson
          area. Agency referrals and placement inquiries welcome.
        </p>

        <p
          style={{
            fontSize: "13px",
            opacity: 0.5,
            marginTop: "20px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          © 2026 TrueNorth Haven Living. All rights reserved.
        </p>
      </div>
    </footer>
  );
}