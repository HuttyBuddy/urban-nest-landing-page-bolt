import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  const [rotatingText, setRotatingText] = useState(0);
  const benefits = [
    "Hyper-Local Content Powered by Google AI",
    "Create Video Content Without Ever Filming",
    "CRM-Integrated Listing Marketing on Autopilot"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingText((prev) => (prev + 1) % benefits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-4 pt-8 pb-16 sm:px-6 lg:px-8 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-charcoal/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-center mb-8 lg:mb-12">
          <img
            src="/Urban Nest Logo Large.png"
            alt="Urban Nest"
            className="h-20 w-auto sm:h-24 lg:h-32 animate-fade-in"
          />
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full mb-6 text-sm font-semibold text-charcoal animate-pulse">
            <Users className="w-4 h-4" />
            <span>Join 500+ Agents Transforming Their Marketing</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal mb-6 lg:mb-8 leading-tight">
            Spend Less Time Creating Content,
            <span className="block mt-2 bg-gradient-to-r from-gold to-yellow-600 bg-clip-text text-transparent">
              More Time Closing Deals
            </span>
          </h1>

          <div className="h-16 sm:h-20 mb-8 lg:mb-10 flex items-center justify-center">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-semibold leading-relaxed transition-all duration-500 animate-fade-in">
              {benefits[rotatingText]}
            </p>
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 lg:mb-10 leading-relaxed max-w-3xl mx-auto">
            Urban Nest combines <span className="font-semibold text-charcoal">Google AI-powered content generation</span> with <span className="font-semibold text-charcoal">hyper-local market intelligence</span>, <span className="font-semibold text-charcoal">brand customization</span>, <span className="font-semibold text-charcoal">CRM integration</span>, <span className="font-semibold text-charcoal">listing automation</span>, and your own <span className="font-semibold text-charcoal">digital avatar</span> to create content that actually converts—all while you focus on what matters: selling homes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={onGetStarted}
              className="group w-full sm:w-auto bg-gold hover:bg-opacity-90 text-charcoal font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Claim Your Early Access Spot
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto border-2 border-charcoal text-charcoal font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-charcoal hover:text-white"
            >
              See How It Works
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto mb-8">
            <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-charcoal" />
              </div>
              <span className="text-xs font-semibold text-charcoal text-center">Hyper-Local Engine</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-charcoal" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
              </div>
              <span className="text-xs font-semibold text-charcoal text-center">Google AI Suite</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              </div>
              <span className="text-xs font-semibold text-charcoal text-center">Brand Customization</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
              </div>
              <span className="text-xs font-semibold text-charcoal text-center">CRM Integration</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <Clock className="w-4 h-4 text-charcoal" />
              </div>
              <span className="text-xs font-semibold text-charcoal text-center">Listing Automation</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <Users className="w-4 h-4 text-charcoal" />
              </div>
              <span className="text-xs font-semibold text-charcoal text-center">Digital Avatar</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold" />
              <span>Setup in 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-gold" />
              <span>10x your content output</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gold" />
              <span>No credit card required</span>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            Limited early access spots available • Launch pricing locked for early adopters
          </p>
        </div>
      </div>
    </section>
  );
}
