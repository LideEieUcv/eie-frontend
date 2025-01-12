import React from 'react';

interface CardProps {
  image: string;
  title: string;
  date: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ image, title, date, content }) => {
  return (
    <div className="bg-white border-2 border-black flex mx-auto overflow-hidden md:max-w-full">
      <div className="w-1/2 h-full md:w-1/2 md:max-h-max object-cover">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 space-y-6 md:w-1/2 my-5 px-8 md:px-8 md:space-y-5">
        <h1 className="text-gray-500 text-xs md:text-sm mb-2">{date}</h1>
        <h2 className="text-base md:text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-800 text-sm md:text-base py-0">{content}</p>
        <a href="#" className="text-black font-bold border-2 border-black px-4 md:px-4 py-2 hover:text-gray-500 transition flex flex-shrink flex-grow object-fit w-40">
          Leer artículo →
        </a>
      </div>
    </div>
  );
};

export default Card;