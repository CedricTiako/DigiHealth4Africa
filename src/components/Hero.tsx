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
    <section className="hero min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-medical-500 via-health-500 to-africa-500 opacity-90"></div>
      
      {/* African Pattern Background */}
      <div className="absolute inset-0 african-pattern-1 opacity-20"></div>
      
      {/* Floating Medical Icons - Hidden on mobile for performance */}
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
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="hero-content text-center text-white relative z-10">
        <motion.div
          className="max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="badge badge-lg bg-white/20 text-white border-white/30 mb-6 md:mb-8 backdrop-blur-sm"
          >
            <FontAwesomeIcon icon={faStar} className="mr-2 text-warning animate-pulse" />
            <span className="hidden sm:inline">Innovation en Santé Digitale</span>
            <span className="sm:hidden">Innovation Santé</span>
          </motion.div>

          {/* Main Heading - Responsive typography */}
          <motion.h1
            variants={itemVariants}
            className={cn(
              "text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl",
              "font-bold mb-6 md:mb-8 leading-tight font-heading"
            )}
          >
            <span className="block">La télémédecine</span>
            <span className="block text-health-300">au service de</span>
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
              className="btn btn-primary btn-lg w-full sm:w-auto gap-2 shadow-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faStethoscope} className="animate-medical-pulse" />
              <span className="hidden sm:inline">Découvrir nos solutions</span>
              <span className="sm:hidden">Nos solutions</span>
              <ArrowDown className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>

            <motion.button
              className="btn btn-outline btn-lg w-full sm:w-auto gap-2 text-white border-white/30 hover:bg-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Play className="w-4 h-4 md:w-5 md:h-5 ml-0.5" />
              </div>
              <span>Voir la démo</span>
            </motion.button>
          </motion.div>

          {/* Stats - Mobile-optimized grid */}
          <motion.div
            variants={itemVariants}
            className="stats stats-vertical sm:stats-horizontal shadow-lg bg-white/10 backdrop-blur-md border border-white/20"
          >
            <div className="stat">
              <div className="stat-figure text-health-300">
                <FontAwesomeIcon icon={faUserMd} className="text-2xl animate-heartbeat" />
              </div>
              <div className="stat-title text-white/80">Patients pris en charge</div>
              <div className="stat-value text-white">3000+</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-medical-300">
                <FontAwesomeIcon icon={faHospital} className="text-2xl animate-pulse" />
              </div>
              <div className="stat-title text-white/80">Centres équipés</div>
              <div className="stat-value text-white">15</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-africa-300">
                <FontAwesomeIcon icon={faHeartbeat} className="text-2xl animate-bounce" />
              </div>
              <div className="stat-title text-white/80">Réduction des évacuations</div>
              <div className="stat-value text-white">75%</div>
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