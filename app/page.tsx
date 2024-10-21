import React from 'react';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import Box from '@/app/components/mainaccess';
import Calendar from '@/app/components/upcomingevents'
import Card from '@/app/components/card';

const eventsData = [
  { date: '2022-09-30', title: 'Evento 1', description: 'Descripción del evento 1' },
  { date: '2022-10-15', title: 'Evento 2', description: 'Descripción del evento 2' },
  { date: '2022-10-30', title: 'Evento 3', description: 'Descripción del evento 3' },
  // Agrega más eventos si es necesario
];

const Index = () => {
  return (
    <div className="container mx-auto py-20">
      <Navbar />
      <h1 className='text-3xl font-bold mt-16'><center>ESCUELA DE INGENIERIA ELECTRICA UCV</center></h1>
      <h2 className='my-5 font-medium'><center>Bienvenido a la Escuela de Ingeniería Eléctrica de la Facultad de Ingeniería. Como parte de la <br></br>política e integración de la información UCV, estamos realizando la migración de nuestro<br></br> sitio web al nuevo Portal.</center></h2>
      <div className= "flex flex-row justify-center items-center py-4 gap-x-5 ">
        <Box image={''} title={'Pregrado'}/>
        <Box image={''} title={'Posgrado'}/>
        <Box image={''} title={'Nuevos ingresos'}/>
      </div>

      <div className='mt-10 flex flex-row justify-center items-center'>
        <div className='justify-start mr-40'>
          <h1 className='font-extrabold text-3xl'>Ultimas noticias</h1>
        </div>
        <div className='justify-end'>
          <a href="/noticias-y-eventos" className='font-bold text-md bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>Mas noticias →</a>
        </div>
      </div>

      <div className='grid grid-cols-1 mt-10 px-96 h-[400px] w-full'>
        <Card
          image="https://example.com/image1.jpg"
          title="Título del artículo 1"
          date="1 de enero de 2023"
          content="Este es el contenido del artículo 1. Aquí puedes agregar una descripción más detallada."
        />
      </div>

      <div className='justify-center flex flex-row mt-16 mb-16'>
        <Calendar events={eventsData} />
      </div>
      <Footer />
    </div>
  );
};

export default Index;