import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  imageUrl,
  index
}) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group"
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      data-aos-delay={index * 100}
    >
      <div className="relative h-64 overflow-hidden">  {/* Aumentata l'altezza da h-48 a h-64 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-600/30 group-hover:opacity-80 transition-opacity"></div>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-contain bg-white transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full">
          <Icon className="w-6 h-6 text-primary-600" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};