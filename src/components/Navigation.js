import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navigation = (props) => {
  const [showNav, setShowNav] = useState(false);

  const navLinksHeight = () => document.getElementById('navLinks').clientHeight;
  const links = [
    { path: '#portfolio', name: 'Portfolio' },
    { path: '#about', name: 'About' },
    { path: '#experience', name: 'Experience' },
  ];

  return (
    <nav className="
      fixed top-0 inset-x-0 z-50 
      font-headings font-bold text-white uppercase
      bg-secondary list-none
      p-4 mb-0 mb:py-6
    ">
      <div className="
        container mx-auto lg:px-4 
        flex flex-wrap lg:flex-no-wrap items-center justify-between
      ">
        <a className="py-1 mr-4 text-xl" href="#top">
          Patricia Ribeiro
        </a>
        <button className="
            lg:hidden bg-teal-600 rounded-lg p-4
            uppercase font-bold text-white leading-none text-sm
          "
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          Menu{' '}
          <i className="fas fa-bars"></i>
        </button>
        <div
          className="w-full h-0 lg:w-auto lg:h-auto collapse overflow-hidden"
          style={showNav ? { height: `${navLinksHeight() + 16}px` } : {}}
        >
          <ul id="navLinks" className="flex flex-col mt-4 lg:mt-0 lg:flex-row ml-auto">
            {links.map((link) => (
              <li className="mx-1">
                <Link
                  className="block p-3 rounded-lg"
                  to={link.path}
                  onClick={() => setShowNav(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;