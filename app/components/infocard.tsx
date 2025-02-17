import React from 'react';  

interface CardProps {  
  title: string;  
  description: string;  
  items?: string[];  
  buttonText: string;  
}  

const Card: React.FC<CardProps> = ({ title, description, items, buttonText }) => (  
  <div className="bg-white shadow-md rounded-md p-4 m-2 border">  
    <h3 className="text-lg font-semibold">{title}</h3>  
    <p className="mt-2 text-gray-700">{description}</p>  
    {items && (  
      <ul className="list-disc list-inside mt-2 text-gray-600">  
        {items.map((item, index) => (  
          <li key={index}>{item}</li>  
        ))}  
      </ul>  
    )}  
    <button className="mt-4 text-blue-500 hover:underline">{buttonText}</button>  
  </div>  
);  

export default Card;