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
    <footer className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white px-4 py-12 sm:px-6 lg:px-8 border-t-4 border-gold-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/Urban Nest Logo Large.png"
                alt="Urban Nest"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gold-100 text-sm mb-6 max-w-md leading-relaxed font-bold">
              Transform your real estate marketing with AI that understands your voice, your market, and your clients. Generate authentic content in seconds.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-extrabold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 text-sm border-2 border-gold-700"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div>
            <h3 className="font-extrabold text-gold-400 mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="text-gold-100 hover:text-gold-400 transition-colors font-bold">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={scrollToForm} className="text-gold-100 hover:text-gold-400 transition-colors font-bold">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={scrollToForm} className="text-gold-100 hover:text-gold-400 transition-colors font-bold">
                  Early Access
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-extrabold text-gold-400 mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gold-100">
                <Mail className="w-4 h-4" />
                <a href="mailto:huttybuddy@urbannest.dev" className="hover:text-gold-400 transition-colors font-bold">
                  huttybuddy@urbannest.dev
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-gold-600 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gold-200 font-bold">
              &copy; {currentYear} Urban Nest. All rights reserved.
            </p>
            <p className="text-xs text-gold-300 flex items-center gap-1 font-bold">
              Made with <Heart className="w-3 h-3 text-gold-400 fill-gold-400" /> for real estate professionals
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
