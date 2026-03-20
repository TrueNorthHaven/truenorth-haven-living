import Header from "../components/Header";
import Contact from "../components/Contact";
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
      <Contact />
      <Footer />
    </main>
  );
}
