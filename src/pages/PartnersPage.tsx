import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Award, Check } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const PartnersPage: React.FC = () => {
  const partners = [
    { 
      name: "AfriTech", 
      category: "Technologie", 
      description: "Leader des solutions technologiques en Afrique",
      logo: "https://images.pexels.com/photos/15013956/pexels-photo-15013956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    },
    { 
      name: "MediaPlus", 
      category: "Médias", 
      description: "Groupe médiatique panafricain de premier plan",
      logo: "https://images.pexels.com/photos/15013956/pexels-photo-15013956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    },
    { 
      name: "AfricaConnect", 
      category: "Télécommunication", 
      description: "Connecte l'Afrique au monde digital",
      logo: "https://images.pexels.com/photos/15013956/pexels-photo-15013956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    },
    { 
      name: "BeautyAfrica", 
      category: "Beauté", 
      description: "La beauté africaine à portée de main",
      logo: "https://images.pexels.com/photos/15013956/pexels-photo-15013956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    },
    { 
      name: "FashionPulse", 
      category: "Mode", 
      description: "L'élégance africaine contemporaine",
      logo: "https://images.pexels.com/photos/15013956/pexels-photo-15013956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    },
    { 
      name: "EcoBank", 
      category: "Finance", 
      description: "Solutions financières innovantes pour l'Afrique",
      logo: "https://images.pexels.com/photos/15013956/pexels-photo-15013956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
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
            <h1 className="font-script text-gold text-5xl md:text-6xl mb-6">Nos Partenaires</h1>
            <p className="text-xl mb-8">Découvrez les marques et organisations qui soutiennent le Gala des Influenceurs et contribuent à son succès.</p>
            <NavLink to="/partenariat">
              <Button variant="primary" size="lg">Devenir Partenaire</Button>
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Partenaires Officiels" subtitle="ILS NOUS SOUTIENNENT" center />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="h-40 mb-6 flex items-center justify-center">
                  <img 
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full mb-2">
                    {partner.category}
                  </span>
                  <h3 className="font-serif text-xl text-noir font-semibold mb-2">{partner.name}</h3>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sponsorship Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Opportunités de Partenariat" subtitle="REJOIGNEZ-NOUS" center />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`rounded-lg overflow-hidden ${
                  index === 0 
                    ? 'border-2 border-gold transform md:-translate-y-4 relative z-10 bg-white shadow-xl' 
                    : 'bg-white border border-gray-200 shadow-sm'
                }`}
              >
                {index === 0 && (
                  <div className="bg-gold text-noir text-center py-2 font-medium">
                    Pack Recommandé
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-script text-3xl text-center mb-2">
                    {index === 0 ? <span className="text-gold">{tier.name}</span> : tier.name}
                  </h3>
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold">{tier.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="text-gold flex-shrink-0 mr-2 mt-1" size={18} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <NavLink to="/partenariat">
                    <Button 
                      variant={index === 0 ? "primary" : "outline"} 
                      className="w-full"
                    >
                      Choisir ce pack
                    </Button>
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-noir text-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Témoignages" subtitle="CE QU'ILS DISENT DE NOUS" center light />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Être partenaire du Gala des Influenceurs a considérablement augmenté notre visibilité auprès d'une audience jeune et dynamique.",
                name: "Marie Konaté",
                position: "Directrice Marketing, AfriTech",
                image: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                quote: "Un événement exceptionnel qui nous a permis de nouer des partenariats stratégiques avec des influenceurs clés dans notre secteur.",
                name: "Paul Mendy",
                position: "CEO, MediaPlus",
                image: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-noir-light p-6 rounded-lg border border-gold/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                    <p className="font-medium text-gold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-gold/10 to-gold/5 rounded-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="font-script text-4xl text-noir mb-4">Devenez Partenaire</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Rejoignez-nous pour cette première édition parisienne et associez votre marque à un événement prestigieux célébrant l'excellence digitale africaine.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <NavLink to="/partenariat">
                <Button variant="primary" size="lg">Télécharger le dossier partenaire</Button>
              </NavLink>
              <NavLink to="/contact">
                <Button variant="outline" size="lg">Nous contacter</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;