import Header from "../components/Header";
import About from "../components/About";
import OurApproach from "../components/OurApproach";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main
      style={{
        backgroundColor: "#F7F2EA",
        color: "#1E2A3A",
        fontFamily: "Georgia, serif",
      }}
    >
      <Header />
      <About />
      <OurApproach />
      <Footer />
    </main>
  );
}
