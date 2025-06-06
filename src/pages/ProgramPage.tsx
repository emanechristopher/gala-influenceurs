import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Clock, MapPin, Users, Award, Globe, Coffee, Mic, Music } from 'lucide-react';
import Button from '../components/Button';

const ProgramPage: React.FC = () => {
  const schedule = [
    {
      time: "18h00 - 19h00",
      title: "Accueil des invités et des influenceurs",
      description: "Accueil des participants et distribution des badges",
      icon: <Users />,
      type: "Accueil"
    },
    {
      time: "19h00",
      title: "Ouverture officielle du Gala",
      description: "Discours de Hakime224, ambassadeur du label HP et allocution de la marraine Djeneba KEITA, Maire Adjointe de Montreuil",
      icon: <Mic />,
      type: "Cérémonie"
    },
    {
      time: "19h30",
      title: "Présentation des influenceurs",
      description: "Photos, noms, pays et brèves bios des influenceurs présents",
      icon: <Users />,
      type: "Présentation"
    },
    {
      time: "20h00",
      title: "Spectacles et performances artistiques",
      description: "Musique, danse, humour et autres performances",
      icon: <Music />,
      type: "Spectacle"
    },
    {
      time: "21h00",
      title: "Remise de distinctions",
      description: "Remise de distinctions aux influenceurs engagés",
      icon: <Award />,
      type: "Cérémonie"
    },
    {
      time: "21h30",
      title: "Cocktail et networking",
      description: "Rencontres, échanges et photos entre les participants",
      icon: <Coffee />,
      type: "Networking"
    },
    {
      time: "22h30 - 23h30",
      title: "Clôture festive",
      description: "Animations et ambiance musicale pour clôturer la soirée",
      icon: <Music />,
      type: "Clôture"
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
            <h1 className="font-script text-gold text-5xl md:text-6xl mb-6">Programme</h1>
            <p className="text-xl mb-6">Découvrez le déroulé complet de cette soirée exceptionnelle dédiée à l'influence digitale panafricaine.</p>
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

      {/* Schedule Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Programme de la soirée" subtitle="HORAIRES" center />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold/30 z-0 ml-0.5 hidden md:block"></div>
              
              {/* Schedule Items */}
              <div className="space-y-8">
                {schedule.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-4 relative group"
                  >
                    {/* Time and Icon - Hidden on mobile, visible on md+ */}
                    <div className="hidden md:flex md:w-32 flex-col items-center mr-8">
                      <div className="text-sm font-medium text-noir mb-2">{item.time.split(' - ')[0]}</div>
                      <div className="h-16 w-16 rounded-full bg-gold text-noir flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="flex-1">
                      <div className="bg-gray-50 p-6 rounded-lg shadow-sm group-hover:shadow-md transition-shadow border-l-4 border-gold">
                        {/* Time - Visible on mobile only */}
                        <div className="md:hidden text-sm font-medium text-gold mb-2">{item.time}</div>
                        
                        {/* Type Badge */}
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full mb-2">
                          {item.type}
                        </span>
                        
                        <h3 className="font-serif text-xl text-noir font-semibold">{item.title}</h3>
                        
                        <p className="text-gray-600 mt-2">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Highlights */}
      <section className="py-16 bg-noir text-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Temps Forts" subtitle="NE MANQUEZ PAS" center light />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-noir-light to-noir-dark p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors"
            >
              <Award className="h-12 w-12 text-gold mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-2 text-gold">Remise des Distinctions</h3>
              <p className="text-gray-300">
                Une cérémonie prestigieuse reconnaissant l'excellence et l'engagement des influenceurs les plus marquants.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-noir-light to-noir-dark p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors"
            >
              <Mic className="h-12 w-12 text-gold mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-2 text-gold">Discours Officiels</h3>
              <p className="text-gray-300">
                Les allocutions de Hakime224, ambassadeur du label HP, et de Djeneba KEITA, Maire Adjointe de Montreuil.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-noir-light to-noir-dark p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors"
            >
              <Music className="h-12 w-12 text-gold mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-2 text-gold">Spectacles & Animations</h3>
              <p className="text-gray-300">
                Une soirée riche en performances artistiques, musique, danse et humour pour célébrer l'excellence africaine.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-gold/10 to-rouge/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-script text-4xl text-noir mb-4">Prêt à vivre cette soirée d'exception?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Les places pour le Gala des Influenceurs sont limitées. Réservez dès maintenant pour garantir votre participation à cet événement incontournable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">Réserver ma place</Button>
            <Button variant="secondary" size="lg">Demander plus d'informations</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramPage;