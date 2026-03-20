export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "rgba(24, 36, 52, 0.96)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(214,194,138,0.18)",
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            textDecoration: "none",
            minWidth: "fit-content",
          }}
        >
          <img
            src="/logo.jpg"
            alt="TrueNorth Haven Living"
            style={{
              width: "86px",
              height: "86px",
              objectFit: "contain",
              display: "block",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: "32px",
                fontWeight: 700,
                letterSpacing: "0.2px",
                fontFamily: "Georgia, serif",
                whiteSpace: "nowrap",
              }}
            >
              TrueNorth Haven Living
            </span>

            <span
              style={{
                color: "#D6C28A",
                fontSize: "12px",
                letterSpacing: "2.4px",
                textTransform: "uppercase",
                fontFamily: "Arial, sans-serif",
                marginTop: "8px",
                whiteSpace: "nowrap",
              }}
            >
              Structured Shared Housing
            </span>
          </div>
        </a>

        <nav
          style={{
            display: "flex",
            gap: "22px",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            fontFamily: "Arial, sans-serif",
            fontSize: "15px",
          }}
        >
          <a href="/" style={linkStyle}>
            Home
          </a>
          <a href="/about" style={linkStyle}>
            About
          </a>
          <a href="/housing" style={linkStyle}>
            Housing
          </a>
          <a href="/referrals" style={linkStyle}>
            Referral Partners
          </a>
          <a href="/property-owners" style={linkStyle}>
            Property Owners
          </a>
          <a
            href="/apply"
            style={{
              backgroundColor: "#D6C28A",
              color: "#182434",
              padding: "10px 18px",
              borderRadius: "8px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 8px 18px rgba(0,0,0,0.15)",
            }}
          >
            Apply Now
          </a>
          <a href="/contact" style={linkStyle}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

const linkStyle = {
  color: "#FFFFFF",
  textDecoration: "none",
  fontWeight: 500,
};
