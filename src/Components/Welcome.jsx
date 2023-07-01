import React from 'react';
import './Welcome.css';

export const Welcome = ({ send }) => {
  const startBooking = () => {
    send('START');
  };

  return (
    <div className='Welcome item items-center m-5'>
      <p className='Welcome-title text-xl font-bold'>¡Hoy es el día!</p>
      <p className='Welcome-description text-lg mb-3 mt-5'>Compra tu vuelo y conoce un nuevo rincón del mundo, te va a sorprender las maravillas que hay para explorar.</p>
      <button onClick={startBooking} className='Welcome-cancel text-lg text-white font-semibold bg-purple-900 p-2 rounded-lg'>Comenzar</button>
    </div>
  );
}; 