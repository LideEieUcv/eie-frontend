import React from 'react';  

interface CardProps {  
    title: string;  
    date: string;  
    content: string;  
    link: string;  
}  

const Newscard: React.FC<CardProps> = ({ title, date, content, link }) => {  
    return (  
        <div className='flex flex-col justify-center items-center px-10 md:px-80 mx-auto overflow-hidden md:max-w-full text-black'>  
            <h1 className='mb-5 text-lg font-extrabold md:text-2xl md:font-bold'>{title}</h1>  
            <h2 className='text-base md:text-base text-gray-600'>{content}</h2>  
            <div className='flex items-center justify-between w-full py-5'> {/* Cambiado justify-center a justify-between */}  
                <div className='text-gray-600 flex'>  
                    {date}  
                </div>  
                <div className='flex items-end justify-end'>  
                    <a href={link} className="font-bold px-4 md:px-4 py-2 hover:text-gray-500 transition flex-shrink-0">  
                        Leer artículo →  
                    </a>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default Newscard;