"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Card from '@/app/components/card';
import SideMenu from '../components/sidemenu';
import MiniCard from '../components/minicard';
import InfoBlock from '../components/infoblock';
import Link from 'next/link'; // Importa el componente Link de Next.js
import Image from 'next/image';

// --- INTERFACES DE DATOS ---
interface Noticia {
  id: number;
  image: string;
  title: string;
  date: string;
  content: string;
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

interface MenuItem {
  label: string;
  href: string;
}

const NoticiasEventosPage: React.FC = () => {
  // --- ESTADOS ---
  const [activeMenu, setActiveMenu] = useState<string>('Noticias');
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [eventos, setEventos] = useState<Evento[]>([]);

  const menuItems: MenuItem[] = [
    { label: 'Historia', href: '#historia' },
    { label: 'Visión', href: '#vision' },
    { label: 'Misión', href: '#mision' },
    { label: 'Departamentos', href: '#departamentos' },
  ];

  const departamentos = [
    { nombre: "Departamento de Comunicaciones", href: "/departamentos/comunicaciones" },
    { nombre: "Departamento de Electrónica, Computación y Control", href: "/departamentos/electronica" },
    { nombre: "Departamento de Potencia", href: "/departamentos/potencia" },
  ];
  
  // --- LÓGICA DE DATOS ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [noticiasResponse, eventosResponse] = await Promise.all([
          axios.get('http://localhost:3000/noticias'), // Llama al endpoint que trae TODO
          axios.get('http://localhost:3000/eventos')  // Llama al endpoint que trae TODO
        ]);
        setNoticias(noticiasResponse.data);
        setEventos(eventosResponse.data);
      } catch (error) {
        console.error("Error al obtener los archivos:", error);
      }
    };
    fetchData();
  }, []);

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
            Acerca de la Escuela
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
                title="Escuela"
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
                src="/images/escuela-electrica.jpeg"
                alt="Cabecera de la sección de Noticias de Ingeniería Eléctrica"
                fill // Ocupa todo el contenedor padre
                className="object-cover transition-transform duration-500 hover:scale-105" // Imagen tipo cover y efecto hover sutil
                priority // Carga esta imagen con prioridad
              />
              {/* Superposición opcional para mejorar el contraste del título si fuera necesario */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* --- Sección de Historia --- */}
            <section id="historia" className="mb-24 scroll-mt-32">
              <InfoBlock 
                title="Historia"
                subtitle=""
                content={`La Escuela de Ingeniería Eléctrica es una de las que conforman la Facultad de Ingeniería de la Universidad Central de Venezuela. Aunque la enseñanza de la Ingeniería Eléctrica comenzó en 1948 en la Universidad Central de Venezuela, la organización de los estudios dentro del marco académico de una Escuela se concretó sólo en 1962. Para esta fecha la única universidad que impartía estudios en esta especialidad era la Universidad Central de Venezuela. La creación de los estudios de Ingeniería Eléctrica en Venezuela, en 1948, se debió a las necesidades impuestas por el creciente desarrollo tecnológico y científico, a nivel mundial, como consecuencia de la Segunda Guerra Mundial. Entre los avances tecnológicos de esta época pueden citarse el radar, las microondas, el transistor, la computadora, la televisión y la electrónica en general. Para esta fecha el número de ingenieros electricistas en Venezuela no llegaba a la media decena, egresados todos de institutos universitarios del exterior.`}
              />
            </section>

            <section id="vision" className="mb-24 scroll-mt-32">
              <InfoBlock 
                title="Visión"
                subtitle=""
                content={`Ser referencia de excelencia académica en el ámbito nacional e internacional en la formación de profesionales en el área de la Ingeniería Eléctrica, en la prestación de servicios a terceros y en el aporte al conocimiento científico y tecnológico, con capacidad de adaptación para afrontar los retos del desarrollo nacional.`}
              />
            </section>

            <section id="mision" className="mb-24 scroll-mt-32">
              <InfoBlock 
                title="Misión"
                subtitle=""
                content={`Formar profesionales de alto nivel académico y con sensibilidad social capaces de participar en el desarrollo nacional, apoyar al sector de la Ingeniería Eléctrica y contribuir con la generación de nuevos conocimientos y desarrollos tecnológicos.`}
              />
            </section>

            <section id="departamentos" className="mb-24 scroll-mt-32">
              <InfoBlock 
                title="Departamentos"
                subtitle="Estructura Académica"
                content={
                  <div className="flex flex-col space-y-4">
                    <p className="mb-2">La Escuela de Ingeniería Eléctrica se organiza en los siguientes departamentos:</p>
                    <ul className="list-none pl-0 space-y-3">
                      {departamentos.map((dep, index) => (
                        <li key={index} className="text-black">
                          <Link 
                            href={dep.href} 
                            className="font-semibold text-blue-700 hover:text-blue-900 hover:underline transition-colors"
                          >
                            {dep.nombre}
                          </Link>
                        </li>
                      ))}
                    </ul>
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

export default NoticiasEventosPage;