import React, { useState } from 'react';
import './Search.css';

export const Search = ({ send }) => {
  const [flight, setFlight] = useState('');

  const goToPassengers = () => {
    send('CONTINUE', {selectedCountry: flight})
    }

  const handleSelectChange = (event) => {
    setFlight(event.target.value);
  };

  const options = ['Mexico', 'Venezuela', 'Colombia'];

  return (
    <div className='Search m-5 items-center'>
      <p className='Search-title text-lg font-semibold'>Encuentra tu destino</p>
      <select id="country" className='Search-select w-[65%]' value={flight} onChange={handleSelectChange}>
        <option value="" disabled defaultValue>Escoge un país</option>
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
      <button onClick={goToPassengers} disabled={flight === ''}
       className='Search-continue text-lg text-white font-semibold bg-purple-900 p-2 rounded-lg disabled:opacity-25'>
        Continuar
      </button>
    </div>
  );
}; 