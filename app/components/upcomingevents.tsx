import React from 'react';  

// Definimos la interfaz para el evento  
interface Event {  
  date: string;  
  title: string;  
  description: string;  
}  

// Definimos la interfaz para los props del componente Calendar  
interface CalendarProps {  
  events: Event[];  
}  

const Calendar: React.FC<CalendarProps> = ({ events }) => {  
  return (  
    <div className="space-y-4">  
      {events.map((event, index) => (  
        <EventCard key={index} event={event} />  
      ))}  
    </div>  
  );  
};  

const EventCard: React.FC<{ event: Event }> = ({ event }) => {  
  const { date, title, description } = event;  

  return (  
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4">  
      <div className="flex-1 pr-4">  
        <h3 className="text-lg font-semibold mb-1">{title}</h3>  
        <p className="text-sm text-gray-600 mb-1">{description}</p>  
        <p className="font-medium text-gray-800">Fecha: {date}</p>  
      </div>  
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">  
        Leer articulo →
      </button>  
      <hr className="my-4" />  
    </div>  
  );  
};  

export default Calendar;