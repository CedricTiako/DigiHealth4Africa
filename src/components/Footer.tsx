import React, { useState } from 'react';
import { Heart, ArrowUp, Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faLinkedinIn, 
  faInstagram, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "Mallettes de télémédecine", href: "/services/mallettes" },
        { name: "Bornes de télémédecine", href: "/services/bornes" },
        { name: "Véhicules médicalisés", href: "/services/vehicules" },
        { name: "Conteneurs santé", href: "/services/conteneurs" },
        { name: "Télé-expertise", href: "/services/tele-expertise" },
        { name: "Évacuations sanitaires", href: "/services/evacuations" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "/#about" },
        { name: "Réalisations", href: "/#projects" },
        { name: "Actualités", href: "/#blog" },
        { name: "Contact", href: "/#contact" },
        { name: "Carrières", href: "#" },
        { name: "Partenaires", href: "#" }
      ]
    },
    {
      title: "Ressources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Support technique", href: "#" },
        { name: "Formation", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Téléchargements", href: "#" },
        { name: "Webinaires", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { 
      icon: faFacebookF, 
      label: "Facebook", 
      href: "#",
      color: "hover:bg-blue-600"
    },
    { 
      icon: faTwitter, 
      label: "Twitter", 
      href: "#",
      color: "hover:bg-sky-500"
    },
    { 
      icon: faLinkedinIn, 
      label: "LinkedIn", 
      href: "#",
      color: "hover:bg-blue-700"
    },
    { 
      icon: faInstagram, 
      label: "Instagram", 
      href: "#",
      color: "hover:bg-pink-600"
    },
    { 
      icon: faYoutube, 
      label: "YouTube", 
      href: "#",
      color: "hover:bg-red-600"
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

      {/* African Pattern Background */}
      <div className="absolute inset-0 african-pattern-1 opacity-5"></div>

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
          className="grid grid-cols-1 lg:grid-cols-5 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo and Company Info - Takes 2 columns on large screens */}
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
            
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-md">
              La télémédecine au service de l'Afrique. Des solutions innovantes pour 
              renforcer les systèmes de santé et améliorer l'accès aux soins.
            </p>

            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              <motion.a
                href="tel:+33753458224"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Téléphone</p>
                  <p className="font-medium">+33 7 53 45 82 24</p>
                </div>
              </motion.a>
              
              <motion.a
                href="mailto:contact@digihealth4africa.fr"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">contact@digihealth4africa.fr</p>
                </div>
              </motion.a>
              
              <motion.div
                className="flex items-start gap-3 text-gray-300"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Adresse</p>
                  <address className="not-italic font-medium">
                    37 Avenue Duguay Trouin<br />
                    93150 Le Blanc Mesnil, France
                  </address>
                </div>
              </motion.div>
            </div>

            {/* Newsletter */}
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/10">
              <h4 className="text-lg font-bold mb-3 gradient-text">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">
                Restez informé de nos dernières actualités et innovations.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                    required
                  />
                  <motion.button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
                {isSubscribed && (
                  <motion.p
                    className="text-green-400 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✓ Inscription réussie !
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Footer Sections - Each takes 1 column */}
          {footerSections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6 gradient-text">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 block py-1 hover:translate-x-1"
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

        {/* Social Media */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-lg font-bold mb-4 gradient-text">Suivez-nous</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-white transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-sm" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                Une solution pour chaque besoin de santé
              </p>
              <div className="flex items-center gap-2 text-primary-400">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">Santé digitale pour l'Afrique</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center lg:text-left">
              <p className="text-gray-400">
                © {new Date().getFullYear()} DIGIHEALTH4AFRICA. Tous droits réservés.
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <span>•</span>
                <span>Site réalisé par</span>
                <motion.a
                  href="https://smart-solutions-it.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary-400 hover:text-primary-300 font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Smart Solution IT
                  <ExternalLink className="w-3 h-3" />
                </motion.a>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Mentions légales
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Confidentialité
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Cookies
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Plan du site
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