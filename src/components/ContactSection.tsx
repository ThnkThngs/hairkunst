import { ArrowUpRight, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-warm">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <AnimatedSection>
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">Experience Hairkunst</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            Ready for a <span className="text-gradient italic">Transformation?</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-lg">
            Experience the Hairkunst difference anytime, anywhere. Book your
            appointment online and let us turn your hair into a masterpiece.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <a
              href="https://wa.me/601139697861?text=Hi%20Hairkunst%2C%20I%27d%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              WhatsApp us for quick bookings and questions.
            </a>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <a
            href="https://wa.me/601139697861?text=Hi%20Hairkunst%2C%20I%27d%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 group"
          >
            Book Online
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
