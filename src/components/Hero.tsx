import React, { useEffect, useState } from 'react';
import { ArrowDown, Play, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStethoscope, 
  faHeartbeat, 
  faUserMd,
  faHospital,
  faStar
} from '@fortawesome/free-solid-svg-icons';

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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-animated"></div>
      
      {/* African Pattern Background */}
      <div className="absolute inset-0 african-pattern-1 opacity-20"></div>
      
      {/* Floating Geometric Shapes - Hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          className="absolute top-20 left-10 text-white/10"
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
          <FontAwesomeIcon icon={faStethoscope} className="text-6xl" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-white/5"
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
          <FontAwesomeIcon icon={faHospital} className="text-8xl" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-1/4 text-white/10"
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
          <FontAwesomeIcon icon={faHeartbeat} className="text-5xl" />
        </motion.div>
      </div>

      {/* Interactive Cursor Effect - Desktop only */}
      <div
        className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out hidden lg:block"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Glass Overlay */}
      <div className="absolute inset-0 glass-dark"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full glass mb-6 md:mb-8 text-xs md:text-sm font-medium"
          >
            <FontAwesomeIcon icon={faStar} className="fa-pulse-custom text-yellow-400" />
            <span className="hidden sm:inline">Innovation en Santé Digitale</span>
            <span className="sm:hidden">Innovation Santé</span>
          </motion.div>

          {/* Main Heading - Responsive typography */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <span className="block">La télémédecine</span>
            <span className="block gradient-text-accent">au service de</span>
            <span className="block">l'Afrique</span>
          </motion.h1>

          {/* Subtitle - Better mobile spacing */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed px-2"
          >
            DIGIHEALTH4AFRICA révolutionne l'accès aux soins de santé en Afrique 
            grâce à des solutions de télémédecine innovantes et adaptées aux réalités locales.
          </motion.p>

          {/* CTA Buttons - Mobile-first layout */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16 px-4"
          >
            <motion.a
              href="#solutions"
              className="btn-modern group relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg shadow-glow hover:shadow-glow-accent transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faStethoscope} className="fa-pulse-custom" />
                <span className="hidden sm:inline">Découvrir nos solutions</span>
                <span className="sm:hidden">Nos solutions</span>
                <ArrowDown className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </motion.a>

            <motion.button
              className="btn-modern group flex items-center justify-center gap-3 w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 glass rounded-xl md:rounded-2xl font-semibold text-base md:text-lg hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Play className="w-4 h-4 md:w-5 md:h-5 ml-0.5" />
              </div>
              <span>Voir la démo</span>
            </motion.button>
          </motion.div>

          {/* Stats - Mobile-optimized grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto px-4"
          >
            <div className="glass rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FontAwesomeIcon icon={faUserMd} className="text-primary-400 fa-heartbeat-custom" />
                <div className="text-2xl md:text-3xl font-bold gradient-text">3000+</div>
              </div>
              <div className="text-white/80 text-sm md:text-base">Patients pris en charge</div>
            </div>
            <div className="glass rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FontAwesomeIcon icon={faHospital} className="text-primary-400 fa-pulse-custom" />
                <div className="text-2xl md:text-3xl font-bold gradient-text">15</div>
              </div>
              <div className="text-white/80 text-sm md:text-base">Centres équipés</div>
            </div>
            <div className="glass rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-xl sm:col-span-1 col-span-1">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FontAwesomeIcon icon={faHeartbeat} className="text-primary-400 fa-glow-custom" />
                <div className="text-2xl md:text-3xl font-bold gradient-text">75%</div>
              </div>
              <div className="text-white/80 text-sm md:text-base">Réduction des évacuations</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a
          href="#solutions"
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors group"
        >
          <span className="text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
            Découvrir
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;