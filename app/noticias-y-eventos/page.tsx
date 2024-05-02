import React from 'react';
import Card from '@/app/components/card';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

const App: React.FC = () => {
  return (
    <div className="container mx-auto py-20">
      {/* Render the Navbar component here */}
      <Navbar />

      {/* Container for the card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card
          image="https://example.com/image1.jpg"
          title="Título del artículo 1"
          date="1 de enero de 2023"
          content="Este es el contenido del artículo 1. Aquí puedes agregar una descripción más detallada."
        />
        <Card
          image="https://example.com/image2.jpg"
          title="Título del artículo 2"
          date="15 de febrero de 2023"
          content="Este es el contenido del artículo 2. Aquí puedes agregar una descripción más detallada."
        />
        <Card
          image="https://example.com/image3.jpg"
          title="Título del artículo 3"
          date="30 de marzo de 2023"
          content="Este es el contenido del artículo 3. Aquí puedes agregar una descripción más detallada."
        />
        <Card
          image="https://example.com/image3.jpg"
          title="Título del artículo 3"
          date="30 de marzo de 2023"
          content="Este es el contenido del artículo 3. Aquí puedes agregar una descripción más detallada."
        />
        <Card
          image="https://example.com/image3.jpg"
          title="Título del artículo 3"
          date="30 de marzo de 2023"
          content="Este es el contenido del artículo 3. Aquí puedes agregar una descripción más detallada."
        />
        <Card
          image="https://example.com/image3.jpg"
          title="Título del artículo 3"
          date="30 de marzo de 2023"
          content="Este es el contenido del artículo 3. Aquí puedes agregar una descripción más detallada."
        />
        <Card
          image="https://example.com/image3.jpg"
          title="Título del artículo 3"
          date="30 de marzo de 2023"
          content="Este es el contenido del artículo 3. Aquí puedes agregar una descripción más detallada."
        />
        <Card
          image="https://example.com/image3.jpg"
          title="Título del artículo 3"
          date="30 de marzo de 2023"
          content="Este es el contenido del artículo 3. Aquí puedes agregar una descripción más detallada."
        />
        <Card
          image="https://example.com/image3.jpg"
          title="Título del artículo 3"
          date="30 de marzo de 2023"
          content="Este es el contenido del artículo 3. Aquí puedes agregar una descripción más detallada."
        />
        <Footer />
      </div>
    </div>
  );
};

export default App;