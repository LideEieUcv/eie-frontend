import React from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';  

interface InfoCardProps {  
  title: string;   
  description: string;   
}  

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {  
  return (  
    <div className="relative bg-white border-2 border-black p-4 m-2 w-full max-w-xs h-64 flex items-center">  
      {/* Icono a la izquierda */}  
      <div className="text-black mr-4">  
        <FontAwesomeIcon icon={faLightbulb as any} size="xl" />  
      </div>  
      
      {/* Contenedor para título y descripción */}  
      <div className="flex flex-col">  
        <h3 className="text-lg font-bold">{title}</h3>  
        <p className="text-gray-700 text-left mt-2">{description}</p>  
      </div>  
    </div>  
  );  
};  

export default InfoCard;