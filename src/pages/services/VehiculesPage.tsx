import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAmbulance, 
  faStethoscope, 
  faHeartbeat, 
  faUserMd,
  faCalendarCheck,
  faCheckCircle,
  faTruck,
  faFlask,
  faFemale,
  faSatellite,
  faTabletAlt,
  faCamera,
  faThermometerHalf,
  faWeight,
  faDroplet,
  faSolarPanel,
  faSnowflake,
  faLightbulb,
  faBriefcaseMedical,
  faWifi
} from '@fortawesome/free-solid-svg-icons';
import { ArrowLeft, Truck, Users, Heart, TestTube, Baby, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SolutionForm from '../../components/SolutionForm';

const VehiculesPage: React.FC = () => {
  const [showForm, setShowForm] = React.useState(false);

  const formFields = [
    { name: "structure", label: "Structure concernée", type: "text" },
    { name: "vehicleType", label: "Type de véhicule recherché", type: "text" },
    { name: "estimatedQuantity", label: "Quantité estimée", type: "number" },
    { name: "budget", label: "Budget indicatif", type: "text" },
    { name: "financingMethod", label: "Mode de financement", type: "text" },
    { name: "projectLocation", label: "Localisation du projet", type: "text" },
    { name: "contact", label: "Contact", type: "text" },
  ];

  const vehicleTypes = [
    {
      category: "Ambulance de transfert",
      description: "Véhicule équipé pour le transport médicalisé",
      usage: "Évacuation vers hôpital de référence",
      icon: faAmbulance,
      color: "from-red-500 to-red-600"
    },
    {
      category: "Unité mobile polyvalente",
      description: "Véhicule tout-terrain équipé pour consultation, dépistage, soins légers",
      usage: "Campagnes médicales, zones rurales",
      icon: faTruck,
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Unité de dépistage mobile",
      description: "Intérieur optimisé pour tests VIH, diabète, HTA, etc.",
      usage: "Santé communautaire, ONG, campagnes",
      icon: faFlask,
      color: "from-green-500 to-green-600"
    },
    {
      category: "Véhicule de santé maternelle",
      description: "Module pour suivi de grossesse, accouchements simples, échographie",
      usage: "Santé reproductive en zone isolée",
      icon: faFemale,
      color: "from-pink-500 to-pink-600"
    },
    {
      category: "Laboratoire mobile",
      description: "Laboratoire embarqué pour analyses biologiques rapides",
      usage: "Zones reculées, urgences épidémiologiques",
      icon: faFlask,
      color: "from-purple-500 to-purple-600"
    },
    {
      category: "Téléconsultation mobile",
      description: "Véhicule connecté pour consultation assistée à distance",
      usage: "Rapprocher le spécialiste du patient rural",
      icon: faSatellite,
      color: "from-teal-500 to-teal-600"
    }
  ];

  const equipment = [
    {
      item: "Tablette / ordinateur avec connexion 4G/5G ou satellite",
      icon: faTabletAlt
    },
    {
      item: "Caméra HD pour téléconsultation",
      icon: faCamera
    },
    {
      item: "ECG portable",
      icon: faHeartbeat
    },
    {
      item: "Tensiomètre / oxymètre / thermomètre / glucomètre",
      icon: faStethoscope
    },
    {
      item: "Balance + IMC",
      icon: faWeight
    },
    {
      item: "Stéthoscope numérique",
      icon: faStethoscope
    },
    {
      item: "Otoscope / dermatoscope HD",
      icon: faCamera
    },
    {
      item: "Lit d'examen rabattable ou civière",
      icon: faUserMd
    },
    {
      item: "Groupe électrogène ou panneaux solaires",
      icon: faSolarPanel
    },
    {
      item: "Climatisation / ventilation",
      icon: faSnowflake
    },
    {
      item: "Éclairage LED médical",
      icon: faLightbulb
    }
  ];

  const applications = [
    {
      title: "Santé maternelle et infantile",
      icon: "👩‍👦",
      items: [
        {
          text: "Suivi prénatal itinérant",
          icon: faHeartbeat
        },
        {
          text: "Accouchement assisté en mobilité",
          icon: faUserMd
        },
        {
          text: "Vaccinations et suivi postnatal",
          icon: faStethoscope
        }
      ]
    },
    {
      title: "Cardiologie / HTA / Diabétologie",
      icon: "❤️",
      items: [
        {
          text: "Dépistage et suivi de maladies chroniques dans les villages",
          icon: faHeartbeat
        },
        {
          text: "Télésurveillance avec médecins spécialisés",
          icon: faSatellite
        }
      ]
    },
    {
      title: "Santé communautaire et campagnes",
      icon: "🧫",
      items: [
        {
          text: "Dépistage mobile VIH, hépatites, tuberculose",
          icon: faFlask
        },
        {
          text: "Sensibilisation et éducation sanitaire",
          icon: faUserMd
        },
        {
          text: "Distribution de médicaments essentiels",
          icon: faBriefcaseMedical
        }
      ]
    },
    {
      title: "Santé en milieu carcéral ou minier",
      icon: "🧑‍⚕️",
      items: [
        {
          text: "Unité mobile de santé sur site (prison, site minier)",
          icon: faAmbulance
        },
        {
          text: "Télé-expertise embarquée",
          icon: faSatellite
        }
      ]
    },
    {
      title: "Environnement militaire / humanitaire",
      icon: "🪖",
      items: [
        {
          text: "Déploiement en zones de conflit",
          icon: faTruck
        },
        {
          text: "Soins d'urgence en zone de crise",
          icon: faUserMd
        },
        {
          text: "Appui logistique sanitaire (ONU, armée, Croix-Rouge)",
          icon: faBriefcaseMedical
        }
      ]
    }
  ];

  const advantages = [
    {
      text: "Adaptabilité au terrain : 4x4, pick-up, minibus selon les routes",
      icon: faTruck
    },
    {
      text: "Autonomie : groupe électrogène, climatisation, stockage sécurisé",
      icon: faSolarPanel
    },
    {
      text: "Interopérabilité : compatible avec plateformes de télémédecine",
      icon: faWifi
    },
    {
      text: "Visibilité & crédibilité : outil de terrain pour bailleurs et décideurs",
      icon: faStethoscope
    },
    {
      text: "Maintenance & formation assurées par nos équipes locales",
      icon: faUserMd
    }
  ];

  const projects = [
    {
      location: "Cameroun",
      description: "Unité mobile santé maternelle dans l'Extrême-Nord",
      icon: "🇨🇲"
    },
    {
      location: "ONG au Tchad",
      description: "Campagne de dépistage VIH avec laboratoire mobile",
      icon: "🇹🇩"
    },
    {
      location: "Projet pilote au Sénégal",
      description: "Partenariat public-privé (HTA/diabète)",
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
                <FontAwesomeIcon icon={faAmbulance} className="text-2xl" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Véhicules médicalisés
                </span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              « Amener l'hôpital au patient, partout, même là où les routes s'arrêtent »
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
                <FontAwesomeIcon icon={faAmbulance} className="text-primary-600" />
                Pourquoi des véhicules médicalisés ?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Dans de nombreuses zones d'Afrique, les patients n'arrivent pas jusqu'au soin : trop loin, 
                pas de route, pas de moyens de transport, pas de structure sur place.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Les véhicules médicalisés DIGIHEALTH4AFRICA sont conçus pour briser cette barrière d'accès 
                aux soins, en apportant le diagnostic, les soins, la prévention et l'expertise médicale 
                directement au cœur des communautés.
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

        {/* Vehicle Types */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Types de véhicules proposés
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicleTypes.map((vehicle, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 hover:border-primary-300 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${vehicle.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                  <FontAwesomeIcon icon={vehicle.icon} className="text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{vehicle.category}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{vehicle.description}</p>
                <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">{vehicle.usage}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Equipment */}
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
                  Équipements disponibles à bord (personnalisables)
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {equipment.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item.item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
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
              Applications concrètes par secteur de santé
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
              Avantages clés
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
                  Exemples de projets déployés
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
                  Besoin d'un véhicule de santé adapté à votre projet ?
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Contactez-nous pour discuter de vos besoins spécifiques et recevoir une proposition 
                personnalisée adaptée à votre terrain et vos objectifs.
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
                    <FontAwesomeIcon icon={faAmbulance} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Véhicules médicalisés</h3>
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
                solutionTitle="Véhicules médicalisés"
                onClose={() => setShowForm(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehiculesPage;