import React from 'react';
import ContentSection from './ContentSection';
import countdownImg from '../assets/portfolio/countdown.png';

const projects = [
  {
    img: countdownImg,
    name: "Countdown Timer",
    techs: "React • TailwindCss",
    description: "A simple countdown timer utility."
  },
];

const Portfolio = () => {
  return (
    <ContentSection name="portfolio">
      {projects.map((project) => (
        <div className="relative w-full px-6 mb-12 md:w-1/2 lg:w-1/3">
          <div className="
            mx-auto relative block max-w-sm shadow-md
            border-2 border-secondary rounded-md overflow-hidden
          ">
            <div className="
              absolute top-0 left-0 opacity-0 bg-primary 
              h-full w-full p-6 sm:p-12 lg:p-8 xl:p-12 hover:opacity-100 
              transition-all duration-500 ease-in-out
              text-center text-white
            ">
              <h5 className="text-lg uppercase mb-3 tracking-wider">
                {project.name}
              </h5>
              <p className="text-sm text-secondary font-semibold mb-3">
                {project.techs}
              </p>
              <p>
                {project.description}
              </p>
            </div>
            <img
              class="align-middle border-none h-auto max-w-full"
              src={project.img}
              alt={project.name}
            />
          </div>
        </div>
      ))}
    </ContentSection>
  )
}

export default Portfolio;