import Header from "../components/Header";
import ReferralPartners from "../components/ReferralPartners";
import Footer from "../components/Footer";

export default function ReferralsPage() {
  return (
    <main
      style={{
        backgroundColor: "#F7F2EA",
        color: "#182434",
        fontFamily: "Georgia, serif",
      }}
    >
      <Header />
      <ReferralPartners />

      <section style={{ padding: "0 24px 90px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <form
            action="https://formspree.io/f/xkoqeqad"
            method="POST"
            style={formCardStyle}
          >
            <input type="hidden" name="formType" value="Referral Partner Inquiry" />

            <label style={labelStyle}>
              Referral Partner Name
              <input name="partnerName" type="text" required style={inputStyle} />
            </label>

            <label style={labelStyle}>
              Agency / Organization
              <input name="agency" type="text" style={inputStyle} />
            </label>

            <label style={labelStyle}>
              Email Address
              <input name="email" type="email" required style={inputStyle} />
            </label>

            <label style={labelStyle}>
              Phone Number
              <input name="phone" type="tel" style={inputStyle} />
            </label>

            <label style={labelStyle}>
              Client First Name or Initials
              <input name="clientName" type="text" required style={inputStyle} />
            </label>

            <label style={labelStyle}>
              Funding Source
              <input name="funding" type="text" style={inputStyle} />
            </label>

            <label style={labelStyle}>
              Desired Move-In Timeframe
              <input name="moveIn" type="text" style={inputStyle} />
            </label>

            <label style={labelStyle}>
              Placement Details / Notes
              <textarea name="details" rows={6} required style={textareaStyle} />
            </label>

            <button type="submit" style={buttonStyle}>
              Submit Referral
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

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
  padding: "15px 24px",
  backgroundColor: "#182434",
  color: "#FFFFFF",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: 700,
  cursor: "pointer",
  fontFamily: "Arial, sans-serif",
};
