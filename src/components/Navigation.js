import React, { useState } from 'react';

const Navigation = (props) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="
      fixed top-0 inset-x-0 z-50 
      font-headings font-bold text-white uppercase
      bg-secondary list-none
      p-4 mb-0 mb:py-6
    ">
      <div className="
        container mx-auto md:px-4 
        flex flex-wrap md:flex-no-wrap items-center justify-between
      ">
        <a className="py-1 mr-4 text-xl" href="#top">
          Patricia Ribeiro
        </a>
        <button className="
            md:hidden bg-primary rounded-lg p-4
            uppercase font-bold text-white leading-none text-xs
          "
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          Menu{' '}
          <i className="fas fa-bars"></i>
        </button>
        <div className={`
          ${!showNav ? 'hidden' : 'block'} 
          w-full md:w-auto md:flex md:flex-auto items-center
        `}>
          <ul className="flex flex-col md:flex-row mt-4 md:mt-0 ml-auto">
            <li className="mx-1">
              <a className="block p-3 rounded-lg" href="#portfolio">Portfolio</a>
            </li>
            <li className="mx-1">
              <a className="block p-3 rounded-lg" href="#about">About</a>
            </li>
            <li className="mx-1">
              <a className="block p-3 rounded-lg" href="#experience">Experience</a>
            </li>
            <li className="mx-1">
              <a className="block p-3 rounded-lg" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;