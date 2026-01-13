import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'invertedtec@gmail.com',
      link: 'mailto:invertedtec@gmail.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: (
          <>
            <a href="tel:+966598863938" className="block hover:underline">
              +966 598 863 938
            </a>
            <a href="tel:+923004447270" className="block hover:underline">
              +92 300 4447270
            </a>
          </>
        ),  
      link: 'tel:+15551234567',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Building No. 9, Al-Malaz, Arta bin Kaab St,Riyadh',
      link: 'https://www.google.com/maps/search/?api=1&query=Building+No.+9,+Al-Malaz,+Arta+bin+Kaab+St,+Riyadh',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: '#',
      color: 'hover:text-blue-600',
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: '#',
      color: 'hover:text-cyan-500',
    },
    {
      icon: Github,
      name: 'Github',
      url: '#',
      color: 'hover:text-gray-900',
    },
  ];

  return (
    <section id="contact" className="py-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out and let's start a conversation about your next project
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${info.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <info.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{info.title}</h3>
              <p className="text-gray-300 leading-relaxed">{info.value}</p>
            </a>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div>
              <h3 className="text-2xl font-bold mb-2">Inverted Technology</h3>
              <p className="text-gray-400">Transforming ideas into digital reality</p>
            </div>

            <div className="flex items-center space-x-6">
              <p className="text-gray-400">Follow us:</p>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-200 transform hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2026 Inverted Technology. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
