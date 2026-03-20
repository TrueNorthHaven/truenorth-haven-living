import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main
      style={{
        backgroundColor: "#F7F2EA",
        color: "#1E2A3A",
        fontFamily: "Georgia, serif",
      }}
    >
      <Header />

      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "18px" }}>Contact Us</h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            maxWidth: "700px",
            margin: "0 auto 32px",
            fontFamily: "Arial, sans-serif",
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
      </section>

      <Footer />
    </main>
  );
}
