import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDesktop, 
  faStethoscope, 
  faHeartbeat, 
  faUserMd,
  faCalendarCheck,
  faCheckCircle,
  faWifi,
  faBatteryFull,
  faShieldAlt,
  faTabletAlt,
  faCamera,
  faThermometerHalf
} from '@fortawesome/free-solid-svg-icons';
import { ArrowLeft, Monitor, Wifi, Shield, Users, Settings, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import SolutionForm from '../../components/SolutionForm';

const BornesPage: React.FC = () => {
  const [showForm, setShowForm] = React.useState(false);

  const formFields = [
    { name: "establishmentName", label: "Nom de l'établissement", type: "text" },
    { name: "location", label: "Localisation", type: "text" },
    { name: "terminalType", label: "Type de borne souhaitée", type: "text" },
    { name: "consultationNeeds", label: "Besoins en téléconsultation", type: "textarea" },
    { name: "hasStableInternet", label: "Accès Internet stable ?", type: "select", options: ["Oui", "Non", "Incertain"] },
    { name: "contactPerson", label: "Interlocuteur principal", type: "text" },
    { name: "message", label: "Message libre", type: "textarea" },
  ];

  const standardComponents = [
    {
      name: "Tablette ou écran tactile avec logiciel de téléconsultation",
      icon: faTabletAlt
    },
    {
      name: "Caméra HD orientable pour télé-examen",
      icon: faCamera
    },
    {
      name: "Stéthoscope numérique",
      icon: faStethoscope
    },
    {
      name: "Tensiomètre connecté",
      icon: faHeartbeat
    },
    {
      name: "Oxymètre de pouls",
      icon: faUserMd
    },
    {
      name: "Thermomètre infrarouge",
      icon: faThermometerHalf
    },
    {
      name: "ECG portable",
      icon: faStethoscope
    },
    {
      name: "Otoscope et dermatoscope numériques",
      icon: faUserMd
    },
    {
      name: "Glucomètre et balance IMC",
      icon: faHeartbeat
    },
    {
      name: "Casque audio & micro pour confidentialité",
      icon: faStethoscope
    },
    {
      name: "Option : imprimante intégrée pour ordonnances",
      icon: faUserMd
    }
  ];

  const additionalModules = [
    "Module gynécologie (sonde d'échographie, spéculum connecté)",
    "Module ORL / pédiatrie",
    "Module dentaire basique",
    "Analyse rapide (Hb, glycémie, protéines urinaires)"
  ];

  const features = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Réalisation d'un examen clinique complet assisté",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Connexion 3G/4G/5G ou satellite selon la zone",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Stockage sécurisé des données médicales",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Accès en temps réel à un médecin généraliste ou spécialiste",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Historique et suivi des patients intégré",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Tableaux de bord pour les décideurs sanitaires",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const applications = [
    {
      title: "Santé maternelle & infantile",
      icon: "🧑‍🍼",
      items: [
        "Suivi de grossesse à distance",
        "Téléconsultation postnatale",
        "Dépistage du diabète gestationnel ou de l'anémie"
      ]
    },
    {
      title: "Cardiologie / Hypertension",
      icon: "❤️",
      items: [
        "Télé-ECG en cas de douleur thoracique",
        "Suivi des patients hypertendus isolés",
        "Éducation thérapeutique à distance"
      ]
    },
    {
      title: "Dermatologie / ORL",
      icon: "🧑‍⚕️",
      items: [
        "Envoi d'images HD pour télédiagnostic",
        "Suivi des plaies chroniques, lésions cutanées",
        "Consultation ORL pour enfants dans les zones rurales"
      ]
    },
    {
      title: "Pneumologie / Covid-19",
      icon: "🫁",
      items: [
        "Évaluation respiratoire à distance",
        "Suivi post-infection",
        "Détection de détresse respiratoire aiguë"
      ]
    },
    {
      title: "Santé scolaire / communautaire",
      icon: "🎓",
      items: [
        "Dépistage régulier dans les écoles",
        "Réduction de l'absentéisme scolaire lié à l'accès aux soins",
        "Campagnes de vaccination ou de dépistage"
      ]
    }
  ];

  const specialUses = [
    "Sites miniers ou industriels éloignés",
    "Camps de réfugiés / zones post-catastrophes",
    "Unités mobiles de l'armée ou de la protection civile",
    "Prisons ou centres fermés"
  ];

  const advantages = [
    "Fabriquées pour durer dans des environnements difficiles",
    "Configurables selon vos spécialités et priorités locales",
    "Faciles à utiliser par un personnel formé en 3 jours",
    "Possibilité de maintenance à distance et mises à jour logicielles",
    "Compatibles avec les politiques de santé digitale nationales"
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
                <FontAwesomeIcon icon={faDesktop} className="text-2xl" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Bornes de télémédecine
                </span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              « Connecter les centres de santé isolés à l'expertise médicale, en un clic »
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
                <FontAwesomeIcon icon={faDesktop} className="text-primary-600" />
                Qu'est-ce qu'une borne de télémédecine ?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Les bornes de télémédecine DIGIHEALTH4AFRICA sont des stations médicales fixes ou mobiles, 
                équipées de capteurs médicaux interconnectés, permettant à un agent de santé de réaliser des 
                examens cliniques complets et de les transmettre en temps réel à un médecin distant, pour 
                téléconsultation, télédiagnostic ou télé-expertise.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Installées dans des centres de santé, dispensaires, maternités rurales, prisons, écoles ou 
                sites miniers, ces bornes transforment un lieu isolé en point d'accès avancé à la médecine spécialisée.
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

        {/* Components */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Composants et options de la borne
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Standard Configuration */}
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Configuration standard :</h3>
              <div className="space-y-3">
                {standardComponents.map((component, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-gray-800/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <FontAwesomeIcon icon={component.icon} className="text-primary-600" />
                    <span className="text-gray-700 dark:text-gray-300">{component.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Modules */}
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Modules additionnels disponibles :</h3>
              <div className="space-y-3">
                {additionalModules.map((module, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/50 dark:bg-gray-800/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{module}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
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
        </motion.section>

        {/* Features */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Fonctionnalités principales
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 hover:border-primary-300 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                  {feature.icon}
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{feature.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Applications */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Domaines d'application prioritaires
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{app.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{app.title}</h3>
                </div>
                <ul className="space-y-2">
                  {app.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Special Uses */}
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
                  Utilisation en zones sensibles / projets spéciaux
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specialUses.map((use, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{use}</span>
                  </motion.div>
                ))}
              </div>
            </div>
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
              Pourquoi choisir nos bornes ?
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
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{advantage}</span>
              </motion.div>
            ))}
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
                  Vous avez un projet ? Planifions une étude technique.
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Remplissez notre formulaire pour recevoir une proposition personnalisée : type de borne, 
                spécialités visées, conditions d'installation, contraintes locales.
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
                    <FontAwesomeIcon icon={faDesktop} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bornes de télémédecine</h3>
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
                solutionTitle="Bornes de télémédecine"
                onClose={() => setShowForm(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BornesPage;