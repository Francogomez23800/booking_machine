import React, { useState } from 'react';
import './Passengers.css';

export const Passengers = ({ state, send }) => {
  const [value, changeValue] = useState('');

  const onChangeInput = (e) => {
    changeValue(e.target.value);
  }

  const goToTicket = () => {
    send('DONE')
  }

  const submit = (e) => {
    e.preventDefault();
    send('ADD', {newPassenger: value})
    changeValue('');
  }

  return (    
    <form onSubmit={submit} className='Passengers m-5 items-center'>
      <p className='text-lg font-semibold'>
        Agrega a las personas que van a volar ✈️
      </p>
      {state.context.passengers.length > 0 && (
      <ul className='bg-purple-900/30 p-3 m-3 rounded-lg flex flex-col'>
        <p className='w-full text-center text-gray-600 text-xl font-bold mb-3 '>Passengers</p>
        {state.context.passengers.map(
          (passenger, index) => <li key={index} className='text-lg font-semibold mb-1'>- {passenger}</li>
        )}
      </ul>
      )}
      <input 
        id="name" 
        name="name" 
        type="text" 
        placeholder='Escribe el nombre completo' 
        required 
        value={value} 
        onChange={onChangeInput}
      />
      <div className='Passengers-buttons'>
        <button 
          className='text-lg text-black font-semibold bg-gray-50/50 p-2 rounded-lg'
          type="submit"
        >
          Agregar Pasajero
        </button>
        <button
          className='text-lg text-white font-semibold bg-purple-900 p-2 rounded-lg'
          type="button"
          onClick={goToTicket}
        >
          Ver mi ticket
        </button>
      </div>
    </form>

  );
};