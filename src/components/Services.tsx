import { Code, Palette, Smartphone, TrendingUp, Globe, Lock, Bot } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      // description: 'Custom web applications built with cutting-edge technologies for optimal performance and scalability.',
      description: "Captivate and convert with a website that stands out. Our web development services blend cutting-edge technologies like Laravel, Flutter Web, and WordPress to create responsive, secure, and visually compelling websites that make a lasting impact.",
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Smartphone,
      title: 'Flutter Development',
      // description: 'Native and cross-platform mobile solutions that deliver exceptional user experiences.',
      description: 'Experience the power of cross-platform development with Flutter. We craft stunning, high-performance mobile applications that deliver a consistent and seamless experience across both Android and iOS, ensuring your brand shines on every device.',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Smartphone,
      title: 'iOS Development',
      // description: 'Beautiful, intuitive designs that captivate users and drive engagement.',
      description: 'Elevate your business in the Apple ecosystem with sophisticated iOS applications. Our expert developers use the latest in Swift technology to deliver elegant, secure, and intuitive apps that resonate with users and enhance your brand\'s digital presence.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Smartphone,
      title: 'Android Development',
      // description: 'Strategic marketing campaigns that amplify your brand and generate measurable results.',
      description: 'Unlock the full potential of the Android ecosystem with custom-built applications. Our Android development team combines cutting-edge technology with innovative design to create robust, user-friendly apps that engage your audience and drive business success.',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Bot,
      title: 'Artificial Intelligence & Machine Learning',
      // description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      description: 'Transform your business with the power of AI and Machine Learning. Our advanced AI/ML solutions unlock new opportunities for innovation, from predictive analytics to intelligent automation, driving smarter decisions and creating a competitive edge.',
      color: 'from-cyan-500 to-cyan-600',
    },
    // {
    //   icon: Lock,
    //   title: 'Cybersecurity',
    //   description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    //   color: 'from-slate-500 to-slate-600',
    // },
  ];

  return (
    <section id="services" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to meet your business needs and drive growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={32} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
