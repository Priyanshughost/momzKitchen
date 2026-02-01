import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useRef, useMemo } from "react";

const Hero = () => {
  const ref = useRef(null);

  // Detect touch devices (mobile / tablet)
  const isTouch = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer: coarse)").matches;
  }, []);

  // Section-scoped scroll (NOT global)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax (disabled on touch)
  const backgroundY = isTouch
    ? 0
    : useTransform(scrollYProgress, [0, 1], [0, 120]);

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.4],
    [1, 0]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.4],
    [0, 60]
  );

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2664&auto=format&fit=crop"
          alt="Mom'z Kitchen Bakery"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto will-change-transform"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Where every cake <br />
            <span className="text-secondary italic">carries a memory.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Professional home bakery in Jamshedpur crafting pure veg delights
            that turn your special days into unforgettable stories.
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

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70"
        style={{ opacity: contentOpacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-sm tracking-widest uppercase mb-2 block text-center">
          Scroll
        </span>
        <div className="w-px h-12 bg-white/50 mx-auto" />
      </motion.div>
    </section>
  );
};

export default Hero;
