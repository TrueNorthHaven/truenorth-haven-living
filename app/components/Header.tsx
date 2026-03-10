export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "rgba(47, 64, 84, 0.96)",
        backdropFilter: "blur(6px)",
        borderBottom: "4px solid #E6E6E6",
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
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: 700,
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
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}