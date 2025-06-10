import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
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
}

interface SolutionCardProps {
  solution: Solution;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

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
        className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
        variants={cardVariants}
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

        <div className="relative z-10 p-8">
          {/* Icon */}
          <motion.div
            className="flex justify-center mb-6"
            variants={iconVariants}
            whileHover="hover"
          >
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                {solution.icon}
              </div>
              <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:gradient-text transition-all duration-300">
              {solution.title}
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {solution.description}
            </p>

            {/* CTA Button */}
            <motion.button
              onClick={toggleForm}
              className="w-full btn-modern group/btn relative overflow-hidden bg-gradient-to-r from-primary-600 to-accent-600 text-white py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {solution.action}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </span>
              
              {/* Button Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={toggleForm}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-6 text-white">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      {React.cloneElement(solution.icon as React.ReactElement, {
                        className: "w-6 h-6"
                      })}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{solution.title}</h3>
                      <p className="text-white/80 text-sm">Demande d'information</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={toggleForm}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
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