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
      className="relative w-12 h-7 md:w-14 md:h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex-shrink-0"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
    >
      {/* Toggle Background */}
      <motion.div
        className="absolute inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full shadow-lg"
        animate={{
          x: isDark ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />
      
      {/* Icons */}
      <div className="relative flex items-center justify-between w-full h-full px-1">
        <motion.div
          className="text-yellow-500 flex items-center justify-center"
          animate={{
            scale: isDark ? 0.7 : 1,
            opacity: isDark ? 0.5 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <FontAwesomeIcon icon={faSun} className="text-xs md:text-sm" />
        </motion.div>
        
        <motion.div
          className="text-blue-300 flex items-center justify-center"
          animate={{
            scale: isDark ? 1 : 0.7,
            opacity: isDark ? 1 : 0.5,
          }}
          transition={{ duration: 0.2 }}
        >
          <FontAwesomeIcon icon={faMoon} className="text-xs md:text-sm" />
        </motion.div>
      </div>
      
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: isDark 
            ? '0 0 15px rgba(59, 130, 246, 0.3)' 
            : '0 0 15px rgba(251, 191, 36, 0.3)'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;