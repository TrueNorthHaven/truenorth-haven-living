export default function ReferralPartners() {
  return (
  <section
  id="referral-partners"
  style={{
    padding: "80px 20px",
    backgroundColor: "#F4F6F8",
    textAlign: "center",
  }}
>
      <div style={{ maxWidth: "950px", margin: "0 auto" }}>
        <p
          style={{
            color: "#C9A449",
            letterSpacing: "3px",
            fontWeight: 600,
            marginBottom: "12px",
            fontFamily: "Arial, sans-serif",
            textTransform: "uppercase",
            fontSize: "14px",
          }}
        >
          Referral Partners Welcome
        </p>

        <h2
          style={{
            fontSize: "38px",
            color: "#1E2F45",
            marginBottom: "20px",
          }}
        >
          We Work With Agencies, Case Managers, and Placement Programs
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#333",
            lineHeight: 1.8,
            fontFamily: "Arial, sans-serif",
            maxWidth: "800px",
            margin: "0 auto 30px auto",
          }}
        >
          TrueNorth Haven Living partners with case managers, social service
          agencies, and program coordinators seeking stable, structured housing
          options for clients working toward independence.
        </p>

        {/* BULLETS */}
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          <ul
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#333",
              fontFamily: "Arial, sans-serif",
              paddingLeft: "20px",
            }}
          >
            <li>Structured shared housing environments</li>
            <li>Clear house rules and expectations</li>
            <li>Reliable communication and coordination</li>
            <li>Consistent placement availability</li>
          </ul>
        </div>

        {/* CTA BUTTON */}
        <div style={{ marginTop: "35px" }}>
          <a
            href="#contact"
            style={{
              backgroundColor: "#C9A449",
              color: "#1E2F45",
              padding: "14px 28px",
              borderRadius: "30px",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Submit a Referral Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}
