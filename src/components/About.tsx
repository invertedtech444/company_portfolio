import { Target, Users, Award, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Committed to delivering excellence in every project',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our top priority',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Highest standards in every deliverable',
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Leveraging latest technologies and methodologies',
    },
  ];

  return (
    <section id="about" className="py-10 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              About Us
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a values-driven technology company committed to integrity, innovation, and excellence in everything we do.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By combining cutting-edge technology with deep collaboration, we deliver reliable, high-quality solutions tailored to each client’s unique needs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our client-focused approach emphasizes transparency, trust, and long-term partnerships that drive meaningful and lasting impact.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg text-white">
                      <value.icon size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <p className="text-3xl font-bold text-gray-900 mb-2">10+ Years</p>
                <p className="text-gray-600">of delivering excellence and innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
