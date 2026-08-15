import Header from "@/components/Header";
import Hero from "@/components/Hero";
import KeyFacts from "@/components/KeyFacts";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Clients from "@/components/Clients";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-cream">
      <Header />
      <Hero />
      <KeyFacts />
      <About />
      <Services />
      <Work />
      <Clients />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
