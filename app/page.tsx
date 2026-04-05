"use client";
import React, { useEffect, useState } from 'react';
import Card from '@/app/components/card';
import MiniCard from '@/app/components/minicard';
import axios from 'axios'; 
import Image from 'next/image';
interface Noticia {
  id: number;
  title: string;
  date: string;
  content: string;
  imageUrl?: string;
}

interface Evento {
  id: number;
  title: string;
  date: number;
  day: string;
  month: string;
  hour: string;
  content?: string;
}

const Index = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);  
  const [eventos, setEventos] = useState<Evento[]>([]);  
  // const [gradient, setGradient] = useState('bg-gradient-to-r from-blue-500 to-purple-600');

  useEffect(() => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:3000';
    const fetchData = async () => {  
      try {
        const noticiasResponse = await axios.get(`${backendUrl}/noticias`);
        setNoticias(noticiasResponse.data);  

        const eventosResponse = await axios.get(`${backendUrl}/eventos`);  
        setEventos(eventosResponse.data);  
        
      } catch (error) {
        console.error('Error al obtener datos desde el backend:', error);  
      }  
    };

    fetchData();

    // const colors = [
    //   'bg-gradient-to-r from-blue-500 to-purple-600',
    //   'bg-gradient-to-r from-green-500 to-orange-500',
    //   'bg-gradient-to-r from-red-500 to-cyan-500',
    //   'bg-gradient-to-r from-purple-500 to-pink-500',
    // ];
    // let index = 0;
    // const interval = setInterval(() => {
    //   index = (index + 1) % colors.length;
    //   setGradient(colors[index]);
    // }, 3000);
    // return () => clearInterval(interval);
  }, []);

function createExcerpt(html: string, length: number = 150): string {
  // 1. Elimina las etiquetas HTML usando una expresión regular.
  const text = html.replace(/<[^>]*>?/gm, '');

  // 2. Acorta el texto si es más largo que la longitud deseada.
  if (text.length <= length) {
    return text;
  }

  // 3. Corta el texto y añade '...'
  return text.substring(0, length).trim() + '...';
}

  return (
    <>
  {/*Primera seccion*/}
    {/* <div className="relative w-full h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600"> */}
    {/* <div className={`relative w-full h-screen flex items-center justify-center text-center px-4 overflow-hidden ${gradient}`}> */}
    {/* <div className="relative w-full h-screen flex items-center justify-center text-center px-4 overflow-hidden animate-wave"> */}
    <div className="relative w-full h-screen flex items-center justify-center text-center px-4 overflow-hidden background-gradient-electric">
      {/* Capa de la Imagen de Fondo */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      <div>
      {/* Contenido de Texto */}
      <div className="relative z-10 text-white max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          En la UCV impulsamos las tecnologías que mueven el mundo
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 font-light">
          Excelencia científica, infraestructura académica integral y un profesorado de alto nivel para formar a los líderes que el sector eléctrico y tecnológico necesita.
        </p>
      </div>

      <div className="relative z-10 text-white max-w-6xl mx-auto">
        {/* Tarjetas de Acceso Rápido */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Pregrado */}
          <a href="/informacion-academica#pregrado" className="block group">
            <div className="relative h-full flex flex-col overflow-hidden rounded-lg border border-white/20 bg-[url('/electrica-edifico.jpg')] bg-cover bg-center bg-no-repeat transition-all duration-300 group-hover:scale-[1.01]">
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 flex flex-col p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Pregrado</h3>
                <p className="flex-grow text-gray-100 text-sm mb-4">
                  Descubre nuestros programas de estudio, pensum y requisitos.
                </p>
                <span className="font-semibold text-white group-hover:underline">
                  Ver más →
                </span>
              </div>
            </div>
          </a>
          {/* Postgrado (Aplicamos el mismo patrón) */}
          <a href="/informacion-academica#postgrado" className="block group">
            <div className="relative h-full flex flex-col overflow-hidden rounded-lg border border-white/20 bg-[url('/torres-electricas.jpg')] bg-cover bg-center bg-no-repeat transition-all duration-300 group-hover:scale-[1.01]">
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 flex flex-col p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Postgrado</h3>
                <p className="flex-grow text-gray-100 text-sm mb-4">
                  Avanza en tu carrera con nuestras maestrías y especializaciones.
                </p>
                <span className="font-semibold text-white group-hover:underline">
                  Ver más →
                </span>
              </div>
            </div>
          </a>
          
          {/* Investigación (Aplicamos el mismo patrón) */}
          <a href="/investigacion" className="block group">
            <div className="relative h-full flex flex-col overflow-hidden rounded-lg border border-white/20 bg-[url('/coding-image.jfif')] bg-cover bg-center bg-no-repeat transition-all duration-300 group-hover:scale-[1.01]">
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 flex flex-col p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Investigación</h3>
                <p className="flex-grow text-gray-100 text-sm mb-4">
                  Conoce nuestras líneas de investigación y proyectos innovadores.
                </p>
                <span className="font-semibold text-white group-hover:underline">
                  Ver más →
                </span>
              </div>
            </div>
          </a>
          
        </div>
      </div>
    </div>
    </div>

  {/* Segunda sección */}
    {/* <div className='bg-white py-5 flex flex-col justify-center items-center w-full'> */}
    <div className="py-5 flex flex-col justify-center items-center w-full bg-gray-50">
      <div className='flex space-x-80'>
          <h1 className='font-extrabold text-3xl'>Últimas noticias</h1>
          <a href="/noticias-y-eventos" className='font-bold text-md text-black hover:text-gray-500 transition'>Más noticias<span className='ml-4'>→</span></a>
      </div>
    </div>

    <div className="py-5 flex flex-col justify-center items-center w-full bg-[linear-gradient(to_right,_white_0%,_white_35%,_#fbf0d0_35%,_#fbf0d0_100%)]">
      <div className='flex space-x-80'></div>

      {/* Noticias */}
      <div className='grid grid-cols-1 gap-10 mt-10 px-5 w-full max-w-5xl'>
          {noticias.length > 0 ? (
              noticias.slice(0, 3).map((noticia) => (
                  <Card
                      key={noticia.id}
                      id={noticia.id} 
                      image={noticia.imageUrl ?? '/images/ucv_pg.png'}//'https://via.placeholder.com/400x200?text=No+Image'}
                      title={noticia.title}
                      date={noticia.date}
                      content={createExcerpt(noticia.content)}
                  />
              ))
          ) : (
              <p>No hay noticias disponibles.</p>
          )}
      </div>

      
    </div>

  {/* Tercera seccion */}
    {/* <div className='flex flex-col md:flex-row justify-center items-center min-h-96 bg-gray-50 w-full text-center text-black'>   */}
    <div className="py-5 flex flex-col justify-center items-center w-full bg-gray-50">
      {/* Próximos eventos */}
      <div className='flex space-x-80 mt-20 mb-10'>
          <h1 className='font-extrabold text-3xl'>Próximos eventos</h1>
          <a href="/noticias-y-eventos" className='font-bold text-md text-black hover:text-gray-500 transition'>Más eventos<span className='ml-4'>→</span></a>
      </div>
      <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-2/3 max-w-7xl p-0">
              {eventos.length > 0 ? (
                  eventos.map((evento) => {
                    console.log("Mapeando evento:", evento);
                    return (
                        <div className="flex justify-center" key={evento.id}>
                        <MiniCard
                            id={evento.id}
                            title={evento.title}
                            date={evento.date}
                            day={evento.day}
                            month={evento.month}
                            hour={evento.hour}
                            content={evento.content ?? 'No hay nada que mostrar'}
                        />
                    </div>
                    );
                })
            ) : (
                <p>No hay eventos disponibles.</p>
            )}
          </div>
      </div>
    </div>

  {/* Cuarta seccion */}
    <div className='flex flex-row justify-center items-center min-h-96 bg-gray-50 text-center text-black'>
      <div className='flex-col items-start space-y-5 w-1/3 hidden md:block'>
        <h1 className='text-lg font-bold text-left ml-20'>Ciclo de inscripciones<br></br>2024-2025</h1>
        <p className='text-sm font-medium text-left ml-20'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, nihil similique. Aut sit fuga maiores voluptatibus iste suscipit corporis nesciunt tempore praesentium rerum facilis accusantium amet totam ullam, a commodi!</p>
      </div>
      <div className='flex justify-center items-center p-20'>  
        <div className='flex flex-col items-center justify-center text-center gap-y-6 w-96'>  
          <a   
            href="/"   
            className='w-full font-bold border-2 border-black text-md text-black px-4 py-2 hover:text-gray-400 transition text-center'>  
            Calendario 2024 <span className='ml-28'>→</span>  
          </a>  
          <a   
            href="/"   
            className='w-full font-bold border-2 border-black text-md text-black px-4 py-2 hover:text-gray-400 transition text-center'>  
            Recaudos de Inscripción <span className='ml-12'>→</span>  
          </a>  
          <a   
            href="/"   
            className='w-full font-bold border-2 border-black text-md text-black px-4 py-2 hover:text-gray-400 transition text-center'>  
            Programa de estudio <span className='ml-20'>→</span>  
          </a>  
        </div>  
      </div>   
    </div>
    </>
  );
};

export default Index;