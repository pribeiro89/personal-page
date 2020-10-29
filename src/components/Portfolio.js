import React from 'react';
import ContentSection from './ContentSection';
import countdownImg from '../assets/portfolio/countdown.png';

const Portfolio = () => {
  return (
    <ContentSection light={true} name="portfolio">
      <div className="relative w-full px-6 mb-12">
        <div className="
          mx-auto relative block max-w-sm
          border-2 border-secondary rounded-md overflow-hidden
          shadow-md
        ">
          <div className="
            absolute top-0 left-0 opacity-0 bg-primary 
            h-full w-full p-12 hover:opacity-100 
            transition-all duration-500 ease-in-out
            text-center text-white
          ">
            <h5 className="text-lg uppercase mb-4 tracking-wider">
              Countdown Timer
            </h5>
            <p className="text-secondary font-semibold mb-4">
              React • TailwindCss
            </p>
            <p>
              A simple countdown timer utility.
            </p>
          </div>
          <img
            class="align-middle border-none h-auto max-w-full"
            src={countdownImg}
            alt="countdown timer"
          />
        </div>
      </div>
    </ContentSection>
  )
}

export default Portfolio;