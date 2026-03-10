import ScrollReveal from "./components/ScrollReveal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Community from "./components/Community";
import Credibility from "./components/Credibility";
import About from "./components/About";
import WhoWeServe from "./components/WhoWeServe";
import Expectations from "./components/Expectations";
import ReferralPartners from "./components/ReferralPartners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main
  style={{
    backgroundColor: "#F7F2EA",
    color: "#1E2A3A",
    fontFamily: "Georgia, serif",
  }}
>
  <ScrollReveal />

  <Header />
  <Hero />
  <Community />
  <About />
  <WhoWeServe />
  <Expectations />
  <ReferralPartners />
  <Contact />
  <Footer />
</main>
  );
}