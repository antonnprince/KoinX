import React from 'react';
//import {BrowserRouter, Routes, Route} from 'react-router-dom'

const HorizontalNav = () => {
  return (
    <nav className='bg-slate-200 text-black flex flex-row justify-center h-20 box-shadow-md mt-0 lg:mt-[625px]'>
      <ul className="flex flex-row text-sm md:text-lg font-semibold space-x-4 lg:space-x-8 text-nowrap px-2 py-4" style={{ overflowX: 'auto' }}>
        <li>Overview</li>
        <li>Fundamentals</li>
        <li>News Insights</li>
        <li>Sentiments</li>
        <li>Team</li>
        <li>Technicals</li>
        <li>Tokenomics</li>
      </ul>
    </nav>
  );
};

export default HorizontalNav;
