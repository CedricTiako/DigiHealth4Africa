import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHospital, 
  faStethoscope, 
  faHeartbeat, 
  faUserMd,
  faCalendarCheck,
  faCheckCircle,
  faFlask,
  faBed,
  faAmbulance,
  faSatellite,
  faWrench,
  faSnowflake,
  faSolarPanel,
  faDroplet,
  faShieldAlt,
  faWifi,
  faCamera,
  faTabletAlt,
  faBriefcaseMedical
} from '@fortawesome/free-solid-svg-icons';
import { ArrowLeft, Building, Users, Zap, Wifi, Shield, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import SolutionForm from '../../components/SolutionForm';

const ConteneurPage: React.FC = () => {
  const [showForm, setShowForm] = React.useState(false);

  const formFields = [
    { name: "organization", label: "Organisation demandeuse", type: "text" },
    { name: "containerType", label: "Type de conteneur", type: "text" },
    { name: "area", label: "Zone à équiper", type: "text" },
    { name: "containerCount", label: "Nombre de conteneurs", type: "number" },
    { name: "urgency", label: "Urgence du besoin", type: "select", options: ["Immédiate", "Dans les 3 mois", "Dans les 6 mois", "Projet à long terme"] },
    { name: "nameAndRole", label: "Nom et fonction", type: "text" },
    { name: "contactDetails", label: "Coordonnées complètes", type: "textarea" },
  ];

  const containerTypes = [
    {
      type: "Consultation médicale",
      functions: "Médecine générale, suivi de pathologies chroniques",
      icon: faStethoscope,
      color: "from-blue-500 to-blue-600"
    },
    {
      type: "Santé maternelle",
      functions: "Suivi de grossesse, accouchement, soins postnataux",
      icon: faHeartbeat,
      color: "from-pink-500 to-pink-600"
    },
    {
      type: "Laboratoire mobile",
      functions: "Tests de base : glycémie, Hb, urines, dépistages VIH/Palud",
      icon: faFlask,
      color: "from-green-500 to-green-600"
    },
    {
      type: "Triage et urgences",
      functions: "Stabilisation avant transfert, petite chirurgie",
      icon: faAmbulance,
      color: "from-red-500 to-red-600"
    },
    {
      type: "Hospitalisation courte",
      functions: "1 à 4 lits d'observation, perfusion, monitoring",
      icon: faBed,
      color: "from-purple-500 to-purple-600"
    },
    {
      type: "Téléconsultation",
      functions: "Équipé pour connecter à distance avec médecins experts",
      icon: faSatellite,
      color: "from-teal-500 to-teal-600"
    }
  ];

  const technicalFeatures = [
    {
      feature: "Structure en acier renforcé, isolée thermiquement",
      icon: faWrench
    },
    {
      feature: "Climatisation ou ventilation naturelle selon projet",
      icon: faSnowflake
    },
    {
      feature: "Système électrique autonome (panneaux solaires + batteries)",
      icon: faSolarPanel
    },
    {
      feature: "Réseau d'eau propre et eaux usées avec pompe",
      icon: faDroplet
    },
    {
      feature: "Sol antidérapant, parois lavables, éclairage médical",
      icon: faShieldAlt
    },
    {
      feature: "Lavabo avec distributeur sans contact",
      icon: faDroplet
    },
    {
      feature: "Connexion 4G/5G/satellite",
      icon: faWifi
    },
    {
      feature: "Caméra HD + tablette pour télémédecine intégrée",
      icon: faCamera
    }
  ];

  const telemedicineFeatures = [
    {
      text: "Consultation assistée à distance (généraliste ou spécialiste)",
      icon: faStethoscope
    },
    {
      text: "Stockage numérique sécurisé des données",
      icon: faShieldAlt
    },
    {
      text: "Imagerie numérique (photo/vidéo)",
      icon: faCamera
    },
    {
      text: "Système de suivi patient intégré",
      icon: faTabletAlt
    },
    {
      text: "Connexion aux plateformes nationales de santé digitale",
      icon: faWifi
    }
  ];

  const useCases = [
    {
      title: "Zones rurales sans hôpitaux",
      icon: "👩‍⚕️",
      items: [
        {
          text: "Consultation médicale de proximité",
          icon: faStethoscope
        },
        {
          text: "Suivi des maladies chroniques",
          icon: faUserMd
        },
        {
          text: "Soins maternels et vaccinaux",
          icon: faHeartbeat
        }
      ]
    },
    {
      title: "Zones de crise humanitaire",
      icon: "🆘",
      items: [
        {
          text: "Interventions d'urgence dans les camps de réfugiés",
          icon: faAmbulance
        },
        {
          text: "Réponse post-catastrophe naturelle",
          icon: faBriefcaseMedical
        },
        {
          text: "Santé dans les conflits armés",
          icon: faShieldAlt
        }
      ]
    },
    {
      title: "Déploiement militaire ou industriel",
      icon: "🚐",
      items: [
        {
          text: "Camps militaires, bases de l'ONU",
          icon: faUserMd
        },
        {
          text: "Sites miniers, chantiers pétroliers",
          icon: faStethoscope
        },
        {
          text: "Projets de santé d'entreprise",
          icon: faBriefcaseMedical
        }
      ]
    },
    {
      title: "Projets de santé publique",
      icon: "🏥",
      items: [
        {
          text: "Centres de vaccination ou dépistage itinérants",
          icon: faFlask
        },
        {
          text: "Programmes santé scolaire",
          icon: faUserMd
        },
        {
          text: "Complément à une clinique mobile",
          icon: faHospital
        }
      ]
    }
  ];

  const advantages = [
    {
      text: "Prêts à l'emploi : installation rapide en 24 à 72h",
      icon: faWrench
    },
    {
      text: "Zéro construction : pas besoin d'infrastructure existante",
      icon: faHospital
    },
    {
      text: "Déplaçables : peuvent être réaffectés à d'autres régions",
      icon: faAmbulance
    },
    {
      text: "Équipés pour les normes OMS / MSF",
      icon: faShieldAlt
    },
    {
      text: "Personnalisables selon besoins médicaux et environnement",
      icon: faStethoscope
    }
  ];

  const projects = [
    {
      location: "Nord Cameroun",
      description: "Conteneur maternité déployé dans un village sans poste de santé",
      icon: "🇨🇲"
    },
    {
      location: "ONG internationale",
      description: "Module de triage + laboratoire dans un camp de réfugiés tchadiens",
      icon: "🏕️"
    },
    {
      location: "Partenariat public-privé",
      description: "Clinique mobile installée dans une zone minière au Sénégal",
      icon: "🇸🇳"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 african-pattern-1 opacity-20"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            className="flex items-center gap-2 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
          </motion.div>

          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <FontAwesomeIcon icon={faHospital} className="text-2xl" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Conteneurs santé médicalisés
                </span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              « Des hôpitaux mobiles, prêts à l'emploi, pour soigner là où il n'y a rien »
            </p>
            <motion.button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold text-lg shadow-glow hover:shadow-glow-accent transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faCalendarCheck} className="animate-pulse" />
              Prendre Rendez-vous
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 pb-20">
        {/* Description */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass rounded-3xl p-8 lg:p-12 backdrop-blur-xl border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 african-pattern-2 opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faHospital} className="text-primary-600" />
                Qu'est-ce qu'un conteneur santé DIGIHEALTH4AFRICA ?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Les conteneurs santé sont des unités médicalisées, aménagées à partir de conteneurs maritimes 
                ISO standards (20 ou 40 pieds), entièrement équipés et prêts à être déployés en quelques heures, 
                sans besoin de construction permanente.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Ils permettent de créer un centre de soins autonome, mobile et résilient dans les zones rurales, 
                les camps, ou les zones de crise sanitaire.
              </p>
              <div className="mt-8">
                <motion.button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={faCalendarCheck} />
                  Prendre Rendez-vous
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Container Types */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Types de conteneurs disponibles
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Chaque module peut fonctionner seul ou en combinaison modulaire (hôpital de campagne).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {containerTypes.map((container, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 hover:border-primary-300 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${container.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                  <FontAwesomeIcon icon={container.icon} className="text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{container.type}</h3>
                <p className="text-gray-600 dark:text-gray-300">{container.functions}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technical Features */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass rounded-3xl p-8 lg:p-12 backdrop-blur-xl border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 african-pattern-3 opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Caractéristiques techniques standards
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {technicalFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <FontAwesomeIcon icon={feature.icon} className="text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature.feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Telemedicine Features */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Fonctionnalités de télémédecine intégrées
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {telemedicineFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-6 glass rounded-2xl backdrop-blur-xl border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FontAwesomeIcon icon={feature.icon} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Use Cases */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Domaines d'utilisation prioritaires
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{useCase.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{useCase.title}</h3>
                </div>
                <ul className="space-y-2">
                  {useCase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <FontAwesomeIcon icon={item.icon} className="text-primary-500 mt-1 flex-shrink-0" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Advantages */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Avantages pour les partenaires et décideurs
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-6 glass rounded-2xl backdrop-blur-xl border border-white/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FontAwesomeIcon icon={advantage.icon} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{advantage.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass rounded-3xl p-8 lg:p-12 backdrop-blur-xl border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 african-pattern-4 opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Exemples de projets réalisés
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-4xl mb-4">{project.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.location}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass rounded-3xl p-8 lg:p-12 backdrop-blur-xl border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-50/30 via-white/20 to-accent-50/30 dark:from-primary-900/20 dark:via-gray-800/20 dark:to-accent-900/20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Besoin d'un module santé ? Échangeons sur votre projet.
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Contactez-nous pour discuter de vos besoins spécifiques et recevoir une proposition 
                personnalisée pour votre projet de conteneur santé.
              </p>
              <motion.button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold text-lg shadow-glow hover:shadow-glow-accent transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faCalendarCheck} className="animate-pulse" />
                Prendre Rendez-vous
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-6 text-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faHospital} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Conteneurs santé médicalisés</h3>
                    <p className="text-white/80">Prendre rendez-vous</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <SolutionForm
                fields={formFields}
                solutionTitle="Conteneurs santé médicalisés"
                onClose={() => setShowForm(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConteneurPage;