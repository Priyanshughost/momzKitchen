import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Phone, MapPin, Clock, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ReactLenis } from 'lenis/react'
// Components
import Hero from "./components/Hero";
import About from "./components/About";
import MenuHighlights from "./components/MenuHighlights";
import WhyLoveUs from "./components/WhyLoveUs";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Reviews", href: "#reviews" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm border-border" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="shrink-0 flex items-center">
            <a href="#" className="font-serif text-2xl font-bold text-primary">
              Mom’z Kitchen
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              087095 77220
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background border-b border-border absolute w-full"
        >
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-foreground hover:bg-secondary/30 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <Button className="w-full bg-primary text-primary-foreground">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

function App() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.4,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        smoothTouch: true,
        touchMultiplier:0.8 
      }}
    >
      <div className="min-h-screen bg-background font-sans selection:bg-secondary selection:text-secondary-foreground">
        <Navbar />
        <main className="overflow-hidden">
          <Hero />
          <About />
          <MenuHighlights />
          <WhyLoveUs />
          <Services />
          <Gallery />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
