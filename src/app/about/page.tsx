import Image from 'next/image';
import Link from 'next/link';

const teachers = [
  {
    name: "Isabel Gordon",
    subtitle: "BSc (Hons), Adv Dip TCM",
    credentials: "Founder | Lead Yoga Instructor | Acupuncturist | ZenThai Shiatsu Therapist",
    bio: [
      `Isabel graduated as an Exercise Physiologist from the University of Sussex, UK in 1989. As a rep in athletics for Great Britain, she experienced the elation of high-level competition and then the pain and frustration of missing out on furthering her career due to repetitive surgery. Years of debilitating back pain lead her to explore massage and then Traditional Chinese Medicine.`,
      `She graduated from the Australian College of Natural Medicine with an Advanced Diploma in Acupuncture in 2002. During this journey, she was introduced to yoga.`,
      `She has been fortunate enough to have many wonderful teachers from different backgrounds, including yogi nuns, John Ogilvie, Simon Borg-Olivier, Peter Scott, and Liz Costigan and she is currently studying Iyengar yoga under a Senior teacher Glenn Ceresoli.`,
      `Although she continues to work with a few elite athletes she has a particular interest in pain and stress management. She is most excited by the dedication of her students..."People have come to classes on crutches or with major burns".`
    ],
    mottos: [
      "As long as you are breathing you can practice yoga.",
      "It is not the asana, but the awareness that counts, both on and off the mat."
    ],
    image: "/isabel.png",
  },
  {
    name: "Kerriann Dear",
    subtitle: "",
    credentials: "Yoga Instructor",
    bio: [
      `My yoga practice has been my constant life companion. It holds the gifts and tools to regenerate and bring life back to balance for me. In 2013 was fortunate to complete over 300 hours of teacher training with Louisa Sear and with Flo Fenton.`,
      `I'm passionate about social justice, the environment, and the healing of people and the planet. My work as a counselor and community worker has yoga woven through it. I am delighted to have an opportunity to teach at Cabarita Beach Yoga.`,
      `I hope to see you there.`
    ],
    mottos: [],
    image: "/kerriann.png",
    link: "/book"
  },
  {
    name: "Maurice McCann",
    subtitle: "",
    credentials: "Yoga Instructor",
    bio: [
      `Maurice is a certified Iyengar teacher. He has been practicing yoga for over 20 years, and teaching since 2000. In 1996, committed to the Iyengar method, he developed a strong and disciplined practice. In 2003, Maurice became the principal teacher and co-director of the West Australian School of Yoga.`,
      `In 2010, Maurice relocated to Queensland to establish the Yoga Room. He regularly attends classes at the Iyengar Institute in Pune, where he continues to study, and expand his knowledge. He also leads retreats and workshops throughout Bali and Australia.`,
      `Maurice's classes have a strong emphasis on safety and alignment. His natural, down to earth style has enabled many students to easily go beyond what they had believed to be their limitations.`
    ],
    mottos: [],
    image: "/maurice.png",
    link: "/book"
  }
];

export default function About() {
  return (
    <div className="flex flex-col w-full bg-background font-sans">

      {/* ===== HERO: "Our Teachers" with Background Image ===== */}
      <section className="relative pt-44 pb-36 overflow-hidden min-h-[70vh] flex items-center">
        {/* Full BG Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/retreat.png" alt="Yoga background" fill className="object-cover brightness-[0.35] scale-105" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-emerald/60 via-brand-emerald/30 to-brand-emerald/70 z-[1]"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
          <div className="max-w-4xl">
            <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-xs block mb-8">About Us</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-none">
              Our <br /><span className="text-brand-gold italic">Teachers</span>
            </h1>
            <p className="mt-12 text-xl md:text-2xl text-white/80 leading-relaxed font-light italic border-l-2 border-brand-gold pl-8 max-w-2xl">
              &ldquo;I believe the ultimate yoga is practiced in every breathing moment.&rdquo;
            </p>
          </div>
        </div>

        {/* Decorative bottom curve */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 80L1440 80L1440 40C1440 40 1200 0 720 0C240 0 0 40 0 40L0 80Z" fill="var(--background)" /></svg>
        </div>
      </section>


      {/* ===== TEACHER 1: ISABEL GORDON - Full Width Showcase ===== */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">

            {/* Large Image - object-contain so full image shows */}
            <div className="w-full lg:w-[45%] relative">
              <div className="group relative">
                <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-brand-sand/20" style={{ minHeight: '600px' }}>
                  <Image
                    src="/isabel.png"
                    alt="Isabel Gordon"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover transition-all duration-1000 group-hover:scale-[1.03]"
                  />
                </div>
                {/* Decorative frame */}
                <div className="absolute -inset-4 md:-inset-6 border-2 border-brand-gold/20 rounded-3xl -z-10 translate-x-4 translate-y-4"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center space-y-8">
              <div>
                <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Founder & Lead Instructor</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-emerald leading-tight">Isabel Gordon</h2>
                <p className="text-brand-sage text-lg font-light mt-2 italic">{teachers[0].subtitle}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {teachers[0].credentials.split(' | ').map((c) => (
                    <span key={c} className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase border border-brand-sand text-brand-emerald/70 bg-brand-sand/20">{c}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-5 border-l-2 border-brand-gold pl-6 lg:pl-8">
                {teachers[0].bio.map((paragraph, i) => (
                  <p key={i} className="text-brand-emerald/80 text-base lg:text-lg font-light leading-relaxed">{paragraph}</p>
                ))}
              </div>

              {/* Mottos */}
              <div className="bg-brand-emerald/5 rounded-2xl p-6 md:p-8 space-y-4">
                <h4 className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[10px]">Her Mottos</h4>
                {teachers[0].mottos.map((motto, i) => (
                  <p key={i} className="text-brand-emerald font-serif italic text-lg flex items-start gap-3">
                    <span className="text-brand-gold text-2xl leading-none mt-0.5">&ldquo;</span>
                    {motto}&rdquo;
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== TEACHER 2: KERRIANN DEAR - Dark Emerald Section ===== */}
      <section className="py-20 md:py-32 bg-brand-emerald text-white relative overflow-hidden">
        {/* Subtle BG pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] -skew-x-12 translate-x-1/4"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-stretch gap-16 lg:gap-24">

            {/* Image */}
            <div className="w-full lg:w-[45%] relative">
              <div className="group relative">
                <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl" style={{ minHeight: '550px' }}>
                  <Image
                    src="/kerriann.png"
                    alt="Kerriann Dear"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover transition-all duration-1000 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="absolute -inset-4 md:-inset-6 border-2 border-brand-gold/20 rounded-3xl -z-10 -translate-x-4 translate-y-4"></div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center space-y-8">
              <div>
                <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Yoga Instructor</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">Kerriann Dear</h2>
                <div className="mt-5">
                  <span className="px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase border border-brand-gold text-brand-gold">{teachers[1].credentials}</span>
                </div>
              </div>

              <div className="space-y-5 border-l-2 border-brand-gold pl-6 lg:pl-8">
                {teachers[1].bio.map((paragraph, i) => (
                  <p key={i} className="text-brand-sand text-base lg:text-lg font-light leading-relaxed">{paragraph}</p>
                ))}
              </div>

              <div className="pt-4">
                <Link href="/book" className="inline-flex items-center justify-center px-10 py-4 rounded-full text-sm font-bold tracking-[0.2em] uppercase transition-all duration-500 shadow-xl transform hover:-translate-y-1 bg-brand-gold text-brand-emerald hover:bg-white">
                  Book
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== TEACHER 3: MAURICE McCANN - With BG Image ===== */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        {/* Background image - subtle blurred */}
        <div className="absolute inset-0 z-0 opacity-[0.04]">
          <Image src="/retreat.png" alt="" fill className="object-cover" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">

            {/* Image */}
            <div className="w-full lg:w-[45%] relative">
              <div className="group relative">
                <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-brand-sand/20" style={{ minHeight: '550px' }}>
                  <Image
                    src="/maurice.png"
                    alt="Maurice McCann"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover transition-all duration-1000 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="absolute -inset-4 md:-inset-6 border-2 border-brand-gold/20 rounded-3xl -z-10 translate-x-4 translate-y-4"></div>
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-brand-sage/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center space-y-8">
              <div>
                <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Yoga Instructor</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-emerald leading-tight">Maurice McCann</h2>
                <div className="mt-5">
                  <span className="px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase border border-brand-emerald text-brand-emerald bg-transparent">{teachers[2].credentials}</span>
                </div>
              </div>

              <div className="space-y-5 border-l-2 border-brand-gold pl-6 lg:pl-8">
                {teachers[2].bio.map((paragraph, i) => (
                  <p key={i} className="text-brand-emerald/80 text-base lg:text-lg font-light leading-relaxed">{paragraph}</p>
                ))}
              </div>

              <div className="pt-4">
                <Link href="/book" className="inline-flex items-center justify-center px-10 py-4 rounded-full text-sm font-bold tracking-[0.2em] uppercase transition-all duration-500 shadow-xl transform hover:-translate-y-1 bg-brand-emerald text-white hover:bg-brand-gold hover:text-brand-emerald">
                  Book
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== 4-DAY RETREATS - Premium Card Section ===== */}
      <section className="py-24 md:py-40 bg-brand-emerald relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

          {/* Section Header */}
          <div className="text-center mb-20 space-y-6">
            <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-xs block">Yoga Group</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white italic">4-Day Retreats</h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full"></div>
          </div>

          {/* Retreat Card */}
          <div className="bg-white/[0.07] backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Retreat Image */}
              <div className="relative group">
                <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/retreat.png" alt="Reset & Renew Retreat - Byron Bay Hinterland" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-emerald/40 via-transparent to-transparent group-hover:from-transparent transition-all duration-700"></div>
                </div>
                {/* Floating badge */}
                <div className="absolute top-5 left-5 bg-brand-gold/90 backdrop-blur-sm text-brand-emerald px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase shadow-lg">
                  Annual Retreat
                </div>
              </div>

              {/* Retreat Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white italic leading-tight">Reset & Renew<br />Retreat</h3>
                  <p className="mt-6 text-brand-sand/90 text-lg leading-relaxed font-light">
                    The perfect opportunity for you to step out of your busy life & spend time being nourished whilst learning and experiencing the benefits of <span className="text-white font-medium">Iyengar Yoga</span>, <span className="text-white font-medium">Food as Medicine</span> and <span className="text-white font-medium">mindfulness practices</span> at our Annual Ultimate Healing Retreat.
                  </p>
                </div>

                {/* Details Cards */}
                <div className="space-y-4">
                  {[
                    { label: "Dates", value: "TBC", icon: "📅" },
                    { label: "Location", value: "Dipitur - Nashua in Byron Bay Hinterland", icon: "📍" },
                    { label: "Email", value: "hello@cabaritabeachyoga.com", icon: "✉️", isEmail: true },
                  ].map((detail) => (
                    <div key={detail.label} className="flex items-start gap-4 bg-white/[0.06] rounded-xl px-5 py-4 border border-white/[0.08] hover:bg-white/[0.1] transition-colors">
                      <span className="text-lg shrink-0 mt-0.5">{detail.icon}</span>
                      <div>
                        <span className="text-brand-gold font-bold uppercase tracking-wider text-[10px] block mb-1">{detail.label}</span>
                        {detail.isEmail ? (
                          <a href={`mailto:${detail.value}`} className="text-white hover:text-brand-gold transition-colors font-medium text-sm break-all">
                            {detail.value}
                          </a>
                        ) : (
                          <span className="text-white font-medium text-sm">{detail.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="mailto:hello@cabaritabeachyoga.com" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold tracking-[0.15em] uppercase transition-all duration-500 bg-brand-gold text-brand-emerald hover:bg-white shadow-xl shadow-brand-gold/20 text-sm text-center transform hover:-translate-y-1">
                    Apply Now
                  </a>
                  <a href="/FINAL%20Nashua%20Retreat%20Schedule.pdf" target="_blank" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold tracking-[0.15em] uppercase transition-all duration-500 border-2 border-white/30 text-white hover:bg-white/10 text-sm text-center">
                    View Schedule PDF
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
