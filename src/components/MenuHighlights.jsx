import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const MenuHighlights = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      title: "Theme Cakes",
      description: "Custom designed for your unique celebrations.",
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      items: ["Superhero Themes", "Princess Castles", "Sports Themes", "Cartoon Characters"]
    },
    {
      id: 2,
      title: "Anniversary Cakes",
      description: "Elegant designs for your special milestones.",
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      items: ["Heart Shapes", "Floral Elegance", "Tiered Cakes", "Photo Cakes"]
    },
    {
      id: 3,
      title: "Custom Cakes",
      description: "You dream it, we bake it.",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2574&auto=format&fit=crop",
      items: ["Unique Shapes", "Flavor Fusions", "Dietary Specials", "Grand Designs"]
    },
    {
      id: 4,
      title: "Pure Veg Specialities",
      description: "Eggless wonders that melt in your mouth.",
      image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=2000&auto=format&fit=crop",
      items: ["Truffle cakes", "Fruit cakes", "Dry cakes", "Muffins"]
    }
  ];

  return (
    <section id="menu" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Menu Highlights</h2>
          <p className="text-muted-foreground text-lg">Discover our range of handcrafted delights, baked fresh just for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card 
                className="group overflow-hidden cursor-pointer border-none shadow-md hover:shadow-xl transition-all duration-300 h-full bg-card"
                onClick={() => setSelectedCategory(category)}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{category.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent className="sm:max-w-125 bg-card border-border">
          {selectedCategory && (
            <>
              <DialogHeader>
                <div className="relative h-48 w-full rounded-md overflow-hidden mb-4">
                    <img 
                        src={selectedCategory.image} 
                        alt={selectedCategory.title} 
                        className="w-full h-full object-cover"
                    />
                </div>
                <DialogTitle className="text-3xl font-serif text-primary">{selectedCategory.title}</DialogTitle>
                <DialogDescription className="text-lg text-muted-foreground">
                  {selectedCategory.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <h4 className="font-medium text-foreground mb-3">Popular Varieties:</h4>
                <ul className="grid grid-cols-2 gap-2">
                    {selectedCategory.items.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="mt-8">
                     <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                        Enquire for {selectedCategory.title}
                     </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MenuHighlights;
