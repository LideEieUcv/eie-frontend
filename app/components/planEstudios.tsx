import React, { useState, useEffect } from 'react';

interface SemestresMap {
  [key: string]: string[]; // Esto le dice: "Cualquier string que uses como llave devolverá un array de strings"
}

const dataPlan: {
  comun: SemestresMap;
  menciones: {
    [key: string]: SemestresMap;
  };
} = {
  comun: {
    semestre1: ["Cálculo I", "Física General I", "Introducción a la Ingeniería", "Lenguaje y Comunicación", "Geometría Descriptiva I"],
    semestre2: ["Cálculo II", "Física General II", "Algebra Lineal y Geometría", "Química General I", "Laboratorio de Física I"],
    semestre3: ["Cálculo III", "Ecuaciones Diferenciales Ordinarias", "Programación", "Mecánica Aplicada", "Electiva Humanística"],
    semestre4: ["Tópicos de Física General", "Redes Eléctricas I", "Variable Compleja y Cálculos Operacionales", "Redacción de Informes"],
    semestre5: ["Cálculo Numérico", "Redes Eléctricas II", "Electrónica I", "Laboratorio de Ingeniería Eléctrica I", "Análisis de Sistemas Lineales", "Probabilidades"],
    semestre6: ["Lógica Digital", "Teoría Electromagnética", "Redes Eléctricas III", "Laboratorio de Ingeniería Eléctrica II", "Electrónica II", "Sistemas de Telecomunicaciones I"],
    semestre7: ["Sistemas de Potencia I", "Sistemas de Control I", "Comunicaciones I", "Conversión de Energía", "Sistemas Digitales I"],
  },
  menciones: {
    Potencia: {
      semestre8: ["Sistemas de Potencia II", "Ejercicio Profesional y Gerencia", "Máquinas Eléctricas I", "Plantas y Subestaciones", "Sistemas de Transmisión y Distribución"],
      semestre9: ["Sobretensiones Transitorias", "Máquinas Eléctricas II", "Laboratorio de Máquinas Eléctricas", "Sistemas de Protección I", "Trabajo de Grado I"],
      semestre10: ["Sistemas de Potencia III", "Electiva", "Ingeniería Económica", "Trabajo de Grado II"],
    },
    Comunicaciones: {
      semestre8: ["Comunicaciones II", "Ondas Guiadas", "Propagación y Antenas", "Laboratorio de Comunicaciones I", "Sistema de Telecomunicaciones II"],
      semestre9: ["Electiva", "Trabajo de Grado I", "Sistema de Telecomunicaciones III", "Laboratorio de Comunicaciones II", "Ejercicio Profesional y Gerencia"],
      semestre10: ["Electiva", "Electiva", "Trabajo de Grado II", "Ingeniería Económica"],
    },
    Electrónica: {
      semestre8: ["Electrónica III", "Laboratorio de Proyectos", "Microprocesadores I", "Conversión Electromecánica de Energía", "Sistemas de Control II"],
      semestre9: ["Electiva", "Trabajo de Grado I", "Diseño de Equipo Electrónico", "Instrumentación y Control Industrial", "Ejercicio Profesional y Gerencia"],
      semestre10: ["Electiva", "Electiva", "Trabajo de Grado II", "Ingeniería Económica"],
    },
    Industrial: {
      semestre8: ["Microprocesadores I", "Máquinas Eléctricas I", "Ejercicio Profesional y Gerencia", "Instrumentación y Control Industrial", "Canalizaciones y Distribución"],
      semestre9: ["Electrónica de Potencia I", "Máquinas Eléctricas II", "Laboratorio de Máquinas Eléctricas", "Electiva", "Trabajo de Grado I"],
      semestre10: ["Electiva", "Accionamiento y Control de Motores Eléctricos", "Trabajo de Grado II", "Ingeniería Económica"],
    },
    // Añadir Electrónica e Industrial de forma similar...
  }
};


const PlanEstudios = () => {
  const [mencion, setMencion] = useState('Potencia');

  useEffect(() => {
    console.log("Mención cambiada a:", mencion);
  }, [mencion]);

  // Función para obtener las materias de un semestre específico
  const getMaterias = (numSemestre: number) => {
    if (numSemestre <= 7) {
      return dataPlan.comun[`semestre${numSemestre}`];
    }
    console.log("Datos de la mención actual:", dataPlan.menciones[mencion]);
    return dataPlan.menciones[mencion][`semestre${numSemestre}`] || [];
  };

  

  // return (
  //   <section className="p-6 bg-white rounded-xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
  //     <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
  //       <h2 className="text-3xl font-bold text-[#1F366A]">Plan de Estudios</h2>
        
  //       {/* Menú Desplegable */}
  //       <div className="flex items-center gap-3">
  //         <label className="font-bold text-gray-700">Mención:</label>
  //         <select 
  //           value={mencion}
  //           onChange={(e) => setMencion(e.target.value)}
  //           className="p-2 border-2 border-black rounded-lg bg-gray-50 font-semibold focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
  //         >
  //           <option value="Potencia">Potencia</option>
  //           <option value="Electrónica">Electrónica</option>
  //           <option value="Comunicaciones">Comunicaciones</option>
  //           <option value="Industrial">Industrial</option>
  //         </select>
  //       </div>
  //     </div>

  //     {/* Tabla de 4 filas x 3 columnas (12 semestres en total) */}
  //     <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t-2 border-l-2 border-black">
  //       {[...Array(10)].map((_, i) => {
  //         const numSemestre = i + 1;
  //         const materias = getMaterias(numSemestre);
          
  //         return (
  //           <div key={numSemestre} className="border-r-2 border-b-2 border-black p-4 min-h-[180px] hover:bg-gray-50 transition-colors">
  //             <h3 className="font-black text-blue-800 border-b border-gray-200 mb-3 uppercase tracking-tighter">
  //               Semestre {numSemestre}
  //             </h3>
  //             <ul className="space-y-1">
  //               {materias.length > 0 ? (
  //                 materias.map((materia, idx) => (
  //                   <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
  //                     <span className="text-blue-500">•</span> {materia}
  //                   </li>
  //                 ))
  //               ) : (
  //                 <li className="text-xs text-gray-400 italic">Electivas / TEG</li>
  //               )}
  //             </ul>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </section>
  // );
  return (
    <section className="p-1">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold text-[#1F366A]">Plan de Estudios</h2>
        
        <div className="flex items-center gap-3">
          <label className="font-bold text-gray-700">Mención:</label>
          <select 
            value={mencion}
            onChange={(e) => setMencion(e.target.value)}
            className="p-2 border-2 border-black rounded-lg bg-gray-50 font-semibold outline-none cursor-pointer"
          >
            <option value="Potencia">Potencia</option>
            <option value="Electrónica">Electrónica</option>
            <option value="Comunicaciones">Comunicaciones</option>
            <option value="Industrial">Industrial</option>
          </select>
        </div>
      </div>

      {/* Tabla con bordes negros consistentes */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-l-2 border-black bg-white">
        {[...Array(10)].map((_, i) => {
          const numSemestre = i + 1;
          const materias = getMaterias(numSemestre);
          
          return (
            <div 
              key={numSemestre} 
              className="relative group border-r-2 border-b-2 border-black"
              style={{ perspective: '1000px' }} // Ayuda con la profundidad visual
            >
              {/* Esta es la capa que realmente hace el efecto hover */}
              <div className={`
                h-full w-full p-5 min-h-[190px]
                transition-all duration-300 ease-out
                bg-white
                /* Estados Hover */
                hover:z-50               // Asegura que esté por encima de todo
                hover:bg-blue-50         // Fondo azul claro
                hover:scale-[1.05]       // Escala un poco más agresiva
                hover:shadow-[10px_10px_0px_0px_rgba(31,54,106,1)] // Sombra azul UCV sólida
                relative                 // Necesario para el z-index
              `}>
                <h3 className="font-black text-blue-900 border-b border-gray-100 mb-3 uppercase tracking-tighter transition-colors group-hover:text-blue-600">
                  Semestre {numSemestre}
                </h3>
                
                <ul className="space-y-1.5">
                  {materias.length > 0 ? (
                    materias.map((materia, idx) => (
                      <li 
                        key={idx} 
                        className="text-sm text-gray-700 flex items-start gap-2 transition-all duration-300 group-hover:font-bold group-hover:text-black"
                      >
                        <span className="text-blue-500 group-hover:scale-125 transition-transform">•</span> 
                        {materia}
                      </li>
                    ))
                  ) : (
                    <li className="text-xs text-gray-400 italic">Por definir</li>
                  )}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PlanEstudios;