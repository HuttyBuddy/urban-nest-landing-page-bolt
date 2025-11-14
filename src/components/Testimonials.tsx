import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Urban Nest's Virtual Staging is a game-changer. I staged a 4-bedroom house in 15 minutes and had it under contract in 48 hours. The quality is unbelievable and my clients are blown away.",
      author: 'Jessica Miller',
      brokerage: 'Prestige Realty',
    },
    {
      quote:
        "As a solo agent, I don't have time for blogging. The AI Writing Studio lets me publish two hyper-local market reports a week. It's like having a full-time marketing assistant for a fraction of the cost.",
      author: 'David Chen',
      brokerage: 'Summit Properties',
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-charcoal">
            Why Top Agents Choose Urban Nest
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-bold border border-gray-100"
            >
              <div className="flex text-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-text-charcoal text-lg mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-text-charcoal">{testimonial.author}</p>
                <p className="text-sm text-text-charcoal">{testimonial.brokerage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
