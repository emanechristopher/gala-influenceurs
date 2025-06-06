import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import { User, Mail, Phone, Globe, Camera, FileText, Send, Info, ArrowRight, Upload, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

const AccreditationForm: React.FC = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    media: '',
    position: '',
    equipment: '',
    coverage: '',
    pressCard: null as File | null,
    acceptTerms: false
  });

  useEffect(() => {
    const validateForm = () => {
      const requiredFields = ['name', 'email', 'phone', 'media', 'position', 'equipment', 'coverage'];
      const isAllFieldsFilled = requiredFields.every(field => formData[field as keyof typeof formData]);
      const isFileUploaded = formData.pressCard !== null;
      setIsFormValid(isAllFieldsFilled && isFileUploaded && formData.acceptTerms);
    };

    validateForm();
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        pressCard: e.target.files![0]
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      acceptTerms: e.target.checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Envoyer les données du formulaire par email
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        formDataToSend.append(key, value);
      }
    });
    formDataToSend.append('_subject', 'Nouvelle inscription Média');
    formDataToSend.append('_template', 'table');
    formDataToSend.append('_captcha', 'false');

    try {
      const response = await fetch('https://formsubmit.co/Fulanirecord@gmail.com', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        // Rediriger vers BilletWeb après l'envoi réussi du formulaire
        window.location.href = 'https://www.billetweb.fr/gala-des-influenceurs';
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-noir text-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-script text-gold text-5xl md:text-6xl mb-6">Formulaire Médias</h1>
            <p className="text-xl mb-8">Accréditation pour les journalistes, vidéastes, photographes, blogueurs et médias.</p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle title="Inscription Média" subtitle="REJOIGNEZ-NOUS" center />
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <form 
                onSubmit={handleSubmit}
                className="space-y-6"
                encType="multipart/form-data"
              >
                {/* Honeypot pour éviter le spam */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
                {/* Désactive le captcha */}
                <input type="hidden" name="_captcha" value="false" />
                
                {/* Redirection après soumission */}
                <input type="hidden" name="_next" value={window.location.origin + "/merci"} />
                
                {/* Template personnalisé */}
                <input type="hidden" name="_template" value="table" />
                
                {/* Sujet personnalisé */}
                <input type="hidden" name="_subject" value="Nouvelle inscription Média" />

                {/* Personal Information */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-noir font-semibold mb-4 pb-2 border-b border-gold/20">Informations Personnelles</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User size={16} className="text-gray-400" />
                        </div>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir"
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email professionnel *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={16} className="text-gray-400" />
                        </div>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir"
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone size={16} className="text-gray-400" />
                        </div>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir"
                          placeholder="+XXX XXXXXXXXX"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="media" className="block text-sm font-medium text-gray-700 mb-1">Type de média *</label>
                      <select 
                        id="media"
                        name="media"
                        value={formData.media}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir"
                        required
                      >
                        <option value="">Sélectionner...</option>
                        <option value="journaliste">Journaliste</option>
                        <option value="videaste">Vidéaste</option>
                        <option value="photographe">Photographe</option>
                        <option value="blogueur">Blogueur</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Media Information */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-noir font-semibold mb-4 pb-2 border-b border-gold/20">Informations Média</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Position dans le média *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Globe size={16} className="text-gray-400" />
                        </div>
                        <input 
                          type="text" 
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir"
                          placeholder="Ex: Rédacteur en chef, Directeur de la rédaction, etc."
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="equipment" className="block text-sm font-medium text-gray-700 mb-1">Équipement que vous prévoyez d'utiliser *</label>
                      <textarea 
                        id="equipment" 
                        name="equipment"
                        value={formData.equipment}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir"
                        placeholder="Listez votre équipement..."
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Coverage Plan */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-noir font-semibold mb-4 pb-2 border-b border-gold/20">Plan de Couverture</h3>
                  
                  <div>
                    <label htmlFor="coverage" className="block text-sm font-medium text-gray-700 mb-1">Comment prévoyez-vous de couvrir l'événement? *</label>
                    <textarea 
                      id="coverage" 
                      name="coverage"
                      value={formData.coverage}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir"
                      placeholder="Décrivez votre couverture prévue..."
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Press Card */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-noir font-semibold mb-4 pb-2 border-b border-gold/20">Carte de Presse</h3>
                  
                  <div>
                    <label htmlFor="pressCard" className="block text-sm font-medium text-gray-700 mb-1">Carte de presse ou justificatif *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FileText size={16} className="text-gray-400" />
                      </div>
                      <input 
                        type="file" 
                        id="pressCard"
                        name="pressCard"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir [&::file-selector-button]:text-noir [&::file-selector-button]:bg-transparent [&::file-selector-button]:border-0 [&::file-selector-button]:mr-4 [&::file-selector-button]:py-1 [&::file-selector-button]:px-2 [&::file-selector-button]:font-medium [&::file-selector-button]:hover:bg-gold/10"
                        required
                      />
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Format accepté : PDF, JPG, PNG (max 5MB)</p>
                  </div>
                </div>
                
                {/* Terms and Conditions */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.acceptTerms}
                    onChange={handleCheckboxChange}
                    className="mt-1"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    J'accepte les conditions générales et la politique de confidentialité
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`px-8 py-3 rounded-md font-medium transition-colors ${
                      isFormValid
                        ? 'bg-gold text-noir hover:bg-gold/90'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Continuer vers le paiement
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccreditationForm;