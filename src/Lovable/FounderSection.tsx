export default function FounderSection() {
  return (
    <section id="founder" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <span className="inline-block bg-amber-500 border-2 border-amber-600 rounded-full px-4 py-1 text-sm font-bold text-white shadow-lg mb-4">
            The Mind Behind The Mission
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Meet the Founder
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center">
            <img
              className="rounded-full border-8 border-amber-500 shadow-2xl w-64 h-64 sm:w-80 sm:h-80 object-cover"
              src="/assets/lovable/KevinHuttyHeadshot.png"
              alt="Kevin Hutty - Founder"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Kevin Hutty</h3>
            <p className="mt-2 text-lg font-semibold text-amber-600">
              Founder, Urban Nest | Realtor® & Tech Lead
            </p>
            <p className="mt-4 text-gray-700 font-medium leading-relaxed">
              With 14 years in public-sector leadership and a successful real estate career, Kevin
              founded Urban Nest to solve the marketing gap for agents—creating authentic, hyper-local
              content without sacrificing client time.
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/kevinhutty/"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1.5 transition-all duration-300"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
