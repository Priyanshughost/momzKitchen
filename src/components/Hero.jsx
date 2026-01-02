import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  // Background moves slower than scroll (0.5 speed) covering distance
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 500]);
  
  // Text moves slightly down but slower than normal scroll to create separation
  // or we can let it scroll naturally. Let's make it scroll naturally but fade out.
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const contentY = useTransform(scrollY, [0, 400], [0, 100]);

  return (
    <section ref={ref} id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Parallax Background Layer */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2664&auto=format&fit=crop"
          alt="Mom'z Kitchen Bakery"
          className="w-full h-full object-cover object-center scale-110" // scale-110 prevents white gaps when moving
        />
      </motion.div>

      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Where every cake <br />
            <span className="text-secondary italic">carries a memory.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Professional home bakery in Jamshedpur crafting pure veg delights that turn your special days into unforgettable stories.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Order on WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto border-white/80 text-white hover:bg-white/20 hover:text-white hover:border-white font-medium text-lg px-8 py-6 rounded-full backdrop-blur-sm bg-transparent transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - Fades out on scroll */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white/70"
        style={{ opacity: contentOpacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-sm tracking-widest uppercase mb-2 block text-center">Scroll</span>
        <div className="w-[1px] h-12 bg-white/50 mx-auto" />
      </motion.div>
    </section>
  );
};

export default Hero;
