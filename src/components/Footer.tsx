import React from 'react';
import { Heart, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "Mallettes de télémédecine", href: "#solutions" },
        { name: "Bornes de télémédecine", href: "#solutions" },
        { name: "Véhicules médicalisés", href: "#solutions" },
        { name: "Conteneurs santé", href: "#solutions" },
        { name: "Télé-expertise", href: "#solutions" },
        { name: "Évacuations sanitaires", href: "#solutions" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "#about" },
        { name: "Réalisations", href: "#projects" },
        { name: "Actualités", href: "#blog" },
        { name: "Contact", href: "#contact" },
        { name: "Mentions légales", href: "#" },
        { name: "Politique de confidentialité", href: "#" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-10"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo and Description */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                className="relative"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Heart className="h-10 w-10 text-primary-400" />
                <div className="absolute inset-0 h-10 w-10 bg-primary-400/30 rounded-full blur-md"></div>
              </motion.div>
              <span className="text-2xl font-bold text-modern">
                <span className="gradient-text">DIGI</span>
                <span className="gradient-text-accent">HEALTH</span>
                <span className="gradient-text">4</span>
                <span className="gradient-text-accent">AFRICA</span>
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
              La télémédecine au service de l'Afrique. Des solutions innovantes pour 
              renforcer les systèmes de santé et améliorer l'accès aux soins.
            </p>

            {/* Quick Contact */}
            <div className="space-y-3">
              <motion.a
                href="tel:+33753458224"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                whileHover={{ x: 4 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+33 7 53 45 82 24</span>
              </motion.a>
              
              <motion.a
                href="mailto:contact@digihealth4africa.fr"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                whileHover={{ x: 4 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span>contact@digihealth4africa.fr</span>
              </motion.a>
              
              <motion.div
                className="flex items-start gap-3 text-gray-300"
                whileHover={{ x: 4 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <address className="not-italic">
                  37 Avenue Duguay Trouin<br />
                  93150 Le Blanc Mesnil, France
                </address>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6 gradient-text">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 block py-1"
                      whileHover={{ x: 4, color: "#ffffff" }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} DIGIHEALTH4AFRICA. Tous droits réservés.
            </p>
            
            <div className="flex items-center gap-6">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Mentions légales
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Confidentialité
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Cookies
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600"></div>
    </footer>
  );
};

export default Footer;