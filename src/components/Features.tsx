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
    <section id="features" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-gold-50 via-cream-100 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block px-5 py-3 bg-gradient-to-r from-gold-500 to-gold-600 border-2 border-gold-700 rounded-full mb-4 text-sm font-extrabold text-white shadow-xl">
            The Urban Nest Difference
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-700 mb-6">
            Not Just Another AI Tool.
            <span className="block mt-2 text-gold-600">Your Personal Marketing Team.</span>
          </h2>
          <p className="text-lg sm:text-xl text-navy-500 max-w-3xl mx-auto leading-relaxed font-medium">
            While other agents waste hours creating content or settle for generic AI that sounds robotic, you'll have a complete marketing ecosystem with <span className="font-extrabold text-gold-700">hyper-local intelligence</span>, <span className="font-extrabold text-gold-700">Google AI power</span>, <span className="font-extrabold text-gold-700">brand customization</span>, <span className="font-extrabold text-gold-700">CRM integration</span>, <span className="font-extrabold text-gold-700">listing automation</span>, and <span className="font-extrabold text-gold-700">digital avatars</span>.
          </p>
        </div>

        <div className="mb-20 lg:mb-28">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-700 mb-4 text-center">
            Powerful AI Features That Transform Your Marketing
          </h3>
          <p className="text-center text-navy-500 mb-12 max-w-2xl mx-auto font-bold">
            A complete marketing ecosystem designed specifically for real estate professionals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-3 border-gold-300 hover:border-gold-600 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-200 to-gold-100 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 border-3 border-gold-700 shadow-lg flex items-center justify-center group-hover:from-gold-500 group-hover:to-gold-700 transition-all">
                      <feature.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-br from-navy-600 to-navy-800 rounded-full flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <h4 className="text-xl font-extrabold text-navy-700 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-navy-500 leading-relaxed mb-4 text-sm font-medium">
                    {feature.description}
                  </p>
                  <div className="flex items-start gap-2 text-xs font-extrabold text-white bg-gradient-to-r from-navy-700 to-navy-900 border-2 border-navy-800 p-4 rounded-xl shadow-lg">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-gold-400" />
                    <span>{feature.benefit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 text-navy-700 font-extrabold bg-gradient-to-r from-gold-100 to-gold-200 border-3 border-gold-600 px-8 py-4 rounded-xl shadow-xl">
              <Sparkles className="w-6 h-6 text-gold-700" />
              <span>All features work together seamlessly to 10x your marketing efficiency</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-700 mb-4 text-center">
            Every Type of Content You Need to Dominate Your Market
          </h3>
          <p className="text-center text-navy-500 mb-12 max-w-2xl mx-auto font-bold">
            Stop juggling multiple tools. Create everything from one powerful platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentTypes.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-3 border-gold-300 hover:border-gold-600 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-200 to-gold-100 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 border-3 border-gold-700 shadow-lg flex items-center justify-center mb-6 group-hover:from-gold-500 group-hover:to-gold-700 transition-all">
                    <item.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <h4 className="text-xl font-extrabold text-navy-700 mb-4">
                    {item.title}
                  </h4>
                  <p className="text-navy-500 leading-relaxed mb-6 font-medium">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-extrabold text-gold-700 bg-gold-100 px-4 py-2 rounded-lg border-2 border-gold-400">
                    <CheckCircle className="w-5 h-5" />
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
