import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ExternalLink } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SolutionForm from './SolutionForm';

interface FormField {
  name: string;
  label: string;
  type: string;
  options?: string[];
}

interface Solution {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  action: string;
  formFields: FormField[];
  href?: string;
  image: string;
  imagePosition?: string;
}

interface SolutionCardProps {
  solution: Solution;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  const getServiceHref = (id: number) => {
    const routes = {
      1: '/services/mallettes',
      2: '/services/bornes',
      3: '/services/vehicules',
      4: '/services/conteneurs',
      5: '/services/tele-expertise',
      6: '/services/evacuations'
    };
    return routes[id as keyof typeof routes] || '#';
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <>
      <motion.div
        className="group relative bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/20 transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 h-full"
        variants={cardVariants}
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Image de fond */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url(${solution.image})`,
            backgroundPosition: solution.imagePosition || 'center',
            opacity: 0.65,
            filter: 'contrast(1.3) brightness(1.2) saturate(1.2)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80 dark:to-black/90"></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/40 via-white/20 to-accent-50/40 dark:from-primary-900/40 dark:via-gray-800/50 dark:to-accent-900/40 opacity-100 group-hover:opacity-10 transition-opacity duration-500"></div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

        <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
          {/* Icon */}
          <motion.div
            className="flex justify-center mb-6"
            variants={iconVariants}
            whileHover="hover"
          >
            <div className="relative">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="text-2xl md:text-3xl">
                  {solution.icon}
                </div>
              </div>
              <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl md:rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="text-center flex-grow flex flex-col">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
              {solution.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-sm md:text-base flex-grow">
              {solution.description}
            </p>

            {/* Action Buttons */}
            <div className="space-y-3 mt-auto">
              {/* En savoir plus Button */}
              <Link
                to={getServiceHref(solution.id)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-xl font-semibold text-sm md:text-base hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 group/btn"
              >
                <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                En savoir plus
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              {/* Prendre Rendez-vous Button */}
              <motion.button
                onClick={toggleForm}
                className="w-full bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-500 dark:to-accent-500 text-white py-3 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FontAwesomeIcon icon={faCalendarCheck} className="animate-pulse group-hover/btn:animate-bounce" />
                Prendre Rendez-vous
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-primary-200 to-accent-200 dark:from-primary-300 dark:to-accent-300 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-accent-200 to-primary-200 dark:from-accent-300 dark:to-primary-300 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-2 md:p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={toggleForm}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-2xl max-h-[95vh] md:max-h-[90vh] overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-4 md:p-6 text-white">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      {React.cloneElement(solution.icon as React.ReactElement, {
                        className: "w-5 h-5 md:w-6 md:h-6"
                      })}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg md:text-xl font-bold truncate">{solution.title}</h3>
                      <p className="text-white/80 text-xs md:text-sm">Prendre rendez-vous</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={toggleForm}
                    className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0 ml-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(95vh-120px)] md:max-h-[calc(90vh-120px)]">
                <SolutionForm
                  fields={solution.formFields}
                  solutionTitle={solution.title}
                  onClose={toggleForm}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SolutionCard;