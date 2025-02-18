// PersonaCard.tsx  
import React from 'react';  

interface PersonaCardProps {  
  nombre: string;  
  descripcion: string;  
  imagen: string;  // Nueva propiedad para la imagen  
}  

const PersonaCard: React.FC<PersonaCardProps> = ({ nombre, descripcion, imagen }) => {  
  return (  
    <div className="border-2 border-black p-4 bg-white">  
      <img src={imagen} alt={nombre} className="w-full h-48 object-cover mb-4 rounded-t-lg" />  
      <h2 className="text-xl font-bold">{nombre}</h2>  
      <p>{descripcion}</p>  
    </div>  
  );  
};  

export default PersonaCard;