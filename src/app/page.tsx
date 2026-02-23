import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Gallery />
      <About />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
