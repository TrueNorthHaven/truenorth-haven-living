import Header from "../components/Header";
import HousingEnvironment from "../components/HousingEnvironment";
import WhoWeServe from "../components/WhoWeServe";
import Footer from "../components/Footer";

export default function HousingPage() {
  return (
    <main
      style={{
        backgroundColor: "#F7F2EA",
        color: "#1E2A3A",
        fontFamily: "Georgia, serif",
      }}
    >
      <Header />
      <HousingEnvironment />
      <WhoWeServe />
      <Footer />
    </main>
  );
}
