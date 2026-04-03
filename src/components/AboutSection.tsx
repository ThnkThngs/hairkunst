const AboutSection = () => {
  return (
    <section id="about" className="relative section-padding bg-gradient-section overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80"
              alt="Hairkunst salon interior"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border-2 border-primary/20 rounded-2xl -z-10" />
        </div>

        {/* Right: Text */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">About Us</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground italic leading-tight">
              Welcome.
              <br />
              <span className="text-gradient">Guten Tag.</span>
            </h2>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              At Hairkunst, we believe hair is more than style — it's an expression of identity.
              Founded on the principles of European precision and Asian artistry, our master
              stylists blend techniques from around the world to create looks that are uniquely yours.
            </p>
            <p>
              Every visit is a curated experience. From the moment you step into our salon,
              you're enveloped in an atmosphere of calm luxury. Our commitment to using only
              premium, sustainable products ensures your hair not only looks extraordinary but
              feels extraordinary.
            </p>
          </div>

          <div className="flex gap-12 pt-4">
            <div>
              <p className="font-serif text-3xl font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground tracking-wider uppercase">Years</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-primary">50K+</p>
              <p className="text-sm text-muted-foreground tracking-wider uppercase">Clients</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-primary">3</p>
              <p className="text-sm text-muted-foreground tracking-wider uppercase">Outlets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
