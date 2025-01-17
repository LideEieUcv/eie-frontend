"use client";
import React, { useEffect, useState } from 'react';
//import { motion } from 'framer-motion'; 
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import Box from '@/app/components/mainaccess';
import Calendar from '@/app/components/upcomingevents'
import Card from '@/app/components/card';
import Newscard from './components/newscard';
import MiniCard from '@/app/components/minicard';
import { loremIpsum } from 'react-lorem-ipsum';
//import { LoremIpsum } from 'react-lorem-ipsum';

const eventsData = [
  { date: '2022-09-30', title: 'Evento 1', description: 'Descripción del evento 1' },
  { date: '2022-10-15', title: 'Evento 2', description: 'Descripción del evento 2' },
  { date: '2022-10-30', title: 'Evento 3', description: 'Descripción del evento 3' },
  // Agrega más eventos si es necesario
];

const Index = () => {
  return (
    <>
    {/*Primera seccion*/}

    <div className="mx-auto py-20 max-w-6xl px-4">  
      <h1 className="text-3xl font-bold text-center mt-16">ESCUELA DE INGENIERIA ELECTRICA UCV</h1>  
      <h2 className="my-5 font-medium text-center">  
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
    
    {/* Segunda seccion */}
      <div className='bg-white mt-10 flex flex-col justify-center items-center w-full'>
        <div className='flex space-x-80'>
          <h1 className='font-extrabold text-3xl'>Ultimas noticias</h1>
          <a href="/noticias-y-eventos" className='font-bold text-md text-black hover:text-gray-500 transition'>Mas noticias<span className='ml-4'>→</span></a>
        </div>
        <div className='grid grid-cols-1 mt-10 px-5 h-auto'>
          <Card
            image="https://example.com/image1.jpg"
            title="Título del artículo 1"
            date="1 de enero de 2023"
            content="Este es el contenido del artículo 1. Aquí puedes agregar una descripción más detallada."
          />
        </div>
        {/* Seccion de noticias 3 minimo */}
        <div className='mt-2 md:mt-2 bg-white'>  
          <Newscard  
            title='Un título de noticia largo y de prueba para ver como queda con dos líneas o tres líneas al menos'  
            date="5 de diciembre de 2023"  
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, nihil similique. Aut sit fuga maiores voluptatibus iste suscipit corporis nesciunt tempore praesentium rerum facilis accusantium amet totam ullam, a commodi!"  
            link="/"  
          /> 
        <div className='border-t border-gray-950 w-[700px] md:w-[900px] mx-auto my-4'></div>  
        </div>
        {/*Noticia 2 */}
        <div className='mt-2 md:mt-2 bg-white'>  
          <Newscard  
            title='Un título de noticia largo y de prueba para ver como queda con dos líneas o tres líneas al menos'  
            date="5 de diciembre de 2023"  
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, nihil similique. Aut sit fuga maiores voluptatibus iste suscipit corporis nesciunt tempore praesentium rerum facilis accusantium amet totam ullam, a commodi!"  
            link="/"  
          /> 
        <div className='border-t border-gray-950 w-[700px] md:w-[900px] mx-auto my-4'></div>  
        </div>
        {/*Noticia 3 */}
        <div className='mt-2 md:mt-2 bg-white'>  
          <Newscard  
            title='Un título de noticia largo y de prueba para ver como queda con dos líneas o tres líneas al menos'  
            date="5 de diciembre de 2023"  
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, nihil similique. Aut sit fuga maiores voluptatibus iste suscipit corporis nesciunt tempore praesentium rerum facilis accusantium amet totam ullam, a commodi!"  
            link="/"  
          /> 
        <div className='border-t border-gray-950 w-[700px] md:w-[900px] mx-auto my-4'></div>  
        </div>

        {/* Proximos eventos */}
        <div className='flex space-x-80 mt-20 mb-10'>  
                <h1 className='font-extrabold text-3xl'>Próximos eventos</h1>  
                <a href="/noticias-y-eventos" className='font-bold text-md text-black hover:text-gray-500 transition'>Más eventos<span className='ml-4'>→</span></a>  
            </div>  
            <div className="flex justify-center">  
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-2/3 max-w-7xl p-4">  
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