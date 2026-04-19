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

const informacionAcademicaPage: React.FC = () => {
  // --- ESTADOS ---
  const [activeMenu, setActiveMenu] = useState<string>('Noticias');
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [eventos, setEventos] = useState<Evento[]>([]);

  const menuItems = [
    // { 
    //   label: 'Organización', 
    //   href: '#organizacion',
    //   subItems: [
    //     { label: 'Departamento de Potencia', href: '#departamento-potencia' },
    //     { label: 'Departamento de Comunicaciones', href: '#departamento-comunicaciones' },
    //     { label: 'Departamento de Electrónica, Computación y Control', href: '#departamento-electronica' },
    //   ]
    // },
    { label: 'Laboratorio de Máquinas Eléctricas', href: '#lab-maquinas' },
    { label: 'Laboratorio de Control', href: '#lab-control' },
    { label: 'Laboratorio de Comunicaciones', href: '#lab-comunicaciones' },
    { label: 'Laboratorio de Investigación y Desarrollo Electrónico', href: '#lide' },
  ]

  const departamentos = [
    { nombre: "Departamento de Comunicaciones", 
      href: "/departamentos/comunicaciones",
      descripcion: "El Departamento de Comunicaciones se encarga de la investigación y enseñanza en el campo de las comunicaciones, incluyendo redes, telecomunicaciones y sistemas de comunicación inalámbrica.",
      unidadesDocentes: [
      { nombre: "UD Redes", href: "/materias/redes" },
      { nombre: "UD Antenas", href: "/materias/antenas" },
      { nombre: "UD Telecomunicaciones", href: "/materias/telecomunicaciones" }
    ],
    },
    { nombre: "Departamento de Electrónica, Computación y Control", 
      href: "/departamentos/electronica",
      descripcion: "El Departamento de Electrónica, Computación y Control se enfoca en la electrónica, la informática y el control automático, abarcando áreas como sistemas embebidos, robótica y automatización.",
      unidadesDocentes: [
        { nombre: "UD Sistemas de Electrónica", href: "/materias/sistemas-electronica" },
        { nombre: "UD Informática", href: "/materias/informatica" },
        { nombre: "UD Control Automático", href: "/materias/control-automatico" }
      ]
    },
    { nombre: "Departamento de Potencia", 
      href: "/departamentos/potencia", 
      descripcion: "El Departamento de Potencia se encarga de la investigación y enseñanza en el campo de la potencia, incluyendo sistemas de generación, transmisión y distribución de energía." ,
      unidadesDocentes: [
        { nombre: "UD Sistemas de Potencia", href: "/materias/sistemas-potencia" },
        { nombre: "UD Electrónica de Potencia", href: "/materias/electronica-potencia" },
        { nombre: "UD Generación", href: "/materias/generacion" }
      ]
    },
  ];

  const laboratorios = [
    { nombre: "Laboratorio de Máquinas Eléctricas",
      id: "lab-maquinas",
      descripcion: "El Laboratorio de Máquinas Eléctricas es el espacio dedicado al estudio experimental de la conversión electromecánica de energía. En este laboratorio, los estudiantes interactúan con transformadores, motores y generadores de corriente continua y alterna. Se enfoca en el análisis de curvas de operación, eficiencia, métodos de arranque y el comportamiento de las máquinas bajo distintas condiciones de carga, siendo vital para la mención de Potencia.",
    },
    { nombre: "Laboratorio de Control",
      id: "lab-control",
      descripcion: "El Laboratorio de Control es el espacio donde los estudiantes aplican los principios de control automático para diseñar y analizar sistemas de control. Aquí se experimenta con controladores PID, sistemas de retroalimentación y técnicas avanzadas de control, siendo esencial para la mención de Control."
    },
    { nombre: "Laboratorio de Comunicaciones",
      id: "lab-comunicaciones",
      descripcion: "El Laboratorio de Comunicaciones es el espacio dedicado al estudio práctico de los sistemas de comunicación. En este laboratorio, los estudiantes trabajan con moduladores, demoduladores, antenas y equipos de transmisión para comprender los principios de las comunicaciones analógicas y digitales, siendo fundamental para la mención de Comunicaciones."
    },
    { nombre: "Laboratorio de Investigación y Desarrollo Electrónico",
      id: "lide",
      descripcion: "El Laboratorio de Investigación y Desarrollo Electrónico es el espacio donde los estudiantes pueden llevar a cabo proyectos de investigación y desarrollo en el campo de la electrónica. Aquí se fomenta la creatividad y la innovación, permitiendo a los estudiantes diseñar y construir prototipos electrónicos, siendo crucial para la mención de Electrónica."
    },
  ];
  
  // --- LÓGICA DE DATOS ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [noticiasResponse, eventosResponse] = await Promise.all([
          axios.get('http://localhost:3000/noticias/reciente'), 
          axios.get('http://localhost:3000/eventos/reciente')  // Llama al endpoint que trae TODO
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
            Laboratorios
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
                title="Laboratorios"
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
                src="https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cabecera de la sección de Laboratorios de Ingeniería Eléctrica"
                fill // Ocupa todo el contenedor padre
                className="object-cover transition-transform duration-500 hover:scale-105" // Imagen tipo cover y efecto hover sutil
                priority // Carga esta imagen con prioridad
              />
              {/* Superposición opcional para mejorar el contraste del título si fuera necesario */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* --- Sección de Organización --- */}    
            { laboratorios.map((lab, index) => (
              <section id={lab.id} className="mb-24 scroll-mt-32">
              <InfoBlock 
                key={index}
                title={lab.nombre}
                content={lab.descripcion}
              />
              </section>
            ))}

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