import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParallaxHero from '../components/ParallaxHero';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Clock, MapPin, Users, Award } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const calculateTimeLeft = () => {
  const eventDate = new Date('2025-07-12T00:00:00').getTime();
  const now = new Date().getTime();
  const difference = eventDate - now;

  if (difference < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};

const HomePage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Clock className="text-gold h-8 w-8" />,
      title: "Programmation Exclusive",
      description: "Une journée complète dédiée au networking et à la célébration de l'excellence"
    },
    {
      icon: <MapPin className="text-gold h-8 w-8" />,
      title: "Lieu Prestigieux",
      description: "Au cœur de Paris, dans la magnifique Salle des fêtes de la Mairie de Montreuil"
    },
    {
      icon: <Users className="text-gold h-8 w-8" />,
      title: "Invités de Marque",
      description: "Rencontrez les plus grands influenceurs panafricains et personnalités du digital"
    },
    {
      icon: <Award className="text-gold h-8 w-8" />,
      title: "Cérémonie de Remise de Prix",
      description: "Célébrez l'excellence avec la remise de distinctions aux meilleurs talents"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div>
      <ParallaxHero />
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="L'événement de l'année" 
            subtitle="À PROPOS DU GALA"
          />
          
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 mb-4">
                Le <span className="text-gold font-semibold">Gala des Influenceurs</span> est un événement panafricain qui célèbre l'excellence et l'innovation dans le monde digital.
              </p>
              <p className="text-gray-600 mb-6">
                Pour sa première édition à Paris, nous réunissons les créateurs de contenu les plus influents d'Afrique et de sa diaspora pour une journée exceptionnelle de networking, d'apprentissage et de reconnaissance.
              </p>
              <div className="flex gap-4">
                <NavLink to="/programme">
                  <Button variant="primary">Découvrir le programme</Button>
                </NavLink>
                <NavLink to="/invites">
                  <Button variant="outline">Nos invités</Button>
                </NavLink>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg border-l-4 border-gold shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="font-serif text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Countdown Section */}
      <section className="py-20 bg-noir text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-script text-gold text-4xl md:text-5xl mb-8">
              12 Juillet 2025
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="bg-noir-light p-6 rounded-lg border border-gold/30">
                <div className="font-serif text-4xl md:text-5xl text-gold mb-1">{timeLeft.days}</div>
                <div className="text-sm text-gray-300 uppercase tracking-widest">Jours</div>
              </div>
              <div className="bg-noir-light p-6 rounded-lg border border-gold/30">
                <div className="font-serif text-4xl md:text-5xl text-gold mb-1">{timeLeft.hours}</div>
                <div className="text-sm text-gray-300 uppercase tracking-widest">Heures</div>
              </div>
              <div className="bg-noir-light p-6 rounded-lg border border-gold/30">
                <div className="font-serif text-4xl md:text-5xl text-gold mb-1">{timeLeft.minutes}</div>
                <div className="text-sm text-gray-300 uppercase tracking-widest">Minutes</div>
              </div>
              <div className="bg-noir-light p-6 rounded-lg border border-gold/30">
                <div className="font-serif text-4xl md:text-5xl text-gold mb-1">{timeLeft.seconds}</div>
                <div className="text-sm text-gray-300 uppercase tracking-widest">Secondes</div>
              </div>
            </div>
            <NavLink to="/participation">
              <Button size="lg">Réserver votre place</Button>
            </NavLink>
          </div>
        </div>
      </section>
      
      {/* Program Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Programme" 
            subtitle="TEMPS FORTS"
            center
          />
          
          <motion.div 
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-8 relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold/30 z-0 ml-0.5"></div>
              
              {[
                {time: "18h00 - 19h00", title: "Accueil des invités et des influenceurs", desc: "Accueil des participants et distribution des badges"},
                {time: "19h00", title: "Ouverture officielle du Gala", desc: "Discours de Hakime224, ambassadeur du label HP et allocution de la marraine Djeneba KEITA, Maire Adjointe de Montreuil"},
                {time: "19h30", title: "Présentation des influenceurs", desc: "Photos, noms, pays et brèves bios des influenceurs présents"},
                {time: "20h00", title: "Spectacles et performances artistiques", desc: "Musique, danse, humour et autres performances"},
                {time: "21h00", title: "Remise de distinctions", desc: "Remise de distinctions aux influenceurs engagés"},
                {time: "21h30", title: "Cocktail et networking", desc: "Rencontres, échanges et photos entre les participants"},
                {time: "22h30 - 23h30", title: "Clôture festive", desc: "Animations et ambiance musicale pour clôturer la soirée"}
              ].map((event, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="flex group"
                >
                  <div className="flex flex-col items-center mr-8">
                    <div className="h-16 w-16 rounded-full bg-gold text-noir flex items-center justify-center font-bold z-10 group-hover:scale-110 transition-transform">
                      {event.time}
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                    <h3 className="font-serif text-xl text-noir font-semibold">{event.title}</h3>
                    <p className="text-gray-600">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="text-center mt-12">
            <NavLink to="/programme">
              <Button variant="primary">Voir le programme complet</Button>
            </NavLink>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 bg-texture bg-cover bg-center">
        <div className="absolute inset-0 bg-noir/80"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-script text-gold text-4xl md:text-5xl mb-4">
            Rejoignez-nous pour cette soirée d'exception
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto mb-8">
            Réservez dès maintenant votre place pour le Gala des Influenceurs et participez à l'événement digital panafricain le plus attendu de l'année.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/participation">
              <Button variant="primary" size="lg">Réserver ma place</Button>
            </NavLink>
            <NavLink to="/partenariat">
              <Button variant="outline" size="lg">Devenir partenaire</Button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;