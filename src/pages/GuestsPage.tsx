import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const GuestsPage: React.FC = () => {
  const guests = [
    {
      name: "Antala",
      role: "Influenceur Lifestyle",
      country: "Guinée",
      bio: "Avec plus de 2 millions d'abonnés, Antala est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/Antala.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },

    {
      name: "Hakim L'ambassadeur",
      role: "Influenceur Lifestyle",
      country: "France",
      bio: "Avec plus de 20 millions d'abonnés, Hakim est une référence dans l'univers du web-humour en Afrique.",
      image: "/images/hakim.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Matou",
      role: "Influenceur Lifestyle",
      country: "France",
      bio: "Avec plus de 3 millions d'abonnés, Antala est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/Matou.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Tifounette",
      role: "Influenceur Lifestyle",
      country: "France",
      bio: "Avec près d'1 million d'abonnés, Antala est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/Tifounette.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Nyka Gold",
      role: "Influenceur Lifestyle",
      country: "France",
      bio: "Avec plus de 3 millions d'abonnés, Antala est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/gold.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Mys Makessa",
      role: "Influenceur Lifestyle",
      country: "Guinée",
      bio: "Avec près d'1 million d'abonnés, Antala est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/makessa.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Donnetv7",
      role: "Influenceur Lifestyle",
      country: "Guinée",
      bio: "Avec plus d'1 millions d'abonnés, Antala est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/Donnetv7.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Rack Makosso",
      role: "Influenceur Lifestyle",
      country: "Guinée",
      bio: "Avec près d'1 million d'abonnés, Antala est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/makosso.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Tma Crush",
      role: "Influenceur Lifestyle",
      country: "Guinée",
      bio: "Avec près de 10 millions d'abonnés, Antala est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/crush.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Momo",
      role: "Influenceur Lifestyle",
      country: "Guinée",
      bio: "Avec plus de 2 millions d'abonnés, Antala est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/Momo.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Faguimba",
      role: "Influenceur Lifestyle",
      country: "Guinée",
      bio: "Avec plus de 10 millions d'abonnés, Antala est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/Faguimba.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Samuella",
      role: "Influenceur Lifestyle",
      country: "France",
      bio: "Avec près d'1 millions d'abonnés, Antala est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/Samuella.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Rosine",
      role: "Influenceur Lifestyle",
      country: "France",
      bio: "Avec plus de 4 millions d'abonnés, Antala est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/Rosine.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Fallou et bébé Binta",
      role: "Influenceur Lifestyle",
      country: "France",
      bio: "Avec plusieurs millions d'abonnés, Fallou et bébé Binta sont une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/Fallou_et_bébé_Binta.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Mimiche Diabaté",
      role: "Influenceur Lifestyle",
      country: "Guinée",
      bio: "Avec plusieurs millions d'abonnés, Mimiche est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/diabate.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Manioc",
      role: "Influenceur Lifestyle",
      country: "Guinée",
      bio: "Avec plusieurs millions d'abonnés, Manioc est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/Manioc.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Khalil & Mariame",
      role: "Influenceur Lifestyle",
      country: "Guinée",
      bio: "Avec plusieurs millions d'abonnés, Manioc est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/km.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Gemima Kokonzoni",
      role: "Influenceur Lifestyle",
      country: "Guinée",
      bio: "Avec plusieurs millions d'abonnés, Manioc est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/GemimaKokonzoni.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Rock Makosso",
      role: "Influenceur Lifestyle",
      country: "Guinée",
      bio: "Avec plusieurs millions d'abonnés, Manioc est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/makosso.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Gédeon TickTock",
      role: "Influenceur Lifestyle",
      country: "Guinée",
      bio: "Avec plusieurs millions d'abonnés, Manioc est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/GédeonTickTock.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Fabio",
      role: "Influenceur Lifestyle",
      country: "Guinée",
      bio: "Avec plusieurs millions d'abonnés, Manioc est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/Fabio.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Mony",
      role: "Influenceur Lifestyle",
      country: "Guinée",
      bio: "Avec plusieurs millions d'abonnés, Manioc est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/Mony.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "Billo lasko",
      role: "Influenceur Lifestyle",
      country: "Guinée",
      bio: "Avec plusieurs millions d'abonnés, Manioc est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/Billolasko.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "inconu",
      role: "Influenceur Lifestyle",
      country: "Guinée",
      bio: "Avec plusieurs millions d'abonnés, Manioc est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/inconnu1.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "inconu2",
      role: "Influenceur Lifestyle",
      country: "Guinée",
      bio: "Avec plusieurs millions d'abonnés, Manioc est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/inconnu2.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "inconu3",
      role: "Influenceur Lifestyle",
      country: "Guinée",
      bio: "Avec plusieurs millions d'abonnés, Manioc est une référence dans l'univers du lifestyle et de la mode en Afrique de l'Ouest.",
      image: "/images/inconnu3.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "inconnu4",
      role: "YouTubeur Tech",
      country: "Guinée",
      bio: "Spécialiste des nouvelles technologies, Jean-Marc démystifie l'univers tech pour ses 1.5 millions d'abonnés.",
      image: "/images/inconnu4.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "inconnu5",
      role: "Créatrice Culinaire",
      country: "Guinée",
      bio: "Passionnée de cuisine, Amina revisite les recettes traditionnelles africaines avec une touche moderne.",
      image: "/images/inconnu5.jpg",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    
  ];

  const categories = [
    "Lifestyle", "Tech", "Mode", "Beauté", "Cuisine", "Voyage", "Business", "Éducation"
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
            <h1 className="font-script text-gold text-5xl md:text-6xl mb-6">Nos Invités</h1>
            <p className="text-xl mb-8">Rencontrez les créateurs de contenu et influenceurs exceptionnels qui seront présents lors de cette édition.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <span key={index} className="px-3 py-1 bg-noir-light text-gold rounded-full text-sm">
                  {category}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marraine de l'événement */}
      <section className="py-16 bg-noir text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-script text-gold text-4xl md:text-5xl mb-4">Notre Marraine</h2>
              <p className="text-gray-300 text-xl">Une personnalité politique engagée pour la diversité et l'inclusion</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-noir-light rounded-2xl overflow-hidden shadow-xl border border-gold/20"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="/images/djeneba.jpg" 
                    alt="Djeneba KEITA" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="font-serif text-3xl text-gold mb-2">Djeneba KEITA</h3>
                  <p className="text-gray-300 font-medium mb-4">Maire Adjointe de Montreuil<br />Vice-Présidente de la Métropole du Grand Paris</p>
                  <p className="text-gray-400 mb-6">
                    Nous sommes honorés d'avoir Madame Djeneba KEITA comme marraine de cette première édition du Gala des Influenceurs. 
                    Son engagement pour la diversité, l'inclusion et le développement des talents africains en France fait d'elle une figure 
                    inspirante pour notre communauté. En tant que Maire Adjointe de Montreuil et Vice-Présidente de la Métropole du Grand Paris, 
                    elle apporte son soutien précieux à cet événement qui célèbre l'excellence et l'influence des créateurs de contenu panafricains.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="h-10 w-10 rounded-full flex items-center justify-center border border-gold text-gold hover:bg-gold hover:text-noir transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full flex items-center justify-center border border-gold text-gold hover:bg-gold hover:text-noir transition-colors">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full flex items-center justify-center border border-gold text-gold hover:bg-gold hover:text-noir transition-colors">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Guests */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Invités d'Honneur" subtitle="TÊTES D'AFFICHE" center />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {guests.map((guest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md group"
              >
                <div className="h-80 overflow-hidden relative">
                  <img 
                    src={guest.image} 
                    alt={guest.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-center space-x-3">
                      <a href={guest.social.instagram} className="h-8 w-8 rounded-full flex items-center justify-center bg-white text-gold hover:bg-gold hover:text-white transition-colors">
                        <Instagram size={16} />
                      </a>
                      <a href={guest.social.facebook} className="h-8 w-8 rounded-full flex items-center justify-center bg-white text-gold hover:bg-gold hover:text-white transition-colors">
                        <Facebook size={16} />
                      </a>
                      <a href={guest.social.twitter} className="h-8 w-8 rounded-full flex items-center justify-center bg-white text-gold hover:bg-gold hover:text-white transition-colors">
                        <Twitter size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-gold mb-1">{guest.name}</h3>
                  <p className="text-gray-400 mb-2">{guest.role}</p>
                  <p className="text-gray-500 mb-4">{guest.country}</p>
                  <p className="text-sm text-gray-300 mb-4">{guest.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 bg-noir text-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Catégories de Prix" subtitle="RÉCOMPENSES" center light />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Influenceur Lifestyle",
                description: "Récompense les créateurs de contenu lifestyle les plus influents"
              },
              {
                name: "Créateur Tech",
                description: "Pour les experts en technologie et innovation digitale"
              },
              {
                name: "Mode & Beauté",
                description: "Célèbre les influenceurs dans l'univers de la mode et de la beauté"
              },
              {
                name: "Contenu Culinaire",
                description: "Récompense les meilleurs créateurs de contenu culinaire"
              },
              {
                name: "Voyage & Aventure",
                description: "Pour les influenceurs qui font découvrir le monde"
              },
              {
                name: "Impact Social",
                description: "Récompense les créateurs engagés pour des causes importantes"
              },
              {
                name: "Entrepreneuriat",
                description: "Pour les entrepreneurs digitaux inspirants"
              },
              {
                name: "Révélation de l'Année",
                description: "Célèbre les nouveaux talents prometteurs"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-noir-light p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors"
              >
                <h3 className="font-serif text-xl font-semibold mb-2 text-gold">{category.name}</h3>
                <p className="text-gray-300 text-sm">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-script text-noir text-4xl mb-4">Vous êtes un influenceur ou créateur de contenu?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Participez à cet événement exceptionnel et rencontrez d'autres créateurs talentueux, des marques intéressées par des collaborations et échangez sur les dernières tendances.
          </p>
          <div className="flex justify-center">
            <NavLink to="/participation">
              <Button variant="primary" size="lg">Demander une accréditation</Button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuestsPage;