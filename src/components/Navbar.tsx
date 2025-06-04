import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 text-primary-600">
            <div className="relative">
              <img src="/images/03_LogoCerchio2.png" alt="Oikália Logo" className="w-10 h-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl">Oikália</span>
              <span className="text-xs text-gray-600 -mt-1">Sempre accanto a te</span>
            </div>
          </a>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">Funzionalità</a>
            <a href="#technology" className="text-gray-700 hover:text-primary-600 transition-colors">Tecnologia</a>
            <a href="#audience" className="text-gray-700 hover:text-primary-600 transition-colors">Chi Aiutiamo</a>
            <a href="#get-started" className="text-gray-700 hover:text-primary-600 transition-colors">Iniziare</a>
            <a 
              href="#get-started" 
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Richiedi Demo
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Funzionalità
            </a>
            <a 
              href="#technology" 
              className="text-gray-700 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Tecnologia
            </a>
            <a 
              href="#audience" 
              className="text-gray-700 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Chi Aiutiamo
            </a>
            <a 
              href="#get-started" 
              className="text-gray-700 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Iniziare
            </a>
            <a 
              href="#get-started" 
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Richiedi Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};