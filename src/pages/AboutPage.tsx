import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Award, Target, Globe, Lightbulb, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
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
            <h1 className="font-script text-gold text-5xl md:text-6xl mb-6">À Propos</h1>
            <p className="text-xl mb-8">Découvrez l'histoire et la mission du Gala des Influenceurs, un événement panafricain mettant à l'honneur les talents du digital.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <SectionTitle title="Notre Histoire" subtitle="GENÈSE" />
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  L'événement est organisé par le label HP, représenté par Hakime224, créateur digital et ambassadeur du label.
                </p>
                <p className="mb-4">
                  Cette première édition est réalisée en collaboration avec sa marraine officielle : Madame Djeneba KEITA, Maire Adjointe de Montreuil et Vice-Présidente de la Métropole du Grand Paris.
                </p>
                <p>
                  Ce projet est né de la volonté de rassembler et célébrer les talents africains et afrodescendants à travers l'Europe, avec un message fort d'unité, de reconnaissance et d'inspiration.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="relative h-full">
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-br from-gold/20 to-rouge/20 rounded-lg transform translate-x-4 translate-y-4"></div>
                <img 
                  src="/images/couverture.jpg" 
                  alt="Conférence d'influenceurs" 
                  className="w-full h-full object-cover rounded-lg shadow-xl relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Objectifs du Gala" subtitle="NOS MISSIONS" center />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 bg-gold/10 rounded-full mr-4">
                  <Award className="text-gold h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold">Reconnaissance & Visibilité</h3>
              </div>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Mettre à l'honneur les influenceurs et créateurs africains les plus marquants
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Donner de la visibilité et de la reconnaissance à des talents souvent invisibilisés
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 bg-gold/10 rounded-full mr-4">
                  <Users className="text-gold h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold">Unité & Collaboration</h3>
              </div>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Créer un espace de célébration entre la jeunesse africaine et la jeunesse française
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Créer des ponts entre les diasporas africaines, les marques, les artistes et les institutions
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Nos Valeurs" subtitle="CE QUI NOUS GUIDE" center />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Award className="h-10 w-10 text-gold" />,
                title: "Excellence",
                desc: "Nous valorisons le travail de qualité et l'innovation dans la création de contenu digital."
              },
              {
                icon: <Globe className="h-10 w-10 text-gold" />,
                title: "Pan-Africanisme",
                desc: "Nous célébrons la diversité et la richesse des cultures africaines à travers le digital."
              },
              {
                icon: <Users className="h-10 w-10 text-gold" />,
                title: "Collaboration",
                desc: "Nous favorisons les rencontres et les échanges entre les acteurs du digital."
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-gold" />,
                title: "Innovation",
                desc: "Nous encourageons les approches novatrices et créatives dans le monde numérique."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center p-3 bg-noir rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-noir text-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="L'Organisateur" subtitle="LE LABEL" center light />
          
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-noir-light rounded-lg overflow-hidden group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/hakim.jpg" 
                  alt="Hakime224 - Label HP" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-gold mb-2">Label HP</h3>
                <p className="text-gray-400 mb-4 text-lg">Représenté par Hakime224</p>
                <p className="text-gray-300 text-base">
                  Créateur digital et ambassadeur du label HP, Hakime224 est à l'initiative de ce grand rassemblement panafricain et culturel en Europe. Sa vision est de mettre en valeur les talents africains et de créer des ponts entre les différentes communautés.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;