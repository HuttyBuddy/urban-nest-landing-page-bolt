type Item = { title: string; description: string };

function RoadmapCard({ title, description }: Item) {
  return (
    <div className="group bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-amber-500">
      <h4 className="text-xl font-extrabold text-gray-900 group-hover:text-amber-600">{title}</h4>
      <p className="mt-4 text-gray-700 font-medium leading-relaxed">{description}</p>
    </div>
  );
}

export default function RoadmapSection() {
  const items: Item[] = [
    { title: "Q4 2025: Private Beta Launch", description: "Onboard early adopters to refine Hyper-Local Engine, Brand Customization, and Digital Avatar." },
    { title: "Q1 2026: Public Launch & Integrations", description: "Open to all agents with CRM integrations and analytics for marketing ROI." },
    { title: "Q2 2026: PWA & AI Video 2.0", description: "Ship PWA; upgrade Digital Avatar with more customization and realism." },
  ];

  return (
    <section id="roadmap" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <span className="inline-block bg-amber-500 border-2 border-amber-600 rounded-full px-4 py-1 text-sm font-bold text-white shadow-lg mb-4">
            The Future is Bright
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">Our Roadmap</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 font-medium leading-relaxed">
            We’re just getting started. Here’s what’s next for Urban Nest.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, i) => <RoadmapCard key={i} title={it.title} description={it.description} />)}
        </div>
      </div>
    </section>
  );
}
