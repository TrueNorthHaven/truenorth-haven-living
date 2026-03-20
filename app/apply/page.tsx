import Header from "../components/Header";
import Contact from "../components/Contact";
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
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 24px 40px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "18px" }}>Apply for Placement</h1>
        <p style={{ fontSize: "18px", lineHeight: 1.7, maxWidth: "700px", margin: "0 auto 22px" }}>
          Start the placement process by submitting your information below. TrueNorth Haven Living
          works with individuals, families, and referral partners seeking safe, structured housing
          options in Las Vegas.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.7 }}>
          Include your name, contact information, current situation, and any referral details so we
          can review your inquiry and follow up promptly.
        </p>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
