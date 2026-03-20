import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ThankYouPage() {
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
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "18px" }}>
          Thank You
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            fontFamily: "Arial, sans-serif",
            maxWidth: "650px",
            margin: "0 auto 24px",
          }}
        >
          Your inquiry has been submitted successfully. A member of our team
          will review it and follow up within 24–48 hours.
        </p>

        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: "12px",
            padding: "14px 26px",
            backgroundColor: "#2F4054",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Return Home
        </a>
      </section>

      <Footer />
    </main>
  );
}
