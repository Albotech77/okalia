import React from 'react';
import { Settings, Home, Package } from 'lucide-react';

export const GetStarted: React.FC = () => {
  const steps = [
    {
      icon: Settings,
      title: "Installazione Assistita",
      description: "I nostri tecnici qualificati si occupano dell'installazione e configurazione completa del sistema nella tua abitazione."
    },
    {
      icon: Home,
      title: "Prova Gratuita",
      description: "Testa Oikália nel tuo ambiente domestico per 30 giorni senza impegno, con supporto telefonico dedicato."
    },
    {
      icon: Package,
      title: "Kit Preconfigurato",
      description: "Presto disponibile: ricevi un kit completo già configurato, pronto all'uso con istruzioni semplici per l'installazione."
    }
  ];

  return (
    <section id="get-started" className="py-16 md:py-24 bg-primary-600/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Come Iniziare
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Portare Oikália nella tua casa o in quella dei tuoi cari è semplice.
            Abbiamo pensato a tutto per rendere l'esperienza facile e immediata.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-primary-600"></div>
                <div className="mb-6">
                  <div className="bg-primary-600/10 w-14 h-14 rounded-full flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg max-w-4xl w-full">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Richiedi Informazioni</h3>
              <p className="text-center text-gray-700 mb-8">
                Compila il modulo per ricevere maggiori dettagli su Oikália o per prenotare una prova gratuita.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome e Cognome</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600" 
                      placeholder="Mario Rossi"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600" 
                      placeholder="mario.rossi@esempio.it"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefono</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600" 
                    placeholder="+39 123 456 7890"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Messaggio (opzionale)</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600" 
                    placeholder="Sono interessato a Oikália per..."
                  ></textarea>
                </div>
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="h-5 w-5 text-primary-600 border-gray-300 rounded focus:ring-primary-600 mt-1" 
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                    Ho letto e accetto la <a href="#" className="text-primary-600 hover:underline">privacy policy</a>
                  </label>
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                  >
                    Invia Richiesta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};