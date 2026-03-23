import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ApplyPage() {
  return (
    <main
      style={{
        backgroundColor: "#F7F2EA",
        color: "#182434",
        fontFamily: "Georgia, serif",
      }}
    >
      <Header />

      <section style={sectionStyle}>
        <div style={contentWrap}>
          <p style={eyebrowStyle}>Placement Inquiry</p>
          <h1 style={pageTitleStyle}>Start Placement Application</h1>
          <p style={leadStyle}>
            Complete the form below to begin the placement review process.
          </p>

          <div style={{ marginBottom: "32px" }}>
  <h2>What Happens Next</h2>
  <p>
    After submitting your application, our team will review your information and contact you within 24–48 hours to discuss next steps and availability.
  </p>

  <p>
    Please provide accurate contact information and a clear description of your current situation.
  </p>
</div>

          <form
            action="https://formspree.io/f/xpqynyeg"
            method="POST"
            style={formCardStyle}
          >
            <input type="hidden" name="formType" value="Apply Inquiry" />

            <label style={labelStyle}>
              Full Name
              <input name="fullName" type="text" required style={inputStyle} />
            </label>

            <label style={labelStyle}>
              Email Address
              <input name="email" type="email" required style={inputStyle} />
            </label>

            <label style={labelStyle}>
              Phone Number
              <input name="phone" type="tel" required style={inputStyle} />
            </label>

            <label style={labelStyle}>
              Current Income Source
              <input name="incomeSource" type="text" style={inputStyle} />
            </label>

            <label style={labelStyle}>
              Desired Move-In Timeframe
              <input name="moveInTimeframe" type="text" style={inputStyle} />
            </label>

            <label style={labelStyle}>
              Current Situation
              <textarea
                name="situation"
                rows={6}
                required
                style={textareaStyle}
              />
            </label>

            <button type="submit" style={buttonStyle}>
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const sectionStyle = {
  padding: "90px 24px",
};

const contentWrap = {
  maxWidth: "860px",
  margin: "0 auto",
};

const eyebrowStyle = {
  fontFamily: "Arial, sans-serif",
  textTransform: "uppercase" as const,
  letterSpacing: "2.5px",
  color: "#8D7B4C",
  fontWeight: 700,
  fontSize: "13px",
  margin: "0 0 12px 0",
  textAlign: "center" as const,
};

const pageTitleStyle = {
  fontSize: "46px",
  margin: "0 0 14px 0",
  textAlign: "center" as const,
};

const leadStyle = {
  fontFamily: "Arial, sans-serif",
  fontSize: "18px",
  lineHeight: 1.75,
  textAlign: "center" as const,
  maxWidth: "680px",
  margin: "0 auto 34px",
  color: "#243548",
};

const formCardStyle = {
  backgroundColor: "#FFFFFF",
  borderRadius: "18px",
  padding: "34px",
  boxShadow: "0 16px 32px rgba(0,0,0,0.10)",
  display: "grid",
  gap: "18px",
};

const labelStyle = {
  display: "grid",
  gap: "8px",
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
  fontWeight: 700,
  color: "#243548",
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "8px",
  border: "1px solid #D7DDE3",
  fontSize: "16px",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#FCFCFC",
  boxSizing: "border-box" as const,
};

const textareaStyle = {
  ...inputStyle,
  minHeight: "140px",
  resize: "vertical" as const,
};

const buttonStyle = {
  padding: "14px 28px",
  fontSize: "16px",
  backgroundColor: "#243548",
  color: "#ffffff",
  border: "none",
  cursor: "pointer",
  borderRadius: "4px",
  margin: "16px auto 0",
};
