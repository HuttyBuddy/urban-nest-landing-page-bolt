import React from 'react';
import { kevinHuttyImageDataUrl } from './KevinHuttyImage';

const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <span className="inline-block bg-amber-500 border-2 border-amber-600 rounded-full px-4 py-1 text-sm font-bold text-white shadow-lg mb-4">
            The Mind Behind The Mission
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Meet the Founder
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center">
            <img 
              className="rounded-full border-8 border-amber-500 shadow-2xl w-64 h-64 sm:w-80 sm:h-80 object-cover transform transition-all duration-500 ease-in-out hover:scale-105"
              src={kevinHuttyImageDataUrl} 
              alt="Kevin Hutty - Founder" 
            />
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
              Kevin Hutty
            </h3>
            <p className="mt-2 text-lg font-semibold text-amber-600">
              Founder, Urban Nest | Realtor® & Tech Lead
            </p>
            <p className="mt-4 text-gray-700 font-medium leading-relaxed">
              With 14 years of experience leading support teams at the State of California Franchise Tax Board and a successful career as a Realtor® in the Sacramento area, Kevin experienced the marketing gap for agents firsthand. He founded Urban Nest to solve the problem he knows best: creating authentic, hyper-local content without sacrificing time with clients. His unique blend of public sector leadership and real estate expertise is the driving force behind Urban Nest's mission to empower agents.
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <a 
                href="#"
                className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1.5 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-amber-500/50"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;