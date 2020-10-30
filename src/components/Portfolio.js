import React from 'react';
import ContentSection from './ContentSection';
import countdownImg from '../assets/portfolio/countdown.png';

const projects = [
  {
    img: countdownImg,
    name: "Countdown Timer",
    techs: "React • TailwindCss",
    description: "A simple countdown timer utility.",
    urlDemo: '',
    urlCode: ''
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
              h-full w-full p-6 sm:p-8 xl:p-12 hover:opacity-100 
              transition-all duration-500 ease-in-out
              text-center text-white flex flex-col justify-between
            ">
              <div className="flex flex-col space-y-3">
                <h5 className="text-lg uppercase tracking-wider">
                  {project.name}
                </h5>
                <p className="text-sm text-secondary font-semibold">
                  {project.techs}
                </p>
                <p>
                  {project.description}
                </p>
              </div>
              <div className="flex justify-around">
                <a
                  className="
                    py-2 px-3 uppercase text-xs text-secondary hover:text-white
                    border border-transparent hover:border-secondary rounded bg-gray-100 hover:bg-transparent
                    transition-colors duration-300 ease-linear shadow
                  "
                  href={project.urlCode}
                >
                  <i class="fas fa-code mr-1"></i>
                  View Code
                </a>
                <a
                  className="
                    py-2 px-3 uppercase text-xs text-white
                    border border-transparent hover:border-secondary rounded bg-secondary hover:bg-transparent
                    transition-colors duration-300 ease-linear shadow
                  "
                  href={project.urlDemo}
                >
                  <i class="far fa-eye mr-1"></i>
                  View Demo
                </a>
              </div>
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