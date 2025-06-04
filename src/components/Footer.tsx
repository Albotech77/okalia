import React from 'react';
import { Home, Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Home className="w-8 h-8" />
                <Heart className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-secondary-600" />
              </div>
              <span className="font-bold text-2xl">Oikália</span>
            </div>
            <p className="text-gray-400 mb-6">
              Tecnologia che si prende cura di te. Discreta, intelligente e sempre presente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Collegamenti Rapidi</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Funzionalità</a>
              </li>
              <li>
                <a href="#technology" className="text-gray-400 hover:text-white transition-colors">Tecnologia</a>
              </li>
              <li>
                <a href="#audience" className="text-gray-400 hover:text-white transition-colors">Chi Aiutiamo</a>
              </li>
              <li>
                <a href="#get-started" className="text-gray-400 hover:text-white transition-colors">Come Iniziare</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Informazioni</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Chi Siamo</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Termini e Condizioni</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Carriere</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-400" />
                <a href="mailto:info@oikalia.it" className="text-gray-400 hover:text-white transition-colors">
                  info@oikalia.it
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-gray-400" />
                <a href="tel:+390123456789" className="text-gray-400 hover:text-white transition-colors">
                  +39 012 3456 789
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-gray-400 mt-1" />
                <span className="text-gray-400">
                  Via dell'Innovazione, 42<br />
                  20100 Milano, Italia
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© 2025 Oikália – Tecnologia che si prende cura di te. Tutti i diritti riservati.</p>
          <form className="max-w-md mx-auto mt-6">
            <p className="mb-2 text-sm">Iscriviti alla nostra newsletter</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="La tua email" 
                className="flex-grow p-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-primary-600"
              />
              <button 
                type="submit" 
                className="bg-primary-600 text-white px-4 py-2 rounded-r-lg hover:bg-primary-700 transition-colors"
              >
                Iscriviti
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};