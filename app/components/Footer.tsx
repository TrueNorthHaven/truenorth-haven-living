export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#182434",
        color: "#FFFFFF",
        padding: "54px 24px 36px",
        borderTop: "1px solid rgba(214,194,138,0.18)",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "28px",
          alignItems: "start",
        }}
      >
        <div>
          <h3
            style={{
              margin: "0 0 12px 0",
              fontFamily: "Georgia, serif",
              fontSize: "26px",
              color: "#FFFFFF",
            }}
          >
            TrueNorth Haven Living
          </h3>

          <p
            style={{
              margin: 0,
              fontFamily: "Arial, sans-serif",
              lineHeight: 1.8,
              color: "#D7DDE3",
            }}
          >
            Structured shared housing in Clark County for adults seeking
            stability, consistency, and a respectful living environment.
          </p>
        </div>

        <div>
          <h4
            style={{
              margin: "0 0 12px 0",
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#D6C28A",
            }}
          >
            Service Area
          </h4>

          <p
            style={{
              margin: 0,
              fontFamily: "Arial, sans-serif",
              lineHeight: 1.8,
              color: "#D7DDE3",
            }}
          >
            Clark County
            <br />
            Las Vegas, Henderson, and surrounding areas
          </p>
        </div>

        <div>
          <h4
            style={{
              margin: "0 0 12px 0",
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#D6C28A",
            }}
          >
            Contact
          </h4>

          <p
            style={{
              margin: 0,
              fontFamily: "Arial, sans-serif",
              lineHeight: 1.8,
              color: "#D7DDE3",
            }}
          >
            (702) 714-0340
            <br />
            info@truenorthhavenliving.com
            <br />
            Response time: 24–48 hours
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1180px",
          margin: "28px auto 0",
          paddingTop: "18px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          fontFamily: "Arial, sans-serif",
          fontSize: "13px",
          color: "#A9B4BF",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} TrueNorth Haven Living. All rights reserved.
      </div>
    </footer>
  );
}
