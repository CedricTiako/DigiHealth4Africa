import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faComments,
  faHeartbeat,
  faUserMd,
  faStethoscope
} from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log('Contact form submitted:', data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, label: "Facebook", color: "from-blue-600 to-blue-700" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", color: "from-blue-700 to-blue-800" },
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter", color: "from-sky-500 to-sky-600" },
    { icon: <Instagram className="h-5 w-5" />, label: "Instagram", color: "from-pink-500 to-purple-600" }
  ];

  const contactInfo = [
    {
      icon: <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-pulse-custom" />,
      title: "Adresse",
      content: "37 Avenue Duguay Trouin, 93150 Le Blanc Mesnil, France",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FontAwesomeIcon icon={faPhone} className="fa-bounce-custom" />,
      title: "Téléphone",
      content: "+33 7 53 45 82 24",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} className="fa-glow-custom" />,
      title: "Email",
      content: "contact@digihealth4africa.fr",
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* African Pattern Background */}
      <div className="absolute inset-0 african-pattern-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 via-white/90 to-gray-50/95"></div>

      {/* Floating Medical Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-primary-200"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FontAwesomeIcon icon={faComments} className="text-4xl opacity-30" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-10 text-accent-200"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <FontAwesomeIcon icon={faStethoscope} className="text-3xl opacity-30" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FontAwesomeIcon icon={faComments} className="fa-pulse-custom" />
            Contactez-nous
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-modern">
            <span className="gradient-text">Parlons de votre projet</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Vous souhaitez en savoir plus sur nos solutions ou discuter d'un projet ? 
            Notre équipe d'experts est à votre disposition.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="glass rounded-3xl p-8 backdrop-blur-xl shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 african-pattern-1 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center text-white">
                    <FontAwesomeIcon icon={faEnvelope} className="fa-pulse-custom" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold gradient-text">Envoyez-nous un message</h3>
                    <p className="text-gray-600">Nous vous répondrons dans les plus brefs délais</p>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                            Nom complet *
                          </label>
                          <input
                            id="name"
                            type="text"
                            {...register('name', { required: true })}
                            className={`w-full px-4 py-3 rounded-xl border-2 ${
                              errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white/50'
                            } focus:outline-none focus:border-primary-500 focus:bg-white transition-all duration-300 backdrop-blur-sm`}
                            placeholder="Votre nom complet"
                          />
                          {errors.name && (
                            <motion.p
                              className="text-red-500 text-sm"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                            >
                              Ce champ est requis
                            </motion.p>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="function" className="block text-sm font-semibold text-gray-700">
                            Fonction
                          </label>
                          <input
                            id="function"
                            type="text"
                            {...register('function')}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white/50 focus:outline-none focus:border-primary-500 focus:bg-white transition-all duration-300 backdrop-blur-sm"
                            placeholder="Votre fonction"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                            Email *
                          </label>
                          <input
                            id="email"
                            type="email"
                            {...register('email', { required: true })}
                            className={`w-full px-4 py-3 rounded-xl border-2 ${
                              errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white/50'
                            } focus:outline-none focus:border-primary-500 focus:bg-white transition-all duration-300 backdrop-blur-sm`}
                            placeholder="votre@email.com"
                          />
                          {errors.email && (
                            <motion.p
                              className="text-red-500 text-sm"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                            >
                              Ce champ est requis
                            </motion.p>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                            Téléphone
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            {...register('phone')}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white/50 focus:outline-none focus:border-primary-500 focus:bg-white transition-all duration-300 backdrop-blur-sm"
                            placeholder="+33 X XX XX XX XX"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="organization" className="block text-sm font-semibold text-gray-700">
                          Organisation
                        </label>
                        <input
                          id="organization"
                          type="text"
                          {...register('organization')}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white/50 focus:outline-none focus:border-primary-500 focus:bg-white transition-all duration-300 backdrop-blur-sm"
                          placeholder="Nom de votre organisation"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          {...register('message', { required: true })}
                          className={`w-full px-4 py-3 rounded-xl border-2 ${
                            errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white/50'
                          } focus:outline-none focus:border-primary-500 focus:bg-white transition-all duration-300 backdrop-blur-sm resize-none`}
                          rows={4}
                          placeholder="Décrivez votre projet ou vos besoins..."
                        ></textarea>
                        {errors.message && (
                          <motion.p
                            className="text-red-500 text-sm"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            Ce champ est requis
                          </motion.p>
                        )}
                      </div>
                      
                      <motion.button
                        type="submit"
                        className="w-full btn-modern bg-gradient-to-r from-primary-600 to-accent-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-glow hover:shadow-glow-accent transition-all duration-300"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="flex items-center justify-center gap-2">
                          <FontAwesomeIcon icon={faEnvelope} className="fa-bounce-custom" />
                          Envoyer le message
                          <Send className="w-5 h-5" />
                        </span>
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <CheckCircle className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold gradient-text mb-4">Message envoyé !</h3>
                      <p className="text-gray-600">
                        Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Details */}
            <div className="glass rounded-3xl p-8 backdrop-blur-xl shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 african-pattern-3 opacity-20"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center text-white">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-pulse-custom" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold gradient-text">Nos coordonnées</h3>
                    <p className="text-gray-600">Retrouvez-nous facilement</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all duration-300 relative overflow-hidden"
                      whileHover={{ scale: 1.02, x: 4 }}
                    >
                      <div className="absolute inset-0 african-pattern-4 opacity-10"></div>
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white flex-shrink-0 relative z-10`}>
                        <div className="text-lg">
                          {info.icon}
                        </div>
                      </div>
                      <div className="relative z-10">
                        <p className="font-semibold text-gray-900 mb-1">{info.title}</p>
                        <p className="text-gray-600">{info.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="glass rounded-3xl p-8 backdrop-blur-xl shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 african-pattern-2 opacity-20"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center text-white">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold gradient-text">Suivez-nous</h3>
                    <p className="text-gray-600">Restez connectés avec nos actualités</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className={`flex items-center justify-center gap-3 p-4 bg-gradient-to-r ${social.color} text-white rounded-2xl font-medium hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                      <span className="hidden sm:inline">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="glass rounded-3xl p-8 backdrop-blur-xl shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 african-pattern-1 opacity-20"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <FontAwesomeIcon icon={faHeartbeat} className="text-xl text-primary-600 fa-heartbeat-custom" />
                  <h3 className="text-xl font-bold gradient-text">Besoin d'une réponse rapide ?</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Pour les urgences ou les demandes prioritaires, contactez-nous directement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="tel:+33753458224"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={faPhone} className="fa-bounce-custom" />
                    Appeler
                  </motion.a>
                  <motion.a
                    href="mailto:contact@digihealth4africa.fr"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="fa-glow-custom" />
                    Email
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;