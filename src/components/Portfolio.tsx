import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Facial Recognition System',
      category: 'Artificial Intelligence',
      description: 'Developed an Android app with AI-powered facial recognition for secure, seamless user authentication. Using advanced machine learning algorithms, the app accurately detects and recognizes faces in real-time, ensuring reliable performance across different conditions.',
      image: 'images/customized_solutions.png',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Kuwait Mushaf - Quranic Android App',
      category: 'Flutter',
      description: 'Kuwait Mushaf, developed with Flutter, is a user-friendly Quran app offering a complete Quran text with audio from renowned reciters. Explore translations, detailed Tafseer, and study the 10 readings with highlighted words. Customize your experience with downloadable recitations and personalized settings for language and appearance.',
      image: 'images/quran_app.png',
      color: 'from-teal-500 to-teal-600',
    },
    {
      title: 'Urbie - IoT-Based Home Automation App',
      category: 'Java & Kotlin',
      description: 'Urbie, built with Java and Kotlin, is an IoT-based Android app for smart home automation. It lets users control home appliances like fans, LEDs, and water tanks, using AWS MQTT for real-time cloud control and secure databases for device status management.',
      image: 'images/portfolio_two_image.jpg',
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Salama',
      category: 'Java & Kotlin',
      description: "Salama is an application which is developed for UAE states. It's enforce that the companies operating in UAE are taking appropriate safety measures for their employees.",
      image: 'images/portfolio_two.jpg',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      title: 'Yo Promos',
      category: 'Java & Kotlin',
      description: 'Discover the best promotions and deals from top brands with our promotional app, showcasing exclusive offers and discounts tailored just for you.',
      image: 'images/portfolio_three.png',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      title: 'BioID Facial Recognition',
      category: 'Swift & Kotlin',
      description: 'The BioID app is a multifactor authentication tool using mobile face recognition to provide secure, password-free login and transaction authorization. It combines biometrics with device-based authentication, eliminating the need for passwords.',
      image: 'images/Screenshot_26.png',
      color: 'from-slate-500 to-slate-600',
    },
  ];

  return (
    <section id="portfolio" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our best work and the impact we've made for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-full p-2 shadow-lg">
                    <ExternalLink size={20} className="text-gray-900" />
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.color} mb-3`}>
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
