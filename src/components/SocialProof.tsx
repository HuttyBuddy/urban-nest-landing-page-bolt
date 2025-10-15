import { Star, Quote, TrendingUp, Award } from 'lucide-react';

export default function SocialProof() {
  const testimonials = [
    {
      name: "Anthony James",
      role: "Team Lead, RE/MAX Gold",
      location: "Roseville, CA",
      quote: "The hyper-local content engine is incredible. My teams posts now include neighborhood insights I didn't even know about. The digital avatar lets them create video content without filming. Game changer.",
      rating: 5,
      metric: "300% more engagement"
    },
    {
      name: "Vanessa Tanner",
      role: "Realtor, RE/MAX Gold",
      location: "Vacaville, CA",
      quote: "The brand customization is spot-on. Every post sounds like me. Plus, the CRM integration means I never have to copy-paste client data again. Worth every penny.",
      rating: 5,
      metric: "10x content output"
    },
    {
      name: "Scott Brown",
      role: "Realtor, RE/MAX Gold",
      location: "Roseville, CA",
      quote: "The listing automation feature is a lifesaver. New listings get marketed across all channels instantly. I create video content with my own digital clone now. The ROI is incredible.",
      rating: 5,
      metric: "50% cost reduction"
    }
  ];

  const stats = [
    { number: "500+", label: "Active Agents", icon: Award },
    { number: "50K+", label: "Posts Generated", icon: TrendingUp },
    { number: "95%", label: "Satisfaction Rate", icon: Star },
    { number: "10x", label: "Faster Content", icon: TrendingUp }
  ];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gold-500 border-2 border-gold-600 rounded-full mb-4 text-sm font-bold text-white shadow-md">
            Trusted by Top Producers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-600 mb-6">
            Real Agents. Real Results.
          </h2>
          <p className="text-lg sm:text-xl text-navy-400 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of real estate professionals leveraging hyper-local content, Google AI, brand customization, CRM integration, listing automation, and digital avatars
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500 border-2 border-gold-600 shadow-md mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-navy-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-navy-400 font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-bold hover:shadow-bolder transition-all duration-300 transform hover:-translate-y-1 border-2 border-cream-300 flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-gold-500 mb-4" />

                <p className="text-navy-400 leading-relaxed mb-6 italic font-medium">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="pt-6 border-t-2 border-cream-300 mt-auto">
                <div className="font-extrabold text-navy-600">
                  {testimonial.name}
                </div>
                <div className="text-sm text-navy-400 font-medium">
                  {testimonial.role}
                </div>
                <div className="text-xs text-navy-300 mt-1 font-medium">
                  {testimonial.location}
                </div>
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-gold-100 border-2 border-gold-500 rounded-full text-xs font-bold text-navy-600 shadow-sm">
                  <TrendingUp className="w-3 h-3" />
                  {testimonial.metric}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-navy-400 mb-6 font-medium">
            Join the growing community of agents who have transformed their marketing
          </p>
          <div className="flex flex-wrap justify-center gap-4 items-center opacity-60">
            <div className="px-6 py-3 bg-white rounded-lg shadow-md border-2 border-cream-400 font-bold text-navy-600">
              Keller Williams
            </div>
            <div className="px-6 py-3 bg-white rounded-lg shadow-md border-2 border-cream-400 font-bold text-navy-600">
              RE/MAX
            </div>
            <div className="px-6 py-3 bg-white rounded-lg shadow-md border-2 border-cream-400 font-bold text-navy-600">
              Century 21
            </div>
            <div className="px-6 py-3 bg-white rounded-lg shadow-md border-2 border-cream-400 font-bold text-navy-600">
              Coldwell Banker
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
