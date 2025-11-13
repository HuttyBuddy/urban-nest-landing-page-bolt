export default function HowItWorks() {
  const steps = [
    {
      title: "The Command Center",
      description: "Your central hub for managing properties, listings, and marketing efforts. The intuitive dashboard gives you a complete overview of your real estate empire at a glance.",
      image: "/glimpse/step1-dashboard.png"
    },
    {
      title: "AI-Powered Visuals",
      description: "Transform property photos with our suite of AI tools. From virtual staging to image enhancement, creating stunning visuals that capture attention and sell faster has never been easier.",
      image: "/glimpse/step2-ai-visuals.jpg"
    },
    {
      title: "Compelling Content, Instantly",
      description: "Generate engaging property descriptions, blog posts, and social media updates with our AI Content Writer. Tailor the tone and style to your brand voice for a consistent and professional online presence.",
      image: "/glimpse/step3-ai-content.jpg"
    },
    {
      title: "Your Complete Marketing Package",
      description: "With just a few clicks, Urban Nest assembles a comprehensive marketing kit for each property. High-resolution images, compelling copy, and social-media-ready content are all packaged and ready to deploy.",
      image: "/glimpse/step4-final-package.jpg"
    }
  ];

  return (
    <section id="how-it-works" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            A Glimpse Inside Urban Nest
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From managing your properties to deploying a complete marketing package, see how Urban Nest streamlines your workflow.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
              <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="text-sm font-bold text-amber-600 mb-2">
                  STEP {index + 1}
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
              <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-2xl shadow-bold border-2 border-gray-200"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
