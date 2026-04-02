import { MapPin, Phone, Clock } from "lucide-react";

const outlets = [
  {
    name: "Hairkunst Berlin Mitte",
    address: "Friedrichstraße 123, 10117 Berlin",
    phone: "+49 30 1234 5678",
    hours: "Tue–Sat: 10:00 – 20:00",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&q=80",
  },
  {
    name: "Hairkunst Munich",
    address: "Maximilianstraße 45, 80539 München",
    phone: "+49 89 9876 5432",
    hours: "Tue–Sat: 09:00 – 19:00",
    image: "https://images.unsplash.com/photo-1633681122956-4be385e7011a?w=600&q=80",
  },
  {
    name: "Hairkunst Hamburg",
    address: "Jungfernstieg 78, 20354 Hamburg",
    phone: "+49 40 5566 7788",
    hours: "Mon–Sat: 10:00 – 20:00",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
  },
];

const OutletsSection = () => {
  return (
    <section id="outlets" className="section-padding bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">Find Us</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Our <span className="text-gradient">Outlets</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Visit any of our three premium salon locations across Germany.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {outlets.map((outlet) => (
            <div
              key={outlet.name}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={outlet.image}
                  alt={outlet.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-serif text-xl font-semibold text-foreground">{outlet.name}</h3>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{outlet.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a href={`tel:${outlet.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                      {outlet.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <span>{outlet.hours}</span>
                  </div>
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(outlet.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm text-primary font-medium tracking-wider uppercase hover:text-accent transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutletsSection;
