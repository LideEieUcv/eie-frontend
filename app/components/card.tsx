import React from 'react';
import Link from 'next/link';

interface CardProps {
  id: number;
  image: string;
  title: string;
  date: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ id, image, title, date, content }) => {

  return (
    <div className="bg-white border-2 border-black flex mx-auto overflow-hidden w-full">
      
      {/* --- SECCIÓN DE LA IMAGEN (sin cambios) --- */}
      <div className="w-1/3 flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover"/>
      </div>

      {/* --- SECCIÓN DE TEXTO (con el cambio en el botón) --- */}
      <div className="w-2/3 p-6 flex flex-col justify-between">
        <div>
          <p className="text-gray-500 text-xs md:text-sm mb-2">{date}</p>
          <h2 className="text-base md:text-lg font-bold mb-2">{title}</h2>
          <p className="text-gray-800 text-sm md:text-base line-clamp-3">
            {content}
          </p>
        </div>
        
        <Link 
          href={`/noticias/${id}`}
          className="text-black font-bold border-2 border-black px-4 py-2 hover:text-gray-500 transition self-start w-40 text-center mt-4"
        >
          Leer artículo →
        </Link>
      </div>

    </div>
  );
};

export default Card;