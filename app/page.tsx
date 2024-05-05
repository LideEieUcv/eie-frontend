import React from 'react';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import Box from '@/app/components/mainaccess';

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
      <Footer />
    </div>
  );
};

export default Index;