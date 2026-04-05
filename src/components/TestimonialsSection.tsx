import { Quote } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  {
    quote: "Hairkunst Hijabis made me feel so comfortable and understood my hijab needs perfectly.",
    name: "Sara",
    outlet: "Melawati Mall",
  },
  {
    quote: "I've trusted Hairkunst @ The Curve with my color for years – always on point.",
    name: "Aisyah",
    outlet: "The Curve",
  },
  {
    quote: "Dashing Diva is my go-to before big events – fast, friendly, and flawless.",
    name: "Dania",
    outlet: "Shah Alam",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-warm">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">Testimonials</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              What Our Clients <span className="text-gradient italic">Say</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Real stories from our Hairkunst family across Klang Valley.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 h-full flex flex-col">
                <Quote className="w-8 h-8 text-primary/30 mb-4 shrink-0" />
                <p className="text-foreground leading-relaxed italic flex-1">
                  "{t.quote}"
                </p>
                <div className="mt-6 pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.outlet}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
