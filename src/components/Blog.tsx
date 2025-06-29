import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faNewspaper, 
  faStethoscope, 
  faGlobe, 
  faGraduationCap, 
  faHandshake,
  faHeartbeat,
  faUserMd
} from '@fortawesome/free-solid-svg-icons';
import newTechRevolutionImage from '../images/iamge_borne _telemedecine.png';
import contenerSaveLiveImage from '../images/article-contenure_sauve_des_vies.png';
import tchadMissionImage from '../images/article-mission_tchad.png';
import santeImage from '../images/article_impact_santé_maternelle.png';
import remoteHealthImage from '../images/article_education_distance.png';
import clinicHomeImage from '../images/clinic-home.jpg';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = [
    { name: 'Tous', icon: faNewspaper },
    { name: 'Télémédecine', icon: faStethoscope },
    { name: 'Missions', icon: faGlobe },
    { name: 'Formation', icon: faGraduationCap },
    { name: 'Partenariats', icon: faHandshake }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "La télémédecine : une révolution pour l'Afrique rurale",
      excerpt: "Comment les nouvelles technologies permettent de désenclaver médicalement les zones rurales africaines et d'améliorer l'accès aux soins spécialisés...",
      image: newTechRevolutionImage,
      date: "15 mai 2025",
      author: "Dr. Aminata Diallo",
      category: "Télémédecine",
      readTime: "5 min",
      featured: true
    },
    {
      id: 2,
      title: "Comment nos conteneurs sauvent des vies dans les zones de conflit",
      excerpt: "Retour sur le déploiement de conteneurs médicalisés dans l'est de la RDC et leur impact sur les populations déplacées...",
      image: contenerSaveLiveImage,
      date: "3 avril 2025",
      author: "Jean Ndongo",
      category: "Missions",
      readTime: "7 min",
      featured: false
    },
    {
      id: 3,
      title: "Retour sur notre mission au Tchad",
      excerpt: "Formation des agents de santé locaux et installation de 3 mallettes de télémédecine dans la région du Lac Tchad...",
      image: tchadMissionImage,
      date: "18 mars 2025",
      author: "Martine Koné",
      category: "Missions",
      readTime: "6 min",
      featured: false
    },
    {
      id: 4,
      title: "L'impact de la télémédecine sur la santé maternelle en Afrique",
      excerpt: "Comment nos solutions numériques améliorent le suivi des grossesses et réduisent la mortalité maternelle dans les zones rurales...",
      image: santeImage,
      date: "28 février 2025",
      author: "Dr. Fatoumata Sow",
      category: "Télémédecine",
      readTime: "8 min",
      featured: true
    },
    {
      id: 5,
      title: "Lancement de notre programme d'éducation médicale à distance",
      excerpt: "Présentation de notre nouvelle plateforme d'apprentissage en ligne pour les professionnels de santé africains...",
      image: remoteHealthImage,
      date: "15 février 2025",
      author: "Dr. Moussa Diop",
      category: "Formation",
      readTime: "4 min",
      featured: false
    },
    {
      id: 6,
      title: "Notre partenariat avec l'OMS pour la santé numérique en Afrique",
      excerpt: "Détails de notre collaboration avec l'Organisation Mondiale de la Santé pour améliorer l'accès aux soins dans les pays africains...",
      image: clinicHomeImage,
      date: "31 janvier 2025",
      author: "Dr. Aminata Diallo",
      category: "Partenariats",
      readTime: "6 min",
      featured: true
    }
  ];

  const filteredPosts = selectedCategory === 'Tous' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="blog" className="py-20 relative overflow-hidden section-hover-animation">
      {/* Motifs africains authentiques */}
      <div className="absolute inset-0 kente-pattern"></div>
      <div className="absolute inset-0 ndop-pattern" style={{ animationDelay: '15s' }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-gray-50/90 to-white/95 dark:from-gray-900/95 dark:via-gray-800/90 dark:to-gray-900/95"></div>

      {/* Floating Medical Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-primary-200"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FontAwesomeIcon icon={faNewspaper} className="text-4xl opacity-30" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-10 text-accent-200"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <FontAwesomeIcon icon={faHeartbeat} className="text-3xl opacity-30" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6 shimmer-effect"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FontAwesomeIcon icon={faNewspaper} className="fa-pulse-custom" />
            Blog & Actualités
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-modern">
            <span className="gradient-text">Actualités</span>
          </h2>
          
          <p className="text-xl text-gray-800 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium">
            Découvrez nos dernières actualités et articles sur la santé digitale en Afrique.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-glow'
                  : 'glass text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-800/70'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon 
                icon={category.icon} 
                className={selectedCategory === category.name ? 'fa-pulse-custom' : ''} 
              />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'Tous' && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl relative section-hover-animation">
              {/* African pattern overlay */}
              <div className="absolute inset-0 bogolan-pattern opacity-20"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
                <div className="relative group overflow-hidden">
                  <motion.img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover min-h-[400px]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-sm font-medium">
                    <FontAwesomeIcon icon={faUserMd} className="fa-heartbeat-custom" />
                    Article vedette
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 gradient-text">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-200 mb-8 text-lg leading-relaxed font-medium">
                    {featuredPost.excerpt}
                  </p>
                  
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                    whileHover={{ x: 4 }}
                  >
                    Lire l'article complet
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-hover-lift"
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="btn-modern inline-flex items-center gap-3 px-8 py-4 glass rounded-2xl font-semibold text-lg hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faNewspaper} className="fa-bounce-custom" />
            Voir tous les articles
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  featured: boolean;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Télémédecine': return 'from-blue-500 to-purple-600';
      case 'Missions': return 'from-green-500 to-teal-600';
      case 'Formation': return 'from-orange-500 to-red-500';
      case 'Partenariats': return 'from-pink-500 to-rose-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Télémédecine': return faStethoscope;
      case 'Missions': return faGlobe;
      case 'Formation': return faGraduationCap;
      case 'Partenariats': return faHandshake;
      default: return faNewspaper;
    }
  };

  return (
    <motion.article
      className="group glass rounded-3xl overflow-hidden backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 relative section-hover-animation"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* African pattern overlay */}
      <div className="absolute inset-0 mudcloth-pattern opacity-10"></div>
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} text-white rounded-full text-sm font-medium`}>
          <FontAwesomeIcon icon={getCategoryIcon(post.category)} className="fa-pulse-custom" />
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:gradient-text transition-all duration-300 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed line-clamp-3 font-medium">
          {post.excerpt}
        </p>

        {/* Author & CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <User className="w-3 h-3" />
            <span>{post.author}</span>
          </div>
          
          <motion.a
            href="#"
            className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center gap-1 group/link"
            whileHover={{ x: 2 }}
          >
            Lire
            <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};

export default Blog;