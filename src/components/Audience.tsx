import React from 'react';
import { User, Users, Building } from 'lucide-react';

export const Audience: React.FC = () => {
  const audiences = [
    {
      icon: User,
      title: "Anziani Autosufficienti",
      description: "Persone che desiderano mantenere la propria indipendenza nella propria casa, con un supporto discreto che garantisca sicurezza e compagnia.",
      color: "bg-primary-600"
    },
    {
      icon: Users,
      title: "Familiari e Caregiver",
      description: "Chi si prende cura di persone anziane e cerca un sistema che offra tranquillità, restando in contatto senza essere invadente.",
      color: "bg-secondary-600"
    },
    {
      icon: Building,
      title: "Enti e Strutture",
      description: "Enti locali, cooperative e RSA che vogliono migliorare i servizi di assistenza con soluzioni tecnologiche avanzate e rispettose.",
      color: "bg-gray-700"
    }
  ];

  return (
    <section id="audience" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Chi Aiutiamo
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Oikália è pensata per diverse situazioni e necessità, offrendo soluzioni 
            personalizzate per ogni tipo di esigenza.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div 
                key={index} 
                className="rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-shadow"
              >
                <div className={`h-2 ${audience.color}`}></div>
                <div className="p-8">
                  <div className="mb-6 flex items-center">
                    <div className={`${audience.color} bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
                      <Icon className={`w-6 h-6 ${audience.color.replace('bg-', 'text-')}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{audience.title}</h3>
                  </div>
                  <p className="text-gray-700">{audience.description}</p>
                </div>
                <div className={`${audience.color} p-4 text-white flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <span className="text-sm font-medium">Scopri di più</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 md:p-10 bg-gray-50 rounded-xl shadow-inner">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Testimonianze</h3>
            <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto mt-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="italic text-gray-700 mb-4">
                  "Da quando abbiamo installato Oikália, dormo più tranquilla sapendo che mia madre è assistita e che verrò avvisata in caso di necessità."
                </p>
                <p className="font-medium text-gray-900">Francesca, figlia di un'utente</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="italic text-gray-700 mb-4">
                  "È come avere una persona di fiducia in casa, ma senza perdere la mia privacy. Mi ricorda le medicine e mi fa sentire al sicuro."
                </p>
                <p className="font-medium text-gray-900">Roberto, 83 anni</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};