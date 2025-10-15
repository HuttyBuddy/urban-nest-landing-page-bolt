import { CircleUser as UserCircle, Sparkles, Rocket, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: UserCircle,
      title: "Tell Us About You",
      description: "Connect your CRM, upload sample content for brand customization, and define your local market area. Takes just 5 minutes.",
      details: [
        "Connect your CRM (KV Core, HubSpot, etc.)",
        "Upload samples for brand voice training",
        "Set your hyper-local market area"
      ],
      time: "5 min"
    },
    {
      icon: Sparkles,
      title: "AI Learns Your Voice & Creates Your Avatar",
      description: "Google AI analyzes your writing style, creates your digital clone for video content, and integrates hyper-local market data from your area.",
      details: [
        "Brand voice pattern analysis",
        "Digital clone creation for videos",
        "Hyper-local data integration"
      ],
      time: "Instant"
    },
    {
      icon: Rocket,
      title: "Generate & Automate",
      description: "Create hyper-local content instantly, automate listing marketing, and produce video content with your digital clone. Your choice to review or auto-publish.",
      details: [
        "Hyper-local content generation",
        "Automated listing campaigns",
        "Video creation with your clone"
      ],
      time: "30 sec"
    }
  ];

  return (
    <section id="how-it-works" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-cream-100 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block px-4 py-2 bg-gold-500 border-2 border-gold-600 rounded-full mb-4 text-sm font-bold text-white shadow-md">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-600 mb-6">
            From Setup to Published Content
            <span className="block mt-2">in Under 10 Minutes</span>
          </h2>
          <p className="text-lg sm:text-xl text-navy-400 max-w-3xl mx-auto leading-relaxed">
            No technical skills required. Powerful AI features working together seamlessly. Just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-bold hover:shadow-bolder transition-all duration-300 transform hover:-translate-y-2 h-full border-2 border-cream-300 hover:border-gold-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-cta flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-xs font-bold text-white bg-gray-900 px-3 py-1 rounded-full">
                    {step.time}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-bold text-gold-600 mb-2">
                    STEP {index + 1}
                  </div>
                  <h3 className="text-2xl font-extrabold text-navy-600 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-navy-400 leading-relaxed mb-6 font-medium">
                    {step.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-3 text-sm text-navy-400 font-medium">
                      <CheckCircle className="w-4 h-4 text-gold-600 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 w-12 lg:w-24 h-0.5 bg-gradient-to-r from-gold-500 to-transparent -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-dark rounded-3xl p-8 sm:p-12 text-center text-white shadow-bolder border-2 border-gold-500">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Ready to Transform Your Marketing?
          </h3>
          <p className="text-lg text-cream-200 mb-8 max-w-2xl mx-auto font-medium">
            Don't waste another minute on content creation. Unlock hyper-local content, Google AI power, brand customization, CRM integration, listing automation, and your digital avatar today.
          </p>
          <button
            onClick={() => document.querySelector('#early-access')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-gradient-cta hover:opacity-90 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
          >
            Get Early Access Now
            <Rocket className="w-5 h-5" />
          </button>
          <p className="mt-4 text-sm text-cream-300 font-medium">
            Early adopters lock in exclusive launch pricing forever
          </p>
        </div>
      </div>
    </section>
  );
}
