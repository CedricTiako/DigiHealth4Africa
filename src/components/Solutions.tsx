import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBriefcaseMedical, 
  faDesktop, 
  faTruck, 
  faBoxes, 
  faGlobe, 
  faPlane,
  faStethoscope,
  faHeartbeat,
  faUserMd,
  faHospital,
  faSatellite,
  faAmbulance
} from '@fortawesome/free-solid-svg-icons';
import SolutionCard from './SolutionCard';

const Solutions: React.FC = () => {
  const solutions = [
    {
      id: 1,
      title: "Mallettes de télémédecine",
      description: "Kits portables avec outils de diagnostic (ECG, tension, otoscope…) pour consultations à distance dans les zones reculées.",
      icon: <FontAwesomeIcon icon={faBriefcaseMedical} className="animate-pulse" />,
      action: "Prendre Rendez-vous",
      formFields: [
        { name: "entityName", label: "Nom de l'entité", type: "text" },
        { name: "country", label: "Pays & ville", type: "text" },
        { name: "projectManager", label: "Responsable du projet / Fonction", type: "text" },
        { name: "phone", label: "Téléphone / WhatsApp", type: "tel" },
        { name: "email", label: "E-mail", type: "email" },
        { name: "quantity", label: "Nombre de mallettes envisagées", type: "number" },
        { name: "targetAreas", label: "Zone(s) d'intervention ciblée(s)", type: "text" },
        { name: "objective", label: "Objectif du projet", type: "textarea" },
        { name: "message", label: "Message complémentaire", type: "textarea" },
      ]
    },
    {
      id: 2,
      title: "Bornes de télémédecine",
      description: "Dispositifs fixes connectés pour téléconsultations dans les centres de santé et hôpitaux.",
      icon: <FontAwesomeIcon icon={faDesktop} className="animate-pulse" />,
      action: "Prendre Rendez-vous",
      formFields: [
        { name: "establishmentName", label: "Nom de l'établissement", type: "text" },
        { name: "location", label: "Localisation", type: "text" },
        { name: "terminalType", label: "Type de borne souhaitée", type: "text" },
        { name: "consultationNeeds", label: "Besoins en téléconsultation", type: "textarea" },
        { name: "hasStableInternet", label: "Accès Internet stable ?", type: "select", options: ["Oui", "Non", "Incertain"] },
        { name: "contactPerson", label: "Interlocuteur principal", type: "text" },
        { name: "message", label: "Message libre", type: "textarea" },
      ]
    },
    {
      id: 3,
      title: "Véhicules médicalisés",
      description: "Ambulances et unités mobiles équipées pour interventions d'urgence et soins dans les zones isolées.",
      icon: <FontAwesomeIcon icon={faAmbulance} className="animate-bounce" />,
      action: "Prendre Rendez-vous",
      formFields: [
        { name: "structure", label: "Structure concernée", type: "text" },
        { name: "vehicleType", label: "Type de véhicule recherché", type: "text" },
        { name: "estimatedQuantity", label: "Quantité estimée", type: "number" },
        { name: "budget", label: "Budget indicatif", type: "text" },
        { name: "financingMethod", label: "Mode de financement", type: "text" },
        { name: "projectLocation", label: "Localisation du projet", type: "text" },
        { name: "contact", label: "Contact", type: "text" },
      ]
    },
    {
      id: 4,
      title: "Conteneurs santé",
      description: "Structures médicalisées modulaires à installer rapidement pour créer des centres de soins temporaires ou permanents.",
      icon: <FontAwesomeIcon icon={faHospital} className="animate-pulse" />,
      action: "Prendre Rendez-vous",
      formFields: [
        { name: "organization", label: "Organisation demandeuse", type: "text" },
        { name: "containerType", label: "Type de conteneur", type: "text" },
        { name: "area", label: "Zone à équiper", type: "text" },
        { name: "containerCount", label: "Nombre de conteneurs", type: "number" },
        { name: "urgency", label: "Urgence du besoin", type: "select", options: ["Immédiate", "Dans les 3 mois", "Dans les 6 mois", "Projet à long terme"] },
        { name: "nameAndRole", label: "Nom et fonction", type: "text" },
        { name: "contactDetails", label: "Coordonnées complètes", type: "textarea" },
      ]
    },
    {
      id: 5,
      title: "Télé-expertise médicale",
      description: "Mise en réseau avec spécialistes internationaux pour consultations expertes et formation continue.",
      icon: <FontAwesomeIcon icon={faSatellite} className="animate-spin" style={{ animationDuration: '3s' }} />,
      action: "Prendre Rendez-vous",
      formFields: [
        { name: "medicalStructure", label: "Structure médicale", type: "text" },
        { name: "specialties", label: "Spécialités visées", type: "text" },
        { name: "volume", label: "Volume estimé de télé-expertises", type: "text" },
        { name: "hasPartner", label: "Partenaire identifié ?", type: "select", options: ["Oui", "Non", "En recherche"] },
        { name: "referent", label: "Référent", type: "text" },
        { name: "objectives", label: "Objectifs attendus", type: "textarea" },
      ]
    },
    {
      id: 6,
      title: "Évacuations sanitaires",
      description: "Assistance et coordination pour transferts médicaux d'urgence vers centres spécialisés.",
      icon: <FontAwesomeIcon icon={faPlane} className="animate-pulse" />,
      action: "Prendre Rendez-vous",
      formFields: [
        { name: "entityType", label: "Type d'entité", type: "text" },
        { name: "careCountry", label: "Pays de prise en charge", type: "text" },
        { name: "evacuationDestination", label: "Destination d'évacuation", type: "text" },
        { name: "estimatedCases", label: "Nombre estimé de cas/an", type: "number" },
        { name: "pathologyTypes", label: "Types de pathologies", type: "text" },
        { name: "contactPerson", label: "Responsable contact", type: "text" },
        { name: "additionalInfo", label: "Informations utiles", type: "textarea" },
      ]
    }
  ];

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
    <section id="solutions" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 african-pattern-2 opacity-20"></div>

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
          <FontAwesomeIcon icon={faStethoscope} className="text-4xl opacity-30" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 text-accent-200"
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

        <motion.div
          className="absolute bottom-40 left-1/4 text-green-200"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <FontAwesomeIcon icon={faUserMd} className="text-3xl opacity-30" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
            <FontAwesomeIcon icon={faStethoscope} className="animate-pulse" />
            Solutions Innovantes
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-green-600 bg-clip-text text-transparent">
              Nos solutions
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Des solutions innovantes et adaptées pour répondre aux besoins de santé en Afrique,
            même dans les zones les plus reculées.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              variants={itemVariants}
              custom={index}
            >
              <SolutionCard solution={solution} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass rounded-3xl p-8 lg:p-12 backdrop-blur-xl border border-white/20 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 african-pattern-3 opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <FontAwesomeIcon icon={faHeartbeat} className="text-3xl text-primary-600 animate-pulse" />
                <h3 className="text-2xl lg:text-3xl font-bold">
                  <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    Besoin d'une solution personnalisée ?
                  </span>
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                Notre équipe d'experts est à votre disposition pour étudier vos besoins spécifiques 
                et vous proposer la solution la plus adaptée à votre contexte.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold text-lg shadow-glow hover:shadow-glow-accent transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faUserMd} className="animate-pulse" />
                Discutons de votre projet
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;