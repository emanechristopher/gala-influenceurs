import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-noir text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <CheckCircle className="w-24 h-24 text-gold mx-auto" />
        </motion.div>

        <h1 className="font-script text-gold text-5xl md:text-6xl mb-6">
          Merci !
        </h1>

        <p className="text-xl mb-8 text-gray-300">
          Votre demande de participation a bien été reçue. Nous vous contacterons dans les plus brefs délais pour confirmer votre inscription.
        </p>

        <div className="space-y-4">
          <NavLink to="/">
            <Button variant="primary" size="lg" className="w-full md:w-auto">
              Retour à l'accueil
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </NavLink>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Si vous avez des questions, n'hésitez pas à nous contacter à{' '}
          <a href="mailto:emanechristopherpro@gmail.com" className="text-gold hover:underline">
            emanechristopherpro@gmail.com
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default ThankYouPage; 