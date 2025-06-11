import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faEye, 
  faLeaf, 
  faAward, 
  faGlobe, 
  faHeart,
  faStethoscope,
  faHandHoldingHeart,
  faUserMd,
  faHospital
} from '@fortawesome/free-solid-svg-icons';
import doctorImage from '../images/docor.png';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const values = [
    {
      icon: <FontAwesomeIcon icon={faAward} className="fa-glow-custom" />,
      title: "Innovation responsable",
      description: "Des solutions technologiques adaptées aux contextes locaux et aux besoins réels.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <FontAwesomeIcon icon={faHandHoldingHeart} className="fa-heartbeat-custom" />,
      title: "Accessibilité des soins",
      description: "Réduire les barrières géographiques et financières pour un accès équitable à la santé.",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: <FontAwesomeIcon icon={faUsers} className="fa-pulse-custom" />,
      title: "Solidarité médicale",
      description: "Créer des ponts entre professionnels de santé pour un partage d'expertise bénéfique.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <FontAwesomeIcon icon={faGlobe} className="fa-rotate-custom" />,
      title: "Respect des contextes locaux",
      description: "Des solutions ancrées dans les réalités culturelles et socio-économiques africaines.",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      {/* African Pattern Background */}
      <div className="absolute inset-0 african-pattern-3"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-gray-50/90 to-white/95"></div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary-200/30 to-accent-200/30 rounded-full blur-3xl"
        style={{ y, opacity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-accent-200/30 to-secondary-200/30 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]), opacity }}
      />

      {/* Floating Medical Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-32 right-16 text-primary-200"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FontAwesomeIcon icon={faStethoscope} className="text-5xl opacity-20" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-16 text-accent-200"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <FontAwesomeIcon icon={faHospital} className="text-4xl opacity-20" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
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
            <FontAwesomeIcon icon={faHeart} className="fa-heartbeat-custom" />
            Notre Histoire
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-modern">
            <span className="gradient-text">Qui sommes-nous ?</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Une équipe dévouée à l'amélioration de l'accès aux soins de santé en Afrique.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="glass rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
              {/* African pattern overlay */}
              <div className="absolute inset-0 african-pattern-4 opacity-30"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <FontAwesomeIcon icon={faUserMd} className="text-2xl text-primary-600 fa-pulse-custom" />
                  <h3 className="text-3xl font-bold gradient-text">À propos</h3>
                </div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    DIGIHEALTH4AFRICA a été fondée par une infirmière française d'origine camerounaise 
                    et un médecin africain ayant exercé en France et au Cameroun, avec la conviction que 
                    les innovations en santé peuvent transformer l'accès aux soins en Afrique.
                  </p>
                  <p className="text-lg">
                    Notre équipe est composée de professionnels de santé, d'ingénieurs, de logisticiens 
                    et d'experts en santé digitale unis par une même mission : rapprocher les soins de 
                    santé des populations, même dans les zones les plus reculées.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative group">
              <motion.img
                src={doctorImage}
                alt="L'équipe DIGIHEALTH4AFRICA"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-8 -left-8 glass rounded-2xl p-6 backdrop-blur-xl max-w-xs"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <FontAwesomeIcon icon={faStethoscope} className="text-green-500 fa-pulse-custom" />
                  <span className="font-semibold text-gray-900">Expertise Internationale</span>
                </div>
                <p className="text-sm text-gray-600">
                  Fondée par des professionnels de santé avec une expérience en Afrique et en Europe
                </p>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute top-1/2 -left-4 w-16 h-16 bg-gradient-to-br from-accent-400 to-secondary-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass rounded-3xl p-12 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 african-pattern-5"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 to-accent-50/50"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                className="lg:w-1/4 flex justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center text-white shadow-xl">
                    <FontAwesomeIcon icon={faEye} className="text-3xl fa-glow-custom" />
                  </div>
                  <div className="absolute inset-0 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl blur-xl opacity-30"></div>
                </div>
              </motion.div>
              <div className="lg:w-3/4 text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-6 gradient-text">Notre vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Un continent africain où chaque citoyen, où qu'il se trouve, peut accéder à une expertise 
                  médicale de qualité. Nous croyons en un avenir où la distance ne sera plus un obstacle 
                  à la santé, et où la technologie servira à rendre les soins accessibles à tous.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FontAwesomeIcon icon={faHeart} className="text-2xl text-primary-600 fa-heartbeat-custom" />
              <h3 className="text-3xl font-bold gradient-text">Nos valeurs</h3>
            </div>
            <p className="text-gray-600 text-lg">Les principes qui guident notre mission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="glass rounded-3xl p-8 h-full backdrop-blur-xl relative overflow-hidden">
                  {/* African pattern background */}
                  <div className="absolute inset-0 african-pattern-2 opacity-20"></div>
                  
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-4`}>
                      <div className="text-2xl">
                        {value.icon}
                      </div>
                    </div>
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-4 text-gray-900 group-hover:gradient-text transition-all duration-300">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-white/20 to-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;