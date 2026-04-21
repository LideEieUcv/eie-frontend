"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Card from '@/app/components/card';
import SideMenu from '../components/sidemenu';
import MiniCard from '../components/minicard';
import Image from 'next/image';
import InfoBlock from '../components/infoblock';
import Link from 'next/link';
import PlanEstudios from '../components/planEstudios';
import { menu } from 'framer-motion/client';

// --- INTERFACES DE DATOS ---

interface MenuItem {
  label: string;
  href: string;
}

const informacionAcademicaPage: React.FC = () => {
  // --- ESTADOS ---
  const [activeMenu, setActiveMenu] = useState<string>('Información Académica');

  const menuItems = [
    { 
      label: 'Pregrado', 
      href: '#pregrado',
      id: 'pregrado',
      subItems: [
        { label: 'Departamento de Potencia', href: '#departamento-potencia', id: 'departamento-potencia' },
        { label: 'Departamento de Comunicaciones', href: '#departamento-comunicaciones', id: 'departamento-comunicaciones' },
        { label: 'Departamento de Electrónica, Computación y Control', href: '#departamento-electronica', id: 'departamento-electronica' },
        { label: 'Pensum de Estudio', href: '#plan-estudios' },
      ]
    },
    { label: 'Postgrado', href: '#postgrado', id:'postgrado' },
  ]

  const departamentos = [
    { nombre: "Departamento de Comunicaciones", 
      href: "/departamentos/comunicaciones",
      descripcion: "El Departamento de Comunicaciones se encarga de la investigación y enseñanza en el campo de las comunicaciones, incluyendo redes, telecomunicaciones y sistemas de comunicación inalámbrica.",
      unidadesDocentes: [
      { nombre: "UD Campos, Propagación y Antenas", href: "/materias/campos-propagacion-antenas" },
      { nombre: "UD Sistemas de Comunicaciones", href: "/materias/sistemas-comunicaciones" },
      { nombre: "UD Redes y Mediciones", href: "/materias/redes-mediciones" }
    ],
    },
    { nombre: "Departamento de Electrónica, Computación y Control", 
      href: "/departamentos/electronica",
      descripcion: "El Departamento de Electrónica, Computación y Control se enfoca en la electrónica, la informática y el control automático, abarcando áreas como sistemas embebidos, robótica y automatización.",
      unidadesDocentes: [
        { nombre: "UD Análisis de Sistemas", href: "/materias/analisis-sistemas" },
        { nombre: "UD Electrónica", href: "/materias/electronica" },
        { nombre: "UD Control", href: "/materias/control" },
        { nombre: "UD Sistemas Digitales", href: "/materias/sistemas-digitales" }
      ]
    },
    { nombre: "Departamento de Potencia", 
      href: "/departamentos/potencia", 
      descripcion: "El Departamento de Potencia se encarga de la investigación y enseñanza en el campo de la potencia, incluyendo sistemas de generación, transmisión y distribución de energía." ,
      unidadesDocentes: [
        { nombre: "UD Sistemas de Potencia", href: "/materias/sistemas-potencia" },
        { nombre: "UD Máquinas Eléctricas", href: "/materias/maquinas-electricas" },
        { nombre: "UD Electrónica de Potencia", href: "/materias/electronica-potencia" },
        { nombre: "UD Protecciones", href: "/materias/protecciones" },
        { nombre: "UD Generación, Transmisión y Distribución", href: "/materias/generacion-transmision-distribucion" }
      ]
    },
  ];
  
  // --- LÓGICA DE DATOS ---

  // --- LÓGICA DE SCROLL ---
  useEffect(() => {
    // Tu lógica `handleScroll` existente es perfecta, la mantenemos aquí.
    const handleScroll = () => { /* ... */ };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Cabecera */}
      <header className="bg-[#1F366A] border-b border-gray-200">
        <div className="max-w-7xl mx-auto pt-40 pb-24 px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Información Académica
          </motion.h1>
          {/* <motion.p className="mt-4 max-w-2xl mx-auto text-lg text-white">
            Explora el historial completo de publicaciones y acontecimientos de nuestra escuela.
          </motion.p> */}
        </div>
      </header>

      {/* 2. Cuerpo Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          
          {/* 3. Menú Lateral */}
          <aside className="lg:w-1/4 mb-12 lg:mb-0">
            <div className="sticky top-24">
              <SideMenu
                title="Información Académica"
                menuItems={menuItems}
                activeMenu={activeMenu}
                onItemClick={(label) => setActiveMenu(label)}
              />
            </div>
          </aside>
          
          {/* 4. Contenido Principal */}
          <main className="lg:w-3/4">

            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-12 shadow-lg border border-gray-100">
              <Image 
                // src="https://images.unsplash.com/photo-1585860941685-337fb6ce8e0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Ruta a tu imagen (p.ej. de Unsplash)
                src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cabecera de la sección de Información Académica de Ingeniería Eléctrica"
                fill // Ocupa todo el contenedor padre
                className="object-cover transition-transform duration-500 hover:scale-105" // Imagen tipo cover y efecto hover sutil
                priority // Carga esta imagen con prioridad
              />
              {/* Superposición opcional para mejorar el contraste del título si fuera necesario */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* --- Sección de Organización --- */}
            <section id={ menuItems[0].id } className="mb-24 scroll-mt-32">
              <InfoBlock 
                title={ menuItems[0].label }
                subtitle="Estructura Académica"
                content={
                  <div className="flex flex-col space-y-4">
                    <p className="mb-2">La Escuela de Ingeniería Eléctrica se organiza en los siguientes departamentos:</p>
                    <ul className="list-none pl-0 space-y-12">
                      {departamentos.map((dep, index) => (
                        <li key={index} className="text-[#2D3748]"> {/* Color base de la fuente general */}
                          {/* Título del Departamento en gris oscuro neutral */}
                          <h3 className="font-bold text-2xl text-gray-900 tracking-tight">
                            {dep.nombre}
                          </h3>

                          {/* Descripción en gris intermedio para lectura cómoda */}
                          <p className="text-gray-600 mt-2 text-base leading-relaxed max-w-4xl">
                            {dep.descripcion}
                          </p>

                          {/* Unidades docentes */}
                          <div className="mt-6 ml-2 border-l-2 border-gray-200 pl-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-3">
                              Unidades Docentes
                            </span>
                            
                            <ul className="flex flex-col space-y-3">
                              {dep.unidadesDocentes.map((ud, udIndex) => (
                                <li key={udIndex} className="flex items-center text-gray-700 font-medium">
                                  {/* Viñeta de flecha en gris suave, no azul */}
                                  <span className="text-gray-400 mr-2 font-light">
                                    →
                                  </span>
                                  {ud.nombre}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                }
              />
            </section>

            {/* --- SECCIÓN 2: PLAN DE ESTUDIOS (La Tabla Dinámica) --- */}
            <section id="plan-estudios" className="mb-24 scroll-mt-32">
              <InfoBlock
                title='Plan de Estudios'
                content= {<PlanEstudios />}
              />
            </section>
            
            {/* --- Sección de Horarios --- */}
            <section id= { menuItems[1].id } className="mb-24 scroll-mt-32">
              <InfoBlock
                title="Postgrado"
                content= {
                  <div className="flex flex-col space-y-4">
                    <p className="mb-2">La Escuela de Ingeniería Eléctrica de la Universidad Central ha venido ofreciendo cursos de postgrado en diferentes áreas del conocimiento desde el principio de los años ochenta, cuando se inició el Curso de Maestría en Ingeniería Eléctrica, Mención Sistemas de Potencia; luego se abrieron otros dos programas: la Maestría en Ingeniería Eléctrica, Mención Sistemas Digitales y la Maestría en Ingeniería Eléctrica, Mención Sistemas de Comunicaciones. En 1994, después de un proceso de auto evaluación, se reestructura el conjunto de los Postgrados en Ingeniería Eléctrica para adaptarlos a las nuevas necesidades del País y darles la flexibilidad que obliga la evolución rápida de las tecnologías. De este diagnóstico surge la estructura actual de una Maestría individualizada en Ingeniería Eléctrica y varias Especializaciones.</p>
                  </div>
                }
              />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

// No olvides pegar tu función `createExcerpt` aquí si la necesitas
function createExcerpt(html: string, length: number = 150): string {
    const text = html.replace(/<[^>]*>?/gm, '');
    if (text.length <= length) return text;
    return text.substring(0, length).trim() + '...';
}

export default informacionAcademicaPage;