import Header from "../components/Header";
import PropertyOwners from "../components/PropertyOwners";
import Credibility from "../components/Credibility";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function PropertyOwnersPage() {
  return (
    <main
      style={{
        backgroundColor: "#F7F2EA",
        color: "#1E2A3A",
        fontFamily: "Georgia, serif",
      }}
    >
      <Header />
      <PropertyOwners />
      <Credibility />
      <Contact />
      <Footer />
    </main>
  );
}
