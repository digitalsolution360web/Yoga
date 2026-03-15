import Image from 'next/image';
import Link from 'next/link';

const retreats = [
  {
    title: "1-Day Nervous System Reset",
    subtitle: "The Clinical Immersion",
    description: "A transformative day dedicated to recalibrating your body's stress response. Perfect for those in deep burnout or seeking a scientific introduction to our method.",
    schedule: [
      "09:00 - Arrival & Clinical Assessment",
      "10:00 - Vagus Nerve Yoga Therapy",
      "12:30 - Organic Anti-Inflammatory Lunch",
      "14:00 - Acupuncture & Sound Healing",
      "16:00 - Integration & Take-home Protocol"
    ],
    image: "/11.avif",
    accent: "brand-gold"
  },
  {
    title: "Multi-Day Retreat: Reset, Refresh & Renew",
    subtitle: "The Ultimate Sanctuary",
    description: "Our signature 3-5 day residency. Living at our riverside sanctuary allows for a profound cellular recovery that deepens with every overnight stay.",
    schedule: [
      "Daily Riverside Yoga & Meditation",
      "One-on-One Exercise Physiology",
      "Private Acupuncture & Zenthai Sessions",
      "Luxury Canal-side Accommodation",
      "Full Holistic Nutritional Support"
    ],
    image: "/1.avif",
    accent: "brand-emerald"
  }
];

export default function Retreats() {
  return (
    <div className="flex flex-col w-full bg-white font-sans">
      {/* Immersive Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image src="/8.avif" alt="Retreat Sanctuary" fill className="object-cover brightness-[0.4]" priority />
        <div className="relative z-10 text-center text-white px-4">
          <span className="text-brand-gold font-bold tracking-[0.6em] uppercase text-xs mb-8 block">Immersive Healing</span>
          <h1 className="text-6xl md:text-9xl font-serif font-bold italic leading-none">Your <span className="text-brand-gold not-italic">Sanctuary.</span></h1>
          <p className="mt-12 text-2xl font-light text-brand-sand/80 max-w-3xl mx-auto italic">
            "Step into a space where time slows down, and your healing takes center stage."
          </p>
        </div>
      </section>

      {/* Main Retreats Detail */}
      <section className="py-40">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="space-y-48">
            {retreats.map((retreat, index) => (
              <div key={retreat.title} className={`flex flex-col lg:flex-row gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                   <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-3xl">
                     <Image src={retreat.image} alt={retreat.title} fill className="object-cover" />
                     <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[3rem]"></div>
                   </div>
                </div>
                
                <div className="w-full lg:w-1/2 space-y-12">
                   <div className="space-y-4">
                     <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-xs">{retreat.subtitle}</span>
                     <h2 className="text-5xl md:text-7xl font-serif font-bold text-brand-emerald italic leading-tight">{retreat.title}</h2>
                   </div>
                   
                   <p className="text-2xl text-brand-emerald/70 font-light leading-relaxed">
                     {retreat.description}
                   </p>
                   
                   <div className="bg-brand-sand/30 p-12 rounded-[2rem] border-l-8 border-brand-gold">
                      <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-emerald mb-8">What to Expect</h4>
                      <ul className="space-y-4">
                        {retreat.schedule.map(item => (
                          <li key={item} className="flex items-start gap-4 text-brand-emerald/80 font-medium italic">
                            <span className="text-brand-gold mt-1">✦</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                   </div>
                   
                   <div className="pt-6">
                     <Link href="/book" className="inline-block bg-brand-emerald text-white px-16 py-6 rounded-full font-bold tracking-[0.2em] uppercase hover:bg-brand-gold transition-all duration-500 shadow-2xl shadow-brand-emerald/20">
                       Inquire About Booking
                     </Link>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Accent */}
      <section className="py-32 bg-brand-emerald text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
           <h2 className="text-4xl md:text-6xl font-serif font-bold italic mb-10">Riverside Serenity</h2>
           <p className="text-brand-sage text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
             Our retreats are held at our private canal-side property in Cabarita Beach, where the ocean breeze meets the calm of the waters.
           </p>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {['Private Suite', 'Canal Access', 'Clinical Studio', 'Gourmet Kitchen'].map(f => (
               <div key={f} className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                 <span className="text-brand-gold font-bold tracking-widest text-[10px] uppercase">{f}</span>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
