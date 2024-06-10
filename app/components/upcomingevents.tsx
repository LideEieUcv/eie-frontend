import React from 'react';

const Calendar = ({ events }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {events.map((event, index) => (
        <EventCard key={index} event={event} /> // Pass entire event object for better organization
      ))}
    </div>
  );
};

const EventCard = ({ event }) => {
  const { date, time, title, description } = event; // Destructuring for cleaner access

  return (
    <div className="bg-white shadow-md rounded p-4">
      <p className="font-bold">Date:</p> {/* Added styling for clarity */}
      <p>{date}</p>
      <p className="font-bold">Time:</p> {/* Added styling for clarity */}
      <p>{time}</p>
      <h3 className="text-lg font-bold mb-2">{title}</h3> {/* Upgraded title to heading */}
      <p className="text-sm">{description}</p> {/* Added styling for description */}
    </div>
  );
};

export default Calendar;
