// En app/components/personacard.tsx
import React from 'react';

interface PersonaCardProps {
  nombre: string;
  descripcion: string;
  imagen: string;
}

const PersonaCard: React.FC<PersonaCardProps> = ({ nombre, descripcion, imagen }) => {
  return (
    // 1. Convertimos la tarjeta en un contenedor Flexbox vertical que ocupa toda la altura disponible.
    <div className="h-full flex flex-col border border-gray-200 bg-white rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      
      {/* Sección de la Imagen */}
      <div className="flex-shrink-0"> {/* Evita que la imagen se encoja */}
        {/* Usamos aspect-ratio para mantener la proporción de la imagen */}
        <div className="aspect-w-1 aspect-h-1">
          <img src={imagen} alt={nombre} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* 
        Sección del Texto.
        2. La hacemos crecer para ocupar el espacio restante y la convertimos en flexbox vertical también.
      */}
      <div className="p-5 flex flex-col flex-grow">
        {/* 
          3. `flex-grow` aquí empuja el texto de descripción hacia abajo,
             llenando cualquier espacio extra y manteniendo los nombres alineados.
        */}
        <div className="flex-grow">
          <h2 className="text-xl font-bold text-gray-900">{nombre}</h2>
          
          {/* 
            4. `line-clamp` es un seguro de vida. Si una descripción es muy larga,
               la cortará con "..." para evitar que rompa el diseño.
          */}
          <p className="text-gray-600 mt-1 text-sm line-clamp-2"> 
            {descripcion}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonaCard;