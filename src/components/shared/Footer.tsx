import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-brand-emerald py-24 text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
          <div className="md:col-span-12 lg:col-span-5 space-y-10">
            <Link href="/" className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                 <Image src="/logo-1.avif" alt="Logo" fill className="object-cover" />
              </div>
              <span className="text-2xl font-serif font-bold text-white italic tracking-tight">Cabarita Beach <span className="text-brand-gold">Yoga</span></span>
            </Link>
            <p className="text-brand-sand text-lg leading-relaxed font-light max-w-lg">
              Home of the Nervous System Reset Method. Dedicated to helping you recover from chronic stress and pain through evidence-based yoga and ancient healing.
            </p>
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
              <div className="space-y-2">
                <span className="text-brand-gold font-bold uppercase tracking-widest text-[10px]">Studio Address</span>
                <p className="text-brand-sand">60 Cabarita Road, Bogangar NSW 2488</p>
              </div>
              <div className="space-y-2">
                <span className="text-brand-gold font-bold uppercase tracking-widest text-[10px]">Direct Connection</span>
                <a href="mailto:hello@cabaritabeachyoga.com" className="block text-brand-sand hover:text-white transition-colors">hello@cabaritabeachyoga.com</a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-xs font-bold text-brand-gold uppercase tracking-[0.3em] mb-10">Navigation</h3>
            <ul className="space-y-6">
              {['Home', 'About', 'Services', 'Retreats', 'Yoga'].map(link => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-brand-sand hover:text-white transition-colors text-sm font-medium tracking-wide">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-xs font-bold text-brand-gold uppercase tracking-[0.3em] mb-10">Socials</h3>
            <ul className="space-y-6 text-sm">
              <li><a href="https://www.instagram.com/p/COhDxxjFVr5/?hl=" target="_blank" rel="noopener noreferrer" className="text-brand-sand hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-brand-sand hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="text-brand-sand hover:text-white transition-colors">YouTube</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4 lg:col-span-3">
             <div className="p-10 bg-white/5 rounded-3xl border border-white/10">
               <h4 className="text-sm font-serif font-bold text-brand-gold italic mb-4">Start Your Reset</h4>
               <p className="text-xs text-brand-sand mb-6 leading-relaxed">Join our weekly newsletter for evidence-based nervous system tips.</p>
               <Link href="/book" className="block w-full text-center py-4 bg-brand-gold text-brand-emerald rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-white transition-all">Join The Community</Link>
             </div>
          </div>
        </div>
        
        <div className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">
          <p>&copy; {new Date().getFullYear()} Cabarita Beach Yoga. All Rights Reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
