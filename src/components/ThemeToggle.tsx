import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative group p-2 rounded-xl glass backdrop-blur-sm border border-white/20 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
      
      {/* Icon Container */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            rotate: isDark ? 180 : 0,
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
          }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
            <FontAwesomeIcon 
              icon={faSun} 
              className="text-white text-sm drop-shadow-sm" 
            />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            rotate: isDark ? 0 : -180,
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
            <FontAwesomeIcon 
              icon={faMoon} 
              className="text-white text-sm drop-shadow-sm" 
            />
          </div>
        </motion.div>
      </div>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
        <motion.div
          className="absolute top-1 left-1 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            y: [0, -8, 0],
            x: [0, 4, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.2,
          }}
        />
        <motion.div
          className="absolute top-2 right-1 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            y: [0, -6, 0],
            x: [0, -3, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-1 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            y: [0, 6, 0],
            x: [0, 2, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.8,
          }}
        />
      </div>
      
      {/* Ripple Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-primary-400/30 opacity-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
};

export default ThemeToggle;