import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Award } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const PartnersPage: React.FC = () => {
  const partners = [
    { 
      name: "Label HP", 
      category: "Organisateur", 
      description: "Label représenté par Hakime224, créateur digital et ambassadeur, organisateur du Gala des Influenceurs",
      logo: "/images/hakim.jpg" 
    }
  ];

  const sponsorshipTiers = [
    {
      name: "Platine",
      price: "15 000€",
      features: [
        "Logo proéminent sur tous les supports de communication",
        "Stand premium dans l'espace partenaires",
        "Intervention de 10 minutes lors de la cérémonie d'ouverture",
        "10 invitations VIP pour la soirée de gala",
        "Mention dans tous les communiqués de presse",
        "Contenu sponsorisé sur nos réseaux sociaux (4 posts)",
        "Accès à l'espace VIP durant tout l'événement"
      ]
    },
    {
      name: "Or",
      price: "10 000€",
      features: [
        "Logo sur tous les supports de communication",
        "Stand dans l'espace partenaires",
        "5 invitations VIP pour la soirée de gala",
        "Mention dans les communiqués de presse",
        "Contenu sponsorisé sur nos réseaux sociaux (2 posts)",
        "Accès à l'espace VIP durant l'événement"
      ]
    },
    {
      name: "Argent",
      price: "5 000€",
      features: [
        "Logo sur le site web et programme de l'événement",
        "Présence dans l'espace partenaires",
        "2 invitations pour la soirée de gala",
        "Mention sur nos réseaux sociaux",
        "Visibilité dans la salle de conférence"
      ]
    }
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
            <h1 className="font-script text-gold text-5xl md:text-6xl mb-6">Partenaires</h1>
            <p className="text-xl mb-8">Découvrez notre partenaire officiel du Gala des Influenceurs.</p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-16"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="w-full h-full object-cover aspect-square"
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <span className="inline-block px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
                      {partner.category}
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-noir mb-4">{partner.name}</h3>
                    <p className="text-gray-600">{partner.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-noir text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-script text-gold text-4xl md:text-5xl mb-8">
              Devenez Partenaire
            </h2>
            <p className="text-xl mb-8">
              Vous souhaitez soutenir le Gala des Influenceurs et contribuer à la mise en valeur des talents africains ?
            </p>
            <NavLink to="/partenariat">
              <Button size="lg">Rejoindre l'aventure</Button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;