import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          alt="Hairkunst salon styling"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center pt-20">
        {/* Left: Text */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p
              className="text-sm tracking-[0.3em] uppercase text-primary font-medium opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              European & Asian Styling Artistry
            </p>
            <h1
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-foreground opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Hair<span className="text-gradient">kunst</span>
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              Where artistry meets precision. Discover a world of bespoke hair transformations crafted by master stylists.
            </p>
          </div>

          <div
            className="flex gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="https://booking.hairkunst.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm rounded-full hover:bg-accent transition-all duration-300 hover:shadow-[0_0_30px_hsl(280_60%_65%/0.4)]"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-3.5 border border-border text-foreground font-semibold tracking-wider uppercase text-sm rounded-full hover:border-primary hover:text-primary transition-all duration-300"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Right: Featured image */}
        <div
          className="relative hidden md:block opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
              alt="Vibrant hair color styling"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border-2 border-primary/30" />
          <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-accent/10" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce-slow" />
      </div>
    </section>
  );
};

export default HeroSection;
