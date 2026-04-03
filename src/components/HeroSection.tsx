import { ChevronDown } from "lucide-react";
import { useParallax } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const parallaxRef = useParallax(0.15);

  return (
    <section id="hero" className="relative min-h-screen flex bg-background overflow-hidden">
      {/* Left: Large image with parallax */}
      <div className="hidden md:block md:w-[63%] relative overflow-hidden">
        <div ref={parallaxRef} className="w-full h-[120%] -mt-[10%]">
          <img
            src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&q=80"
            alt="Vibrant purple and pink hair styling"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>

      {/* Mobile: full background image */}
      <div className="md:hidden absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&q=80"
          alt="Vibrant purple and pink hair styling"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Right: Text panel */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 md:py-0">
        <div className="max-w-md space-y-8">
          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] text-foreground italic opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Exquisite
            <br />
            Looks
          </h1>

          <p
            className="text-muted-foreground leading-relaxed text-justify opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            At Hairkunst, we integrate the artistry of European and Asian styling to fulfill your
            hair aspirations. Our experienced stylists deliver exceptional services in an
            elegant environment tailored to your needs. Experience the ideal
            combination of style and care with us.
          </p>

          <div
            className="flex flex-col items-center gap-3 pt-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <span className="font-serif italic text-muted-foreground text-lg tracking-wider">scroll</span>
            <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
