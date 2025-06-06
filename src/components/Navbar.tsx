import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Award, Calendar, Users, Handshake } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-noir py-2 shadow-md' 
          : 'bg-gradient-to-b from-noir/80 to-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center" onClick={closeMenu}>
            <Logo />
            <span className="ml-2 text-gold font-script text-2xl">Gala des Influenceurs</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className={({ isActive }) => 
              `text-white hover:text-gold transition-colors ${isActive ? 'text-gold' : ''}`
            }>
              Accueil
            </NavLink>
            <NavLink to="/a-propos" className={({ isActive }) => 
              `text-white hover:text-gold transition-colors ${isActive ? 'text-gold' : ''}`
            }>
              À Propos
            </NavLink>
            <NavLink to="/programme" className={({ isActive }) => 
              `text-white hover:text-gold transition-colors ${isActive ? 'text-gold' : ''}`
            }>
              Programme
            </NavLink>
            <NavLink to="/invites" className={({ isActive }) => 
              `text-white hover:text-gold transition-colors ${isActive ? 'text-gold' : ''}`
            }>
              Invités
            </NavLink>
            <NavLink to="/billeterie" className={({ isActive }) => 
              `text-white hover:text-gold transition-colors ${isActive ? 'text-gold' : ''}`
            }>
              Billeterie
            </NavLink>
            <NavLink to="/partenaires" className={({ isActive }) => 
              `text-white hover:text-gold transition-colors ${isActive ? 'text-gold' : ''}`
            }>
              Partenaires
            </NavLink>
            <div className="relative group">
              <button className="text-white hover:text-gold transition-colors flex items-center">
                Formulaires
                <span className="ml-1">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-noir-light overflow-hidden scale-0 group-hover:scale-100 transition-transform origin-top duration-200">
                <div className="py-1">
                  <NavLink to="/accreditation" className="block px-4 py-2 text-sm text-white hover:bg-gold hover:text-noir transition-colors">
                    Médias
                  </NavLink>
                  <NavLink to="/participation" className="block px-4 py-2 text-sm text-white hover:bg-gold hover:text-noir transition-colors">
                    Influenceurs
                  </NavLink>
                  <NavLink to="/partenariat" className="block px-4 py-2 text-sm text-white hover:bg-gold hover:text-noir transition-colors">
                    Sponsors & Partenaires
                  </NavLink>
                </div>
              </div>
            </div>
            <NavLink to="/contact" className={({ isActive }) => 
              `text-white hover:text-gold transition-colors ${isActive ? 'text-gold' : ''}`
            }>
              Contact
            </NavLink>
            <NavLink 
              to="/participation" 
              className="ml-4 px-5 py-2 bg-gold text-noir font-medium rounded hover:bg-gold-light transition-colors"
            >
              S'inscrire
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-gold transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-noir z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col p-4 space-y-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `flex items-center p-2 ${isActive ? 'bg-gold text-noir' : 'text-white'} rounded`
            }
            onClick={closeMenu}
          >
            <Award className="mr-2" size={20} />
            Accueil
          </NavLink>
          <NavLink 
            to="/a-propos" 
            className={({ isActive }) => 
              `flex items-center p-2 ${isActive ? 'bg-gold text-noir' : 'text-white'} rounded`
            }
            onClick={closeMenu}
          >
            <Award className="mr-2" size={20} />
            À Propos
          </NavLink>
          <NavLink 
            to="/programme" 
            className={({ isActive }) => 
              `flex items-center p-2 ${isActive ? 'bg-gold text-noir' : 'text-white'} rounded`
            }
            onClick={closeMenu}
          >
            <Calendar className="mr-2" size={20} />
            Programme
          </NavLink>
          <NavLink 
            to="/invites" 
            className={({ isActive }) => 
              `flex items-center p-2 ${isActive ? 'bg-gold text-noir' : 'text-white'} rounded`
            }
            onClick={closeMenu}
          >
            <Users className="mr-2" size={20} />
            Invités
          </NavLink>
          <NavLink 
            to="/billeterie" 
            className={({ isActive }) => 
              `flex items-center p-2 ${isActive ? 'bg-gold text-noir' : 'text-white'} rounded`
            }
            onClick={closeMenu}
          >
            <Users className="mr-2" size={20} />
            Billeterie
          </NavLink>
          <NavLink 
            to="/partenaires" 
            className={({ isActive }) => 
              `flex items-center p-2 ${isActive ? 'bg-gold text-noir' : 'text-white'} rounded`
            }
            onClick={closeMenu}
          >
            <Handshake className="mr-2" size={20} />
            Partenaires
          </NavLink>
          <div className="border-t border-gold-dark pt-2">
            <p className="text-gold mb-2">Formulaires</p>
            <NavLink 
              to="/accreditation" 
              className={({ isActive }) => 
                `block pl-4 py-2 ${isActive ? 'text-gold' : 'text-white'}`
              }
              onClick={closeMenu}
            >
              Médias
            </NavLink>
            <NavLink 
              to="/participation" 
              className={({ isActive }) => 
                `block pl-4 py-2 ${isActive ? 'text-gold' : 'text-white'}`
              }
              onClick={closeMenu}
            >
              Influenceurs
            </NavLink>
            <NavLink 
              to="/partenariat" 
              className={({ isActive }) => 
                `block pl-4 py-2 ${isActive ? 'text-gold' : 'text-white'}`
              }
              onClick={closeMenu}
            >
              Sponsors & Partenaires
            </NavLink>
          </div>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `flex items-center p-2 ${isActive ? 'bg-gold text-noir' : 'text-white'} rounded`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <NavLink 
            to="/participation" 
            className="mt-4 py-3 bg-gold text-noir font-bold rounded text-center"
            onClick={closeMenu}
          >
            S'inscrire
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;