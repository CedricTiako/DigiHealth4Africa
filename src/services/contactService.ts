/**
 * Service pour gérer les appels API de contact
 */

export interface ContactFormData {
  name: string;
  function?: string;
  email: string;
  phone?: string;
  organization?: string;
  appointment?: string;
  message: string;
  // Champs spécifiques aux solutions
  entityName?: string;
  country?: string;
  projectManager?: string;
  quantity?: number;
  targetAreas?: string;
  objective?: string;
  establishmentName?: string;
  location?: string;
  terminalType?: string;
  consultationNeeds?: string;
  hasStableInternet?: string;
  contactPerson?: string;
  structure?: string;
  vehicleType?: string;
  estimatedQuantity?: number;
  budget?: string;
  financingMethod?: string;
  projectLocation?: string;
  contact?: string;
  containerType?: string;
  area?: string;
  containerCount?: number;
  urgency?: string;
  nameAndRole?: string;
  contactDetails?: string;
  medicalStructure?: string;
  specialties?: string;
  volume?: string;
  hasPartner?: string;
  referent?: string;
  objectives?: string;
  entityType?: string;
  careCountry?: string;
  evacuationDestination?: string;
  estimatedCases?: number;
  pathologyTypes?: string;
  additionalInfo?: string;
  solutionTitle?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

/**
 * Soumet les données de contact à l'API
 */
export const submitContactForm = async (formData: ContactFormData): Promise<ApiResponse> => {
  try {
    // Préparer les données pour l'API
    const apiData = {
      name: formData.name || '',
      function: formData.function || formData.projectManager || formData.contactPerson || formData.referent || '',
      email: formData.email || '',
      phone: formData.phone || '',
      organization: formData.organization || formData.entityName || formData.establishmentName || formData.structure || formData.medicalStructure || '',
      appointment: formData.appointment || new Date().toISOString().slice(0, 19).replace('T', ' '),
      message: formatMessage(formData),
      solution_type: formData.solutionTitle || 'Contact général'
    };

    console.log('Envoi des données à l\'API:', apiData);

    const response = await fetch('https://digihealth4africa.fr/api/submit.php', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(apiData)
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log('Réponse API:', data);

    return {
      success: true,
      message: 'Votre demande a été envoyée avec succès. Nous vous contacterons prochainement.',
      data
    };

  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    
    return {
      success: false,
      message: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou nous contacter directement.',
      data: null
    };
  }
};

/**
 * Formate le message avec tous les détails du formulaire
 */
const formatMessage = (formData: ContactFormData): string => {
  let message = formData.message || '';
  
  // Ajouter les détails spécifiques selon le type de solution
  const details: string[] = [];
  
  if (formData.solutionTitle) {
    details.push(`=== DEMANDE: ${formData.solutionTitle.toUpperCase()} ===`);
  }
  
  // Mallettes de télémédecine
  if (formData.country) details.push(`Pays & ville: ${formData.country}`);
  if (formData.quantity) details.push(`Nombre de mallettes: ${formData.quantity}`);
  if (formData.targetAreas) details.push(`Zones d'intervention: ${formData.targetAreas}`);
  if (formData.objective) details.push(`Objectif: ${formData.objective}`);
  
  // Bornes de télémédecine
  if (formData.location) details.push(`Localisation: ${formData.location}`);
  if (formData.terminalType) details.push(`Type de borne: ${formData.terminalType}`);
  if (formData.consultationNeeds) details.push(`Besoins téléconsultation: ${formData.consultationNeeds}`);
  if (formData.hasStableInternet) details.push(`Internet stable: ${formData.hasStableInternet}`);
  
  // Véhicules médicalisés
  if (formData.vehicleType) details.push(`Type de véhicule: ${formData.vehicleType}`);
  if (formData.estimatedQuantity) details.push(`Quantité estimée: ${formData.estimatedQuantity}`);
  if (formData.budget) details.push(`Budget: ${formData.budget}`);
  if (formData.financingMethod) details.push(`Financement: ${formData.financingMethod}`);
  if (formData.projectLocation) details.push(`Localisation projet: ${formData.projectLocation}`);
  
  // Conteneurs santé
  if (formData.containerType) details.push(`Type de conteneur: ${formData.containerType}`);
  if (formData.area) details.push(`Zone à équiper: ${formData.area}`);
  if (formData.containerCount) details.push(`Nombre de conteneurs: ${formData.containerCount}`);
  if (formData.urgency) details.push(`Urgence: ${formData.urgency}`);
  if (formData.nameAndRole) details.push(`Nom et fonction: ${formData.nameAndRole}`);
  if (formData.contactDetails) details.push(`Coordonnées: ${formData.contactDetails}`);
  
  // Télé-expertise
  if (formData.specialties) details.push(`Spécialités: ${formData.specialties}`);
  if (formData.volume) details.push(`Volume estimé: ${formData.volume}`);
  if (formData.hasPartner) details.push(`Partenaire identifié: ${formData.hasPartner}`);
  if (formData.objectives) details.push(`Objectifs: ${formData.objectives}`);
  
  // Évacuations sanitaires
  if (formData.entityType) details.push(`Type d'entité: ${formData.entityType}`);
  if (formData.careCountry) details.push(`Pays de prise en charge: ${formData.careCountry}`);
  if (formData.evacuationDestination) details.push(`Destination évacuation: ${formData.evacuationDestination}`);
  if (formData.estimatedCases) details.push(`Cas estimés/an: ${formData.estimatedCases}`);
  if (formData.pathologyTypes) details.push(`Types de pathologies: ${formData.pathologyTypes}`);
  if (formData.additionalInfo) details.push(`Infos utiles: ${formData.additionalInfo}`);
  
  // Combiner le message original avec les détails
  if (details.length > 0) {
    message = message + '\n\n' + details.join('\n');
  }
  
  return message;
};

/**
 * Valide les données du formulaire
 */
export const validateContactForm = (formData: ContactFormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!formData.name?.trim()) {
    errors.push('Le nom est requis');
  }
  
  if (!formData.email?.trim()) {
    errors.push('L\'email est requis');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push('L\'email n\'est pas valide');
  }
  
  if (!formData.message?.trim()) {
    errors.push('Le message est requis');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};