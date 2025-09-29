"use client";
import React from 'react';
import MiniCard from '../components/minicard';
import InfoCard from '../components/investcard';

const Index = () => {
  return (
    <>
      {/* Título principal*/}
      <div className='min-h-96 bg-gray-300 flex flex-col items-center justify-center text-black text-3xl lg:text-4xl font-extrabold text-center px-4 mb-5'>
        <h1>INVESTIGACIÓN</h1>
      </div>

      {/* --- SECCIÓN PRINCIPAL DE CONTENIDO --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* --- Sección Líneas de Investigación --- */}
        <section className="mb-20">
          <h1 className="font-extrabold text-3xl text-center mb-10">Líneas de investigación</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </section>

        {/* --- Sección Próximos Eventos --- */}
        <section>
          {/* Título y enlace de "Más eventos" */}
          <div className='flex justify-between items-center mb-10'>
            <h1 className='font-extrabold text-3xl'>Próximos eventos</h1>
            <a href="/noticias-y-eventos" className='font-bold text-md text-black hover:text-gray-500 transition whitespace-nowrap'>
              Más eventos<span className='ml-4'>→</span>
            </a>
          </div>

          {/* El grid de eventos, similar al de arriba */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </section>
        
      </div>
    </>
  );
};

export default Index;