import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

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
        staggerChildren: 0.1,
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

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass backdrop-blur-xl py-2 shadow-lg'
          : 'bg-transparent py-4'
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Heart className="h-8 w-8 text-primary-600" />
              <div className="absolute inset-0 h-8 w-8 bg-primary-600/20 rounded-full blur-md group-hover:bg-primary-600/40 transition-colors"></div>
            </motion.div>
            <span className="text-xl font-bold text-modern">
              <span className="gradient-text">DIGI</span>
              <span className="gradient-text-accent">HEALTH</span>
              <span className="gradient-text">4</span>
              <span className="gradient-text-accent">AFRICA</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#solutions">Solutions</NavLink>
            <NavLink href="#about">À propos</NavLink>
            <NavLink href="#projects">Réalisations</NavLink>
            <NavLink href="#blog">Actualités</NavLink>
            <motion.a
              href="#contact"
              className="btn-modern px-6 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-medium hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg glass focus:outline-none"
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
                  <X className="h-6 w-6 text-gray-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-gray-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden glass backdrop-blur-xl border-t border-white/10"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              <motion.div variants={itemVariants}>
                <MobileNavLink href="#solutions" onClick={toggleMenu}>
                  Solutions
                </MobileNavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <MobileNavLink href="#about" onClick={toggleMenu}>
                  À propos
                </MobileNavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <MobileNavLink href="#projects" onClick={toggleMenu}>
                  Réalisations
                </MobileNavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <MobileNavLink href="#blog" onClick={toggleMenu}>
                  Actualités
                </MobileNavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <a
                  href="#contact"
                  className="block w-full text-center py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-medium"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
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
      className="relative text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 group"
      whileHover={{ y: -2 }}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 group-hover:w-full transition-all duration-300"></span>
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
      className="block py-3 px-4 text-gray-700 hover:text-primary-600 font-medium text-lg rounded-lg hover:bg-white/10 transition-all duration-300"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;