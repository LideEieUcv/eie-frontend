import React from 'react';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import Box from '@/app/components/mainaccess';
import Calendar from '@/app/components/upcomingevents'

const eventsData = [
  { date: '2022-09-30', time: '10:00 AM', title: 'Evento 1', description: 'Descripción del evento 1' },
  { date: '2022-10-15', time: '2:00 PM', title: 'Evento 2', description: 'Descripción del evento 2' },
  { date: '2022-10-30', time: '3:00 PM', title: 'Evento 3', description: 'Descripción del evento 3' },
  // Agrega más eventos si es necesario
];


const Index = () => {
  return (
    <div className="container mx-auto py-20">
      <Navbar />
      <h1><center>Escuela de ingenieria Electrica</center></h1>
      <h2><center> En contruccion, se necesita arreglar.</center></h2>
      <div className= "flex flex-row justify-center py-4 gap-x-4">
        <Box image={''} title={'Pregrado'}/>
        <Box image={''} title={'Posgrado'}/>
        <Box image={''} title={'Nuevos ingresos'}/>
      </div>
      <div className='justify-center flex flex-row '>
        <Calendar events={eventsData} />
      </div>
      <Footer />
    </div>
  );
};

export default Index;