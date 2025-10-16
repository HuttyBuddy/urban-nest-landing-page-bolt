import { useState } from 'react';
import { ChevronDown, Shield, Sparkles, DollarSign, Users, Clock, Zap, MapPin, Database, Bot, Palette } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: Sparkles,
      question: "How is Urban Nest different from ChatGPT or other AI tools?",
      answer: "While ChatGPT is a general-purpose tool, Urban Nest combines Google AI with six specialized features: hyper-local content engine, brand customization, CRM integration, listing automation, and digital avatar creation. We're a complete marketing ecosystem built specifically for real estate, not just a text generator."
    },
    {
      icon: MapPin,
      question: "How does the Hyper-Local Content Engine work?",
      answer: "Our hyper-local engine automatically pulls real-time data from your specified market area, including neighborhood insights, school ratings, local events, crime statistics, walkability scores, and community trends. This data is seamlessly woven into your content so you always sound like the definitive local expert."
    },
    {
      icon: Database,
      question: "Which CRMs does Urban Nest integrate with?",
      answer: "We integrate with all major real estate CRMs including Salesforce, HubSpot, Follow Up Boss, LionDesk, kvCORE, and more. The integration allows automatic syncing of client data, listings, and contact information, eliminating manual data entry and ensuring your campaigns are always personalized and up-to-date."
    },
    {
      icon: Bot,
      question: "What exactly is a Digital Avatar and how does it work?",
      answer: "Your Digital Avatar is a digital clone of yourself that lets you create evergreen and hyper-local video content without ever stepping in front of a camera. Upload a few photos and video samples, and our AI creates a realistic avatar that looks and sounds like you. Use it to produce unlimited neighborhood tours, market updates, listing videos, and educational content—all featuring you, without the time commitment of filming."
    },
    {
      icon: Zap,
      question: "How does Listing Marketing Automation work?",
      answer: "The moment a new listing is added to your CRM or MLS, Urban Nest automatically detects it and generates a complete marketing campaign: social media posts for all platforms, email announcements, property descriptions, and more. You can review and edit before publishing, or set it to auto-publish and let it run on autopilot."
    },
    {
      icon: Palette,
      question: "How accurate is the Brand Customization? Will it really sound like me?",
      answer: "Extremely accurate. Our Google AI analyzes your writing samples, identifies your unique patterns, preferred phrases, tone, humor style, and personality traits. The more samples you provide during setup, the better it gets. Most agents can't tell the difference between their own writing and Urban Nest's generated content."
    },
    {
      icon: Shield,
      question: "Is my data and client information secure?",
      answer: "Absolutely. We use bank-level encryption and never share your data with third parties. Your content, client information, and market insights are stored securely and used only to generate your personalized marketing materials. We're fully compliant with all real estate data protection regulations."
    },
    {
      icon: Clock,
      question: "How long does it take to set up and start creating content?",
      answer: "You can be up and running in under 10 minutes. Simply answer a few questions about your brand voice and market area, upload a few sample posts (optional), and you're ready to generate unlimited content. No technical skills or training required."
    },
    {
      icon: Users,
      question: "Will my content sound robotic or generic?",
      answer: "Not at all. That's the whole point of Urban Nest. Our AI learns YOUR unique voice by analyzing your writing style, preferred phrases, and brand personality. The content it generates will sound like you wrote it—because the AI has been trained specifically on your voice, not generic templates."
    },
    {
      icon: DollarSign,
      question: "What's included in early access pricing?",
      answer: "Early access members lock in special launch pricing for life and get access to core features: hyper-local content engine, Google AI Suite, brand customization, CRM integration, listing automation, and digital avatar creation. Plus unlimited content generation, priority support, and exclusive input on new features."
    },
    {
      icon: Zap,
      question: "Can I edit the generated content?",
      answer: "Yes, absolutely! While most agents publish the content as-is, you can always edit, customize, or use the generated content as a starting point. Think of Urban Nest as your first draft that's already 90% perfect—you just add the final 10% if you want."
    },
    {
      icon: Users,
      question: "Do you offer team or brokerage plans?",
      answer: "Yes! We offer special pricing for teams and brokerages. Each team member gets their own personalized AI voice while maintaining brand consistency across your team. Contact us through the early access form and mention you're interested in a team plan."
    },
    {
      icon: Sparkles,
      question: "What types of content can Urban Nest create?",
      answer: "Urban Nest generates everything you need: hyper-local social media posts for Facebook, Instagram, and LinkedIn; personalized email campaigns pulled from your CRM; SEO-optimized blog articles; automated listing descriptions and marketing; neighborhood market reports; and your digital avatar creates video content featuring you without filming. All with your authentic brand voice."
    }
  ];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-500 border-2 border-amber-600 rounded-full mb-4 text-sm font-bold text-white shadow-md">
            Questions & Answers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Everything You Need to Know
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Have a question that's not answered here? Reach out through the early access form.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 flex items-start gap-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500 border-2 border-amber-600 shadow-sm flex items-center justify-center">
                  <faq.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-extrabold text-gray-900 mb-1 pr-8">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`flex-shrink-0 w-6 h-6 text-gray-600 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pl-20">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4 font-medium">
            Still have questions?
          </p>
          <button
            onClick={() => document.querySelector('#early-access')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-amber-600 font-bold hover:text-amber-700 transition-colors text-lg"
          >
            Get in touch through the early access form
          </button>
        </div>
      </div>
    </section>
  );
}
