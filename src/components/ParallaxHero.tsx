import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import Button from './Button';

const ParallaxHero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Parallax
        className="absolute inset-0 z-0"
        translateY={[0, 30]}
        speed={-20}
      >
        <div 
          className="h-screen bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            filter: "brightness(0.4)"
          }}
        />
      </Parallax>

      <div className="absolute inset-0 bg-gradient-to-b from-noir/40 to-noir/70 z-10" />
      
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4"
        >
          <span className="font-script text-gold text-2xl md:text-3xl">Édition 2025</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6"
        >
          Gala des <span className="text-gold">Influenceurs</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-2xl text-lg md:text-xl mb-8"
        >
          Un événement panafricain célébrant l'excellence des créateurs de contenu et des influenceurs
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="primary" size="lg">S'inscrire maintenant</Button>
          <Button variant="outline" size="lg">Découvrir l'événement</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-0 right-0 text-center"
        >
          <div className="flex justify-center items-center gap-2 text-lg">
            <span className="flex flex-col items-center">
              <span className="font-script text-gold">12 Juillet 2025</span>
              <span className="text-sm mt-1">Mairie de Montreuil, Paris</span>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxHero;