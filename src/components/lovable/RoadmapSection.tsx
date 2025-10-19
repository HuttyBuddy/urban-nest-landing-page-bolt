import React from 'react';

const RoadmapCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="group bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-200 transition-all duration-300 ease-in-out transform hover:-translate-y-2.5 hover:scale-[1.03] hover:shadow-2xl hover:border-amber-500">
    <h4 className="text-xl font-extrabold text-gray-900 transition-colors duration-300 group-hover:text-amber-600">
      {title}
    </h4>
    <p className="mt-4 text-gray-700 font-medium leading-relaxed">
      {description}
    </p>
  </div>
);

const RoadmapSection: React.FC = () => {
  const roadmapItems = [
    {
      title: "Q4 2025: Private Beta Launch",
      description: "Onboarding our first group of early adopters to refine core features like the Hyper-Local Engine, Brand Customization, and Digital Avatar creation."
    },
    {
      title: "Q1 2026: Public Launch & Advanced Integrations",
      description: "Opening Urban Nest to all agents. We'll be rolling out new CRM integrations and launching an advanced analytics dashboard to track your marketing ROI."
    },
    {
      title: "Q2 2026: PWA & AI Video 2.0",
      description: "Launching a Progressive Web App (PWA) for a seamless, installable, app-like experience on any device. Upgrading the Digital Avatar feature with more customization, voice styles, and realism."
    }
  ];

  return (
    <section id="roadmap" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <span className="inline-block bg-amber-500 border-2 border-amber-600 rounded-full px-4 py-1 text-sm font-bold text-white shadow-lg mb-4">
            The Future is Bright
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our Roadmap
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 font-medium leading-relaxed">
            We're just getting started. Here's a look at what's next for Urban Nest as we continue to build the ultimate marketing platform for real estate professionals.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <RoadmapCard key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;