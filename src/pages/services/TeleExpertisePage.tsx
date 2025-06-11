import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSatellite, 
  faStethoscope, 
  faHeartbeat, 
  faUserMd,
  faCalendarCheck,
  faCheckCircle,
  faGlobe,
  faUsers,
  faShieldAlt,
  faCalendarAlt,
  faChartLine,
  faLanguage
} from '@fortawesome/free-solid-svg-icons';
import { ArrowLeft, Globe, Users, Shield, Calendar, BarChart, Languages } from 'lucide-react';
import { Link } from 'react-router-dom';
import SolutionForm from '../../components/SolutionForm';

const TeleExpertisePage: React.FC = () => {
  const [showForm, setShowForm] = React.useState(false);

  const formFields = [
    { name: "medicalStructure", label: "Structure médicale", type: "text" },
    { name: "specialties", label: "Spécialités visées", type: "text" },
    { name: "volume", label: "Volume estimé de télé-expertises", type: "text" },
    { name: "hasPartner", label: "Partenaire identifié ?", type: "select", options: ["Oui", "Non", "En recherche"] },
    { name: "referent", label: "Référent", type: "text" },
    { name: "objectives", label: "Objectifs attendus", type: "textarea" },
  ];

  const dimensions = [
    {
      title: "Télé-expertise locale",
      icon: faUsers,
      color: "from-blue-500 to-blue-600",
      items: [
        "Collaboration entre professionnels d'un même pays",
        "Renforcement des capacités internes",
        "Mise en réseau des spécialistes disponibles au niveau régional ou national"
      ]
    },
    {
      title: "Télé-expertise internationale",
      icon: faGlobe,
      color: "from-green-500 to-green-600",
      items: [
        "Accès à des spécialistes en France, Europe ou Afrique du Nord",
        "Échanges encadrés par des conventions ou protocoles",
        "Valorisation de la coopération médicale Sud–Nord et Sud–Sud"
      ]
    }
  ];

  const platformFeatures = [
    {
      feature: "Transmission sécurisée des données médicales (chiffrement, RGPD / HDS)",
      icon: <Shield className="w-5 h-5" />
    },
    {
      feature: "Envoi d'imagerie médicale, photos dermatologiques, vidéos cliniques",
      icon: <BarChart className="w-5 h-5" />
    },
    {
      feature: "Partage de dossiers médicaux électroniques (format standard)",
      icon: <Users className="w-5 h-5" />
    },
    {
      feature: "Prise de rendez-vous d'expertise asynchrone ou en direct",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      feature: "Historique de tous les échanges et recommandations archivées",
      icon: <BarChart className="w-5 h-5" />
    },
    {
      feature: "Interface multilingue pour la coopération francophone, anglophone, arabophone",
      icon: <Languages className="w-5 h-5" />
    }
  ];

  const specialties = [
    {
      specialty: "Cardiologie",
      cases: "Lecture ECG, insuffisance cardiaque, palpitations",
      icon: "🫀"
    },
    {
      specialty: "Neurologie",
      cases: "Crises convulsives, AVC suspects, paralysies",
      icon: "🧠"
    },
    {
      specialty: "Pédiatrie",
      cases: "Cas cliniques complexes, anomalies congénitales",
      icon: "👶"
    },
    {
      specialty: "Gynécologie-obstétrique",
      cases: "Suivi grossesse à risque, échographies, infections vaginales",
      icon: "👩‍⚕️"
    },
    {
      specialty: "Dermatologie",
      cases: "Lésions cutanées, ulcères, tumeurs suspectes",
      icon: "🖐"
    },
    {
      specialty: "Maladies infectieuses",
      cases: "VIH, tuberculose, co-infections, fièvres prolongées",
      icon: "🧫"
    },
    {
      specialty: "Pneumologie",
      cases: "Suivi post-COVID, BPCO, signes de détresse respiratoire",
      icon: "🫁"
    }
  ];

  const practicalUses = [
    "Demande d'avis en zone rurale par un infirmier ou médecin isolé",
    "Deuxième lecture d'imagerie (radio, échographie, ECG)",
    "Appui à la décision pour évacuation sanitaire",
    "Formations cliniques à distance entre confrères",
    "Réduction des erreurs de diagnostic ou retards de traitement"
  ];

  const impacts = [
    {
      impact: "Meilleure prise en charge des patients dans les zones périphériques",
      icon: "🏥"
    },
    {
      impact: "Valorisation des compétences des professionnels de santé locaux",
      icon: "👩‍⚕️"
    },
    {
      impact: "Réduction des évacuations inutiles = économies pour les systèmes de santé",
      icon: "💸"
    },
    {
      impact: "Renforcement de la coopération médicale régionale et internationale",
      icon: "🤝"
    },
    {
      impact: "Traçabilité et évaluation des pratiques via la plateforme",
      icon: "📊"
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
                <FontAwesomeIcon icon={faSatellite} className="text-2xl" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Télé-expertise médicale
                </span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              « Quand l'expertise vient à vous, où que vous soyez »
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
                <FontAwesomeIcon icon={faSatellite} className="text-primary-600" />
                Qu'est-ce que la télé-expertise ?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                La télé-expertise médicale permet à un professionnel de santé de premier recours (infirmier, 
                médecin généraliste, agent de santé) de solliciter à distance l'avis d'un spécialiste, à partir 
                d'un cas patient, avec envoi sécurisé de documents cliniques, imageries, photos ou vidéos.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                C'est un accès à une deuxième lecture, un diagnostic plus fin, une décision partagée, 
                sans déplacer le patient.
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

        {/* Dimensions */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Deux dimensions complémentaires
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dimensions.map((dimension, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${dimension.color} rounded-xl flex items-center justify-center text-white`}>
                    <FontAwesomeIcon icon={dimension.icon} className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{dimension.title}</h3>
                </div>
                <ul className="space-y-2">
                  {dimension.items.map((item, itemIndex) => (
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

        {/* Platform Features */}
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
                  Fonctionnalités de notre plateforme
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {platformFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-primary-600 mt-1">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature.feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Specialties */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Spécialités médicales les plus sollicitées
            </span>
          </h2>
          <div className="glass rounded-3xl p-8 backdrop-blur-xl border border-white/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">Spécialité</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">Cas typiques de télé-expertise</th>
                  </tr>
                </thead>
                <tbody>
                  {specialties.map((specialty, index) => (
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
                          <span className="text-2xl">{specialty.icon}</span>
                          <span className="font-medium text-gray-900 dark:text-white">{specialty.specialty}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-600 dark:text-gray-300">{specialty.cases}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Practical Uses */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Utilisations pratiques sur le terrain
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalUses.map((use, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-6 glass rounded-2xl backdrop-blur-xl border border-white/20"
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
        </motion.section>

        {/* Impact */}
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
                  Impact attendu
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {impacts.map((impact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <span className="text-2xl flex-shrink-0">{impact.icon}</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{impact.impact}</span>
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
                  Vous souhaitez intégrer la télé-expertise dans votre structure ?
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Contactez-nous pour discuter de vos besoins en télé-expertise et mettre en place 
                un réseau de spécialistes adapté à votre contexte.
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
                    <FontAwesomeIcon icon={faSatellite} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Télé-expertise médicale</h3>
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
                solutionTitle="Télé-expertise médicale"
                onClose={() => setShowForm(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeleExpertisePage;