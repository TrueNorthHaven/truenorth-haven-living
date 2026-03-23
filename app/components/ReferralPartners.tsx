export default function ReferralPartners() {
  return (
    <section
      style={{
        padding: "90px 24px 34px",
        backgroundColor: "#F7F2EA",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "2.5px",
            color: "#8D7B4C",
            fontWeight: 700,
            fontSize: "13px",
            margin: "0 0 12px 0",
          }}
        >
          Agency & Case Manager Inquiries
        </p>

        <h1
          style={{
            fontSize: "44px",
            marginBottom: "18px",
            color: "#182434",
            fontWeight: 700,
          }}
        >
          Referral Partners
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#243548",
            fontFamily: "Arial, sans-serif",
            maxWidth: "760px",
            margin: "0 auto 18px",
          }}
        >
          We welcome referrals from case managers, agencies, social service
          professionals, and community partners seeking structured, non-medical
          shared housing options for appropriate clients.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#243548",
            fontFamily: "Arial, sans-serif",
            maxWidth: "760px",
            margin: "0 auto",
          }}
        >
          We work with case managers, social workers, and community agencies
          across Clark County.
        </p>

        <section
  style={{
    padding: "80px 24px",
    backgroundColor: "#f8f8f8",
    textAlign: "center",
  }}
>
  <div style={{ maxWidth: "900px", margin: "0 auto" }}>
    <p
      style={{
        letterSpacing: "3px",
        textTransform: "uppercase",
        color: "#c89b3c",
        marginBottom: "16px",
        fontWeight: 600,
      }}
    >
      Referral Inquiry
    </p>

    <h2
      style={{
        fontSize: "48px",
        color: "#243548",
        marginBottom: "20px",
      }}
    >
      Submit a Referral Inquiry
    </h2>

    <p
      style={{
        fontSize: "18px",
        lineHeight: 1.8,
        color: "#243548",
        maxWidth: "760px",
        margin: "0 auto 24px",
      }}
    >
      If you are a case manager, agency representative, or referral partner, complete the form below and we will follow up within 24–48 hours.
    </p>

    <form
      action="https://formspree.io/f/xpqvnyeg"
      method="POST"
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        display: "grid",
        gap: "12px",
      }}
    >
      <input type="hidden" name="formType" value="Referral Partner Inquiry" />

      <input
        type="text"
        name="organizationName"
        placeholder="Agency or Organization Name"
        required
        style={inputStyle}
      />

      <input
        type="text"
        name="contactName"
        placeholder="Contact Name"
        required
        style={inputStyle}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        style={inputStyle}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        style={inputStyle}
      />

      <textarea
        name="referralDetails"
        placeholder="Briefly describe the referral need"
        rows={5}
        style={inputStyle}
      />

      <button type="submit" style={buttonStyle}>
        Submit Referral Inquiry
      </button>
    </form>
  </div>
</section>
      </div>
    </section>
  );
}
