import { Sparkles, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const offers = [
  {
    tag: "New Client",
    title: "First Visit Special",
    description: "Enjoy 20% off any service on your first visit to any Hairkunst outlet.",
    cta: "Book Now",
    href: "https://booking.hairkunst.com",
  },
  {
    tag: "Seasonal",
    title: "Raya Glam Package",
    description: "Cut, color & styling bundle — look your best this festive season. From RM 250.",
    cta: "Learn More",
    href: "https://booking.hairkunst.com",
  },
  {
    tag: "Loyalty",
    title: "Refer a Friend",
    description: "Both you and your friend get RM 30 off your next appointment.",
    cta: "Get Referral Code",
    href: "https://wa.me/60163541201?text=Hi%20I%27d%20like%20a%20referral%20code",
  },
];

const PromotionsSection = () => {
  return (
    <section className="section-padding bg-gradient-warm">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12 space-y-4">
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">
              <Sparkles className="w-4 h-4 inline-block mr-2 -mt-0.5" />
              Limited Time
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Special <span className="text-gradient italic">Offers</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Treat yourself to something special — explore our current deals and seasonal packages.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <AnimatedSection key={i} delay={i * 0.12} direction="up">
              <div className="relative h-full rounded-2xl border border-border bg-card p-8 flex flex-col transition-shadow duration-300 hover:shadow-lg">
                <span className="inline-block self-start mb-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary">
                  {offer.tag}
                </span>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {offer.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {offer.description}
                </p>
                <a
                  href={offer.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-300 group"
                >
                  {offer.cta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
