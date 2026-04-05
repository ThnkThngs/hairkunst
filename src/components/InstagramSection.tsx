import { Heart, Instagram } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const INSTAGRAM_URL = "https://www.instagram.com/hairkunst";

const posts = [
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=80",
  "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&q=80",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=80",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&q=80",
];

const InstagramSection = () => {
  return (
    <section className="section-padding bg-gradient-warm">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12 space-y-4">
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">
              <Instagram className="w-4 h-4 inline-block mr-2 -mt-0.5" />
              @Hairkunst
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              From Our <span className="text-gradient italic">Instagram</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Follow @Hairkunst for daily hair inspiration, salon moments, and transformations.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {posts.map((src, i) => (
            <AnimatedSection key={i} delay={i * 0.08} direction="scale">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square rounded-xl overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Hairkunst Instagram post ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-primary-foreground">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm font-semibold tracking-wide">View on Instagram</span>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="text-center mt-10">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-foreground/20 text-foreground text-sm font-semibold tracking-wider uppercase rounded-full hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              View Our Instagram
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default InstagramSection;
