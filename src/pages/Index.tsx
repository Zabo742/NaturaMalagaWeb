import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import HeadSpa from "@/components/HeadSpa";
import Services from "@/components/Services";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import StickyBooking from "@/components/StickyBooking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <HeadSpa />
      <Services />
      <About />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
      <StickyBooking />
    </div>
  );
};

export default Index;
