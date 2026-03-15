import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: "Yoga Classes",
    subtitle: "Alignment & Recovery",
    description: "Specializing in Iyengar-informed and Yin yoga, our classes focus on structural alignment and nervous system down-regulation. Suitable for all levels, from beginners to advanced practitioners seeking clinical precision.",
    features: ["Structural Alignment", "Prop-Supported Restoration", "Vagus Nerve Stimulation", "Small Class Sizes"],
    image: "/2.avif",
    price: "From $25"
  },
  {
    title: "Exercise Physiology",
    subtitle: "Science-Based Movement",
    description: "Evidence-based movement therapy for chronic conditions, injury rehabilitation, and performance optimization. Led by Accredited Exercise Physiologist Isabel Gordon.",
    features: ["Clinical Assessment", "Individualized Programs", "Chronic Pain Management", "Neurological Rehab"],
    image: "/3.avif",
    price: "Initial: $140"
  },
  {
    title: "Acupuncture & Cupping",
    subtitle: "Traditional Wisdom",
    description: "Balance your body's energy system and reduce physical tension through professional acupuncture and traditional cupping therapy. Perfect for stress and musculoskeletal issues.",
    features: ["Traditional Chinese Medicine", "Myofascial Release", "Stress Reduction", "Trigger Point Therapy"],
    image: "/4.avif",
    price: "Sessions from $110"
  },
  {
    title: "Live-in Retreats",
    subtitle: "Immersive Sanctuary",
    description: "Step away from the noise and enter a deep state of recovery. Our canal-side retreats offer a holistic immersion into the Nervous System Reset method.",
    features: ["Riverside Accommodation", "Daily Clinical Sessions", "Anti-Inflammatory Menu", "Personalized Care"],
    image: "/5.avif",
    price: "All-Inclusive"
  }
];

export default function Services() {
  return (
    <div className="flex flex-col w-full bg-white font-sans">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-brand-emerald">
        <div className="absolute inset-0 z-0">
          <Image src="/9.avif" alt="Services Hero" fill className="object-cover opacity-30 grayscale" />
        </div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-white">
          <span className="text-brand-gold font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Our Offerings</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold italic leading-tight">Professional <br/><span className="text-brand-gold not-italic">Healing.</span></h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-40 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-32">
            {services.map((service, index) => (
              <div key={service.title} className="group">
                <div className="relative h-[500px] rounded-[3rem] overflow-hidden mb-12 shadow-2xl">
                  <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-emerald/80 to-transparent flex flex-col justify-end p-12">
                     <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4">{service.subtitle}</span>
                     <h3 className="text-4xl font-serif font-bold text-white italic">{service.title}</h3>
                  </div>
                </div>
                <div className="space-y-8 px-4">
                  <p className="text-xl text-brand-emerald/70 font-light leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map(f => (
                      <div key={f} className="flex items-center gap-3 text-sm font-medium text-brand-emerald">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0"></span>
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="pt-8 flex items-center justify-between border-t border-brand-sand">
                    <span className="text-brand-emerald font-serif italic text-lg">{service.price}</span>
                    <Link href="/book" className="bg-brand-emerald text-white px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-brand-gold transition-all">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="py-32 bg-brand-sand/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-emerald italic mb-8">Not sure which service is right for you?</h2>
           <p className="text-brand-sage text-xl mb-12 max-w-2xl mx-auto">We offer a free 15-minute phone discovery call to discuss your needs and find the best clinical path forward.</p>
           <Link href="/contact" className="inline-block border-2 border-brand-emerald text-brand-emerald px-12 py-5 rounded-full font-bold tracking-widest uppercase hover:bg-brand-emerald hover:text-white transition-all">
             Contact for Advice
           </Link>
        </div>
      </section>
    </div>
  );
}
