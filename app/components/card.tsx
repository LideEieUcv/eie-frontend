import React from 'react';

interface CardProps {
  image: string;
  title: string;
  date: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ image, title, date, content }) => {
  return (
    <div className="bg-white h-full border-2 border border-black overflow-hidden flex">
      <div className="w-1/2">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 p-4">
        <h1 className="text-gray-500 text-sm mb-2">{date}</h1>
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{content}</p>
        <a href="#" className="inline-block border-2 border border-black mt-10 p-2 text-blue-500 hover:text-blue-700 flex flex-shrink flex-grow object-fit">
          Leer artículo →
        </a>
      </div>
    </div>
  );
};

export default Card;