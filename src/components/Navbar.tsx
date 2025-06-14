import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart, Phone, Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoDigiHealth4Africa from '../images/logo-digi.png';
import { 
  faStethoscope, 
  faBriefcaseMedical, 
  faDesktop, 
  faAmbulance, 
  faHospital, 
  faSatellite, 
  faPlane 
} from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './ThemeToggle';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showMobileSolutions, setShowMobileSolutions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowMobileSolutions(false);
  };

  const toggleMobileSolutions = () => {
    setShowMobileSolutions(!showMobileSolutions);
  };

  const solutions = [
    {
      title: "Mallettes de télémédecine",
      description: "Kits portables pour consultations à distance",
      icon: faBriefcaseMedical,
      href: "/services/mallettes",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Bornes de télémédecine",
      description: "Dispositifs fixes connectés",
      icon: faDesktop,
      href: "/services/bornes",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Véhicules médicalisés",
      description: "Ambulances et unités mobiles",
      icon: faAmbulance,
      href: "/services/vehicules",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Conteneurs santé",
      description: "Structures médicalisées modulaires",
      icon: faHospital,
      href: "/services/conteneurs",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Télé-expertise médicale",
      description: "Réseau de spécialistes",
      icon: faSatellite,
      href: "/services/tele-expertise",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Évacuations sanitaires",
      description: "Transferts médicaux d'urgence",
      icon: faPlane,
      href: "/services/evacuations",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const solutionsVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.03,
        delayChildren: 0.1
      }
    }
  };

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="hidden lg:block bg-gradient-to-r from-primary-600 to-accent-600 text-white py-2 xl:py-3">
        <div className="container mx-auto px-6 xl:px-8 max-w-8xl">
          <div className="flex justify-between items-center text-sm xl:text-base">
            <div className="flex items-center gap-6 xl:gap-8">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 xl:w-5 xl:h-5" />
                <span>+33 7 53 45 82 24</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 xl:w-5 xl:h-5" />
                <span>contact@digihealth4africa.fr</span>
              </div>
            </div>
            <div className="text-sm xl:text-base">
              <span>La télémédecine au service de l'Afrique</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        className={`sticky top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass backdrop-blur-xl py-2 lg:py-3 xl:py-4 shadow-lg border-b border-white/10'
            : 'bg-white/95 dark:bg-gray-900/95 py-3 lg:py-4 xl:py-6'
        }`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-8xl">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
              <motion.div
                className="relative"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-white rounded-xl xl:rounded-2xl flex items-center justify-center overflow-hidden shadow-lg">
                  <img 
                    src={logoDigiHealth4Africa} 
                    alt="Logo DigiHealth4Africa" 
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="absolute inset-0 w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl xl:rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-white">
                  <span className="text-primary-600">DIGI</span>
                  <span className="text-accent-600">HEALTH</span>
                  <span className="text-primary-600">4</span>
                  <span className="text-accent-600">AFRICA</span>
                </span>
                <span className="text-xs xl:text-sm text-gray-500 dark:text-gray-400 hidden lg:block">
                  Télémédecine & Innovation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-12 xl:mx-16">
              <div className="flex items-center space-x-8 xl:space-x-12">
                {/* Solutions Dropdown */}
                <div 
                  className="relative group"
                  onMouseEnter={() => setShowSolutions(true)}
                  onMouseLeave={() => setShowSolutions(false)}
                >
                  <button className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300 py-2 px-3 xl:text-lg">
                    Nos solutions
                    <ChevronDown className="w-4 h-4 xl:w-5 xl:h-5 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  
                  <AnimatePresence>
                    {showSolutions && (
                      <motion.div
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] xl:w-[700px] glass backdrop-blur-xl rounded-2xl xl:rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-6 xl:p-8">
                          <div className="grid grid-cols-2 gap-4 xl:gap-6">
                            {solutions.map((solution, index) => (
                              <Link
                                key={index}
                                to={solution.href}
                                className="flex items-center gap-4 p-4 xl:p-6 rounded-xl xl:rounded-2xl hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300 group/item"
                              >
                                <div className={`w-12 h-12 xl:w-14 xl:h-14 bg-gradient-to-br ${solution.color} rounded-xl xl:rounded-2xl flex items-center justify-center text-white group-hover/item:scale-110 transition-transform duration-300 shadow-lg`}>
                                  <FontAwesomeIcon icon={solution.icon} className="text-lg xl:text-xl" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm xl:text-base mb-1 group-hover/item:text-primary-600 transition-colors">
                                    {solution.title}
                                  </h4>
                                  <p className="text-xs xl:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                    {solution.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <NavLink href="/#about">À propos</NavLink>
                <NavLink href="/#projects">Réalisations</NavLink>
                <NavLink href="/#blog">Actualités</NavLink>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-shrink-0">
              <ThemeToggle />
              <motion.a
                href="/#contact"
                className="px-6 py-3 xl:px-8 xl:py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl xl:rounded-2xl font-semibold xl:text-lg hover:shadow-glow transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-4 h-4 xl:w-5 xl:h-5" />
                Contact
              </motion.a>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center space-x-3">
              <ThemeToggle />
              <motion.button
                className="p-2 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-primary-500"
                onClick={toggleMenu}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden glass backdrop-blur-xl border-t border-white/10"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="container mx-auto px-4 py-6 max-h-[80vh] overflow-y-auto">
                {/* Solutions Section */}
                <motion.div variants={itemVariants} className="mb-6">
                  <button
                    onClick={toggleMobileSolutions}
                    className="flex items-center justify-between w-full text-left py-3 px-4 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white">
                        <FontAwesomeIcon icon={faStethoscope} className="text-sm" />
                      </div>
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">Nos solutions</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${showMobileSolutions ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {showMobileSolutions && (
                      <motion.div
                        className="mt-3 ml-4 space-y-2"
                        variants={solutionsVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        {solutions.map((solution, index) => (
                          <motion.div key={index} variants={itemVariants}>
                            <Link
                              to={solution.href}
                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300"
                              onClick={toggleMenu}
                            >
                              <div className={`w-10 h-10 bg-gradient-to-br ${solution.color} rounded-lg flex items-center justify-center text-white shadow-md`}>
                                <FontAwesomeIcon icon={solution.icon} className="text-sm" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                                  {solution.title}
                                </h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
                                  {solution.description}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Other Navigation Links */}
                <motion.div variants={itemVariants} className="space-y-2 mb-6">
                  <MobileNavLink href="/#about" onClick={toggleMenu}>
                    À propos
                  </MobileNavLink>
                  <MobileNavLink href="/#projects" onClick={toggleMenu}>
                    Réalisations
                  </MobileNavLink>
                  <MobileNavLink href="/#blog" onClick={toggleMenu}>
                    Actualités
                  </MobileNavLink>
                </motion.div>

                {/* Contact Button */}
                <motion.div variants={itemVariants} className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
                  <a
                    href="/#contact"
                    className="block w-full text-center py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold text-lg shadow-lg"
                    onClick={toggleMenu}
                  >
                    Nous contacter
                  </a>
                </motion.div>

                {/* Mobile Contact Info */}
                <motion.div variants={itemVariants} className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10">
                      <Phone className="w-4 h-4 text-primary-600" />
                      <span>+33 7 53 45 82 24</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10">
                      <Mail className="w-4 h-4 text-primary-600" />
                      <span>contact@digihealth4africa.fr</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      className="relative text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300 group py-2 px-3 xl:text-lg"
      whileHover={{ y: -2 }}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
    </motion.a>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, onClick, children }) => {
  return (
    <a
      href={href}
      className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-lg rounded-xl hover:bg-white/10 transition-all duration-300"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;