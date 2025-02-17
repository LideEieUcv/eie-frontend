import React from 'react';

interface CardProps {
  title: string;
  description: string;
  items?: string[];
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ title, description, items, buttonText }) => (
  <div className="bg-white p-4 m-2 border-2 border-black">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-gray-700">{description}</p>
    {items && (
      <ul className="list-disc list-inside mt-2 text-gray-600">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
    <div className="flex justify-end"> {/* Contenedor flex para alinear el botón a la derecha */}
      <button className="mt-4 text-black hover:text-gray-500 transition border-2 border-black p-1">
        {buttonText}
      </button>
    </div>
  </div>
);

export default Card;