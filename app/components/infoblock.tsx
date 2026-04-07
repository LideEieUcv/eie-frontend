import React from 'react';

interface InfoBlockProps {
  title: string;
  subtitle?: string;
  content: string | React.ReactNode;
  className?: string; // Para permitir ajustes de ancho externo
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, subtitle, content, className }) => {
  return (
    <div className={`w-full h-auto border-t border-black p-6 md:p-10 bg-transparent ${className}`}>
      {/* Título */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-2 leading-tight">
        {title}
      </h1>

      {/* Subtítulo (Opcional) */}
      {subtitle && (
        <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6 italic">
          {subtitle}
        </h2>
      )}

      {/* Línea divisoria sutil (opcional, puedes quitarla) */}
      <hr className="border-t border-black/20 mb-6" />

      {/* Contenido de la redacción */}
      <div className="text-gray-900 leading-relaxed text-lg whitespace-pre-line">
        {content}
      </div>
    </div>
  );
};

export default InfoBlock;