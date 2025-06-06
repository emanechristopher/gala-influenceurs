import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Ticket, Clock, MapPin, Users, Award, Check } from 'lucide-react';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';

const TicketsPage: React.FC = () => {
  const ticketTypes = [
    {
      name: "Standard",
      price: "50€",
      description: "Accès à l'événement et aux animations",
      features: [
        "Accès à l'événement",
        "Cocktail de bienvenue",
        "Accès aux performances",
        "Badge nominatif"
      ],
      icon: <Ticket />,
      popular: false,
      image: "/images/standard.jpg"
    },
    {
      name: "VIP",
      price: "80€",
      description: "Expérience privilégiée avec accès exclusif",
      features: [
        "Tous les avantages du billet Standard",
        "Accès à l'espace VIP",
        "Rencontre privilégiée avec les influenceurs",
        "Cocktail premium"
      ],
      icon: <Award />,
      popular: true,
      image: "/images/vip.jpg"
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
            <h1 className="font-script text-gold text-5xl md:text-6xl mb-6">Billetterie</h1>
            <p className="text-xl mb-6">Réservez votre place pour le Gala des Influenceurs et vivez une soirée d'exception.</p>
            <div className="flex justify-center items-center gap-6">
              <div className="flex items-center">
                <Clock className="text-gold mr-2" size={20} />
                <span>12 Juillet 2025</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-gold mr-2" size={20} />
                <span>Mairie de Montreuil, Paris</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ticket Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Billets" subtitle="RÉSERVEZ VOTRE PLACE" center />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {ticketTypes.map((ticket, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                  ticket.popular ? 'border-2 border-gold' : ''
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={ticket.image} 
                    alt={`Billet ${ticket.name}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-serif text-2xl font-semibold text-noir">Billet {ticket.name}</h3>
                    {ticket.popular && (
                      <span className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium">
                        Premium
                      </span>
                    )}
                  </div>
                  <div className="text-3xl font-bold text-gold mb-6">{ticket.price}</div>
                  <ul className="space-y-3 mb-8">
                    {ticket.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="text-gold flex-shrink-0 mr-2 mt-1" size={18} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <NavLink to="/participation">
                    <Button
                      variant={ticket.popular ? "primary" : "secondary"}
                      className="w-full"
                    >
                      Réserver
                    </Button>
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-noir text-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Informations Complémentaires" subtitle="DÉTAILS" center light />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-8">
            <div className="bg-noir-light p-6 rounded-lg border border-gold/20">
              <h3 className="font-serif text-xl font-semibold mb-4 text-gold">Conditions de Réservation</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Les réservations sont nominatives et non transférables</li>
                <li>• Le nombre de places est limité pour chaque catégorie</li>
                <li>• Les billets ne sont pas remboursables</li>
                <li>• Une confirmation vous sera envoyée par email</li>
              </ul>
            </div>
            
            <div className="bg-noir-light p-6 rounded-lg border border-gold/20">
              <h3 className="font-serif text-xl font-semibold mb-4 text-gold">Contact</h3>
              <p className="text-gray-300">
                Pour toute question concernant la billetterie, n'hésitez pas à nous contacter par email à 
                <a href="mailto:contact@gala-influenceurs.com" className="text-gold hover:text-gold/80 ml-1">
                  contact@gala-influenceurs.com
                </a>
                <br />
                ou par téléphone au 
                <a href="tel:+33601282020" className="text-gold hover:text-gold/80 ml-1">
                  +33 6 01 28 20 20
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TicketsPage; 