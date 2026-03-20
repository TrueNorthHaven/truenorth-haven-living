import Footer from "../components/Footer";

export default function PropertyOwnersPage() {
  return (
    <main
      style={{
        backgroundColor: "#F7F2EA",
        color: "#1E2A3A",
        fontFamily: "Georgia, serif",
      }}
    >
      <Header />

      <section style={{ padding: "80px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", fontSize: "42px", marginBottom: "18px" }}>
          Property Owner Inquiry
        </h1>

        <p
          style={{
            textAlign: "center",
            marginBottom: "32px",
            lineHeight: 1.7,
            fontFamily: "Arial, sans-serif",
          }}
        >
          If you are a property owner interested in partnering with TrueNorth Haven Living,
          please submit your information below.
        </p>

        <form style={{ display: "grid", gap: "16px" }}>
          <input type="text" placeholder="Full Name" style={inputStyle} />
          <input type="text" placeholder="Company Name (Optional)" style={inputStyle} />
          <input type="email" placeholder="Email Address" style={inputStyle} />
          <input type="tel" placeholder="Phone Number" style={inputStyle} />
          <input type="text" placeholder="Property Address" style={inputStyle} />
          <input type="text" placeholder="Number of Bedrooms" style={inputStyle} />
          <input type="text" placeholder="Monthly Rent Requested" style={inputStyle} />
          <textarea placeholder="Additional Property Details" rows={6} style={inputStyle} />
          <button type="submit" style={buttonStyle}>
            Submit Property Inquiry
          </button>
        </form>
      </section>

      <Footer />
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "16px",
  fontFamily: "Arial, sans-serif",
};

const buttonStyle = {
  padding: "14px 24px",
  backgroundColor: "#2F4054",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  fontWeight: 600,
  cursor: "pointer",
};
