"use client";
import React, { useEffect, useState } from 'react';
//import { motion } from 'framer-motion'; 
import Box from '@/app/components/mainaccess';
import Calendar from '@/app/components/upcomingevents'
import Card from '@/app/components/card';
import Newscard from './components/newscard';
import MiniCard from '@/app/components/minicard';
import { loremIpsum } from 'react-lorem-ipsum';
import axios from 'axios'; 

// Interfaces actualizadas para coincidir con el backend
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
  description?: string;
}

const Index = () => {

  const [noticias, setNoticias] = useState<Noticia[]>([]);  
  const [eventos, setEventos] = useState<Evento[]>([]);  

  useEffect(() => {  
    const fetchData = async () => {  
      try {
        const noticiasResponse = await axios.get('http://localhost:3000/noticias');
        setNoticias(noticiasResponse.data);  

        const eventosResponse = await axios.get('http://localhost:3000/eventos');  
        setEventos(eventosResponse.data);  
        
      } catch (error) {
        console.error('Error al obtener datos desde el backend:', error);  
      }  
    };  

    fetchData();
  }, []); 

  return (
    <>
    {/*Primera seccion*/}

    <div className="flex flex-col py-5 w-full px-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white">  
      <h1 className="text-5xl font-bold text-center mt-16">ESCUELA DE INGENIERIA ELECTRICA UCV</h1>  
      <h2 className="my-5 font-medium text-center text-xl">  
        Bienvenido a la Escuela de Ingeniería Eléctrica de la Facultad de Ingeniería.  
        Como parte de la <br /> política e integración de la información UCV, estamos realizando  
        la migración de nuestro <br /> sitio web al nuevo Portal.  
      </h2>  
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 mt-6">  
        <div className="flex justify-center">  
          <a href="/" className="block"> 
            <Box image={''} title={'Pregrado'} />  
          </a>  
        </div>  
        <div className="flex justify-center">  
          <a href="/" className="block"> 
            <Box image={''} title={'Pregrado'} />  
          </a>  
        </div>  
        <div className="flex justify-center">  
          <a href="/" className="block"> 
            <Box image={''} title={'Pregrado'} />  
          </a>  
        </div>  
      </div>  
    </div>

  {/* Segunda sección */}
    <div className='bg-white py-5 flex flex-col justify-center items-center w-full'>
      <div className='flex space-x-80'>
          <h1 className='font-extrabold text-3xl'>Últimas noticias</h1>
          <a href="/noticias-y-eventos" className='font-bold text-md text-black hover:text-gray-500 transition'>Más noticias<span className='ml-4'>→</span></a>
      </div>

      {/* Noticias */}
      <div className='grid grid-cols-1 gap-10 mt-10 px-5 w-full max-w-5xl'>
          {noticias.length > 0 ? (
              noticias.slice(0, 3).map((noticia) => (
                  <Card
                      key={noticia.id}
                      image={noticia.image}
                      title={noticia.title}
                      date={noticia.date}
                      content={noticia.content}
                  />
              ))
          ) : (
              <p>No hay noticias disponibles.</p>
          )}
      </div>

      {/* Próximos eventos */}
      <div className='flex space-x-80 mt-20 mb-10'>
          <h1 className='font-extrabold text-3xl'>Próximos eventos</h1>
          <a href="/noticias-y-eventos" className='font-bold text-md text-black hover:text-gray-500 transition'>Más eventos<span className='ml-4'>→</span></a>
      </div>
      <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-2/3 max-w-7xl p-4">
              {eventos.length > 0 ? (
                  eventos.map((evento, index) => (
                      <div className="flex justify-center" key={index}>
                          <MiniCard
                              title={evento.title}
                              date={evento.date}
                              day={evento.day}
                              month={evento.month}
                              hour={evento.hour}
                              content="Este es el contenido del artículo 1. Aquí puedes agregar una descripción más detallada."
                          />
                      </div>
                  ))
              ) : (
                  <p>No hay eventos disponibles.</p>
              )}
          </div>
      </div>
    </div>

      {/* Tercera seccion */}
      <div className='flex flex-col md:flex-row justify-center items-center min-h-96 bg-gray-50 w-full text-center text-black'>  
        <div className='hidden md:flex justify-center order-first w-1/2 md:w-1/3'>  
          <img src='images/ucv_pg.png' alt='CONVENIO' className='rounded-full'/>  
        </div>   

        <div className='flex flex-col items-center space-y-8 w-full md:w-1/3'>  
          <h1 className='text-lg font-semibold'>  
            Comienza tus estudios en Caracas, y terminalos en Italia con nuestro convenio  
          </h1>  
          <h2 className='text-sm font-medium text-center'>  
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore impedit debitis quam consequuntur nihil, totam commodi cum illum quos blanditiis cumque quod, delectus expedita quidem nostrum minus, odio asperiores assumenda.  
          </h2>  
          <div className='mt-4'>  
            <a  
              href="/"  
              className='w-full max-w-xs font-bold border-2 border-black text-md text-black px-4 py-2 hover:text-gray-400 transition text-center'>  
              Ver requerimientos <span className='ml-2'>→</span>  
            </a>  
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