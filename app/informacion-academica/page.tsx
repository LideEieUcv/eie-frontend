"use client";  
import React from 'react';  
import Card from '../components/infocard';  

const Index = () => {  
  return (  
    <div className="bg-white">
      {/* 1. Cabecera estilo MIT */}
      <header className="bg-gray-800 border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Información Académica
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white">
            Explora nuestros programas de pregrado y postgrado, convenios institucionales y el proceso para nuevos ingresos.
          </p>
        </div>
      </header>

      {/* 2. Cuerpo Principal con Contenido Centrado */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* --- Sección de Programas Principales (Pregrado y Postgrado) --- */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
            
            {/* Card de Pregrado Mejorada */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pregrado</h2>
              <p className="text-gray-600 mb-6">
                Conoce las bases de la ingeniería eléctrica con nuestro programa de cinco años, diseñado para formar profesionales integrales y altamente capacitados.
              </p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-center"><span className="text-blue-500 mr-3">✔</span> Horarios de Clase</li>
                <li className="flex items-center"><span className="text-blue-500 mr-3">✔</span> Pensum de Estudio</li>
                <li className="flex items-center"><span className="text-blue-500 mr-3">✔</span> Proceso de Admisión</li>
              </ul>
              <a href="#" className="font-semibold text-blue-600 hover:text-blue-800">
                Descubre más sobre Pregrado →
              </a>
            </div>

            {/* Card de Postgrado Mejorada */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Postgrado</h2>
              <p className="text-gray-600 mb-6">
                Especializa tus conocimientos y avanza en tu carrera profesional con nuestras maestrías y programas de investigación avanzada.
              </p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-center"><span className="text-blue-500 mr-3">✔</span> Maestrías y Especializaciones</li>
                <li className="flex items-center"><span className="text-blue-500 mr-3">✔</span> Líneas de Investigación</li>
                <li className="flex items-center"><span className="text-blue-500 mr-3">✔</span> Requisitos de Postulación</li>
              </ul>
              <a href="#" className="font-semibold text-blue-600 hover:text-blue-800">
                Explora los Postgrados →
              </a>
            </div>

          </div>
        </section>

        {/* --- Sección de Información Adicional (Convenios y Nuevos Ingresos) --- */}
        <section>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Más Información</h2>
                <p className="mt-3 text-lg text-gray-600">Enlaces y recursos importantes para nuestra comunidad académica.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden ">
                {/* Item Convenios */}
                <a href="#" className="block p-6 bg-white hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Convenios Nacionales e Internacionales</h3>  
                            <p className="mt-1 text-gray-600">Oportunidades de estudio y colaboración con otras prestigiosas instituciones.</p>
                        </div>
                        <span className="text-gray-400 ml-4">→</span>
                    </div>
                </a>
                
                {/* Item Nuevos Ingresos con borde divisor */}
                <a href="#" className="block p-6 bg-white border-t border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Nuevos Ingresos</h3>  
                            <p className="mt-1 text-gray-600">Toda la información que necesitas para iniciar tu carrera en nuestra escuela.</p>
                        </div>
                        <span className="text-gray-400 ml-4">→</span>
                    </div>
                </a>
            </div>
        </section>

      </div>
    </div>
  );  
};  

export default Index;