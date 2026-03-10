export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: "url('/home-interior.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(20, 28, 40, 0.58), rgba(20, 28, 40, 0.58))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            display: "inline-block",
            backgroundColor: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(4px)",
            padding: "18px 18px 14px 18px",
            borderRadius: "20px",
            marginBottom: "34px",
            boxShadow: "0 12px 35px rgba(0,0,0,0.20)",
          }}
        >
          <img
            src="/logo.jpg"
            alt="TrueNorth Haven Living Logo"
            style={{
              width: "180px",
              maxWidth: "75vw",
              display: "block",
              borderRadius: "12px",
            }}
          />
        </div>

        <p
          style={{
            fontSize: "15px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#D8B25A",
            margin: "0 0 12px 0",
            fontFamily: "Arial, sans-serif",
            fontWeight: 600,
          }}
        >
          Structured Supportive Living
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 78px)",
            lineHeight: 1.06,
            margin: "0 0 18px 0",
            fontWeight: 700,
          }}
        >
          TrueNorth Haven Living
        </h1>

        <p
          style={{
            fontSize: "clamp(18px, 2.5vw, 28px)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            margin: 0,
            fontFamily: "Arial, sans-serif",
          }}
        >
          Guidance. Stability. Home.
        </p>
      </div>
    </section>
  );
}