import React, { useEffect, useState } from 'react';
import { ArrowDown, Play, Sparkles, Users, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStethoscope, 
  faHeartbeat, 
  faUserMd,
  faHospital,
  faStar,
  faGlobe,
  faAward
} from '@fortawesome/free-solid-svg-icons';
import { cn } from '../utils/cn';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* African Pattern Background */}
      <div className="absolute inset-0 african-pattern-1 opacity-30"></div>
      
      {/* Floating Medical Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-primary-200"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FontAwesomeIcon icon={faStethoscope} className="text-4xl lg:text-6xl opacity-30" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-accent-200"
          animate={{
            rotate: [45, 90, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FontAwesomeIcon icon={faHospital} className="text-5xl lg:text-8xl opacity-20" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-1/4 text-green-200"
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FontAwesomeIcon icon={faHeartbeat} className="text-3xl lg:text-5xl opacity-40" />
        </motion.div>
      </div>

      {/* Interactive Cursor Effect */}
      <div
        className="absolute w-96 h-96 bg-primary-200/20 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out hidden lg:block"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <motion.div
          className="text-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 text-sm font-medium mb-8 border border-primary-200"
          >
            <FontAwesomeIcon icon={faStar} className="text-warning-500 animate-pulse" />
            <span>Innovation en Santé Digitale pour l'Afrique</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="block text-gray-900 dark:text-white">La télémédecine</span>
            <span className="block bg-gradient-to-r from-primary-600 via-accent-600 to-green-600 bg-clip-text text-transparent">
              au service de
            </span>
            <span className="block text-gray-900 dark:text-white">l'Afrique</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl mb-12 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            DIGIHEALTH4AFRICA révolutionne l'accès aux soins de santé en Afrique 
            grâce à des solutions de télémédecine innovantes et adaptées aux réalités locales.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="#solutions"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold text-lg shadow-glow hover:shadow-glow-accent transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faStethoscope} className="animate-pulse" />
              Découvrir nos solutions
              <ArrowDown className="w-5 h-5" />
            </motion.a>

            <motion.button
              className="w-full sm:w-auto px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-xl font-semibold text-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 ml-0.5" />
              </div>
              Voir la démo
            </motion.button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto"
          >
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 hover:border-primary-300 transition-all duration-300 group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faUserMd} className="text-xl" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">3000+</div>
              <div className="text-gray-600 dark:text-gray-400">Patients pris en charge</div>
            </div>
            
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 hover:border-accent-300 transition-all duration-300 group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faHospital} className="text-xl" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">15</div>
              <div className="text-gray-600 dark:text-gray-400">Centres équipés</div>
            </div>
            
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 hover:border-green-300 transition-all duration-300 group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-orange-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faHeartbeat} className="text-xl" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">75%</div>
              <div className="text-gray-600 dark:text-gray-400">Réduction des évacuations</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a
          href="#solutions"
          className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
        >
          <span className="text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
            Découvrir
          </span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;