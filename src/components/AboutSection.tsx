const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80"
          alt="Hairkunst salon styling"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for text readability — heavier on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32 w-full">
        <div className="max-w-xl space-y-8">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground italic leading-[1.05]">
            Welcome. <span className="text-gradient">Guten Tag</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            At Hairkunst Salon, we pride ourselves on delivering exceptional
            hair services tailored to your unique style. Experience a relaxing
            atmosphere and expert stylists dedicated to making you look
            and feel your best. Every visit is a curated journey of transformation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
