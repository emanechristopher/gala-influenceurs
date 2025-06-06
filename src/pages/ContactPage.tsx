import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
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
            <h1 className="font-script text-gold text-5xl md:text-6xl mb-6">Contact</h1>
            <p className="text-xl mb-8">Des questions sur le Gala des Influenceurs? Nous sommes là pour vous aider.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <SectionTitle title="Contactez-nous" subtitle="RESTONS EN CONTACT" />
              
              <p className="text-gray-700 mb-8">
                Pour toute question concernant le Gala des Influenceurs, n'hésitez pas à nous contacter. Notre équipe se fera un plaisir de vous répondre dans les plus brefs délais.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="p-3 bg-gold/10 rounded-full mr-4">
                    <MapPin className="text-gold h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold">Adresse</h3>
                    <p className="text-gray-600">
                      Salle des fêtes - Mairie de Montreuil<br />
                      Métro ligne 9 – Mairie de Montreuil<br />
                      Paris, France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-gold/10 rounded-full mr-4">
                    <Mail className="text-gold h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:hadiattoubarry137@gmail.com" className="hover:text-gold transition-colors">
                        hadiattoubarry137@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-gold/10 rounded-full mr-4">
                    <Phone className="text-gold h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold">Téléphone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+2250758743691" className="hover:text-gold transition-colors">
                        +225 0758 743 691
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-gold/10 rounded-full mr-4">
                    <Clock className="text-gold h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold">Horaires</h3>
                    <p className="text-gray-600">
                      Lundi - Vendredi: 9h - 18h<br />
                      Samedi: 10h - 15h<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-2xl text-noir font-semibold mb-6">Envoyez-nous un message</h3>
                
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
                  <input type="hidden" name="_subject" value="Nouveau message de contact - Gala des Influenceurs" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="Objet de votre message"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={5} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="Votre message..."
                      required
                    ></textarea>
                  </div>
                  
                  <Button variant="primary" type="submit" className="w-full sm:w-auto">
                    <Send size={16} className="mr-2" />
                    Envoyer
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Nous Trouver" subtitle="LIEU DE L'ÉVÉNEMENT" center />
          
          <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-md">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2044685512824!2d2.437975!3d48.863622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d5c75fa7e85%3A0x7ddca3efc84d238!2sH%C3%B4tel%20de%20ville%20de%20Montreuil!5e0!3m2!1sen!2sfr!4v1647869291468!5m2!1sen!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Mairie de Montreuil Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Questions Fréquentes" subtitle="FAQ" center />
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Comment puis-je participer au Gala des Influenceurs?",
                answer: "Pour participer, vous pouvez vous inscrire via notre formulaire de participation en ligne. Les places étant limitées, nous vous recommandons de vous inscrire au plus tôt."
              },
              {
                question: "Le Gala est-il ouvert au public?",
                answer: "Le Gala est un événement sur invitation. Cependant, certaines parties du programme, comme les conférences, sont accessibles au public sur inscription préalable."
              },
              {
                question: "Comment devenir partenaire de l'événement?",
                answer: "Vous pouvez consulter nos offres de partenariat et remplir le formulaire dédié. Notre équipe vous contactera pour discuter des modalités de collaboration."
              },
              {
                question: "Y a-t-il un dress code pour l'événement?",
                answer: "Pour la soirée de gala, une tenue élégante est recommandée. Pour les conférences et panels durant la journée, une tenue business casual est appropriée."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-serif text-xl text-noir font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;