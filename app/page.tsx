import React from 'react';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import Box from '@/app/components/mainaccess';
import Calendar from '@/app/components/upcomingevents'
import Card from '@/app/components/card';
import MiniCard from '@/app/components/minicard';
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

    <div className='mx-auto py-20'>
      <h1 className='text-3xl font-bold mt-16'><center>ESCUELA DE INGENIERIA ELECTRICA UCV</center></h1>
      <h2 className='my-5 font-medium'><center>Bienvenido a la Escuela de Ingeniería Eléctrica de la Facultad de Ingeniería. Como parte de la <br></br>política e integración de la información UCV, estamos realizando la migración de nuestro<br></br> sitio web al nuevo Portal.</center></h2>
      <div className= "flex flex-row justify-center items-center py-4 gap-x-5">
        <Box image={''} title={'Pregrado'}/>
        <Box image={''} title={'Posgrado'}/>
        <Box image={''} title={'Nuevos ingresos'}/>
      </div>
    </div>


    {/*  
      <div className="text-wrapper">
        <LoremIpsum p={2} />
      </div>
    */}
    
    {/* Segunda seccion */}
      <div className='bg-white mt-10 flex flex-col justify-center items-center'>
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
      </div>

      {/*
      <div className='justify-center flex flex-row mt-16 mb-16'>
        <Calendar events={eventsData} />
      </div>*/}

      {/*
      <div className='flex flex-col'>
        <div className='flex'>  
          <h1 className='font-extrabold text-3xl'>Próximos eventos</h1>  
        </div>
        <div className='flex'>  
          <a href="/noticias-y-eventos" className='font-bold text-md bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>Más eventos →</a>  
        </div>
        <div className='grid grid-cols-3 w-full'>
          <MiniCard
            title="Título del artículo 1"
            date="1 de enero de 2023"
            content="Este es el contenido del artículo 1. Aquí puedes agregar una descripción más detallada."
          />
          <MiniCard
            title="Título del artículo 2"
            date="1 de enero de 2024"
            content="Este es el contenido del artículo 2. Aquí puedes agregar una descripción más detallada."
          />
          <MiniCard
            title="Título del artículo 3"
            date="1 de enero de 2025"
            content="Este es el contenido del artículo 3. Aquí puedes agregar una descripción más detallada."
          />
        </div>
      </div>*/}

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