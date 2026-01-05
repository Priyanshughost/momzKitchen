import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress for this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  // Image moves slightly opposite to scroll to create floating effect
  const imageY = useTransform(scrollYProgress, [0, 1], [200, -200]);
  
  // Decorative blob moves faster for depth
  const blobY = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section ref={containerRef} id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element with Parallax */}
      <motion.div 
        style={{ y: blobY }}
        className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl z-0" 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <motion.div style={{ y: imageY }} className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary/30 rounded-2xl z-0" />
              <img 
                src="https://images.unsplash.com/photo-1587241321921-91a834d6d191?q=80&w=2670&auto=format&fit=crop" 
                alt="Mom'z Kitchen Interior" 
                className="w-full h-auto rounded-2xl shadow-xl z-10 relative object-cover aspect-[4/3]"
              />
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg max-w-xs border border-border z-20"
              >
                <p className="font-serif text-3xl font-bold text-primary mb-1">5.0 ★</p>
                <p className="text-muted-foreground text-sm">Based on 624+ happy reviews from our lovely customers.</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 px-4 py-1 text-sm rounded-full bg-primary/5">About Us</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Baking with love, <br />
              <span className="text-primary">serving with joy.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Mom’z Kitchen is a women-owned home bakery in Jamshedpur, born from a passion for creating pure vegetarian delights. We believe that a cake isn't just a dessert; it's the centerpiece of your celebration.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From our kitchen to your table, every slice is crafted with premium ingredients, patience, and a touch of home-style warmth that you won't find in commercial bakeries.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-secondary pl-4">
                <h4 className="font-serif text-xl font-bold text-foreground mb-2">100% Pure Veg</h4>
                <p className="text-sm text-muted-foreground">Eggless delights without compromising on taste.</p>
              </div>
              <div className="border-l-2 border-secondary pl-4">
                <h4 className="font-serif text-xl font-bold text-foreground mb-2">Freshly Baked</h4>
                <p className="text-sm text-muted-foreground">Made to order, ensuring maximum freshness.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
