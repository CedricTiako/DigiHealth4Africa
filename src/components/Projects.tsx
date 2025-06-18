import React, { useRef } from 'react';
import { CheckCircle, ArrowRight, Users, MapPin, Calendar } from 'lucide-react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faProjectDiagram, 
  faStethoscope, 
  faGraduationCap, 
  faHandshake,
  faHeartbeat,
  faUserMd,
  faHospital,
  faTrophy
} from '@fortawesome/free-solid-svg-icons';
import formationImage from '../images/image_40_agents.png';
import nordMissionImage from '../images/mission_nord_cameroun.jpeg';
import partenartImage from '../images/partenart.png';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const projects = [
    {
      id: 1,
      title: "Mission pilote dans le Nord-Cameroun",
      description: "Déploiement de mallettes de télémédecine dans 5 centres de santé ruraux, formation des agents de santé et mise en place d'un réseau de télé-expertise.",
      image: nordMissionImage,
      stats: [
        { label: "Centres équipés", value: "5", icon: <MapPin className="w-4 h-4" /> },
        { label: "Patients bénéficiaires", value: "1200+", icon: <Users className="w-4 h-4" /> },
        { label: "Téléconsultations", value: "450", icon: <Calendar className="w-4 h-4" /> }
      ],
      color: "from-primary-500 to-primary-600",
      faIcon: faStethoscope
    },
    {
      id: 2,
      title: "Formation de 40 agents de santé",
      description: "Programme de formation à l'utilisation des outils de télémédecine pour les professionnels de santé locaux, intégrant une composante de suivi et de mentorat.",
      image: formationImage,
      stats: [
        { label: "Agents formés", value: "40", icon: <Users className="w-4 h-4" /> },
        { label: "Heures de formation", value: "120", icon: <Calendar className="w-4 h-4" /> },
        { label: "Taux de satisfaction", value: "92%", icon: <CheckCircle className="w-4 h-4" /> }
      ],
      color: "from-green-500 to-green-600",
      faIcon: faGraduationCap
    },
    {
      id: 3,
      title: "Partenariat ONG pour 10 centres de santé ruraux",
      description: "Collaboration avec une ONG internationale pour équiper des centres de santé en zones rurales avec des solutions de télémédecine adaptées.",
      image: partenartImage,
      stats: [
        { label: "Centres équipés", value: "10", icon: <MapPin className="w-4 h-4" /> },
        { label: "Population couverte", value: "25 000", icon: <Users className="w-4 h-4" /> },
        { label: "Médecins à distance", value: "12", icon: <Users className="w-4 h-4" /> }
      ],
      color: "from-accent-500 to-accent-600",
      faIcon: faHandshake
    }
  ];

  const achievements = [
    {
      text: "Plus de 3000 patients pris en charge grâce à la télémédecine",
      color: "from-primary-500 to-primary-600"
    },
    {
      text: "15 centres de santé équipés en solutions digitales",
      color: "from-green-500 to-green-600"
    },
    {
      text: "Réduction de 75% des évacuations sanitaires non-nécessaires",
      color: "from-accent-500 to-accent-600"
    },
    {
      text: "Formation de 80+ professionnels de santé aux outils numériques",
      color: "from-primary-500 to-primary-600"
    },
    {
      text: "Partenariats avec 5 ministères de la santé en Afrique",
      color: "from-green-500 to-green-600"
    },
    {
      text: "Réseau de 30+ médecins spécialistes pour la télé-expertise",
      color: "from-accent-500 to-accent-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section id="projects" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 african-pattern-2 opacity-20"></div>

      {/* Animated Background */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-primary-200/20 to-accent-200/20 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-accent-200/20 to-green-200/20 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
      />

      {/* Floating Medical Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-32 right-16 text-primary-200"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FontAwesomeIcon icon={faProjectDiagram} className="text-5xl opacity-20" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-16 text-accent-200"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <FontAwesomeIcon icon={faHospital} className="text-4xl opacity-20" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 text-sm font-medium mb-6 border border-primary-200"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FontAwesomeIcon icon={faTrophy} className="animate-pulse" />
            Nos Succès
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-green-600 bg-clip-text text-transparent">
              Nos réalisations
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Des projets concrets qui transforment l'accès aux soins et améliorent la vie des populations.
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="space-y-20 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image */}
              <div className="lg:w-1/2 relative group">
                <motion.div
                  className="relative overflow-hidden rounded-3xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating Badge */}
                  <motion.div
                    className={`absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-full text-sm font-medium shadow-lg`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <FontAwesomeIcon icon={project.faIcon} className="animate-pulse" />
                    Projet #{project.id}
                  </motion.div>
                </motion.div>

                {/* Decorative Elements */}
                <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${project.color} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br ${project.color} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 space-y-8">
                <div className="glass rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden border border-white/20">
                  {/* African pattern overlay */}
                  <div className="absolute inset-0 african-pattern-5 opacity-20"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <FontAwesomeIcon icon={project.faIcon} className={`text-2xl text-primary-600 animate-pulse`} />
                      <h3 className="text-2xl lg:text-3xl font-bold">
                        <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                          {project.title}
                        </span>
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {project.stats.map((stat, i) => (
                        <motion.div
                          key={i}
                          className="text-center p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm relative overflow-hidden border border-white/20"
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="absolute inset-0 african-pattern-1 opacity-10"></div>
                          <div className="relative z-10">
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <div className={`p-2 bg-gradient-to-r ${project.color} rounded-lg text-white`}>
                                {stat.icon}
                              </div>
                            </div>
                            <p className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-1">{stat.value}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          className="glass rounded-3xl p-8 lg:p-12 backdrop-blur-xl relative overflow-hidden border border-white/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 african-pattern-3 opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-50/30 via-white/20 to-accent-50/30 dark:from-primary-900/20 dark:via-gray-800/20 dark:to-accent-900/20"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FontAwesomeIcon icon={faHeartbeat} className="text-2xl text-primary-600 animate-pulse" />
                <h3 className="text-2xl lg:text-3xl font-bold">
                  <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    Nos principaux résultats
                  </span>
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">L'impact concret de nos actions sur le terrain</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="group flex items-start gap-4 p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 relative overflow-hidden border border-white/20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <div className="absolute inset-0 african-pattern-4 opacity-10"></div>
                  <motion.div
                    className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center relative z-10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-5 h-5 text-white" />
                  </motion.div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors relative z-10">
                    {achievement.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-2xl font-semibold text-lg shadow-glow hover:shadow-glow-accent transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faUserMd} className="animate-pulse" />
                Rejoignez notre mission
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;