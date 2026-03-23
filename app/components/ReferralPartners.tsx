const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  fontSize: "16px",
  border: "1px solid #b8b1a7",
  backgroundColor: "#fff",
  color: "#243548",
  fontFamily: "Arial, sans-serif",
  boxSizing: "border-box" as const,
};

const buttonStyle = {
  padding: "12px 24px",
  fontSize: "16px",
  backgroundColor: "#243548",
  color: "#ffffff",
  border: "none",
  cursor: "pointer",
  width: "fit-content",
  margin: "12px auto 0",
};

export default function ReferralPartners() {
  return (
    <section
      style={{
        padding: "80px 24px",
        backgroundColor: "#f4f1ea",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "64px",
            lineHeight: 1.1,
            color: "#243548",
            marginBottom: "24px",
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
            maxWidth: "820px",
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
            maxWidth: "820px",
            margin: "0 auto 40px",
          }}
        >
          We work with case managers, social workers, and community agencies
          across Clark County.
        </p>

        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "70px 24px",
            marginTop: "20px",
          }}
        >
          <p
            style={{
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#c89b3c",
              marginBottom: "16px",
              fontWeight: 600,
            }}
          >
            Placement Process
          </p>

          <h2
            style={{
              fontSize: "56px",
              lineHeight: 1.15,
              color: "#243548",
              marginBottom: "20px",
            }}
          >
            A Simple and Structured Path to Placement
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#243548",
              maxWidth: "850px",
              margin: "0 auto 40px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Our goal is to ensure that each placement is an appropriate fit for
            both the resident and the household environment. The following steps
            outline our typical placement process.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "28px",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            <div>
              <h3 style={{ color: "#243548", marginBottom: "12px" }}>
                1. Submit Placement Inquiry
              </h3>
              <p style={{ lineHeight: 1.7, color: "#243548" }}>
                A referral partner or individual submits a placement inquiry for
                housing consideration.
              </p>
            </div>

            <div>
              <h3 style={{ color: "#243548", marginBottom: "12px" }}>
                2. Application &amp; Screening Review
              </h3>
              <p style={{ lineHeight: 1.7, color: "#243548" }}>
                We review the information provided to determine whether the
                shared housing environment is an appropriate fit.
              </p>
            </div>

            <div>
              <h3 style={{ color: "#243548", marginBottom: "12px" }}>
                3. Approval &amp; Housing Match
              </h3>
              <p style={{ lineHeight: 1.7, color: "#243548" }}>
                If appropriate, we follow up to discuss availability,
                expectations, funding, and next-step placement details.
              </p>
            </div>

            <div>
              <h3 style={{ color: "#243548", marginBottom: "12px" }}>
                4. Move-In Coordination
              </h3>
              <p style={{ lineHeight: 1.7, color: "#243548" }}>
                Once approved, we coordinate move-in details and orientation to
                the home guidelines and expectations.
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "60px" }}>
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
            If you are a case manager, agency representative, or referral
            partner, complete the form below and we will follow up within 24–48
            hours.
          </p>

          <form
            action="https://formspree.io/f/xkoqeqad"
            method="POST"
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              display: "grid",
              gap: "12px",
            }}
          >
            <input
              type="hidden"
              name="formType"
              value="Referral Partner Inquiry"
            />

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
      </div>
    </section>
  );
}
