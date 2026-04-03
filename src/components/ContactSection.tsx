import { Instagram, Facebook, Mail, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            <AnimatedSection direction="left">
              <div className="space-y-4">
                <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">Get In Touch</p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Ready for a <span className="text-gradient">Transformation?</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Book your appointment online or reach out to us directly. We'd love to welcome you to the Hairkunst experience.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <a
                href="https://booking.hairkunst.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm rounded-full hover:bg-accent transition-all duration-300 hover:shadow-[0_0_40px_hsl(280_60%_65%/0.3)] group"
              >
                Book Online
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="pt-4 space-y-4">
                <p className="text-sm tracking-wider uppercase text-muted-foreground">Follow us</p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/hairkunst"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com/hairkunst"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:hello@hairkunst.com"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Image */}
          <AnimatedSection direction="right" className="relative hidden md:block">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=80"
                alt="Hairkunst salon experience"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-primary/15 -z-10" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
