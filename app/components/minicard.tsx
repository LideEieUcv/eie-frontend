import React from 'react';

interface CardProps{
    title: string;
    date: string;
    content: string;
}

const MiniCard: React.FC<CardProps> = ({ title, date, content}) => {
    return(
        <div className='bg-white border-2 border border-black overflow-hidden w-1/2 grid grid-rows-3'>
            <h1 className="text-gray-500 text-sm mb-2 flex flex-row grid-cols-2">{date}</h1>
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p className="text-gray-700">{content}</p>
        </div>
    );
};

export default MiniCard;