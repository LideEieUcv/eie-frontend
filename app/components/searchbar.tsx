import React from 'react';  

interface SearchBarProps {  
  searchTerm: string;  
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;  
  className?: string; // Agrega esta línea para permitir className  
}  

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm, className }) => {  
  return (  
    <input  
      type="text"  
      value={searchTerm}  
      onChange={(e) => setSearchTerm(e.target.value)}  
      className={`border p-2 rounded ${className}`} // Aplica className aquí  
      placeholder="Buscar"  
    />  
  );  
};  

export default SearchBar;