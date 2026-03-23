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

v

        <div style={{ marginTop: "40px" }}>
  <h2>Partner With Us</h2>
  <p>
    If you’re a property owner interested in working with us, submit your information below and we’ll follow up within 24–48 hours.
  </p>

  <form
    action="https://formspree.io/f/xpqvnyeg"
    method="POST"
    style={{ marginTop: "20px" }}
  >
    <input type="hidden" name="formType" value="Property Owner Inquiry" />

    <input
      type="text"
      name="name"
      placeholder="Full Name"
      required
      style={{ display: "block", marginBottom: "10px", width: "100%" }}
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address"
      required
      style={{ display: "block", marginBottom: "10px", width: "100%" }}
    />

    <input
      type="text"
      name="propertyLocation"
      placeholder="Property Location"
      style={{ display: "block", marginBottom: "10px", width: "100%" }}
    />

    <button type="submit">Submit Inquiry</button>
  </form>
</div>
      </div>
    </section>
  );
}
