import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo, createLight, createDark } from './assets';
import { Home, CreatePost } from './pages';

import './App.css';

const App = () => {
  // Theme
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>

        <Link to='/'>
          <img src={logo} alt='logo' title='Home' className='w-16 object-contain rounded-full hover:opacity-70 transition duration-300 ease-in-out' />
        </Link>

        {/*  className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md' */}
        <Link to='/create-post'>
          {toggleTheme && theme === 'light' ? (
            <img src={createLight} alt='create' title='Create Image' className='w-28 object-contain rounded-md hover:opacity-70 transition duration-300 ease-in-out' />
          ) : (
            <img src={createDark} alt='create' title='Create Image' className='w-28 object-contain rounded-md hover:opacity-70 transition duration-300 ease-in-out' />
          )}
        </Link>

      </header>

      <main className='sm:p-8 px-4 py-8 w-full  min-h-[calc(100vh-73px)]'>
        <div className='theme_mode'>
          {/* <p className='theme_mode-p'>Theme: </p> */}
          <button className='theme_mode-button hover:opacity-70 transition duration-300 ease-in-out hover:text-[#000] rounded-md' onClick={toggleTheme}>
            {toggleTheme && theme === 'dark' ? (
              <div title='Light Mode'> ☀ </div>
            ) : (
              <div title='Dark Mode'> ☾ </div>
            )}
          </button>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;