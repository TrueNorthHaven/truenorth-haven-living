export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "90px 20px",
        backgroundColor: "#1E2A3A",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
        Contact & Placement Inquiry
      </h2>

      <p style={{ marginBottom: "40px", color: "#ddd" }}>
        Submit your information and we will respond promptly.
      </p>

      <form
        action="https://formspree.io/f/mlgpaplg"
        method="POST"
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <input
          type="text"
          name="name"
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
          type="text"
          name="phone"
          placeholder="Phone Number"
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Tell us about the placement or inquiry..."
          rows={5}
          required
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#D8B25A",
            color: "#1E2A3A",
            padding: "14px",
            borderRadius: "999px",
            border: "none",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Submit Inquiry
        </button>
      </form>
    </section>
  );
}

const inputStyle = {
  padding: "14px",
  borderRadius: "8px",
  border: "none",
  fontSize: "16px",
};
