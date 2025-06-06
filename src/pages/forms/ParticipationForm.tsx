import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import { User, Mail, Phone, Camera, Globe, Instagram, Facebook, Send, Info, ArrowRight, Upload, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ParticipationForm: React.FC = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    photo: null as File | null,
    instagram: '',
    facebook: '',
    bio: '',
    acceptTerms: false
  });

  useEffect(() => {
    const validateForm = () => {
      const requiredFields = ['name', 'email', 'phone', 'country', 'instagram', 'bio'];
      const isAllFieldsFilled = requiredFields.every(field => formData[field as keyof typeof formData]);
      const isFileUploaded = formData.photo !== null;
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
        photo: e.target.files![0]
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
    formDataToSend.append('_subject', 'Nouvelle inscription Influenceur');
    formDataToSend.append('_template', 'table');
    formDataToSend.append('_captcha', 'false');

    try {
      const response = await fetch('https://formsubmit.co/emanechristopherpro@gmail.com', {
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
            <h1 className="font-script text-gold text-5xl md:text-6xl mb-6">Formulaire Influenceurs</h1>
            <p className="text-xl mb-8">Enregistrez-vous officiellement pour participer au Gala des Influenceurs.</p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle title="Inscription Influenceur" subtitle="REJOIGNEZ-NOUS" center />
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <form 
                onSubmit={handleSubmit}
                className="space-y-6"
                encType="multipart/form-data"
              >
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
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
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
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Pays *</label>
                      <input 
                        type="text" 
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir"
                        placeholder="Votre pays"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Photo Upload */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-noir font-semibold mb-4 pb-2 border-b border-gold/20">Photo</h3>
                  
                  <div>
                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">Photo de profil *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Camera size={16} className="text-gray-400" />
                      </div>
                      <input 
                        type="file" 
                        id="photo"
                        name="photo"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir [&::file-selector-button]:text-noir [&::file-selector-button]:bg-transparent [&::file-selector-button]:border-0 [&::file-selector-button]:mr-4 [&::file-selector-button]:py-1 [&::file-selector-button]:px-2 [&::file-selector-button]:font-medium [&::file-selector-button]:hover:bg-gold/10"
                        required
                      />
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Format recommandé : JPG ou PNG, max 5MB</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-noir font-semibold mb-4 pb-2 border-b border-gold/20">Réseaux Sociaux</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">Instagram *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Instagram size={16} className="text-gray-400" />
                        </div>
                        <input 
                          type="text" 
                          id="instagram"
                          name="instagram"
                          value={formData.instagram}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir"
                          placeholder="@votre_compte"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-1">Facebook</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Facebook size={16} className="text-gray-400" />
                        </div>
                        <input 
                          type="text" 
                          id="facebook"
                          name="facebook"
                          value={formData.facebook}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir"
                          placeholder="facebook.com/votre_page"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-noir font-semibold mb-4 pb-2 border-b border-gold/20">Biographie</h3>
                  
                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Biographie *</label>
                    <textarea 
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir"
                      placeholder="Parlez-nous de vous..."
                      required
                    ></textarea>
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

export default ParticipationForm;