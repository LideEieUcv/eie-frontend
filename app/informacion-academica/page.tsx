"use client";
import React from 'react';  
import Card from '../components/infocard'; // Asegúrate de que la ruta al componente Card sea correcta  

const Index = () => {  
  return (  
    <>  
      {/* Título principal */}  
      <div className='min-h-96 bg-gray-300 mb-5 flex flex-col items-center justify-center text-black text-3xl lg:text-4xl font-extrabold text-center px-4'>  
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

        <div className="bg-white mt-6 p-4 w-full max-w-4xl border border-black">  
          <h3 className="text-lg font-semibold">Convenios</h3>  
          <p>Lorem ipsum dolor sit amet consectetur. Diam vitae tellus est pellentesque. Sed suspendisse aenean...</p>  
          <button className="text-blue-500 hover:underline mt-2">Ver más →</button>  
        </div>  

        <div className="bg-white p-4 m-2 border border-black w-full max-w-4xl mt-4">  
          <h3 className="text-lg font-semibold">Nuevos ingresos</h3>  
          <p>Lorem ipsum dolor sit amet consectetur. Diam vitae tellus est pellentesque. Sed suspendisse aenean...</p>  
          <button className="text-blue-500 hover:underline mt-2">Ver más →</button>  
        </div>  
      </div>  
    </>  
  );  
};  

export default Index;