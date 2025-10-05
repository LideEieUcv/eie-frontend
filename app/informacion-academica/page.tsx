"use client";  
import React from 'react';  
import Card from '../components/infocard';  

const Index = () => {  
  return (  
    <>  
      {/* Título principal */}  
      <div className='min-h-96 bg-gradient-to-r from-blue-500 to-purple-600 mb-5 flex flex-col items-center justify-center text-black text-2xl md:text-3xl lg:text-4xl font-extrabold text-center px-4'>  
        <h1>INFORMACION ACADEMICA</h1>  
      </div>  

      {/* Contenido de las tarjetas */}  
      <div className="flex flex-col items-center p-5">  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">  
          <Card   
            title="Pregrado"   
            description="Lorem ipsum dolor sit amet consectetur. Diam vitae tellus est pellentesque. Sed suspend..."   
            items={['Horarios', 'Pensum']}   
            buttonText="Ver más →"   
          />  
          <Card   
            title="Postgrado"   
            description="Lorem ipsum dolor sit amet consectetur. Diam vitae tellus est pellentesque. Sed suspend..."   
            items={['Horarios', 'Pensum', 'Líneas de investigación']}   
            buttonText="Ver más →"   
          />  
        </div>  

        <div className="bg-white mt-6 p-4 w-full max-w-4xl border-2 border-black">  
          <h3 className="text-base md:text-lg font-semibold">Convenios</h3>  
          <p className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur. Diam vitae tellus est pellentesque. Sed suspendisse aenean...</p>  
          <div className='flex justify-end'>  
            <button className="text-black font-semibold hover:text-gray-500 transition mt-2 border-2 border-black p-1">Ver más →</button>  
          </div>  
        
        </div>  

        <div className="bg-white p-4 m-2 border-2 border-black w-full max-w-4xl mt-4">  
          <h3 className="text-base md:text-lg font-semibold">Nuevos ingresos</h3>  
          <p className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur. Diam vitae tellus est pellentesque. Sed suspendisse aenean...</p>  
          <div className="flex justify-end">  
            <button className="text-black font-semibold hover:text-gray-500 transition mt-2 border-2 border-black p-1">Ver más →</button>  
          </div>  
        </div>  
      </div>  
    </>  
  );  
};  

export default Index;