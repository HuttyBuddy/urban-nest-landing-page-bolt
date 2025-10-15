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
    <section id="how-it-works" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-gold-50 via-cream-100 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block px-5 py-3 bg-gradient-to-r from-gold-500 to-gold-600 border-2 border-gold-700 rounded-full mb-4 text-sm font-extrabold text-white shadow-xl">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-700 mb-6">
            From Setup to Published Content
            <span className="block mt-2 text-gold-600">in Under 10 Minutes</span>
          </h2>
          <p className="text-lg sm:text-xl text-navy-500 max-w-3xl mx-auto leading-relaxed font-medium">
            No technical skills required. Powerful AI features working together seamlessly. Just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border-3 border-gold-300 hover:border-gold-600">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 border-3 border-gold-700 flex items-center justify-center shadow-xl">
                    <step.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-xs font-extrabold text-white bg-gradient-to-r from-navy-700 to-navy-900 px-4 py-2 rounded-full shadow-lg border-2 border-navy-800">
                    {step.time}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-extrabold text-gold-700 mb-2 bg-gold-100 px-3 py-1 rounded-full inline-block border-2 border-gold-500">
                    STEP {index + 1}
                  </div>
                  <h3 className="text-2xl font-extrabold text-navy-700 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-navy-500 leading-relaxed mb-6 font-medium">
                    {step.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-3 text-sm text-navy-600 font-bold">
                      <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0" />
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

        <div className="bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl border-4 border-gold-500">
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Transform Your Marketing?
          </h3>
          <p className="text-lg text-cream-100 mb-8 max-w-2xl mx-auto font-bold">
            Don't waste another minute on content creation. Unlock hyper-local content, Google AI power, brand customization, CRM integration, listing automation, and your digital avatar today.
          </p>
          <button
            onClick={() => document.querySelector('#early-access')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 hover:from-gold-600 hover:via-gold-700 hover:to-gold-600 text-white font-extrabold px-10 py-5 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 text-lg border-2 border-gold-700"
          >
            Get Early Access Now
            <Rocket className="w-5 h-5" />
          </button>
          <p className="mt-4 text-sm text-gold-200 font-extrabold bg-navy-900/50 px-6 py-2 rounded-full inline-block border-2 border-gold-600">
            Early adopters lock in exclusive launch pricing forever
          </p>
        </div>
      </div>
    </section>
  );
}
