import { MapPin, Phone, Instagram, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-bold">Mom’z Kitchen</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Crafting sweet memories with every slice. Pure veg, home-baked goodness delivered to your doorstep in Jamshedpur.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-bold">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-secondary" />
                <p className="text-primary-foreground/80">
                  Flat No. 3/3, Basera Apartments,<br />
                  River Meet Rd, Sonari,<br />
                  Jamshedpur, Jharkhand 831011
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-secondary" />
                <p className="text-primary-foreground/80">087095 77220</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-bold">Opening Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2 opacity-70" /> Mon - Sun</span>
                <span className="text-secondary font-medium">9:00 AM - 10:00 PM</span>
              </div>
              <p className="text-sm text-primary-foreground/60 pt-2">
                *Order 24 hours in advance for custom cakes.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
             <h4 className="font-serif text-xl font-bold">Locate Us</h4>
            <div className="w-full h-48 bg-muted rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.016629986345!2d86.177!3d22.801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ4JzAzLjYiTiA4NsKwMTAnMzcuMiJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy"
                ></iframe>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Mom’z Kitchen. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
