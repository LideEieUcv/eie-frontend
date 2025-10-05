import React from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';  

interface InfoCardProps {  
  title: string;   
  description: string;   
}  

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {  
  return (  
    // Contenedor principal con estilos mejorados
    <div className="h-full bg-white border border-gray-200 rounded-lg p-6 flex items-start space-x-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      
      {/* Icono a la izquierda */}
      <div className="flex-shrink-0 text-blue-500 mt-1">
        <FontAwesomeIcon icon={faLightbulb as any} size="xl" />  
      </div>  
      
      {/* Contenedor para título y descripción */}
      <div className="flex flex-col">  
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-left mt-2">{description}</p>
      </div>
    </div>
  );  
};  

export default InfoCard;