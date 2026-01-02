import { motion } from "framer-motion";
import { useState } from "react";

const Gallery = () => {
  // Simulating a masonry layout with columns
  const images = [
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2589&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=2565&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=2576&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2574&auto=format&fit=crop"
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Portfolio</Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Baked Memories</h2>
          <p className="text-muted-foreground text-lg">A glimpse into our kitchen's finest creations.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <div className="group relative overflow-hidden rounded-xl shadow-md cursor-zoom-in">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 duration-500" />
                <img 
                  src={src} 
                  alt={`Cake ${index + 1}`} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple Badge component internal definition if import fails (backup)
const Badge = ({ children, className, variant = "default" }) => {
    const base = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
    const variants = {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "text-foreground"
    };
    return <div className={`${base} ${variants[variant]} ${className}`}>{children}</div>;
};

export default Gallery;
