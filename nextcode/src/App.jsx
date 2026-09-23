import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyNextCode from "./components/WhyNextCode";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyNextCode />
        <Process />
        <Portfolio />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
