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
    <section className="relative px-4 pt-8 pb-16 sm:px-6 lg:px-8 lg:pt-16 lg:pb-24 overflow-hidden bg-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/Hero Video 2.mp4" type="video/mp4" />
      </video>

      {/* Double-layer overlay for improved text readability */}
      <div className="absolute inset-0 bg-white/80 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-cream-50/75 to-white/80 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-center mb-8 lg:mb-12">
          <img
            src="/Urban Nest Logo Large.png"
            alt="Urban Nest"
            className="h-20 w-auto sm:h-24 lg:h-32 animate-fade-in"
          />
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-gold-500 to-gold-600 border-2 border-gold-700 rounded-full mb-6 text-sm font-bold text-white shadow-xl animate-pulse">
            <Users className="w-5 h-5" />
            <span>Join 500+ Agents Transforming Their Marketing</span>
          </div>

<h1 className="text-4xl ...">
  Win Your Farm.
  <span className="block mt-2 bg-gradient-cta bg-clip-text text-transparent">
    In 5 Minutes a Week.
  </span>
</h1>

          <div className="h-16 sm:h-20 mb-8 lg:mb-10 flex items-center justify-center">
            <p className="text-xl sm:text-2xl lg:text-3xl text-navy-500 font-bold leading-relaxed transition-all duration-500 animate-fade-in">
              {benefits[rotatingText]}
            </p>
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-navy-400 mb-8 lg:mb-10 leading-relaxed max-w-3xl mx-auto">
            Urban Nest combines <span className="font-bold text-navy-600">Google AI-powered content generation</span> with <span className="font-bold text-navy-600">hyper-local market intelligence</span>, <span className="font-bold text-navy-600">brand customization</span>, <span className="font-bold text-navy-600">CRM integration</span>, <span className="font-bold text-navy-600">listing automation</span>, and your own <span className="font-bold text-navy-600">digital avatar</span> to create content that actually converts—all while you focus on what matters: selling homes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={onGetStarted}
              className="group w-full sm:w-auto bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 hover:from-gold-600 hover:via-gold-700 hover:to-gold-600 text-white font-extrabold px-10 py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 text-lg border-2 border-gold-700"
            >
              Claim Your Spot in the Private Beta
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto border-3 border-navy-600 bg-white text-navy-700 font-extrabold px-10 py-5 rounded-xl transition-all duration-300 hover:bg-navy-600 hover:text-white hover:border-navy-700 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              See How It Works
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto mb-8">
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-lg border-3 border-gold-400 hover:border-gold-600 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 border-2 border-gold-700 flex items-center justify-center shadow-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-extrabold text-navy-700 text-center">Hyper-Local Engine</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-lg border-3 border-gold-400 hover:border-gold-600 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 border-2 border-gold-700 flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
              </div>
              <span className="text-xs font-extrabold text-navy-700 text-center">Google AI Suite</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-lg border-3 border-gold-400 hover:border-gold-600 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 border-2 border-gold-700 flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              </div>
              <span className="text-xs font-extrabold text-navy-700 text-center">Brand Customization</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-lg border-3 border-gold-400 hover:border-gold-600 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 border-2 border-gold-700 flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
              </div>
              <span className="text-xs font-extrabold text-navy-700 text-center">CRM Integration</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-lg border-3 border-gold-400 hover:border-gold-600 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 border-2 border-gold-700 flex items-center justify-center shadow-lg">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-extrabold text-navy-700 text-center">Listing Automation</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-lg border-3 border-gold-400 hover:border-gold-600 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 border-2 border-gold-700 flex items-center justify-center shadow-lg">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-extrabold text-navy-700 text-center">Digital Avatar</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-sm text-navy-600 font-bold">
            <div className="flex items-center gap-2 px-4 py-2 bg-gold-50 border-2 border-gold-300 rounded-lg">
              <Clock className="w-5 h-5 text-gold-700" />
              <span>Setup in 5 minutes</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gold-50 border-2 border-gold-300 rounded-lg">
              <TrendingUp className="w-5 h-5 text-gold-700" />
              <span>10x your content output</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gold-50 border-2 border-gold-300 rounded-lg">
              <Users className="w-5 h-5 text-gold-700" />
              <span>No credit card required</span>
            </div>
          </div>

          <p className="mt-6 text-sm text-navy-600 font-bold bg-cream-100 border-2 border-gold-300 px-6 py-3 rounded-full inline-block">
            Limited early access spots available • Launch pricing locked for early adopters
          </p>
        </div>
      </div>
    </section>
  );
}
