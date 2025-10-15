import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Features', id: 'features' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Pricing', id: 'early-access' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b-3 border-gold-400 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={scrollToTop}
            className="flex items-center transition-transform hover:scale-105 focus:outline-none"
            aria-label="Urban Nest Home"
          >
            <img
              src="/Urban Nest Logo Large.png"
              alt="Urban Nest"
              className="h-10 sm:h-12 lg:h-14 w-auto"
            />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-navy-600 hover:text-gold-700 font-extrabold text-sm lg:text-base transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('early-access')}
              className="group bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-extrabold px-8 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-sm lg:text-base border-2 border-gold-700"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gold-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-600 border-2 border-transparent hover:border-gold-400"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-navy-700" />
            ) : (
              <Menu className="w-6 h-6 text-navy-700" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t-3 border-gold-400 bg-gradient-to-b from-white to-gold-50 shadow-2xl">
          <nav className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-navy-600 hover:text-gold-700 font-extrabold text-base py-2 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('early-access')}
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-extrabold px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-base mt-4 border-2 border-gold-700"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}