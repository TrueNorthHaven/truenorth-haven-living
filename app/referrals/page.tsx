import Header from "../components/Header";
import ReferralPartners from "../components/ReferralPartners";
import PlacementProcess from "../components/PlacementProcess";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ReferralsPage() {
  return (
    <main
      style={{
        backgroundColor: "#F7F2EA",
        color: "#1E2A3A",
        fontFamily: "Georgia, serif",
      }}
    >
      <Header />
      <ReferralPartners />
      <PlacementProcess />
      <Contact />
      <Footer />
    </main>
  );
}
