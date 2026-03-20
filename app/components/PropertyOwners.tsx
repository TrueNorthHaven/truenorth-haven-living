import Header from "../components/Header";
import PropertyOwners from "../components/PropertyOwners";
import Footer from "../components/Footer";

export default function PropertyOwnersPage() {
  return (
    <main
      style={{
        backgroundColor: "#F7F2EA",
        color: "#182434",
        fontFamily: "Georgia, serif",
      }}
    >
      <Header />
      <PropertyOwners />

      <section style={{ padding: "0 24px 90px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <form
            action="https://formspree.io/f/xreydywb"
            method="POST"
            style={formCardStyle}
          >
            <input type="hidden" name="formType" value="Property Owner Inquiry" />

            <label style={labelStyle}>
              Full Name
              <input name="fullName" type="text" required style={inputStyle} />
            </label>

            <label style={labelStyle}>
              Company Name
              <input name="company" type="text" style={inputStyle} />
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
              Property Address
              <input name="propertyAddress" type="text" required style={inputStyle} />
            </label>

            <label style={labelStyle}>
              Number of Bedrooms
              <input name="bedrooms" type="text" style={inputStyle} />
            </label>

            <label style={labelStyle}>
              Monthly Rent Requested
              <input name="rent" type="text" style={inputStyle} />
            </label>

            <label style={labelStyle}>
              Additional Property Details
              <textarea name="details" rows={6} required style={textareaStyle} />
            </label>

            <button type="submit" style={buttonStyle}>
              Submit Property Inquiry
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
