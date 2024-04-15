import React from 'react';

interface CardProps {
  image: string;
  title: string;
  date: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ image, title, date, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-500 text-sm mb-2">{date}</p>
        <p className="text-gray-700">{content}</p>
        <a href="#" className="inline-block mt-4 text-blue-500 hover:text-blue-700">
          Leer artículo →
        </a>
      </div>
    </div>
  );
};

export default Card;