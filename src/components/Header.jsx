import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Header = () => {

          // cosume
  

  return (
    <div className='w-full border shadow-md py-4 fixed top-0 bg-white z-10'>
      <header className='text-center'>
          <h1 className='text-3xl font-bold uppercase'>Code Yukti</h1>
      </header>
    </div>
  );
}

export default Header;
