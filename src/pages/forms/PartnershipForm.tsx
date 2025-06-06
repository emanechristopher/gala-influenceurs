import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import { User, Mail, Phone, Globe, Building2, FileText, Send, Info } from 'lucide-react';

const PartnershipForm: React.FC = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    email: '',
    phone: '',
    companyName: '',
    companyType: '',
    website: '',
    sector: '',
    partnershipType: '',
    proposal: '',
    budget: '',
    companyDoc: null as File | null,
    acceptTerms: false
  });

  useEffect(() => {
    const validateForm = () => {
      const requiredFields = ['name', 'position', 'email', 'phone', 'companyName', 'companyType', 'website', 'sector', 'partnershipType', 'proposal'];
      const isAllFieldsFilled = requiredFields.every(field => formData[field as keyof typeof formData]);
      const isFileUploaded = formData.companyDoc !== null;
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
        companyDoc: e.target.files![0]
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
    formDataToSend.append('_subject', 'Nouvelle demande de partenariat');
    formDataToSend.append('_template', 'table');
    formDataToSend.append('_captcha', 'false');

    try {
      const response = await fetch('https://formsubmit.co/Fulanirecord@gmail.com', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        // Rediriger vers la page de remerciement après l'envoi réussi du formulaire
        window.location.href = '/merci-sponsor';
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
            <h1 className="font-script text-gold text-5xl md:text-6xl mb-6">Formulaire Sponsors & Partenaires</h1>
            <p className="text-xl mb-8">Pour les marques, entreprises et institutions souhaitant soutenir ou collaborer avec l'événement.</p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle title="Demande de Partenariat" subtitle="COLLABORATION" center />
            
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
                <input type="hidden" name="_subject" value="Nouvelle demande de partenariat" />

                {/* Contact Information */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-noir font-semibold mb-4 pb-2 border-b border-gold/20">Informations de Contact</h3>
                  
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
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Poste/Fonction *</label>
                      <input 
                        type="text" 
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir"
                        placeholder="Votre poste dans l'entreprise"
                        required
                      />
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
                  </div>
                </div>

                {/* Company Information */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-noir font-semibold mb-4 pb-2 border-b border-gold/20">Informations Entreprise</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Nom de l'entreprise *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Building2 size={16} className="text-gray-400" />
                        </div>
                        <input 
                          type="text" 
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir"
                          placeholder="Nom de votre entreprise"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="companyType" className="block text-sm font-medium text-gray-700 mb-1">Type d'organisation *</label>
                      <select 
                        id="companyType"
                        name="companyType"
                        value={formData.companyType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir"
                        required
                      >
                        <option value="">Sélectionner...</option>
                        <option value="marque">Marque</option>
                        <option value="entreprise">Entreprise</option>
                        <option value="institution">Institution</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Site web *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Globe size={16} className="text-gray-400" />
                        </div>
                        <input 
                          type="url" 
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir"
                          placeholder="https://www.votre-entreprise.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">Secteur d'activité *</label>
                      <select 
                        id="sector"
                        name="sector"
                        value={formData.sector}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir"
                        required
                      >
                        <option value="">Sélectionner...</option>
                        <option value="technologie">Technologie</option>
                        <option value="alimentaire">Alimentaire</option>
                        <option value="cosmétique">Cosmétique</option>
                        <option value="automobile">Automobile</option>
                        <option value="immobilier">Immobilier</option>
                        <option value="finance">Finance</option>
                        <option value="éducation">Éducation</option>
                        <option value="événementiel">Événementiel</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Partnership Details */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-noir font-semibold mb-4 pb-2 border-b border-gold/20">Détails du Partenariat</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-1">Type de partenariat souhaité *</label>
                      <select 
                        id="partnershipType"
                        name="partnershipType"
                        value={formData.partnershipType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir"
                        required
                      >
                        <option value="">Sélectionner...</option>
                        <option value="sponsor">Sponsor Principal</option>
                        <option value="partenaire">Partenaire Officiel</option>
                        <option value="media">Partenaire Média</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="proposal" className="block text-sm font-medium text-gray-700 mb-1">Proposition de collaboration *</label>
                      <textarea 
                        id="proposal" 
                        name="proposal"
                        value={formData.proposal}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir"
                        placeholder="Décrivez votre proposition de collaboration et les avantages mutuels..."
                        required
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget prévisionnel</label>
                      <input 
                        type="text" 
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir"
                        placeholder="Budget estimé pour le partenariat"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Company Documents */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-noir font-semibold mb-4 pb-2 border-b border-gold/20">Documents</h3>
                  
                  <div>
                    <label htmlFor="companyDoc" className="block text-sm font-medium text-gray-700 mb-1">Document de présentation de l'entreprise *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FileText size={16} className="text-gray-400" />
                      </div>
                      <input 
                        type="file" 
                        id="companyDoc"
                        name="companyDoc"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-noir [&::file-selector-button]:text-noir [&::file-selector-button]:bg-transparent [&::file-selector-button]:border-0 [&::file-selector-button]:mr-4 [&::file-selector-button]:py-1 [&::file-selector-button]:px-2 [&::file-selector-button]:font-medium [&::file-selector-button]:hover:bg-gold/10"
                        required
                      />
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Format accepté : PDF, DOC, DOCX (max 5MB)</p>
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
                        checked={formData.acceptTerms}
                        onChange={handleCheckboxChange}
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
                      <li>Votre demande sera étudiée par notre équipe de partenariats.</li>
                      <li>Une réponse vous sera envoyée dans les plus brefs délais.</li>
                      <li>Pour toute question, contactez-nous directement au +225 0758 743 691.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button variant="primary" type="submit" className="w-full md:w-auto" disabled={!isFormValid}>
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

export default PartnershipForm;