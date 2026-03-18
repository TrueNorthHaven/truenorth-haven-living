export default function Contact() {
  return (
    <section
      className="fade-in"
      id="contact"
      style={{
        padding: "100px 20px",
        backgroundColor: "#1E2A3A",
        color: "#FFFFFF",
        textAlign: "center",
        scrollMarginTop: "110px",
      }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <p
          style={{
            color: "#D8B25A",
            fontFamily: "Arial, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "3px",
            fontSize: "14px",
            marginBottom: "14px",
            fontWeight: 700,
          }}
        >
          Placement & Referral
        </p>

        <h2
          style={{
            fontSize: "42px",
            lineHeight: 1.2,
            marginBottom: "20px",
          }}
        >
          Submit a Placement Inquiry
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#E8E3DB",
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          For referral partners, case managers, or individuals seeking
          structured shared housing, please complete the inquiry form below.
        </p>

        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.8,
            color: "#D7D1C7",
            marginBottom: "30px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Placement inquiries are typically reviewed within 24–48 hours.
          Agency referrals, program-funded placements, and voucher-supported
          housing are welcome.
        </p>

        {/* TRUST LINE */}
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.8,
            color: "#CFC7BA",
            marginBottom: "30px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Non-medical supportive housing • Structured shared living • Adults 18+
          • Las Vegas & Henderson • Agency referrals welcome
        </p>

        <form
          action="mailto:info@truenorthhavenliving.com"
          method="post"
          encType="text/plain"
          style={{
            display: "grid",
            gap: "16px",
            maxWidth: "520px",
            margin: "0 auto",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            style={{
              padding: "14px",
              borderRadius: "8px",
              border: "none",
              fontSize: "16px",
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            style={{
              padding: "14px",
              borderRadius: "8px",
              border: "none",
              fontSize: "16px",
            }}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            style={{
              padding: "14px",
              borderRadius: "8px",
              border: "none",
              fontSize: "16px",
            }}
          />

          <textarea
            name="message"
            placeholder="Provide details about the placement, funding type, or housing need..."
            rows={5}
            required
            style={{
              padding: "14px",
              borderRadius: "8px",
              border: "none",
              fontSize: "16px",
              resize: "vertical",
            }}
          />

          <button
            type="submit"
            style={{
              backgroundColor: "#D8B25A",
              color: "#1E2A3A",
              padding: "16px",
              borderRadius: "999px",
              border: "none",
              fontWeight: 700,
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Submit Inquiry
          </button>
        </form>

        <p
          style={{
            marginTop: "20px",
            fontSize: "14px",
            color: "#D7D1C7",
            fontFamily: "Arial, sans-serif",
            lineHeight: 1.8,
          }}
        >
          You may also contact us directly regarding referral partnerships,
          placement availability, or program-supported housing opportunities.
        </p>
      </div>
    </section>
  );
}
