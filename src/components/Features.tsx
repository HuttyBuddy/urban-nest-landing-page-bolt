import { FileText, ImageIcon, Sparkles } from 'lucide-react';

export default function Features() {
  const coreFeatures = [
    {
      icon: FileText,
      title: 'Effortless Content Creation',
      description:
        "Generate SEO-optimized blog posts, engaging social media updates, compelling listing descriptions, and insightful neighborhood market reports. Our AI understands real estate, so you don't have to be a writer to sound like an expert.",
    },
    {
      icon: ImageIcon,
      title: 'Next-Gen Visual Marketing',
      description:
        'Instantly transform empty rooms with beautiful Virtual Staging. Generate unique, high-quality images for any marketing need, or use our intuitive editor to remove objects, replace skies, and perfect your property photos.',
    },
    {
      icon: Sparkles,
      title: 'Always On-Brand',
      description:
        "Define your unique personality, tone, and style. Urban Nest's AI learns your brand voice, ensuring every piece of content—from a luxury listing to a casual social post—sounds authentically you.",
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-charcoal">
            Your Complete AI Marketing Toolkit
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-bold border border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-cta shadow-md flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-text-charcoal mb-4">{feature.title}</h3>
              <p className="text-text-charcoal">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
