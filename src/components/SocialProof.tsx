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
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-white via-cream-50 to-gold-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-3 bg-gradient-to-r from-gold-500 to-gold-600 border-2 border-gold-700 rounded-full mb-4 text-sm font-extrabold text-white shadow-xl">
            Trusted by Top Producers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-700 mb-6">
            Real Agents. <span className="text-gold-600">Real Results.</span>
          </h2>
          <p className="text-lg sm:text-xl text-navy-500 max-w-3xl mx-auto leading-relaxed font-medium">
            Join hundreds of real estate professionals leveraging hyper-local content, Google AI, brand customization, CRM integration, listing automation, and digital avatars
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl border-3 border-gold-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 border-3 border-gold-700 shadow-lg mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-gold-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-navy-600 font-extrabold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-3 border-gold-300 hover:border-gold-500 flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-gold-500 text-gold-600" />
                  ))}
                </div>

                <Quote className="w-10 h-10 text-gold-600 mb-4" />

                <p className="text-navy-500 leading-relaxed mb-6 italic font-medium text-base">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="pt-6 border-t-3 border-gold-300 mt-auto">
                <div className="font-extrabold text-navy-700 text-lg">
                  {testimonial.name}
                </div>
                <div className="text-sm text-navy-500 font-bold">
                  {testimonial.role}
                </div>
                <div className="text-xs text-navy-400 mt-1 font-bold">
                  {testimonial.location}
                </div>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-100 to-gold-200 border-2 border-gold-600 rounded-full text-xs font-extrabold text-navy-700 shadow-md">
                  <TrendingUp className="w-4 h-4 text-gold-700" />
                  {testimonial.metric}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-navy-600 mb-6 font-bold text-lg">
            Join the growing community of agents who have transformed their marketing
          </p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <div className="px-8 py-4 bg-white rounded-xl shadow-lg border-2 border-gold-400 font-extrabold text-navy-700 hover:border-gold-600 hover:shadow-xl transition-all">
              Keller Williams
            </div>
            <div className="px-8 py-4 bg-white rounded-xl shadow-lg border-2 border-gold-400 font-extrabold text-navy-700 hover:border-gold-600 hover:shadow-xl transition-all">
              RE/MAX
            </div>
            <div className="px-8 py-4 bg-white rounded-xl shadow-lg border-2 border-gold-400 font-extrabold text-navy-700 hover:border-gold-600 hover:shadow-xl transition-all">
              Century 21
            </div>
            <div className="px-8 py-4 bg-white rounded-xl shadow-lg border-2 border-gold-400 font-extrabold text-navy-700 hover:border-gold-600 hover:shadow-xl transition-all">
              Coldwell Banker
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
