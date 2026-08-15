import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsShowcase from "@/components/StatsShowcase";
import KeyFacts from "@/components/KeyFacts";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Work from "@/components/Work";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-cream">
      <Header />
      <Hero />
      <StatsShowcase />
      <KeyFacts />
      <About />
      <TechStack />
      <Services />
      <Work />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
