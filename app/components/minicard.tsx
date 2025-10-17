import React from 'react';
import Link from 'next/link';

interface CardProps {
    id: number;
    title: string;
    date: number;
    day: string;
    month: string;
    hour: string;
    content: string;
}

const MiniCard: React.FC<CardProps> = ({ id, title, date, day, month, hour, content }) => {
    return (
        <Link 
            href={`/eventos/${id}`} 
            className="block h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
            <div className="bg-white border-2 border-black w-full h-full flex flex-col overflow-hidden p-4">
                <div className="flex flex-col sm:flex-row sm:items-center p-3 w-full">
                    <div className="flex flex-col justify-center text-5xl font-bold w-full sm:w-1/3 mb-2 sm:mb-0">
                        <h1>{date}</h1>
                    </div>
                    <div className="flex flex-col justify-center w-full sm:w-2/3">
                        <h1 className="font-bold text-lg">{month}</h1>
                        <h2 className="text-sm">{day}, {hour}</h2>
                    </div>
                </div>
                <div className="text-base text-gray-700">
                    <h1 className="font-semibold">{title}</h1>
                </div>
                <div className="font-extrabold text-lg">
                    <p className="line-clamp-3">{content}</p>
                </div>
            </div>
        </Link>
    );
};

export default MiniCard;