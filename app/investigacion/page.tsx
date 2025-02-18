"use client";
import React from 'react';
import MiniCard from '../components/minicard';
import InfoCard from '../components/investcard';

const Index = () => {
  return (
    <>
      {/* Título principal */}
      <div className='min-h-96 bg-gray-300 flex flex-col items-center justify-center text-black text-3xl lg:text-4xl font-extrabold text-center px-4 mb-5'>
        <h1>INVESTIGACION</h1>
      </div>

      {/* Lineas de investigacion */}
      <div className="flex flex-col items-start md:items-star justify-center w-full mt-0 mb-0 ml-36 md:ml-64">  
        <h1 className="font-extrabold text-3xl text-center">Líneas de investigación</h1>  
        
        {/* Contenedor centrado para las tarjetas */}  
        <div className="flex justify-center w-2/3 mt-4">  
          <div className="grid grid-cols-1 mb-10 gap-x-14 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full max-w-7xl">  
            <div className="flex justify-center">  
              <InfoCard  
                title="Línea de investigación 1"  
                description="Descripción sobre la investigación 1."  
              />  
            </div>  
            <div className="flex justify-center">  
              <InfoCard  
                title="Línea de investigación 2"  
                description="Descripción sobre la investigación 2."  
              />  
            </div>  
            <div className="flex justify-center">  
              <InfoCard  
                title="Línea de investigación 3"  
                description="Descripción sobre la investigación 3."  
              />  
            </div>  
          </div>  
        </div>  
      </div>


      {/* Proximos eventos */}
      <div className='flex space-x-12 md:space-x-[600px] md:items-center mt-5 mb-5 w-full justify-center'>  
        <h1 className='font-extrabold text-3xl'>Próximos eventos</h1>  
        <a href="/noticias-y-eventos" className='font-bold text-md text-black hover:text-gray-500 transition'>Más eventos<span className='ml-4'>→</span></a>  
      </div>  
      <div className="flex justify-center">  
        <div className="grid grid-cols-1 mb-10 gap-x-14 sm:grid-cols-2 md:grid-cols-3 gap-2 w-2/3 max-w-7xl p-4">  
          <div className="flex justify-center"> {/* Contenedor para centrar cada MiniCard */}  
            <MiniCard  
              title="Defensa de tesis"  
              date={5}  
              day="Martes"  
              month="Diciembre"  
              hour="2:00 pm"  
              content="Este es el contenido del artículo 1. Aquí puedes agregar una descripción más detallada."                         
            />  
          </div>  
          <div className="flex justify-center">  
            <MiniCard  
              title="Defensa de tesis"  
              date={5}  
              day="Martes"  
              month="Diciembre"  
              hour="2:00 pm"  
              content="Este es el contenido del artículo 1. Aquí puedes agregar una descripción más detallada."  
            />  
          </div>  
          <div className="flex justify-center">  
            <MiniCard  
              title="Defensa de tesis"  
              date={5}  
              day="Martes"  
              month="Diciembre"  
              hour="2:00 pm"  
              content="Este es el contenido del artículo 1. Aquí puedes agregar una descripción más detallada."  
            />  
          </div>  
        </div>  
      </div>
    </>
  );
};

export default Index;