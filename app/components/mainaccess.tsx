import React from 'react';

interface BoxProps {
    image: string;
    title: string;
  }

  const Box: React.FC<BoxProps> = ({ image, title }) => {
    return (
      <div className="border-2 border-gray-500 bg-gray-600 p-4 relative w-[350px] h-64">
        <img src={image} alt="Imagen" className="w-32 h-32 object-cover" />
        <a href="#" className="mt-10 p-2 text-white text-xl flex flex-shrink flex-grow object-fit">
          {title} →
        </a>
      </div>
    );
  };
  
  export default Box;