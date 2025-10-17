"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

// Definimos la estructura del evento "crudo" que llega del backend
interface Evento {
    id: number;
    title: string;
    content: string;
    eventDate: string;
}

const EventoDetailPage: React.FC = () => {
    const [evento, setEvento] = useState<Evento | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const params = useParams();
    const id = params.id;

    useEffect(() => {
        if (id) {
            const fetchEvento = async () => {
                setIsLoading(true);
                try {
                    const response = await axios.get(`http://localhost:3000/eventos/${id}`);
                    setEvento(response.data);
                } catch (err: any) {
                    setError(err.response?.data?.message || 'Error al cargar el evento.');
                } finally {
                    setIsLoading(false);
                }
            };
            fetchEvento();
        }
    }, [id]);

    // Función para formatear la fecha
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return {
            day: date.toLocaleDateString('es-ES', { weekday: 'long' }),
            date: date.getDate(),
            month: date.toLocaleDateString('es-ES', { month: 'long' }),
            year: date.getFullYear(),
            hour: date.toLocaleTimeString('es-ES', { hour: 'numeric', minute: '2-digit', hour12: true }),
        };
    };

    if (isLoading) return <div className="text-center py-20">Cargando evento...</div>;
    if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
    if (!evento) return <div className="text-center py-20">Evento no encontrado.</div>;

    const formattedDate = formatDate(evento.eventDate);

    return (
        <div className="bg-gray-50 min-h-screen">
            <motion.article 
                className="max-w-4xl mx-auto py-16 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <a href="/noticias-y-eventos#proximos-eventos" className="inline-flex items-center text-md font-semibold text-blue-600 hover:text-blue-800 mb-8">
                    ← Volver a Eventos
                </a>
                
                <header className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10">
                    {/* Bloque de la Fecha */}
                    <div className="flex-shrink-0 text-center bg-white border border-gray-200 rounded-lg p-6 shadow-sm w-full md:w-auto">
                        <p className="text-6xl font-bold text-blue-600">{formattedDate.date}</p>
                        <p className="text-xl font-semibold text-gray-700">{formattedDate.month}, {formattedDate.year}</p>
                    </div>

                    {/* Título y Hora */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                            {evento.title}
                        </h1>
                        <p className="mt-2 text-lg text-gray-600 font-semibold">
                            {formattedDate.day.charAt(0).toUpperCase() + formattedDate.day.slice(1)} a las {formattedDate.hour}
                        </p>
                    </div>
                </header>

                <div className="border-t border-gray-200 pt-10">
                    <div 
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: evento.content }}
                    />
                </div>
            </motion.article>
        </div>
    );
};

export default EventoDetailPage;