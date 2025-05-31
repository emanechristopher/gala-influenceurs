import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import { User, Mail, Phone, Globe, Users, Send, Info } from 'lucide-react';

const ParticipationForm: React.FC = () => {
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
            <h1 className="font-script text-gold text-5xl md:text-6xl mb-6">Participer au Gala</h1>
            <p className="text-xl mb-8">Remplissez ce formulaire pour réserver votre place au Gala des Influenceurs 2025.</p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle title="Formulaire de Participation" subtitle="RÉSERVATION" center />
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <form 
                action="https://formsubmit.co/emanechristopherpro@gmail.com" 
                method="POST"
                className="space-y-6"
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
                <input type="hidden" name="_subject" value="Nouvelle demande de participation au Gala des Influenceurs" />

                {/* Personal Information */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-noir font-semibold mb-4 pb-2 border-b border-gold/20">Informations Personnelles</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User size={16} className="text-gray-400" />
                        </div>
                        <input 
                          type="text" 
                          id="firstName"
                          name="firstName"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                          placeholder="Votre prénom"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User size={16} className="text-gray-400" />
                        </div>
                        <input 
                          type="text" 
                          id="lastName"
                          name="lastName"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
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
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
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
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                          placeholder="+XXX XXXXXXXXX"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-noir font-semibold mb-4 pb-2 border-b border-gold/20">Informations Professionnelles</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organisation/Entreprise</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Globe size={16} className="text-gray-400" />
                        </div>
                        <input 
                          type="text" 
                          id="organization"
                          name="organization"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                          placeholder="Nom de votre organisation"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Poste/Fonction</label>
                      <input 
                        type="text" 
                        id="position"
                        name="position"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                        placeholder="Votre poste"
                      />
                    </div>
                  </div>
                </div>

                {/* Event Information */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-noir font-semibold mb-4 pb-2 border-b border-gold/20">Informations sur l'Événement</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="attendees" className="block text-sm font-medium text-gray-700 mb-1">Nombre de participants *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Users size={16} className="text-gray-400" />
                        </div>
                        <select 
                          id="attendees"
                          name="attendees"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                          required
                        >
                          <option value="">Sélectionner...</option>
                          <option value="1">1 personne</option>
                          <option value="2">2 personnes</option>
                          <option value="3-5">3 à 5 personnes</option>
                          <option value="6+">6 personnes ou plus</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-1">Comment avez-vous entendu parler de nous?</label>
                      <select 
                        id="hearAbout"
                        name="hearAbout"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      >
                        <option value="">Sélectionner...</option>
                        <option value="Réseaux sociaux">Réseaux sociaux</option>
                        <option value="Site web">Site web</option>
                        <option value="Bouche à oreille">Bouche à oreille</option>
                        <option value="Presse">Presse</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">Demandes spéciales ou commentaires</label>
                      <textarea 
                        id="specialRequests" 
                        name="specialRequests"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                        placeholder="Informations complémentaires, régime alimentaire particulier, accessibilité, etc."
                      ></textarea>
                    </div>
                  </div>
                </div>
                
                {/* Terms and Conditions */}
                <div className="pt-2 pb-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="acceptTerms"
                        name="acceptTerms"
                        type="checkbox"
                        className="h-4 w-4 text-gold border-gray-300 rounded focus:ring-gold"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="acceptTerms" className="font-medium text-gray-700">J'accepte les termes et conditions *</label>
                      <p className="text-gray-500">En soumettant ce formulaire, vous acceptez que vos données soient traitées conformément à notre politique de confidentialité.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gold/10 p-4 rounded-md mb-6 flex items-start">
                  <Info size={20} className="text-gold mr-3 flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-700">
                    Les places sont limitées. Une confirmation vous sera envoyée par email après examen de votre demande.
                  </p>
                </div>
                
                <div className="pt-4">
                  <Button variant="primary" type="submit" className="w-full md:w-auto">
                    <Send size={16} className="mr-2" />
                    Soumettre ma demande
                  </Button>
                  <p className="mt-4 text-sm text-gray-500">
                    * Champs obligatoires
                  </p>
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