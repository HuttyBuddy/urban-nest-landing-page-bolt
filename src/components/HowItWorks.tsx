export default function HowItWorks() {
  const steps = [
    {
      title: 'Choose Your Tool',
      description:
        'Select from the AI Writing Studio for text content or the Image Studio for visuals like virtual staging and photo generation.',
    },
    {
      title: 'Provide Your Context',
      description:
        'Enter a simple prompt, topic, or property details. For images, just upload your photo. Let our AI know your goal.',
    },
    {
      title: 'Generate & Refine',
      description:
        'Receive high-quality, ready-to-use marketing assets in seconds. Easily refine, edit, and save everything to your projects hub.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-charcoal">
            Create Incredible Content in 3 Simple Steps
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-text-charcoal mb-4">{step.title}</h3>
                <p className="text-text-charcoal">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gray-300 -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
