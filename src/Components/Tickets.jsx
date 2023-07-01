import React from 'react';
import './Tickets.css';

export const Tickets = ({ state, send}) => {
  const finish = () => {
    send('FINISH')
  };

  return (
    <div className='Tickets'>
      <p className='text-xl font-semibold m-6'>Gracias por volar con book a fly 💚</p>
      <div className='Tickets-ticket m-3'>
        <div className='Tickets-country '>Colombia</div>
        <div className='Tickets-passengers flex flex-row justify-between'>
        <ul>
          {state.context.passengers.map(passenger => 
          <li className='text-lg font-semibold m-2'>- {passenger}</li>)}
        </ul>
        </div>
      </div>
      <button onClick={finish} className='text-lg text-white font-semibold bg-purple-900 rounded-lg p-2 m-3'>
        Finalizar
      </button>
    </div>
  );
}; 