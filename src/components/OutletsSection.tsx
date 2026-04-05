import { MapPin, ArrowUpRight, Map } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const outlets = [
  {
    name: "Hairkunst @ The Curve",
    description:
      "The origin of Hairkunst Salon, our journey began with a passion for beauty and a commitment to excellence. We have grown into a top‑notch destination for hair care where every client is treated like family and every style is a work of art.",
    address: "The Curve, Mutiara Damansara, 47800 Petaling Jaya, Selangor",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&q=80",
    mapsUrl: "https://maps.google.com/?q=The+Curve+Mutiara+Damansara+Petaling+Jaya",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7!2d101.6!3d3.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sThe+Curve!5e0!3m2!1sen!2smy!4v1700000000000",
  },
  {
    name: "Hairkunst Hijabis @ Melawati Mall",
    description:
      "At Hairkunst Hijabis, we offer an exceptional experience tailored for our Muslimah clients. Enter an elegant space where your hair receives the highest care and professionalism.",
    address: "Melawati Mall, 53100 Kuala Lumpur, Malaysia",
    image: "https://images.unsplash.com/photo-1633681122956-4be385e7011a?w=600&q=80",
    mapsUrl: "https://maps.google.com/?q=Melawati+Mall+Kuala+Lumpur",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.5!2d101.75!3d3.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMelawati+Mall!5e0!3m2!1sen!2smy!4v1700000000000",
  },
  {
    name: "Hairkunst @ Shah Alam .13",
    description:
      "At Hairkunst, our skilled seasonal hairstylists are committed to turning your hair into a beautiful masterpiece. Visit our salon for an exceptional experience and personalized style just for you!",
    address: "Seksyen 13, 40100 Shah Alam, Selangor",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    mapsUrl: "https://maps.google.com/?q=Seksyen+13+Shah+Alam+Selangor",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.2!2d101.5!3d3.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSeksyen+13+Shah+Alam!5e0!3m2!1sen!2smy!4v1700000000000",
  },
];

const OutletsSection = () => {
  return (
    <section id="outlets" className="section-padding bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">Find Us</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Hairkunst <span className="text-gradient">Premium Outlets</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Visit any of our premium salon locations across Malaysia.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {outlets.map((outlet, i) => (
            <AnimatedSection key={outlet.name} delay={0.15 * i}>
              <div className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl h-full flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={outlet.image}
                    alt={outlet.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-1 space-y-4">
                  <h3 className="font-serif text-xl font-semibold text-foreground">{outlet.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{outlet.description}</p>

                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{outlet.address}</span>
                  </div>

                  {/* Mini map embed */}
                  <div className="rounded-xl overflow-hidden border border-border/50 h-32">
                    <iframe
                      src={outlet.mapEmbed}
                      className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${outlet.name}`}
                    />
                  </div>

                  <div className="flex flex-wrap gap-3 mt-2">
                    <a
                      href="https://booking.hairkunst.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-primary/90 transition-all duration-300 group/btn"
                    >
                      Book Now
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                    <a
                      href={outlet.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-muted-foreground text-sm font-medium rounded-full hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      <Map className="w-3.5 h-3.5" />
                      View on Maps
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutletsSection;
