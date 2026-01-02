import { motion } from "framer-motion";
import { Leaf, Truck, Home, ShoppingBag } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Pure Veg",
      description: "Eggless baking without compromising on fluffy textures."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "No-Contact Delivery",
      description: "Safe and hygienic doorstep delivery across Jamshedpur."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Doorstep Orders",
      description: "Order from the comfort of your home via WhatsApp."
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Women-Owned",
      description: "Empowering local women through culinary arts."
    }
  ];

  return (
    <section className="py-16 bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center p-4 hover:bg-background/50 rounded-xl transition-colors duration-300"
            >
              <div className="bg-white p-4 rounded-full shadow-sm text-primary mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
