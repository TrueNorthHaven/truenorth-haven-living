export default function Contact() {
  return (
    <section
      style={{
        padding: "80px 24px",
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
        <h2
          style={{
            fontSize: "36px",
            marginBottom: "18px",
            color: "#1E2A3A",
            fontWeight: 700,
          }}
        >
          Contact Us
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#1E2A3A",
            fontFamily: "Arial, sans-serif",
            maxWidth: "700px",
            margin: "0 auto 30px",
          }}
        >
          For general questions, placement information, or partnership inquiries,
          please contact us directly using the information below.
        </p>

        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: "32px 24px",
            maxWidth: "600px",
            margin: "0 auto",
            boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
            fontFamily: "Arial, sans-serif",
            lineHeight: 1.9,
            fontSize: "17px",
          }}
        >
          <p>
            <strong>Email:</strong> info@truenorthhavenliving.com
          </p>
          <p>
            <strong>Phone:</strong> (702) 714-0340
          </p>
          <p>
            <strong>Service Area:</strong> Clark County (Las Vegas, Henderson, and surrounding areas)
          </p>
          <p>
            <strong>Response Time:</strong> 24–48 hours
          </p>
        </div>
      </div>
    </section>
  );
}
