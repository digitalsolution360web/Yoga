import Image from 'next/image';
import Link from 'next/link';

const teachers = [
  {
    name: "Isabel Gordon",
    credentials: "BSc(Hons), Exercise Physiologist & Acupuncturist",
    bio: "The Nervous System Reset Expert. Isabel helps people reset their nervous system so they can sleep deeply, move freely & feel like themselves again. She specializes in recovering from chronic stress and nervous system exhaustion using a fusion of modern science & Eastern healing.",
    qualifications: ["Exercise Physiologist", "Acupuncturist", "Zenthai Massage", "Yoga Therapist"],
    image: "/about.avif"
  },
  {
    name: "Kerriann Dear",
    credentials: "Senior Yoga Instructor",
    bio: "Expert in Iyengar and Yin yoga styles. Kerriann focuses on accessibility and proper alignment for all ages and skill levels. Her sessions are known for their precision and deep calming effect.",
    qualifications: ["Senior Iyengar Teacher", "Mindfulness Coach", "Prop Specialist"],
    image: "/about1.avif"
  },
  {
    name: "Maurice McCann",
    credentials: "Holistic Health Practitioner",
    bio: "Specializing in Yoga Nidra and restorative practices. Maurice brings a deep sense of calm and technical expertise to every session, helping students achieve profound states of relaxation.",
    qualifications: ["Yoga Nidra Specialist", "Meditation Teacher", "Breathwork Guide"],
    image: "/about3.avif"
  }
];

export default function About() {
  return (
    <div className="flex flex-col w-full bg-background font-sans">
      {/* Intro Header - Soft Sand Background */}
      <section className="pt-48 pb-32 bg-brand-sand/30 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-4xl">
            <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-xs block mb-8">Our Philosophy</span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-brand-emerald tracking-tight leading-none italic">
              Integrative <br/><span className="text-brand-gold not-italic">Healing.</span>
            </h1>
            <p className="mt-12 text-2xl md:text-3xl text-brand-emerald/80 leading-relaxed font-light italic border-l-2 border-brand-gold pl-8">
              "We combine the rigorous precision of <span className="text-brand-emerald font-medium not-italic text-4xl">Western science</span> with the intuitive depth of <span className="text-brand-emerald font-medium not-italic text-4xl">Eastern wisdom</span> to help you reclaim your vitality."
            </p>
          </div>
        </div>
      </section>

      {/* Teachers Detail - Alternating Backgrounds */}
      <section className="py-24">
        {teachers.map((teacher, index) => (
          <div 
            key={teacher.name} 
            className={`py-32 ${
              index === 0 ? 'bg-white' : 
              index === 1 ? 'bg-brand-emerald text-white' : 
              'bg-brand-sage/10'
            }`}
          >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
              <div className={`flex flex-col lg:flex-row items-center gap-20 lg:gap-32 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2 relative">
                  <div className="group relative z-10">
                    <div className="aspect-[4/5] md:aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-1000 group-hover:scale-[1.02]">
                      <Image 
                        src={teacher.image} 
                        alt={teacher.name} 
                        fill 
                        className={`object-cover ${index === 1 ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'} transition-all duration-1000`} 
                      />
                    </div>
                    {/* Decorative framework */}
                    <div className={`absolute -inset-6 border border-brand-gold/30 -z-10 rounded-2xl transition-all duration-700 hidden md:block ${
                      index % 2 === 0 ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'
                    }`}></div>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 space-y-10">
                  <div>
                    <span className={`text-[10px] font-bold tracking-[0.4em] uppercase block mb-4 ${index === 1 ? 'text-brand-gold' : 'text-brand-gold'}`}>Featured Expert</span>
                    <h3 className="text-4xl md:text-6xl font-serif font-bold leading-tight">{teacher.name}</h3>
                    <div className={`inline-block px-5 py-2 mt-6 rounded-full text-[10px] font-bold tracking-widest uppercase border ${
                      index === 1 ? 'border-brand-gold text-brand-gold' : 'border-brand-sand text-brand-emerald'
                    }`}>
                      {teacher.credentials}
                    </div>
                  </div>

                  <p className={`text-xl font-light leading-relaxed border-l-2 pl-8 ${
                    index === 1 ? 'text-brand-sand border-brand-gold' : 'text-brand-emerald/80 border-brand-gold'
                  }`}>
                    {teacher.bio}
                  </p>
                  
                  <div className="pt-6">
                    <h4 className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-8 ${index === 1 ? 'text-white/60' : 'text-brand-gold'}`}>Clinical Expertise</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                      {teacher.qualifications.map((qual) => (
                        <div key={qual} className="flex items-center gap-4 group">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 transition-transform group-hover:scale-150"></span>
                          <span className={`text-sm font-medium tracking-wide ${index === 1 ? 'text-brand-sand' : 'text-brand-emerald/70'}`}>
                            {qual}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Philosophy Pillars - Solid Sage Background */}
      <section className="py-40 bg-brand-sage/20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white/50 -skew-y-3 translate-y-1/2"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              { title: "Clinical Precision", text: "Every session is informed by Accredited Exercise Physiology & modern anatomical science, ensuring safety and measurable results." },
              { title: "Vagal Tonification", text: "We specialize in the biological reset of the vagus nerve and parasympathetic system to mastery your stress response." },
              { title: "Cellular Recovery", text: "Prop-supported restorative practices designed to downregulate the nervous system for deep internal healing." }
            ].map((pillar) => (
              <div key={pillar.title} className="space-y-8 bg-white p-12 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group">
                <span className="text-brand-gold text-5xl font-serif italic block group-hover:translate-x-2 transition-transform opacity-30">—</span>
                <h4 className="text-3xl font-serif font-bold text-brand-emerald italic">{pillar.title}</h4>
                <p className="text-brand-emerald/70 leading-relaxed font-light">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Sophisticated Contrast */}
      <section className="py-40 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-brand-emerald px-12 py-24 rounded-[4rem] text-center relative overflow-hidden shadow-3xl">
             <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -z-0 translate-x-20 -translate-y-20"></div>
             <div className="relative z-10">
               <span className="text-brand-gold font-bold tracking-[0.5em] uppercase text-xs mb-8 block">Join The Sanctuary</span>
               <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-10 italic">Ready to Begin Your Reset?</h2>
               <p className="text-brand-sand text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                 Book your initial clinical consultation with Isabel or join a studio session today.
               </p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link href="/book" className="bg-brand-gold hover:bg-white text-brand-emerald px-16 py-6 rounded-full font-bold tracking-[0.2em] uppercase transition-all duration-500 shadow-2xl shadow-brand-gold/20 transform hover:-translate-y-1">
                   Book My Session
                 </Link>
                 <Link href="/contact" className="glass hover:bg-white/20 text-white px-16 py-6 rounded-full font-bold tracking-[0.2em] uppercase transition-all duration-500">
                   Contact Us
                 </Link>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
