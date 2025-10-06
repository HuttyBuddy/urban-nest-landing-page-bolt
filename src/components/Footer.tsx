import { Mail, ArrowRight, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToForm = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-charcoal via-gray-900 to-charcoal text-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/Urban Nest Logo Large.png"
                alt="Urban Nest"
                className="h-10 w-auto opacity-90"
              />
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-md leading-relaxed">
              Transform your real estate marketing with AI that understands your voice, your market, and your clients. Generate authentic content in seconds.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-gold hover:bg-opacity-90 text-charcoal font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="text-gray-400 hover:text-gold transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={scrollToForm} className="text-gray-400 hover:text-gold transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={scrollToForm} className="text-gray-400 hover:text-gold transition-colors">
                  Early Access
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@urbannest.ai" className="hover:text-gold transition-colors">
                  hello@urbannest.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Urban Nest. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-gold fill-gold" /> for real estate professionals
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
