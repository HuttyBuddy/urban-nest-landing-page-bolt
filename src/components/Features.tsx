import { Sparkles, Database, Zap, MessageSquare, Mail, FileText, CheckCircle, MapPin, Bot, Palette } from 'lucide-react';

export default function Features() {
  const coreFeatures = [
    {
      icon: MapPin,
      title: 'Hyper-Local Content Engine',
      description: 'Automatically pulls neighborhood insights, market trends, school ratings, local events, and community data to create content that speaks directly to your market.',
      benefit: 'Sound like the true local expert you are',
    },
    {
      icon: Sparkles,
      title: 'Google AI-Powered Generation',
      description: 'Leverages cutting-edge Google AI technology combined with real estate-specific training to generate professional, engaging content at scale.',
      benefit: 'Advanced AI that understands real estate',
    },
    {
      icon: Palette,
      title: 'Brand Customization',
      description: 'AI learns and replicates your unique voice, tone, writing style, and brand personality across every piece of content you create.',
      benefit: 'Every post sounds authentically you',
    },
    {
      icon: Database,
      title: 'CRM Integration',
      description: 'Seamlessly connects with your existing CRM to automatically pull client data, listings, and contact information for personalized campaigns.',
      benefit: 'No manual data entry or switching tools',
    },
    {
      icon: Zap,
      title: 'Listing Marketing Automation',
      description: 'Automatically generates and schedules social posts, email campaigns, and property descriptions the moment a new listing goes live.',
      benefit: 'Market new listings in seconds, not hours',
    },
    {
      icon: Bot,
      title: 'Digital Avatar Creation',
      description: 'Create a digital clone of yourself to produce evergreen and hyper-local video content at scale. Never go behind a camera again while maintaining an authentic presence in all your content.',
      benefit: 'Create unlimited video content without filming',
    },
  ];

  const contentTypes = [
    {
      icon: MessageSquare,
      title: 'Social Posts',
      description: 'Engaging content for Facebook, Instagram, and LinkedIn that sounds authentically you',
    },
    {
      icon: Mail,
      title: 'Email Campaigns',
      description: 'Personalized email newsletters and drip campaigns that convert',
    },
    {
      icon: FileText,
      title: 'Blog Posts',
      description: 'SEO-optimized articles that establish you as the local market expert',
    },
  ];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block px-4 py-2 bg-gold/20 border border-gold/30 rounded-full mb-4 text-sm font-semibold text-charcoal shadow-sm">
            The Urban Nest Difference
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Not Just Another AI Tool.
            <span className="block mt-2">Your Personal Marketing Team.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            While other agents waste hours creating content or settle for generic AI that sounds robotic, you'll have a complete marketing ecosystem with <span className="font-semibold text-charcoal">hyper-local intelligence</span>, <span className="font-semibold text-charcoal">Google AI power</span>, <span className="font-semibold text-charcoal">brand customization</span>, <span className="font-semibold text-charcoal">CRM integration</span>, <span className="font-semibold text-charcoal">listing automation</span>, and <span className="font-semibold text-charcoal">digital avatars</span>.
          </p>
        </div>

        <div className="mb-20 lg:mb-28">
          <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4 text-center">
            Powerful AI Features That Transform Your Marketing
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A complete marketing ecosystem designed specifically for real estate professionals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-gold relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gold/50 border-2 border-gold/60 shadow-md flex items-center justify-center group-hover:bg-gold/70 group-hover:border-gold transition-all">
                      <feature.icon className="w-7 h-7 text-charcoal" strokeWidth={2} />
                    </div>
                    <div className="w-6 h-6 bg-charcoal rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {index + 1}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-charcoal mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {feature.description}
                  </p>
                  <div className="flex items-start gap-2 text-xs font-semibold text-gold bg-charcoal/90 border border-charcoal p-3 rounded-lg shadow-sm">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{feature.benefit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-charcoal font-semibold bg-gold/20 border border-gold/30 px-6 py-3 rounded-lg shadow-sm">
              <Sparkles className="w-5 h-5 text-gold drop-shadow-sm" />
              <span>All features work together seamlessly to 10x your marketing efficiency</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4 text-center">
            Every Type of Content You Need to Dominate Your Market
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Stop juggling multiple tools. Create everything from one powerful platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentTypes.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-gold relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gold/50 border-2 border-gold/60 shadow-md flex items-center justify-center mb-6 group-hover:bg-gold/70 group-hover:border-gold transition-all">
                    <item.icon className="w-7 h-7 text-charcoal" strokeWidth={2} />
                  </div>
                  <h4 className="text-xl font-bold text-charcoal mb-4">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-gold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Ready in seconds</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
