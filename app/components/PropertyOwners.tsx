export default function PropertyOwners() {
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
          Owner Partnership Inquiries
        </p>

        <h1
          style={{
            fontSize: "44px",
            marginBottom: "18px",
            color: "#182434",
            fontWeight: 700,
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
          We partner with property owners who are seeking responsible,
          structured occupancy solutions supported by clear expectations and
          dependable communication.
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

        <h2 style={{ marginTop: "40px" }}>How We Maintain Your Property</h2>

<ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
  <li>Structured occupancy with clear household expectations</li>
  <li>Careful placement to ensure resident fit and consistency</li>
  <li>Ongoing communication and oversight to maintain a stable environment</li>
</ul>

        <div style={{ marginTop: "40px" }}>
  <h2>Partner With Us</h2>
  <p
    style={{
      fontSize: "18px",
      lineHeight: 1.8,
      maxWidth: "760px",
      margin: "0 auto 20px",
    }}
  >
    If you’re a property owner interested in working with us, submit your information below and we’ll follow up within 24–48 hours.
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
