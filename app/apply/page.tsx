import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ApplyPage() {
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
          Apply for Housing
        </h1>

        <p
          style={{
            textAlign: "center",
            marginBottom: "32px",
            lineHeight: 1.7,
            fontFamily: "Arial, sans-serif",
          }}
        >
          Complete the form below to begin the placement inquiry process.
        </p>

        <form style={{ display: "grid", gap: "16px" }}>
          <input type="text" placeholder="Full Name" style={inputStyle} />
          <input type="email" placeholder="Email Address" style={inputStyle} />
          <input type="tel" placeholder="Phone Number" style={inputStyle} />
          <input type="text" placeholder="Current Income Source" style={inputStyle} />
          <input type="text" placeholder="Desired Move-In Timeframe" style={inputStyle} />
          <textarea
            placeholder="Tell us a little about your current situation"
            rows={6}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Submit Application
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
