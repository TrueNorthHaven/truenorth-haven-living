export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#2F4054",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO ONLY (NO EXTRA TEXT) */}
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/logo.jpg"
            alt="TrueNorth Haven Living"
            style={{
              height: "60px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </a>

        {/* NAV */}
        <nav
          style={{
            display: "flex",
            gap: "26px",
            alignItems: "center",
            fontFamily: "Arial, sans-serif",
            fontSize: "15px",
          }}
        >
          <a href="/" style={linkStyle}>Home</a>
          <a href="/about" style={linkStyle}>About</a>
          <a href="/housing" style={linkStyle}>Housing</a>
          <a href="/referrals" style={linkStyle}>Referral Partners</a>
          <a href="/property-owners" style={linkStyle}>Property Owners</a>

          <a
            href="/apply"
            style={{
              backgroundColor: "#D6C28A",
              color: "#1E2A3A",
              padding: "10px 18px",
              borderRadius: "6px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Apply
          </a>

          <a href="/contact" style={linkStyle}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
};
