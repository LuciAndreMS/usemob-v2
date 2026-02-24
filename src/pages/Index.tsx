import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import CtaBanner from "@/components/CtaBanner";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <Differentials />
      <CtaBanner />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
    <WhatsAppFloat />
  </>
);

export default Index;
