import { Building2, Sparkles, Rocket, Factory,   ShoppingCart,
  GraduationCap,
  Banknote,
  Car,
  HeartPulse,
  Store,
  Brain,
  MapPin,
  Phone,
  Mail, } from 'lucide-react';

const TargetMarket = () => {
  const markets = [
    // {
    //   icon: Rocket,
    //   title: 'Startups & Scale-ups',
    //   description: 'Fast-paced digital solutions to accelerate your growth journey',
    //   benefits: ['MVP Development', 'Rapid Prototyping', 'Scalable Architecture'],
    //   color: 'from-blue-500 to-blue-600',
    //   bgColor: 'from-blue-50 to-blue-100',
    // },
    // {
    //   icon: Building2,
    //   title: 'Enterprise Organizations',
    //   description: 'Enterprise-grade systems with security and compliance at the core',
    //   benefits: ['Legacy Modernization', 'Enterprise Integration', 'Compliance Solutions'],
    //   color: 'from-teal-500 to-teal-600',
    //   bgColor: 'from-teal-50 to-teal-100',
    // },
    // {
    //   icon: Sparkles,
    //   title: 'Digital Agencies',
    //   description: 'White-label development partnership for creative agencies',
    //   benefits: ['White-Label Services', 'Design to Code', 'Ongoing Support'],
    //   color: 'from-orange-500 to-orange-600',
    //   bgColor: 'from-orange-50 to-orange-100',
    // },
    // {
    //   icon: Factory,
    //   title: 'Manufacturing & Retail',
    //   description: 'Digital transformation solutions for traditional industries',
    //   benefits: ['E-Commerce Platforms', 'Supply Chain Systems', 'Customer Portals'],
    //   color: 'from-emerald-500 to-emerald-600',
    //   bgColor: 'from-emerald-50 to-emerald-100',
    // },


    //new entries can be added here
    

     {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description:
        'Transform your online business with scalable, high-performance e-commerce solutions.',
    benefits: [
      'High Performance Stores',
      'Payment Gateway Integration',
      'Analytics & Reporting',
      'Inventory Management',
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
  },
  {
    icon: GraduationCap,
    title: 'Innovative Education',
    description:
        'Revolutionize the education sector with cutting-edge digital platforms.',
    benefits: [
      'Remote Learning Systems',
      'Student Management',
      'Teacher Dashboards',
      'Interactive Learning Tools',
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
  },
  {
    icon: Banknote,
    title: 'Financial Empowerment',
    description:
        'Secure and compliant software solutions for modern financial services.',
    benefits: [
      'Mobile Banking Apps',
      'Investment Platforms',
      'Financial Analytics',
      'Secure Transactions',
    ],
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100',
  },
  {
    icon: Building2,
    title: 'Real Estate Optimization',
    description:
        'Digital tools designed to streamline property management and sales.',
    benefits: [
      'Property Management Systems',
      'Client Engagement Tools',
      'Sales Automation',
      'Listing Platforms',
    ],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100',
  },
  {
    icon: Car,
    title: 'Automotive Innovation',
    description:
        'Advanced software that enhances vehicle connectivity and dealership operations.',
    benefits: [
      'Vehicle Tracking Systems',
      'Dealership Management',
      'Customer Experience Tools',
      'Sales Automation',
    ],
    color: 'from-red-500 to-red-600',
    bgColor: 'from-red-50 to-red-100',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare Advancement',
    description:
        'Secure healthcare applications for patient care and operations.',
    benefits: [
      'Patient Management Systems',
      'Telemedicine Platforms',
      'Health Monitoring Apps',
      'Medical Data Security',
    ],
    color: 'from-pink-500 to-pink-600',
    bgColor: 'from-pink-50 to-pink-100',
  },
  {
    icon: Store,
    title: 'Retail Transformation',
    description:
        'Dynamic retail solutions integrating POS and inventory management.',
    benefits: [
      'POS Systems',
      'Inventory Tracking',
      'Customer Loyalty Tools',
      'Sales Analytics',
    ],
    color: 'from-teal-500 to-teal-600',
    bgColor: 'from-teal-50 to-teal-100',
  },
  {
    icon: Brain,
    title: 'AI / ML Excellence',
    description:
        'AI and Machine Learning solutions for predictive analytics and automation.',
    benefits: [
      'Predictive Analytics',
      'Process Automation',
      'Smart Recommendations',
      'Business Intelligence',
    ],
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'from-indigo-50 to-indigo-100',
  },


  ];

  return (
    <section id="target-market" className="py-10 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who We Serve
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored solutions for businesses at every stage of their digital journey
          </p> */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our services are designed to meet the needs of a diverse range of industries. We understand that each industry has unique requirements, and we tailor our solutions to ensure maximum impact and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {markets.map((market, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${market.bgColor} rounded-full blur-3xl opacity-30 transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500`}></div>

              <div className="relative p-8">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${market.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <market.icon size={32} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {market.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {market.description}
                </p>

                <div className="space-y-3">
                  {market.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${market.color}`}></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`h-2 w-full bg-gradient-to-r ${market.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our solutions
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default TargetMarket;
