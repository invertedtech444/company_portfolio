import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles size={16} />
              <span>Welcome to the Future</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"> Business </span>
              With Innovation
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              We Honor Our Commitments With Integrity And Quality.
              At Inverted Technology, we are dedicated to empowering our clients with innovative, high-impact software solutions. Rooted in integrity and driven by quality, we specialize in cutting-edge technologies like Flutter, Android, iOS, AI/ML, and web development. Our mission is to transform ideas into exceptional digital experiences that not only exceed expectations but also drive lasting success for our customers. We believe that our team is an extension of yours, committed to serving your needs with unwavering dedication. Your satisfaction is our top priority, and we build trust through transparent communication, mutual respect, and a relentless pursuit of excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                View Our Work
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600 mt-2">Projects Done</div>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-teal-600">98%</div>
                  <div className="text-gray-600 mt-2">Client Satisfaction</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-orange-600">50+</div>
                  <div className="text-gray-600 mt-2">Team Members</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-600">10+</div>
                  <div className="text-gray-600 mt-2">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
