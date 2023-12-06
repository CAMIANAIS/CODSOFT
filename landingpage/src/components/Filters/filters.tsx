import React, { useState } from 'react';
import Filters from '../Filters/filters.tsx';
import './filters.css';

const FindEvents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Lógica para realizar la búsqueda con el término ingresado
    console.log('Realizando búsqueda:', searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleFilterClick = (filter: string) => {
    // Lógica para aplicar el filtro, por ejemplo, hacer una llamada a la API con el filtro
    console.log(`Filtering by category: ${filter}`);
  };

  return (
    <div className="find-events-container">
      <div className="right-side">
        <Filters />
      </div>
      <div className="left-side">
        <div className='imgContainer'>

        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar por evento"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            {/* Puedes agregar aquí tu ícono de flecha */}
            &#10148;
          </button>
          <button onClick={() => handleFilterClick('online')} className="filter-button">Online</button>
          <button onClick={() => handleFilterClick('today')} className="filter-button">Today</button>
          <button onClick={() => handleFilterClick('this weekend')} className="filter-button">This Weekend</button>
          <button onClick={() => handleFilterClick('free')} className="filter-button">Free</button>
        </div>
      </div>
    </div>
  );
};

export default FindEvents;
