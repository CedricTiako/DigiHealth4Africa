import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlane, 
  faStethoscope, 
  faHeartbeat, 
  faUserMd,
  faCalendarCheck,
  faCheckCircle,
  faAmbulance,
  faHospital,
  faShieldAlt,
  faGlobe,
  faClock,
  faUsers,
  faFileAlt,
  faPassport,
  faHandshake,
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faCalendarAlt,
  faChartLine,
  faLanguage
} from '@fortawesome/free-solid-svg-icons';
import { ArrowLeft, Plane, Ambulance, Guitar as Hospital, Shield, Globe, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SolutionForm from '../../components/SolutionForm';

const EvacuationsPage: React.FC = () => {
  const [showForm, setShowForm] = React.useState(false);

  const formFields = [
    { name: "entityType", label: "Type d'entité", type: "text" },
    { name: "careCountry", label: "Pays de prise en charge", type: "text" },
    { name: "evacuationDestination", label: "Destination d'évacuation", type: "text" },
    { name: "estimatedCases", label: "Nombre estimé de cas/an", type: "number" },
    { name: "pathologyTypes", label: "Types de pathologies", type: "text" },
    { name: "contactPerson", label: "Responsable contact", type: "text" },
    { name: "additionalInfo", label: "Informations utiles", type: "textarea" },
  ];

  const services = [
    {
      title: "Évaluation médicale préalable",
      icon: faStethoscope,
      color: "from-blue-500 to-blue-600",
      items: [
        {
          text: "Échange avec le médecin traitant",
          icon: faUserMd
        },
        {
          text: "Analyse du dossier médical, bilan, imagerie",
          icon: faFileAlt
        },
        {
          text: "Décision concertée avec nos référents spécialistes",
          icon: faUsers
        }
      ]
    },
    {
      title: "Organisation logistique complète",
      icon: faAmbulance,
      color: "from-green-500 to-green-600",
      items: [
        {
          text: "Réservation d'ambulance locale (avec ou sans médicalisation)",
          icon: faAmbulance
        },
        {
          text: "Appui aux démarches d'autorisation de transfert",
          icon: faFileAlt
        },
        {
          text: "Coordination aéroportuaire (civière, accès prioritaire, douanes)",
          icon: faPlane
        }
      ]
    },
    {
      title: "Transport médicalisé",
      icon: faPlane,
      color: "from-purple-500 to-purple-600",
      items: [
        {
          text: "Billet d'avion du patient (si transport en vol commercial possible)",
          icon: faPlane
        },
        {
          text: "Accompagnement par personnel soignant formé",
          icon: faUserMd
        },
        {
          text: "Option : vol sanitaire dédié avec équipe médicale (MEDEVAC)",
          icon: faHeartbeat
        }
      ]
    },
    {
      title: "Accueil à destination",
      icon: faHospital,
      color: "from-orange-500 to-orange-600",
      items: [
        {
          text: "Orientation vers un établissement partenaire (public ou privé)",
          icon: faHospital
        },
        {
          text: "Coordination avec l'équipe médicale réceptrice",
          icon: faUsers
        },
        {
          text: "Suivi du dossier jusqu'à stabilisation du patient",
          icon: faStethoscope
        }
      ]
    },
    {
      title: "Appui administratif",
      icon: faShieldAlt,
      color: "from-teal-500 to-teal-600",
      items: [
        {
          text: "Aide à la rédaction de certificats médicaux",
          icon: faFileAlt
        },
        {
          text: "Assistance pour visa sanitaire d'urgence",
          icon: faPassport
        },
        {
          text: "Coordination avec les assurances santé / mutuelles",
          icon: faHandshake
        }
      ]
    }
  ];

  const evacuationZones = [
    {
      departure: "Cameroun, Tchad, Congo, etc.",
      destinations: "France, Maroc, Tunisie, Afrique du Sud, Dubaï",
      icon: "🌍"
    },
    {
      departure: "Zone CEMAC / CEDEAO",
      destinations: "Transferts intra-africains ou vers Europe/Asie",
      icon: "🌍"
    },
    {
      departure: "Cas extrêmes",
      destinations: "Coordination avec ONG ou hôpitaux humanitaires",
      icon: "🆘"
    }
  ];

  const partners = [
    {
      text: "Hôpitaux privés et cliniques de référence (Europe, Maghreb, Afrique)",
      icon: faHospital
    },
    {
      text: "Réseau de médecins et spécialistes d'appui",
      icon: faUserMd
    },
    {
      text: "Ambulanciers agréés + transporteurs aériens sanitaires",
      icon: faAmbulance
    },
    {
      text: "Sociétés d'assurance et mutuelles santé",
      icon: faShieldAlt
    },
    {
      text: "Organisations internationales (Croix-Rouge, agences humanitaires)",
      icon: faGlobe
    }
  ];

  const advantages = [
    {
      advantage: "Confidentialité & respect du patient",
      icon: faShieldAlt
    },
    {
      advantage: "Coordination médicale par des professionnels expérimentés",
      icon: faUserMd
    },
    {
      advantage: "Réseau de destinations qualifiées",
      icon: faGlobe
    },
    {
      advantage: "Réactivité 24h/24 – 7j/7",
      icon: faClock
    },
    {
      advantage: "Communication claire avec les familles, assureurs, médecins",
      icon: faUsers
    }
  ];

  const frequentCases = [
    {
      case: "Urgences cardio-vasculaires (AVC, infarctus)",
      icon: faHeartbeat
    },
    {
      case: "Polytraumatismes (accidents de la voie publique)",
      icon: faAmbulance
    },
    {
      case: "Grossesses à haut risque",
      icon: faUserMd
    },
    {
      case: "Pathologies cancéreuses nécessitant un traitement complexe",
      icon: faStethoscope
    },
    {
      case: "Réanimations néonatales ou pédiatriques",
      icon: faHeartbeat
    },
    {
      case: "Brûlures graves",
      icon: faUserMd
    },
    {
      case: "Maladies rares ou orphelines",
      icon: faStethoscope
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
                <FontAwesomeIcon icon={faPlane} className="text-2xl" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Assistance aux évacuations sanitaires
                </span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              « Parce que chaque minute compte, nous organisons l'impossible »
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
                <FontAwesomeIcon icon={faPlane} className="text-primary-600" />
                Pourquoi une évacuation sanitaire ?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Dans de nombreuses régions d'Afrique, le plateau technique local est insuffisant pour gérer 
                certains cas critiques : chirurgie lourde, réanimation spécialisée, cancers, polytraumatismes, 
                complications néonatales, etc.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                L'évacuation sanitaire (EVASAN) consiste à transférer un patient vers un établissement mieux 
                équipé, au niveau régional, national ou international, dans des délais optimaux, avec 
                accompagnement médicalisé si nécessaire.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                DIGIHEALTH4AFRICA propose une solution complète, humaine et rigoureuse, pour que chaque patient 
                en danger ait une vraie chance de survie et de soins adaptés.
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

        {/* Services */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Notre service d'assistance sanitaire comprend
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 hover:border-primary-300 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                  <FontAwesomeIcon icon={service.icon} className="text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                      <FontAwesomeIcon icon={item.icon} className="text-primary-500 mt-1 flex-shrink-0" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Evacuation Zones */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Zones d'évacuation couvertes
            </span>
          </h2>
          <div className="glass rounded-3xl p-8 backdrop-blur-xl border border-white/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">Pays de départ</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">Destinations possibles</th>
                  </tr>
                </thead>
                <tbody>
                  {evacuationZones.map((zone, index) => (
                    <motion.tr
                      key={index}
                      className="border-b border-gray-100 dark:border-gray-800 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{zone.icon}</span>
                          <span className="font-medium text-gray-900 dark:text-white">{zone.departure}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-600 dark:text-gray-300">{zone.destinations}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Partners */}
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
                  Nos partenaires
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <FontAwesomeIcon icon={partner.icon} className="text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{partner.text}</span>
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
              Pourquoi nous confier une EVASAN ?
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
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <FontAwesomeIcon icon={advantage.icon} className="text-sm" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{advantage.advantage}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Frequent Cases */}
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
                  Cas pris en charge fréquemment
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {frequentCases.map((caseItem, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <FontAwesomeIcon icon={caseItem.icon} className="text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{caseItem.case}</span>
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
                  Besoin d'un accompagnement ?
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Contactez-nous pour organiser une évacuation sanitaire ou pour mettre en place 
                un protocole d'assistance pour votre organisation.
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
                    <FontAwesomeIcon icon={faPlane} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Assistance aux évacuations sanitaires</h3>
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
                solutionTitle="Assistance aux évacuations sanitaires"
                onClose={() => setShowForm(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvacuationsPage;