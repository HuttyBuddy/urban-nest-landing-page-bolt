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
    <header className="sticky top-0 z-[100] bg-white border-b-2 border-gray-200 shadow-md backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 transition-transform hover:scale-105 focus:outline-none flex-shrink-0"
            aria-label="Urban Nest Home"
          >
            <img
              src="/urban-nest-logo.png"
              alt="Urban Nest"
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
              loading="eager"
            />
            <div className="flex items-baseline text-2xl sm:text-3xl lg:text-4xl font-bold leading-none">
              <span className="text-gray-700">Urban</span>
              <span className="text-amber-500">Nest</span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-900 hover:text-amber-600 font-bold text-sm lg:text-base transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('early-access')}
              className="group bg-gradient-cta hover:opacity-90 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm lg:text-base"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-gray-200 bg-white shadow-bold">
          <nav className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-900 hover:text-amber-600 font-bold text-base py-2 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('early-access')}
              className="w-full bg-gradient-cta hover:opacity-90 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md text-base mt-4"
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