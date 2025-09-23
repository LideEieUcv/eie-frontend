import React from 'react';

interface CardProps {
  image: string;
  title: string;
  date: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ image, title, date, content }) => {
  return (
    // MAIN CARD CONTAINER: No changes here needed.
    <div className="bg-white border-2 border-black flex mx-auto overflow-hidden w-full">

      {/* --- IMAGE SECTION --- */}
      {/* 
        CRITICAL CHANGE 1: Define a consistent width for the image.
        Using `w-1/3` or a fixed width like `w-64` makes the layout predictable.
        `flex-shrink-0` prevents the image container from shrinking if the text is long.
      */}
      <div className="w-1/2 flex-shrink-0">
        <img 
          src={image} 
          alt={title} 
          // CRITICAL CHANGE 2: `h-full` and `object-cover` are key.
          // `h-full` tells the image to fill the entire height of its parent container.
          // `object-cover` ensures the image covers the area without distortion, cropping as needed.
          className="w-full h-full object-cover" 
        />
      </div>

      {/* --- TEXT SECTION --- */}
      {/* 
        CRITICAL CHANGE 3: Convert this into a flex column.
        This allows us to control the vertical distribution of the content inside.
        `w-2/3` makes it take the remaining space.
      */}
      <div className="w-1/2 p-6 flex flex-col justify-between">
        
        {/* TOP CONTENT: Date, Title, and Description */}
        <div>
          <p className="text-gray-500 text-xs md:text-sm mb-2">{date}</p>
          <h2 className="text-base md:text-lg font-bold mb-2">{title}</h2>
          
          {/* 
            CRITICAL CHANGE 4: Limiting the text.
            The `line-clamp-3` class (or another number) will truncate the text with "..."
            if it's too long. This is essential for preventing height overflow.
            You need to install the official Tailwind plugin for this to work.
          */}
          <p className="text-gray-800 text-sm md:text-base line-clamp-3">
            {content}
          </p>
        </div>

        {/* BOTTOM CONTENT: The Button */}
        {/* 
          This is now naturally at the bottom because of `justify-between`
          on the parent container. `mt-4` adds some space just in case.
        */}
        <a href="#" className="text-black font-bold border-2 border-black px-4 py-2 hover:text-gray-500 transition self-start w-40 text-center mt-4">
          Leer artículo →
        </a>

      </div>
    </div>
  );
};

export default Card;