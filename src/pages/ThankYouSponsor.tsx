import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const ThankYouSponsor: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <CheckCircle2 size={80} className="mx-auto text-gold" />
          </div>
          
          <h1 className="font-script text-4xl md:text-5xl text-noir mb-6">
            Merci pour votre demande de partenariat !
          </h1>
          
          <div className="space-y-6 text-gray-600 mb-12">
            <p className="text-lg">
              Nous avons bien reçu votre demande de partenariat pour le Gala des Influenceurs.
            </p>
            <p className="text-lg">
              Notre équipe va étudier votre proposition avec attention et vous recontactera dans les plus brefs délais.
            </p>
            <p className="text-lg">
              En attendant notre réponse, n'hésitez pas à nous contacter au +225 0758 743 691 pour toute question.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="primary" className="w-full sm:w-auto">
                Retour à l'accueil
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYouSponsor; 