import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              <span className="text-primary-600">Oikália</span> – Discreta. Intelligente. Sempre accanto a te.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Un assistente AI che protegge la casa, ascolta con empatia e resta sempre vigile.
              Progettato per anziani autosufficienti o parzialmente autonomi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#features" 
                className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors text-center flex items-center justify-center gap-2 sm:w-auto"
              >
                Scopri come funziona
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#get-started" 
                className="bg-white text-primary-600 border border-primary-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors text-center sm:w-auto"
              >
                Richiedi una prova
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="/images/00_Hero.png" 
                alt="Anziana sorridente con un dispositivo smart"
                className="w-full h-full object-contain bg-white" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-lg font-medium">
                  "Oikália mi dà sicurezza senza farmi sentire controllata."
                </p>
                <p className="text-sm opacity-90">Maria, 78 anni</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 z-[-1] w-64 h-64 rounded-full bg-secondary-600/20 animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};