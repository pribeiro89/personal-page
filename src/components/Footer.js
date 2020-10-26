import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 bg-secondary text-white text-center">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="relative w-full px-4 mb-12 lg:mb-0 lg:w-1/3">
            <h4 className="uppercase mb-6 text-2xl">
              Location
            </h4>
            <p className="my-0 text-xl font-light">The World</p>
          </div>
          <div className="relative w-full px-4 mb-12 lg:mb-0 lg:w-1/3">
            <h4 className="uppercase mb-6 text-2xl">
              Around the web
            </h4>
            <a href="#" className="btn btn-outline-light btn-social mx-1">
              <i className="fab fa-fw fa-facebook-f"></i>
            </a>
            <a href="#" className="btn btn-outline-light btn-social mx-1">
              <i className="fab fa-fw fa-twitter"></i>
            </a>
            <a href="https://github.com/pribeiro89" className="btn btn-outline-light btn-social mx-1">
              <i className="fab fa-fw fa-linkedin-in"></i>
            </a>
            <a href="https://pribeiro89.github.io/personal-page" className="btn btn-outline-light btn-social mx-1">
              <i className="fab fa-fw fa-dribbble"></i>
            </a>
          </div>
          <div className="relative w-full px-4 lg:mb-0 lg:w-1/3">
            <h4 className="uppercase mb-6 text-2xl">
              About this page
            </h4>
            <p className="my-0 text-xl font-light">
              This website was made with React, TailwindCss and GitHub pages and based on the Freelance theme by Start Bootstrap.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;