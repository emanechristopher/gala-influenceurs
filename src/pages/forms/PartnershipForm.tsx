import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import { User, Mail, Phone, Building2, Globe, DollarSign, FileText, Send, Info } from 'lucide-react';

const PartnershipForm: React.FC = () => {
  const partnershipTypes = [
    { value: "platine", label: "Partenaire Platine - 15 000€" },
    { value: "or", label: "Partenaire Or - 10 000€" },
    { value: "argent", label: "Partenaire Argent - 5 000€" },
    { value: "media", label: "Partenaire Média" },
    { value: "technique", label: "Partenaire Technique" },
    { value: "autre", label: "Autre type de partenariat" },
  ];

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
            <h1 className="font-script text-gold text-5xl md:text-6xl mb-6">Devenir Partenaire</h1>
            <p className="text-xl mb-8">Associez votre marque à un événement prestigieux et bénéficiez d'une visibilité exceptionnelle.</p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle title="Formulaire de Partenariat" subtitle="REJOIGNEZ-NOUS" center />
            
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
                <input type="hidden" name="_subject" value="Nouvelle demande de partenariat pour le Gala des Influenceurs" />
                
                {/* Contact Information */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-noir font-semibold mb-4 pb-2 border-b border-gold/20">Coordonnées</h3>
                  
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
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email professionnel *</label>
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
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Poste/Fonction *</label>
                      <input 
                        type="text" 
                        id="position"
                        name="position"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                        placeholder="Votre position dans l'entreprise"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-noir font-semibold mb-4 pb-2 border-b border-gold/20">Informations sur l'Entreprise</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Nom de l'entreprise *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Building2 size={16} className="text-gray-400" />
                        </div>
                        <input 
                          type="text" 
                          id="company"
                          name="company"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                          placeholder="Nom de votre entreprise"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
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
                          placeholder="https://www.votreentreprise.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partnership Information */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-noir font-semibold mb-4 pb-2 border-b border-gold/20">Informations de Partenariat</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-1">Type de partenariat souhaité *</label>
                      <select 
                        id="partnershipType"
                        name="partnershipType"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                        required
                      >
                        <option value="">Sélectionner...</option>
                        {partnershipTypes.map((type, index) => (
                          <option key={index} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget envisagé</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <DollarSign size={16} className="text-gray-400" />
                        </div>
                        <select 
                          id="budget"
                          name="budget"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                        >
                          <option value="">Sélectionner...</option>
                          <option value="< 5K">Moins de 5 000€</option>
                          <option value="5K-10K">5 000€ - 10 000€</option>
                          <option value="10K-15K">10 000€ - 15 000€</option>
                          <option value="> 15K">Plus de 15 000€</option>
                          <option value="Non défini">À discuter</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Objectifs de votre partenariat *</label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                          <FileText size={16} className="text-gray-400" />
                        </div>
                        <textarea 
                          id="message" 
                          name="message"
                          rows={5}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                          placeholder="Décrivez vos attentes et objectifs concernant ce partenariat..."
                          required
                        ></textarea>
                      </div>
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
                  <div className="text-sm text-gray-700">
                    <p className="font-medium mb-1">Informations importantes:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Notre équipe vous contactera dans les 48 heures suivant la soumission de votre demande.</li>
                      <li>Un dossier de partenariat détaillé vous sera envoyé par email.</li>
                      <li>Pour toute question, contactez-nous directement au +225 0758 743 691.</li>
                    </ul>
                  </div>
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
      
      {/* Benefits */}
      <section className="py-16 bg-noir text-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Avantages Partenaires" subtitle="POURQUOI NOUS REJOINDRE" center light />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Visibilité Exceptionnelle",
                description: "Associez votre marque à un événement prestigieux et gagnez en visibilité auprès d'une audience qualifiée et engagée."
              },
              {
                title: "Networking de Qualité",
                description: "Rencontrez les acteurs clés de l'influence digitale africaine et développez votre réseau professionnel."
              },
              {
                title: "Image de Marque Renforcée",
                description: "Démontrez votre engagement envers l'excellence et l'innovation dans le secteur digital africain."
              },
              {
                title: "Opportunités Commerciales",
                description: "Développez de nouvelles opportunités commerciales et identifiez des influenceurs potentiels pour vos campagnes."
              },
              {
                title: "Contenu Exclusif",
                description: "Accédez à du contenu exclusif et de qualité pour vos propres canaux de communication."
              },
              {
                title: "Impact Positif",
                description: "Contribuez au développement de l'écosystème digital africain et à la valorisation des talents du continent."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-noir-light p-6 rounded-lg border border-gold/20"
              >
                <h3 className="font-serif text-xl font-semibold mb-3 text-gold">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnershipForm;