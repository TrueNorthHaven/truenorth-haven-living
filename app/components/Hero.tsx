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
        {/* Logo */}
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

        {/* Top Label */}
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

        {/* UPDATED HEADLINE */}
        <h1
          <a
  href="/apply"
  style={{
    display: "inline-block",
    marginTop: "24px",
    padding: "14px 28px",
    backgroundColor: "#2F4054",
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    borderRadius: "6px",
    fontWeight: "600",
  }}
>
  Apply for Housing
</a>
          style={{
            fontSize: "clamp(42px, 7vw, 78px)",
            lineHeight: 1.06,
            margin: "0 0 18px 0",
            fontWeight: 700,
          }}
        >
          Structured Shared Housing in Las Vegas & Henderson
        </h1>

        {/* UPDATED SUBTEXT */}
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 22px)",
            marginBottom: "30px",
            fontFamily: "Arial, sans-serif",
            lineHeight: 1.5,
          }}
        >
          Safe, stable, and professionally managed housing for independent adults seeking structure, accountability, and a supportive living environment.
        </p>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#placement-process"
            style={{
              backgroundColor: "#D8B25A",
              color: "#1E2A3A",
              padding: "14px 26px",
              borderRadius: "30px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Submit Placement Inquiry
          </a>

          <a
            href="#referral-partners"
            style={{
              border: "2px solid #FFFFFF",
              color: "#FFFFFF",
              padding: "14px 26px",
              borderRadius: "30px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
