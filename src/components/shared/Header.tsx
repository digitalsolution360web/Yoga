'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Retreats', href: '/retreats' },
  ];

  // Logic to determine text color based on page and scroll state
  // Pages with dark hero backgrounds need white text at top, emerald when scrolled.
  // Other pages always get emerald text.
  const isHomePage = pathname === '/';
  const isAboutPage = pathname === '/about';
  const hasDarkHero = isHomePage || isAboutPage;

  const textColorClass = hasDarkHero 
    ? (scrolled ? 'text-brand-emerald' : 'text-white') 
    : 'text-brand-emerald';
  
  const subtitleColorClass = hasDarkHero 
    ? (scrolled ? 'text-brand-sage' : 'text-brand-sand') 
    : 'text-brand-sage';

  const logoBorderClass = hasDarkHero 
    ? (scrolled ? 'border-brand-gold/20' : 'border-white/30') 
    : 'border-brand-gold/20';

  return (
    <>
      <header 
        className={`w-full fixed top-0 z-[100] transition-all duration-500 ${
          scrolled 
            ? 'glass py-3 shadow-lg border-b border-brand-emerald/10' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3 group">
                <div className={`relative transition-all duration-500 ${scrolled ? 'w-12 h-12' : 'w-16 h-16'} overflow-hidden rounded-full border-2 ${logoBorderClass} shadow-xl group-hover:border-brand-gold group-hover:scale-105`}>
                  <Image 
                    src="/logo-1.avif" 
                    alt="Cabarita Beach Yoga Logo" 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className={`text-xl md:text-2xl font-serif font-bold tracking-tight transition-colors duration-300 ${textColorClass}`}>
                    Cabarita Beach <span className="text-brand-gold italic">Yoga</span>
                  </span>
                  <span className={`text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase transition-opacity duration-300 ${subtitleColorClass} opacity-90`}>
                    Nervous System Reset
                  </span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={`text-sm md:text-base font-bold tracking-[0.1em] uppercase transition-all duration-300 relative group pb-1 ${textColorClass}`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
            
            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-6">
              <Link 
                href="/book" 
                className={`hidden sm:inline-block px-10 py-4 rounded-full text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 shadow-xl hover:-translate-y-1 ${
                  scrolled 
                    ? 'bg-brand-emerald text-white hover:bg-brand-accent shadow-brand-emerald/20' 
                    : (isHomePage ? 'bg-brand-gold text-brand-emerald hover:bg-white shadow-brand-gold/30' : 'bg-brand-emerald text-white hover:bg-brand-accent shadow-brand-emerald/20')
                }`}
              >
                Book Now
              </Link>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${textColorClass}`}
                aria-label="Toggle menu"
              >
                <div className="w-8 h-6 relative flex flex-col justify-between">
                  <span className={`w-full h-1 bg-current rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                  <span className={`w-full h-1 bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`w-full h-1 bg-current rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-emerald/60 backdrop-blur-md z-[110] transition-opacity duration-500 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[120] p-10 shadow-2xl transition-transform duration-500 ease-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-16">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-brand-gold/20 shadow-lg">
            <Image src="/logo-1.avif" alt="Logo" fill className="object-cover" />
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-4 bg-brand-sand/30 rounded-full text-brand-emerald hover:bg-brand-sand/50 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <nav className="flex flex-col gap-10">
          {navLinks.map((link, i) => (
            <Link 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-serif font-bold text-brand-emerald hover:text-brand-gold transition-colors flex items-center justify-between group"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.name}
              <span className="w-12 h-px bg-brand-sand group-hover:w-20 group-hover:bg-brand-gold transition-all duration-500"></span>
            </Link>
          ))}
          <div className="mt-12 pt-12 border-t border-brand-sand">
            <Link 
              href="/book"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-brand-emerald text-white py-6 rounded-2xl text-lg font-bold tracking-widest uppercase hover:bg-brand-accent transition-all shadow-xl shadow-brand-emerald/20"
            >
              Book My Session
            </Link>
            <p className="text-center mt-12 text-[12px] uppercase tracking-[0.4em] font-bold text-brand-sage">
              Reset Your Nervous System
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
