import React from 'react';  

interface CardProps {  
    title: string;  
    date: number;  
    day: string;  
    month: string;  
    hour: string;  
    content: string;  
}  

const MiniCard: React.FC<CardProps> = ({ title, date, day, month, hour, content }) => {  
    return (  
        <div className="bg-white border-2 border-black max-w-[90%] sm:max-w-[80%] md:max-w-[50%] h-auto flex flex-col overflow-hidden p-4">  
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
                <p className="line-clamp-3">{content}</p> {/* Asegura que el contenido no se desborde */}  
            </div>  
        </div>  
    );  
};  

export default MiniCard;