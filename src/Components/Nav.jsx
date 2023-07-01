import React from 'react';
import './Nav.css';

export const Nav = ({ state, send }) => {
  const goToWelcome = () => {
    send('CANCEL')
  }

  return (
    <nav className='Nav bg-gray-50/50'>
      <h1 className='Nav-logo'>Book a fly ✈</h1>
      {!state.matches('initial') &&
        <button onClick={goToWelcome} className='Nav-cancel bg-gray-300 p-2 rounded-lg'>Cancelar</button>
      }
    </nav>
  );
}; 