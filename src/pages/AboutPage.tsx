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
                  Le <span className="text-gold font-semibold">Gala des Influenceurs</span> est né de la vision de réunir et célébrer les talents africains qui façonnent l'avenir du digital sur le continent et à l'international.
                </p>
                <p className="mb-4">
                  Initié par un collectif passionné de professionnels du marketing digital et des médias, cet événement répond à un besoin croissant de reconnaissance des créateurs de contenu africains qui, malgré leur impact considérable, restent souvent sous-représentés dans les événements internationaux.
                </p>
                <p>
                  Pour sa première édition parisienne, le Gala des Influenceurs rassemblera les figures les plus emblématiques du digital africain pour une soirée d'exception mêlant networking, conférences enrichissantes et célébration.
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
          <SectionTitle title="Notre Mission & Vision" subtitle="OBJECTIFS" center />
          
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
                  <Target className="text-gold h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold">Notre Mission</h3>
              </div>
              <p className="text-gray-700">
                Créer une plateforme prestigieuse qui reconnaît, célèbre et amplifie le travail des influenceurs panafricains, tout en favorisant les échanges professionnels et culturels entre les acteurs du digital.
              </p>
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
                  <Lightbulb className="text-gold h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold">Notre Vision</h3>
              </div>
              <p className="text-gray-700">
                Devenir l'événement de référence pour les créateurs de contenu africains, en contribuant à l'émergence d'une industrie digitale africaine forte, innovante et reconnue mondialement.
              </p>
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
          <SectionTitle title="Notre Équipe" subtitle="LES ORGANISATEURS" center light />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((person) => (
              <motion.div
                key={person}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-noir-light rounded-lg overflow-hidden group"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={`https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} 
                    alt={`Team member ${person}`} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-gold mb-1">Nom de la Personne</h3>
                  <p className="text-gray-400 mb-4">Poste / Fonction</p>
                  <p className="text-sm text-gray-300">
                    Une courte biographie ou description du rôle de cette personne dans l'organisation du Gala.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;