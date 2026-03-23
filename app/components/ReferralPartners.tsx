export default function ReferralPartners() {
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

export default function PropertyOwners() {
  return (
    <section
      style={{
        padding: "80px 24px",
        backgroundColor: "#f4f1ea",
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
          Owner Partnership Inquiries
        </p>

        <h1
          style={{
            fontSize: "64px",
            lineHeight: 1.1,
            color: "#243548",
            marginBottom: "24px",
          }}
        >
          Property Owners
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
          We partner with property owners who are seeking responsible, structured
          occupancy solutions supported by clear expectations and dependable
          communication.
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
          We maintain clear communication, structured occupancy, and consistent
          oversight for every property we partner with.
        </p>

        <h2
          style={{
            fontSize: "48px",
            color: "#243548",
            marginTop: "48px",
            marginBottom: "20px",
          }}
        >
          How We Maintain Your Property
        </h2>

        <div
          style={{
            lineHeight: 1.9,
            maxWidth: "760px",
            margin: "0 auto",
            color: "#243548",
            fontSize: "18px",
          }}
        >
          <p>Structured occupancy with clear household expectations</p>
          <p>Careful placement to ensure resident fit and consistency</p>
          <p>Ongoing communication and oversight to maintain a stable environment</p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2
            style={{
              fontSize: "48px",
              color: "#243548",
              marginBottom: "20px",
            }}
          >
            Partner With Us
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              maxWidth: "760px",
              margin: "0 auto 20px",
              color: "#243548",
            }}
          >
            If you are a property owner interested in working with us, submit your
            information below and we will follow up within 24–48 hours.
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
            <input type="hidden" name="formType" value="Property Owner Inquiry" />

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
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

            <input
              type="text"
              name="propertyLocation"
              placeholder="Property Location"
              style={inputStyle}
            />

            <input
              type="text"
              name="propertyType"
              placeholder="Property Type"
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Tell us a little about your property or partnership interest"
              rows={5}
              style={inputStyle}
            />

            <button type="submit" style={buttonStyle}>
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
