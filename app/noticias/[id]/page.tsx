"use client";

import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

// --- INTERFAZ ---
// Define la estructura de datos que esperamos del backend para una noticia.
interface Noticia {
    id: number;
    title: string;
    date: string;
    content: string;
    image: string;
}

const NoticiaDetailPage: React.FC = () => {
    // --- ESTADOS ---
    const [noticia, setNoticia] = useState<Noticia | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    // --- HOOKS ---
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        // Solo ejecutamos la petición si tenemos un ID válido en la URL
        if (id) {
            const fetchNoticia = async () => {
                setIsLoading(true);
                setError('');
                try {
                    const response = await axios.get(`http://localhost:3000/noticias/${id}`);
                    setNoticia(response.data);
                } catch (err: any) { // Se especifica el tipo `any` para el error
                    if (err.response && err.response.status === 404) {
                        setError('La noticia que buscas no existe.');
                    } else {
                        setError('Ocurrió un error al cargar la noticia.');
                    }
                    console.error(err);
                } finally {
                    setIsLoading(false);
                }
            };

            fetchNoticia();
        }
    }, [id]); // El efecto se vuelve a ejecutar si el ID cambia

    // --- LÓGICA DE TRANSFORMACIÓN DEL CONTENIDO ---
    // `useMemo` recalcula `formattedContent` solo si `noticia` cambia.
    const formattedContent = useMemo(() => {
        if (!noticia?.content) {
            return ''; // Devuelve un string vacío si no hay contenido
        }
        
        // 1. Divide el texto por dos o más saltos de línea para crear un array de párrafos.
        const paragraphs = noticia.content.split(/\n\s*\n/);
        
        // 2. Envuelve cada párrafo en etiquetas <p> y los une en un solo string de HTML.
        // `.trim()` elimina espacios en blanco inútiles al inicio/final de cada párrafo.
        return paragraphs
            .filter(p => p.trim() !== '') // Elimina párrafos vacíos
            .map(p => `<p>${p.trim().replace(/\n/g, '<br />')}</p>`) // Reemplaza saltos de línea simples con <br />
            .join('');

    }, [noticia]); // La dependencia es 'noticia'

    // --- LÓGICA DE RENDERIZADO PARA CARGA Y ERRORES ---
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg text-gray-500">Cargando noticia...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col justify-center items-center h-screen text-center px-4">
                <p className="text-xl font-semibold text-red-600">{error}</p>
                <a href="/noticias-y-eventos" className="mt-4 text-blue-600 hover:underline">
                    Volver a la lista de noticias
                </a>
            </div>
        );
    }

    if (!noticia) {
        return <div className="flex justify-center items-center h-screen"><p>No se encontró la noticia.</p></div>;
    }

    // --- JSX FINAL: LA PÁGINA DE DETALLE COMPLETA ---
    return (
        <div className="bg-white py-12 sm:py-20">
            <motion.article 
                className="max-w-3xl mx-auto px-6 lg:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* 1. Cabecera del Artículo */}
                <header className="mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <a href="/noticias-y-eventos" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 mb-4">
                            ← Volver a Noticias
                        </a>
                        
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tighter">
                            {noticia.title}
                        </h1>
                        
                        <p className="mt-4 text-base text-gray-500">
                            Publicado el {noticia.date}
                        </p>
                    </motion.div>
                </header>

                {/* 2. Imagen Destacada */}
                <motion.figure 
                    className="mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <img 
                        src={noticia.image} 
                        alt={noticia.title} 
                        className="w-full h-auto object-cover rounded-xl shadow-lg"
                    />
                </motion.figure>

                {/* 3. Contenido Principal del Artículo */}
                <motion.div
                    className="
                    prose prose-lg lg:prose-xl max-w-none
                    text-gray-700
                    prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mt-12 prose-headings:mb-4
                    prose-p:leading-relaxed
                    prose-strong:text-gray-900 prose-strong:font-semibold
                    prose-ul:list-disc prose-ul:pl-6 prose-li:my-2
                    prose-a:text-blue-600 prose-a:font-semibold hover:prose-a:underline
                    "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    dangerouslySetInnerHTML={{ __html: noticia.content }}
                />
            </motion.article>
        </div>
    );
};

export default NoticiaDetailPage;