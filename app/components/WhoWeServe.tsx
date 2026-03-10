export default function WhoWeServe() {
  return (
    <section
  className="fade-in"
      id="serve"
      style={{
        padding: "90px 20px",
        backgroundColor: "#FFFDF9",
        scrollMarginTop: "110px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#B68C35",
            fontFamily: "Arial, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "3px",
            fontSize: "14px",
            marginBottom: "14px",
            fontWeight: 700,
          }}
        >
          Who We Serve
        </p>

        <h2
          style={{
            fontSize: "42px",
            lineHeight: 1.15,
            marginBottom: "20px",
            color: "#1E2A3A",
          }}
        >
          Housing designed for adults seeking stability and independence
        </h2>

        <p
          style={{
            maxWidth: "780px",
            margin: "0 auto 40px auto",
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#4A4A4A",
            fontFamily: "Arial, sans-serif",
          }}
        >
          TrueNorth Haven Living provides structured supportive housing for
          adults seeking a calm, respectful living environment while working
          toward stability and long-term independence.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
            textAlign: "left",
          }}
        >
          {[
            "Adults transitioning from supportive or reentry programs",
            "Individuals working with case managers or social service agencies",
            "Residents seeking stable shared housing while rebuilding independence",
            "Individuals participating in employment or workforce programs",
            "Residents receiving housing assistance or voucher support",
            "Adults with a reliable and verified income source",
          ].map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: "#F7F2EA",
                borderRadius: "18px",
                padding: "24px",
                boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                fontFamily: "Arial, sans-serif",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#333",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <p
          style={{
            maxWidth: "820px",
            margin: "34px auto 0 auto",
            fontSize: "17px",
            lineHeight: 1.8,
            color: "#4A4A4A",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Our housing is best suited for individuals who are able to live
          independently and do not require continuous supervision or clinical
          behavioral management.
        </p>
      </div>
    </section>
  );
}