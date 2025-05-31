import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import { User, Mail, Phone, Camera, Briefcase as BriefcaseBusiness, Instagram, Globe, Send } from 'lucide-react';

const AccreditationForm: React.FC = () => {
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
            <h1 className="font-script text-gold text-5xl md:text-6xl mb-6">Accréditation Média</h1>
            <p className="text-xl mb-8">Remplissez ce formulaire pour demander une accréditation en tant que média ou créateur de contenu.</p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle title="Formulaire d'Accréditation" subtitle="DEMANDE" center />
            
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
                <input type="hidden" name="_subject" value="Nouvelle demande d'accréditation pour le Gala des Influenceurs" />
                
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
                    
                    <div>
                      <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">Profession *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Camera size={16} className="text-gray-400" />
                        </div>
                        <input 
                          type="text" 
                          id="profession"
                          name="profession"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                          placeholder="ex: Journaliste, Photographe, YouTubeur..."
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
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Société/Média *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <BriefcaseBusiness size={16} className="text-gray-400" />
                        </div>
                        <input 
                          type="text" 
                          id="company"
                          name="company"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                          placeholder="Nom de votre média/entreprise"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Site web</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Globe size={16} className="text-gray-400" />
                        </div>
                        <input 
                          type="url" 
                          id="website"
                          name="website"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                          placeholder="https://www.votresite.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="social" className="block text-sm font-medium text-gray-700 mb-1">Réseaux sociaux *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Instagram size={16} className="text-gray-400" />
                        </div>
                        <input 
                          type="text" 
                          id="social"
                          name="social"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                          placeholder="@votrecompte"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="audience" className="block text-sm font-medium text-gray-700 mb-1">Taille d'audience</label>
                      <select 
                        id="audience"
                        name="audience"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      >
                        <option value="">Sélectionner...</option>
                        <option value="< 10K">Moins de 10K abonnés</option>
                        <option value="10K-50K">10K - 50K abonnés</option>
                        <option value="50K-100K">50K - 100K abonnés</option>
                        <option value="100K-500K">100K - 500K abonnés</option>
                        <option value="500K-1M">500K - 1M abonnés</option>
                        <option value="> 1M">Plus de 1M abonnés</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-noir font-semibold mb-4 pb-2 border-b border-gold/20">Informations Additionnelles</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Catégorie de contenu *</label>
                      <select 
                        id="category"
                        name="category"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                        required
                      >
                        <option value="">Sélectionner...</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Mode & Beauté">Mode & Beauté</option>
                        <option value="Tech">Tech</option>
                        <option value="Cuisine">Cuisine</option>
                        <option value="Voyage">Voyage</option>
                        <option value="Business">Business</option>
                        <option value="Divertissement">Divertissement</option>
                        <option value="Presse">Presse & Média</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">Motivation pour participer *</label>
                      <textarea 
                        id="motivation" 
                        name="motivation"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                        placeholder="Expliquez en quelques mots pourquoi vous souhaitez participer au Gala des Influenceurs..."
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button variant="primary" type="submit" className="w-full md:w-auto">
                    <Send size={16} className="mr-2" />
                    Envoyer ma demande
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

export default AccreditationForm;