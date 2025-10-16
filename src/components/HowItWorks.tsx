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
    <section id="how-it-works" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block px-4 py-2 bg-gold/20 border border-gold/30 rounded-full mb-4 text-sm font-semibold text-charcoal shadow-sm">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            From Setup to Published Content
            <span className="block mt-2">in Under 10 Minutes</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            No technical skills required. Powerful AI features working together seamlessly. Just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border border-gray-200 hover:border-gold">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-yellow-500 flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <div className="text-xs font-bold text-white bg-charcoal px-3 py-1 rounded-full">
                    {step.time}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-bold text-gold drop-shadow-sm mb-2">
                    STEP {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-gold drop-shadow-sm flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 w-12 lg:w-24 h-0.5 bg-gradient-to-r from-gold to-transparent -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-charcoal to-gray-800 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Transform Your Marketing?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't waste another minute on content creation. Unlock hyper-local content, Google AI power, brand customization, CRM integration, listing automation, and your digital avatar today.
          </p>
          <button
            onClick={() => document.querySelector('#early-access')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-gold hover:bg-opacity-90 text-charcoal font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Early Access Now
            <Rocket className="w-5 h-5" />
          </button>
          <p className="mt-4 text-sm text-gray-400">
            Early adopters lock in exclusive launch pricing forever
          </p>
        </div>
      </div>
    </section>
  );
}
