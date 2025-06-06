import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
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
              <a href="https://www.instagram.com/hakime224lambassadeur?igsh=OXNkZXl4cGhzMDl2" className="h-10 w-10 rounded-full flex items-center justify-center border border-gold text-gold hover:bg-gold hover:text-noir transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61550626066761" className="h-10 w-10 rounded-full flex items-center justify-center border border-gold text-gold hover:bg-gold hover:text-noir transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.tiktok.com/@gala12juillet2025" className="h-10 w-10 rounded-full flex items-center justify-center border border-gold text-gold hover:bg-gold hover:text-noir transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
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