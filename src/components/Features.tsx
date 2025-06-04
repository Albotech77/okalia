import React from 'react';
import { FeatureCard } from './FeatureCard';
import { MessageSquare, Link, Pill, AlertTriangle, HeartPulse } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      title: "Interazione Naturale",
      description: "L'assistente risponde con voce empatica, anche offline. Parla in modo umano e comprensibile.",
      icon: MessageSquare,
      imageUrl: "/images/01_Interazione.png"
    },
    {
      title: "Promemoria Farmaci",
      description: "Ricorda quando assumere i medicinali. Notifiche vocali semplici, pensate per l'utente anziano.",
      icon: Pill,
      imageUrl: "/images/03_Medicina.png"
    },
    {
      title: "Rilevamento Cadute",
      description: "Monitora in modo non invasivo e segnala automaticamente eventuali emergenze.",
      icon: AlertTriangle,
      imageUrl: "/images/04_Caduta.png"
    },
    {
      title: "Collegamento Medico",
      description: "Comunica con dispositivi sanitari, raccogliendo dati solo in locale e in sicurezza.",
      icon: Link,
      imageUrl: "/images/02_VisitaMedica.png"
    },
    {
      title: "Supporto Umano Attivo",
      description: "In caso di bisogno, contatta caregiver o familiari. Sempre pronto ad aiutare.",
      icon: HeartPulse,
      imageUrl: "/images/05_Sanitari.png"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Funzionalità Principali
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Oikália offre un insieme di funzionalità essenziali pensate appositamente per garantire
            sicurezza, compagnia e supporto nella vita quotidiana.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              imageUrl={feature.imageUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};