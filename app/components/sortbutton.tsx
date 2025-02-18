// SortButton.tsx  
import React from 'react';  

interface SortButtonProps {  
  sortOrder: 'asc' | 'desc';  
  setSortOrder: (order: 'asc' | 'desc') => void;  
}  

const SortButton: React.FC<SortButtonProps> = ({ sortOrder, setSortOrder }) => {  
  return (  
    <div className='flex justify-end mb-4'>  
      <button  
        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}  
        className='bg-white text-black border border-black p-2'  
      >  
        {sortOrder === 'asc' ? 'Z-A' : 'A-Z'}  
      </button>  
    </div>  
  );  
};  

export default SortButton;