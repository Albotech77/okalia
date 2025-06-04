import React from 'react';
import { Wifi, Shield, Code, Cpu } from 'lucide-react';

export const Technology: React.FC = () => {
  const values = [
    {
      icon: Wifi,
      title: "Funziona Offline",
      description: "Tutto funziona localmente, anche senza connessione a Internet, garantendo sempre assistenza."
    },
    {
      icon: Shield,
      title: "Dati Protetti",
      description: "Zero cloud esterni: pieno controllo dei dati personali e sanitari, sempre al sicuro in casa."
    },
    {
      icon: Code,
      title: "Open Source",
      description: "Tecnologia etica, trasparente e modulare, sviluppata con i più alti standard di sicurezza."
    },
    {
      icon: Cpu,
      title: "Interfaccia Semplice",
      description: "Utilizzabile anche tramite TV o dispositivi familiari, con comandi vocali intuitivi."
    }
  ];

  return (
    <section id="technology" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tecnologia e Valori
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Il cuore della nostra innovazione è il rispetto della privacy e dell'autonomia personale,
            combinato con tecnologie all'avanguardia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary-600/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-primary-600 rounded-xl overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Tecnologia con un Cuore</h3>
              <p className="text-lg mb-6">
                Oikália non è solo un prodotto tecnologico, ma un impegno concreto per il benessere 
                delle persone anziane. Ogni componente è stato progettato pensando alla sicurezza, 
                all'autonomia e alla dignità.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Discrezione</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Sicurezza</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Rispetto</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Autonomia</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Empatia</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/06_OkaliaCuore.png" 
                alt="Tecnologia con cuore" 
                className="w-full h-full object-contain bg-white" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};