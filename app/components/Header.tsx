export default function Hero() {
  return (
    <section
      style={{
        padding: "110px 24px 90px",
        background:
          "linear-gradient(180deg, #F7F2EA 0%, #F3ECE2 58%, #EFE5D8 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "42px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#8D7B4C",
              margin: "0 0 14px 0",
              fontFamily: "Arial, sans-serif",
              fontWeight: 700,
            }}
          >
            Clark County Placement Housing
          </p>

          <h1
            style={{
              fontSize: "clamp(42px, 7vw, 76px)",
              lineHeight: 1.02,
              margin: "0 0 18px 0",
              fontWeight: 700,
              color: "#182434",
            }}
          >
            Structured Shared Housing in Clark County
          </h1>

          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.75,
              maxWidth: "660px",
              margin: "0 0 28px 0",
              color: "#243548",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Safe, non-medical housing for adults seeking stability, structure,
            and a respectful living environment in Las Vegas, Henderson, and
            surrounding areas.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a
              href="/apply"
              style={{
                display: "inline-block",
                padding: "15px 28px",
                backgroundColor: "#182434",
                color: "#FFFFFF",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontFamily: "Arial, sans-serif",
                boxShadow: "0 10px 22px rgba(0,0,0,0.12)",
              }}
            >
              Start Placement Application
            </a>

            <a
              href="/referrals"
              style={{
                display: "inline-block",
                padding: "15px 28px",
                backgroundColor: "transparent",
                color: "#182434",
                border: "1px solid #182434",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontFamily: "Arial, sans-serif",
              }}
            >
              Referral Partners
            </a>
          </div>

          <div
            style={{
              marginTop: "28px",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              color: "#4A5B6D",
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
            }}
          >
            <span>• Non-medical housing</span>
            <span>• Structured expectations</span>
            <span>• Clark County service area</span>
          </div>
        </div>

        <div
          style={{
            minHeight: "430px",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 18px 36px rgba(0,0,0,0.14)",
            backgroundColor: "#D9CBB0",
          }}
        >
          <img
            src="/hero-community.jpg"
            alt="TrueNorth Haven Living community"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}
