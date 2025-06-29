import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { submitContactForm, validateContactForm, type ContactFormData } from '../services/contactService';

interface FormField {
  name: string;
  label: string;
  type: string;
  options?: string[];
}

interface SolutionFormProps {
  fields: FormField[];
  solutionTitle: string;
  onClose: () => void;
}

const SolutionForm: React.FC<SolutionFormProps> = ({ fields, solutionTitle, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Ajouter le titre de la solution aux données
      const formData = {
        ...data,
        solutionTitle
      };

      // Valider les données
      const validation = validateContactForm(formData);
      if (!validation.isValid) {
        setSubmitError(validation.errors.join(', '));
        setIsSubmitting(false);
        return;
      }

      // Soumettre à l'API
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => {
          setIsSubmitted(false);
          onClose();
        }, 3000);
      } else {
        setSubmitError(result.message);
      }
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      setSubmitError('Une erreur inattendue est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FontAwesomeIcon icon={faCheckCircle} className="text-white text-3xl" />
        </motion.div>
        <h3 className="text-2xl font-bold text-green-600 mb-4">Demande envoyée !</h3>
        <p className="text-gray-600">
          Votre demande concernant <strong>{solutionTitle.toLowerCase()}</strong> a été envoyée avec succès. 
          Notre équipe vous contactera prochainement.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <p className="text-gray-600 mb-4">
        Complétez ce formulaire pour en savoir plus sur <strong>{solutionTitle.toLowerCase()}</strong>.
      </p>
      
      {fields.map((field) => (
        <div key={field.name} className="space-y-1">
          <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              {...register(field.name as keyof ContactFormData, { required: true })}
              className={`w-full px-3 py-2 border ${
                errors[field.name as keyof ContactFormData] ? 'border-red-300' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
              rows={3}
            />
          ) : field.type === 'select' ? (
            <select
              id={field.name}
              {...register(field.name as keyof ContactFormData, { required: true })}
              className={`w-full px-3 py-2 border ${
                errors[field.name as keyof ContactFormData] ? 'border-red-300' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
            >
              <option value="">Sélectionner...</option>
              {field.options?.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              type={field.type}
              {...register(field.name as keyof ContactFormData, { required: true })}
              className={`w-full px-3 py-2 border ${
                errors[field.name as keyof ContactFormData] ? 'border-red-300' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
            />
          )}
          
          {errors[field.name as keyof ContactFormData] && (
            <p className="text-red-500 text-xs mt-1">Ce champ est requis</p>
          )}
        </div>
      ))}

      {/* Affichage des erreurs de soumission */}
      {submitError && (
        <motion.div
          className="p-4 bg-red-50 border border-red-200 rounded-xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-2 text-red-700">
            <FontAwesomeIcon icon={faExclamationCircle} />
            <span className="text-sm font-medium">{submitError}</span>
          </div>
        </motion.div>
      )}
      
      <div className="pt-4 flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          disabled={isSubmitting}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50"
        >
          Annuler
        </button>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          whileHover={!isSubmitting ? { scale: 1.05 } : {}}
          whileTap={!isSubmitting ? { scale: 0.95 } : {}}
        >
          {isSubmitting && <FontAwesomeIcon icon={faSpinner} className="animate-spin" />}
          {isSubmitting ? 'Envoi...' : 'Envoyer'}
        </motion.button>
      </div>
    </form>
  );
};

export default SolutionForm;