export default function Hero() {
  return (
    <section
      style={{
        padding: "90px 24px 80px",
        background: "linear-gradient(to bottom, #F7F2EA 0%, #F3ECE2 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "15px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#8D8B5A",
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
              color: "#1E2A3A",
            }}
          >
            Structured Shared Housing in Las Vegas & Henderson
          </h1>

         <p
  style={{
    fontSize: "18px",
    lineHeight: 1.7,
    maxWidth: "700px",
    margin: "0 0 24px 0",
    color: "#1E2A3A",
    fontFamily: "Arial, sans-serif",
  }}
>
  Structured shared housing for adults who can live independently and benefit from a stable, respectful home environment.
</p>

          <a
            href="/apply"
            style={{
              display: "inline-block",
              marginTop: "8px",
              padding: "14px 28px",
              backgroundColor: "#2F4054",
              color: "white",
              textDecoration: "none",
              fontSize: "16px",
              borderRadius: "6px",
              fontWeight: 600,
              fontFamily: "Arial, sans-serif",
            }}
          >
            Apply for Housing
          </a>
        </div>

        <div
          style={{
            minHeight: "420px",
            borderRadius: "18px",
            backgroundImage: "url('/hero-community.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
          }}
        />
      </div>
    </section>
  );
}
