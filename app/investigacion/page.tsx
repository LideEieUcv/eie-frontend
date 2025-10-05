"use client";
import React from 'react';
import MiniCard from '../components/minicard';
import InfoCard from '../components/investcard';
import { motion } from 'framer-motion'; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Index = () => {
  return (
    <div className="bg-white">
      {/* 1. Cabecera Estilo Unificado */}
      <header className="bg-gray-800 border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Investigación
          </motion.h1>
          <motion.p 
            className="mt-4 max-w-3xl mx-auto text-lg text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Descubre las áreas de investigación que definen el futuro de la ingeniería eléctrica en nuestra escuela y los eventos que impulsan la innovación.
          </motion.p>
        </div>
      </header>

      {/* 2. Cuerpo Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* --- Sección Líneas de Investigación Animada --- */}
        <motion.section 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center text-gray-900 mb-12">
            Líneas de Investigación
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants} // Stagger anidado para las tarjetas
          >
            <motion.div variants={itemVariants}>
              <InfoCard
                title="Sistemas de Potencia"
                description="Análisis y optimización de redes eléctricas modernas y sostenibles."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <InfoCard
                title="Control y Automatización"
                description="Diseño de sistemas inteligentes para procesos industriales y robótica."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <InfoCard
                title="Telecomunicaciones"
                description="Innovación en redes de comunicación, 5G y procesamiento de señales."
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* --- Sección Próximos Eventos Animada --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className='flex justify-between items-baseline mb-12 pb-3 border-b border-gray-200'>
            <h2 className='text-3xl font-bold text-gray-900'>Próximos Eventos</h2>
            <a href="/noticias-y-eventos#eventos" className='text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors whitespace-nowrap'>
              Ver todos los eventos →
            </a>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div variants={itemVariants} key={i}>
                <MiniCard
                  title="Defensa de tesis"
                  date={5} day="Martes" month="Diciembre" hour="2:00 pm"
                  content="Estudiante Juan Pérez presenta su trabajo sobre micro-redes eléctricas."
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        
      </div>
    </div>
  );
};

export default Index;