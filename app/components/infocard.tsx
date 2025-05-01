import React from 'react';

interface CardProps {
  title: string;
  description: string;
  items?: string[];
  buttonText?: string; // Made optional to match Index.tsx usage
  className?: string;  // Added to support className prop
}

const Card: React.FC<CardProps> = ({ title, description, items, buttonText, className }) => (
  <div className={`bg-white p-4 m-2 border-2 border-black ${className || ''}`}>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-gray-700">{description}</p>
    {items && items.length > 0 && (
      <ul className="list-disc list-inside mt-2 text-gray-600">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
    {buttonText && (
      <div className="flex justify-end">
        <button className="mt-4 text-black font-semibold hover:text-gray-500 transition border-2 border-black p-1">
          {buttonText}
        </button>
      </div>
    )}
  </div>
);

export default Card;