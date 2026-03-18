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
          padding: "16px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
          flexWrap: "wrap",
          rowGap: "12px",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "0.3px",
            whiteSpace: "nowrap",
          }}
        >
          TrueNorth Haven Living
        </div>

        <nav
  style={{
    display: "flex",
    gap: "28px",
    fontFamily: "Arial, sans-serif",
    fontSize: "15px",
  }}
>
  <a href="#about-section" style={{ color: "white", textDecoration: "none" }}>
    About
  </a>

  <a href="#community" style={{ color: "white", textDecoration: "none" }}>
    Community
  </a>

  <a href="#expectations" style={{ color: "white", textDecoration: "none" }}>
    Expectations
  </a>

  <a href="#referral-partners" style={{ color: "white", textDecoration: "none" }}>
    Referral Partners
  </a>

  <a href="#property-owners" style={{ color: "white", textDecoration: "none" }}>
    Property Owners
  </a>

  <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
    Contact
  </a>
</nav>
