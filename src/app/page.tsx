import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background font-sans">
      {/* 2.1 Hero Section - Premium Refresh */}
      <section className="relative h-[95vh] min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/1.avif"
            alt="Hero Background"
            fill
            className="object-cover brightness-[0.6] scale-105"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-emerald/40 to-transparent z-[1]"></div>
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-white">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border-white/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/90">The Nervous System Reset Method</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold max-w-5xl tracking-tight leading-[1.1]">
            Reset Your Nervous System, <br />
            <span className="text-brand-gold italic font-normal">Reduce Pain & Sleep Better.</span>
          </h1>
          
          <p className="mt-8 text-xl md:text-2xl max-w-2xl text-white/80 font-light leading-relaxed">
            Evidence-based yoga therapy, acupuncture & nervous system regulation with <span className="text-white font-medium">Isabel Gordon</span>.
          </p>
          
          <div className="mt-12 flex flex-wrap gap-6">
            <Link href="/book" className="bg-brand-gold hover:bg-white text-brand-emerald px-12 py-5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-1 shadow-2xl shadow-brand-gold/20">
              Start Your Journey
            </Link>
            <Link href="/retreats" className="glass hover:bg-white/20 text-white px-12 py-5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-xl">
              Explore Retreats
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
           <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </section>

      {/* 2.2 Services Overview - Premium Cards */}
      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl text-left">
              <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs block mb-4">Our Expertise</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-emerald leading-tight italic">Rooted in Science, Guided by Tradition.</h2>
            </div>
            <Link href="/services" className="text-brand-emerald font-bold tracking-widest uppercase text-xs border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors shrink-0">
              View All Services
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { id: 2, title: "Yoga Classes", desc: "Bespoke Iyengar and Yin sessions focused on alignment.", link: "/yoga" },
              { id: 3, title: "Exercise Physiology", desc: "Scientific approach to movement and rehabilitation.", link: "/exercise-physiology" },
              { id: 4, title: "Acupuncture & Cupping", desc: "Ancient healing for modern nervous system stress.", link: "/acupuncture" },
              { id: 5, title: "Live-in Retreats", desc: "Immersive healing at our canal-side sanctuary.", link: "/retreats" }
            ].map((service) => (
              <div key={service.id} className="group flex flex-col pt-12 border-t border-brand-sand transition-all duration-300 hover:border-brand-gold">
                <span className="text-brand-gold/40 text-4xl font-serif mb-6 group-hover:text-brand-gold transition-colors">0{service.id - 1}</span>
                <h3 className="text-2xl font-serif font-bold text-brand-emerald mb-4 group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                <p className="text-brand-emerald/70 mb-8 font-light leading-relaxed">{service.desc}</p>
                <div className="mt-auto relative h-48 rounded-2xl overflow-hidden mb-6">
                   <Image src={`/${service.id}.avif`} alt={service.title} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                </div>
                <Link href={service.link} className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-brand-emerald group-hover:text-brand-gold transition-colors">
                  Learn More <span className="w-8 h-[1px] bg-brand-emerald group-hover:bg-brand-gold transition-all group-hover:w-12"></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.4 Philosophy with Depth */}
      <section className="py-32 relative overflow-hidden bg-brand-emerald text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden border-[12px] border-white/5 shadow-3xl">
                <Image src="/6.avif" alt="Philosophy" width={600} height={800} className="object-cover w-full h-[700px]" />
              </div>
              <div className="absolute top-1/2 -right-12 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>
            
            <div className="space-y-10">
              <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-xs">The Vision</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold leading-[1.1] italic">Home of the Nervous System Reset Method.</h2>
              <p className="text-xl text-brand-sand font-light leading-relaxed italic border-l-2 border-brand-gold pl-8">
                "Our studio in Cabarita Beach is more than a space; it's a sanctuary for those seeking to move beyond stress and chronic pain."
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-10 border-t border-white/10">
                {['Chronic Pain', 'Burnout Relief', 'Deep Insomnia', 'Injury Rehab', 'Hormonal Balance', 'Stress Mastery'].map((item) => (
                  <div key={item} className="flex items-center gap-4 group">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full border border-brand-gold group-hover:bg-brand-gold transition-all">
                       <svg className="w-3 h-3 text-brand-gold group-hover:text-brand-emerald transition-all" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    </span>
                    <span className="text-sm font-medium tracking-wide text-brand-sand">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Founder - Refined Portrait */}
      <section className="py-40 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/5] relative rounded-[4rem] overflow-hidden shadow-2xl skew-y-3 transition-transform hover:skew-y-0 duration-700">
                <Image src="/7.avif" alt="Isabel Gordon" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 glass px-8 py-6 rounded-2xl shadow-xl z-10 border border-brand-sand">
                <p className="text-brand-emerald font-serif italic text-lg leading-tight">Expertise in both<br/><span className="font-bold font-sans not-italic text-brand-gold uppercase tracking-tighter">Modern Science & Eastern Healing</span></p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
               <span className="text-brand-gold font-extrabold tracking-widest text-xs uppercase block mb-6">Meet the Founder</span>
               <h2 className="text-5xl md:text-7xl font-serif font-bold text-brand-emerald mb-10 leading-none">Isabel Gordon <span className="text-lg font-sans align-top font-normal text-brand-sage">BSc(Hons)</span></h2>
               <p className="text-2xl text-brand-emerald font-light leading-relaxed mb-10 border-l-8 border-brand-sand pl-8 italic">
                 "I help people reset their nervous system so they can move freely & feel like themselves again."
               </p>
               <div className="flex flex-wrap gap-3 mb-12">
                 {['Exercise Physiologist', 'Acupuncturist', 'Zenthai Massage', 'Yoga Therapist'].map((q) => (
                   <span key={q} className="px-5 py-2 rounded-full border border-brand-sand text-[10px] font-bold tracking-[0.2em] uppercase text-brand-emerald/60 hover:border-brand-gold hover:text-brand-emerald transition-colors">{q}</span>
                 ))}
               </div>
               <Link href="/about" className="bg-brand-emerald text-white px-12 py-5 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-gold transition-all duration-500 transform hover:-translate-x-2">
                 Read Her Full Story
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Sophisticated Flow */}
      <section className="py-32 bg-brand-sand/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs block mb-4">Community Voices</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-emerald mb-20 italic">Stories of Transformation.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { text: "The Nervous System Reset method completely changed how I sleep. I feel more calm and centered than ever before.", author: "Sarah M.", role: "Chronic Fatigue Recovery" },
              { text: "Best yoga classes in Cabarita Beach. Isabel's knowledge of exercise physiology makes a huge difference in safety.", author: "David R.", role: "Athlete" },
              { text: "Highly professional care. The combination of acupuncture and massage helped me recover in record time.", author: "Emma L.", role: "Physical Rehab" }
            ].map((review, i) => (
              <div key={i} className="bg-white p-12 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group relative">
                <div className="text-brand-gold mb-6 flex justify-center gap-1 opacity-40">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
                </div>
                <p className="text-brand-emerald font-light leading-relaxed italic mb-8">"{review.text}"</p>
                <h4 className="font-bold text-brand-emerald text-sm uppercase tracking-widest">{review.author}</h4>
                <p className="text-[10px] text-brand-gold font-extrabold uppercase mt-2 tracking-tighter">{review.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location with Texture */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
           <div className="relative h-[600px] rounded-[3rem] overflow-hidden group shadow-2xl">
             <Image src="/8.avif" alt="Channel location" fill className="object-cover transition-transform duration-[3s] group-hover:scale-110" />
             <div className="absolute inset-0 bg-brand-emerald/20 hover:bg-transparent transition-all duration-1000"></div>
             <div className="absolute bottom-12 left-12 glass p-12 max-w-md border-white/40 shadow-2xl">
               <h3 className="text-3xl font-serif font-bold text-brand-emerald mb-4 italic">Cabarita Beach Studio</h3>
               <p className="text-brand-emerald/70 font-light mb-6">Our canal-side sanctuary features private yoga spaces, tranquil treatment rooms, and riverside accommodation.</p>
               <Link href="/contact" className="text-brand-emerald font-bold text-xs uppercase tracking-widest border-b border-brand-gold pb-1 hover:text-brand-gold transition-colors">Visit Our Space</Link>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
