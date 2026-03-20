export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "rgba(47, 64, 84, 0.96)",
        backdropFilter: "blur(6px)",
        borderBottom: "1px solid rgba(230,230,230,0.25)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
          flexWrap: "wrap",
          rowGap: "12px",
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "white",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          <img
  src="/logo.jpg"
  alt="TrueNorth Haven Living logo"
  style={{
    width: "70px",
    height: "70px",
    objectFit: "contain",
    borderRadius: "50%",
    backgroundColor: "white",
    padding: "4px",
  }}
/>

          <span
            style={{
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "0.3px",
            }}
          >
            TrueNorth Haven Living
          </span>
        </a>

        <nav
          style={{
            display: "flex",
            gap: "22px",
            fontFamily: "Arial, sans-serif",
            fontSize: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>

          <a href="/about" style={{ color: "white", textDecoration: "none" }}>
            About
          </a>

          <a href="/housing" style={{ color: "white", textDecoration: "none" }}>
            Housing
          </a>

          <a href="/referrals" style={{ color: "white", textDecoration: "none" }}>
            Referral Partners
          </a>

          <a href="/property-owners" style={{ color: "white", textDecoration: "none" }}>
            Property Owners
          </a>

          <a
            href="/apply"
            style={{
              backgroundColor: "#D6C28A",
              color: "#1E2A3A",
              padding: "8px 16px",
              borderRadius: "6px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Apply
          </a>

          <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
