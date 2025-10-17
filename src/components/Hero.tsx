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
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-center mb-8 lg:mb-12">
          <img
            src="/urban-nest-logo.png"
            alt="Urban Nest"
            className="h-20 w-auto sm:h-24 lg:h-32 animate-fade-in object-contain"
            loading="eager"
          />
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 border-2 border-amber-600 rounded-full mb-6 text-sm font-bold text-white shadow-lg animate-pulse">
            <Users className="w-4 h-4" />
            <span>Join 500+ Agents Transforming Their Marketing</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-tight">
            Win Your Farm.
            <span className="block mt-3 bg-gradient-cta bg-clip-text text-transparent">
              In 5 Minutes a Week.
            </span>
          </h1>

          <div className="h-16 sm:h-20 mb-8 lg:mb-10 flex items-center justify-center">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-900 font-bold leading-relaxed transition-all duration-500 animate-fade-in">
              {benefits[rotatingText]}
            </p>
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 lg:mb-10 leading-relaxed max-w-3xl mx-auto">
            Urban Nest combines <span className="font-bold text-gray-900">Google AI-powered content generation</span> with <span className="font-bold text-gray-900">hyper-local market intelligence</span>, <span className="font-bold text-gray-900">brand customization</span>, <span className="font-bold text-gray-900">CRM integration</span>, <span className="font-bold text-gray-900">listing automation</span>, and your own <span className="font-bold text-gray-900">digital avatar</span> to create content that actually converts—all while you focus on what matters: selling homes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={onGetStarted}
              className="group w-full sm:w-auto bg-gradient-cta hover:opacity-90 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-bolder hover:shadow-bolder transform hover:-translate-y-1 hover:scale-105 text-lg"
            >
              Claim Your Spot in the Private Beta
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto border-2 border-gray-900 text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-gray-900 hover:text-white text-lg"
            >
              See How It Works
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto mb-8">
            <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-md border-2 border-gray-200">
              <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-amber-600 flex items-center justify-center shadow-md">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-bold text-gray-900 text-center">Hyper-Local Engine</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-md border-2 border-gray-200">
              <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-amber-600 flex items-center justify-center shadow-md">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
              </div>
              <span className="text-xs font-bold text-gray-900 text-center">Google AI Suite</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-md border-2 border-gray-200">
              <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-amber-600 flex items-center justify-center shadow-md">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              </div>
              <span className="text-xs font-bold text-gray-900 text-center">Brand Customization</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-md border-2 border-gray-200">
              <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-amber-600 flex items-center justify-center shadow-md">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
              </div>
              <span className="text-xs font-bold text-gray-900 text-center">CRM Integration</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-md border-2 border-gray-200">
              <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-amber-600 flex items-center justify-center shadow-md">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-bold text-gray-900 text-center">Listing Automation</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-md border-2 border-gray-200">
              <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-amber-600 flex items-center justify-center shadow-md">
                <Users className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-bold text-gray-900 text-center">Digital Avatar</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-sm text-gray-700 font-medium">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Setup in 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-amber-600" />
              <span>10x your content output</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-600" />
              <span>No credit card required</span>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-600 font-medium">
            Limited early access spots available • Launch pricing locked for early adopters
          </p>
        </div>
      </div>
    </section>
  );
}
