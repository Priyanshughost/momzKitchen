import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    text: "The chocolate truffle cake was absolute perfection! The finishing was so neat and the taste was divine. Everyone at the party asked where it was from.",
    rating: 5,
    tag: "Birthday"
  },
  {
    id: 2,
    name: "Rahul Verma",
    text: "Ordered a custom theme cake for my son's 5th birthday. Mom'z Kitchen delivered exactly what we visualized. The sponge was so soft and fresh.",
    rating: 5,
    tag: "Theme Cake"
  },
  {
    id: 3,
    name: "Anjali Das",
    text: "Best eggless bakery in Jamshedpur hands down. The delivery was timely and contactless. The complimentary candles were a sweet touch.",
    rating: 5,
    tag: "Anniversary"
  },
  {
    id: 4,
    name: "Vikram Singh",
    text: "Professional service and premium quality. The cream cheese frosting is to die for. Highly recommended for anyone looking for quality.",
    rating: 5,
    tag: "Premium"
  }
];

const WhyLoveUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background pattern moves slower than foreground
  const bgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} id="reviews" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Parallax Background Pattern */}
        <motion.div 
            style={{ y: bgY }}
            className="absolute inset-0 opacity-5 -top-20 -bottom-20" // extend bounds to prevent clipping
        >
             <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
        </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Why People Love Us</h2>
          <p className="text-white/70 text-lg">Words from our happy family of customers.</p>
        </div>

        <div className="max-w-5xl mx-auto">
             <Carousel className="w-full">
                <CarouselContent className="-ml-4">
                    {reviews.map((review, index) => (
                        <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                             <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                             >
                                <Card className="bg-white/10 border-white/10 backdrop-blur-sm h-full hover:bg-white/15 transition-colors duration-300">
                                    <CardContent className="p-8 flex flex-col h-full">
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                                            ))}
                                        </div>
                                        <p className="text-white/90 mb-6 italic leading-relaxed flex-grow">"{review.text}"</p>
                                        <div className="mt-auto">
                                            <p className="font-serif font-bold text-lg text-white">{review.name}</p>
                                            <p className="text-sm text-secondary font-medium">{review.tag}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                             </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white" />
                <CarouselNext className="hidden md:flex -right-12 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white" />
             </Carousel>
        </div>
      </div>
    </section>
  );
};

export default WhyLoveUs;
