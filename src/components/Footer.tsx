import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-noir pt-12 pb-6 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Logo />
              <span className="ml-2 text-gold font-script text-2xl">Gala des Influenceurs</span>
            </div>
            <p className="mb-6 text-sm text-gray-400">
              Un événement panafricain célébrant l'excellence et l'influence dans le monde digital.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="h-10 w-10 rounded-full flex items-center justify-center border border-gold text-gold hover:bg-gold hover:text-noir transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" className="h-10 w-10 rounded-full flex items-center justify-center border border-gold text-gold hover:bg-gold hover:text-noir transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" className="h-10 w-10 rounded-full flex items-center justify-center border border-gold text-gold hover:bg-gold hover:text-noir transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gold font-serif text-xl mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:text-gold transition-colors">Accueil</NavLink>
              </li>
              <li>
                <NavLink to="/a-propos" className="hover:text-gold transition-colors">À Propos</NavLink>
              </li>
              <li>
                <NavLink to="/programme" className="hover:text-gold transition-colors">Programme</NavLink>
              </li>
              <li>
                <NavLink to="/invites" className="hover:text-gold transition-colors">Invités</NavLink>
              </li>
              <li>
                <NavLink to="/partenaires" className="hover:text-gold transition-colors">Partenaires</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-gold transition-colors">Contact</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-serif text-xl mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="text-gold mt-1 mr-2" />
                <p className="text-sm">
                  Salle des fêtes - Mairie de Montreuil<br />
                  Métro ligne 9 – Mairie de Montreuil<br />
                  Paris, France
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-gold mr-2" />
                <a href="tel:+2250758743691" className="text-sm hover:text-gold transition-colors">+225 0758 743 691</a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-gold mr-2" />
                <a href="mailto:hadiattoubarry137@gmail.com" className="text-sm hover:text-gold transition-colors">hadiattoubarry137@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Gala des Influenceurs. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gold transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-gold transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;