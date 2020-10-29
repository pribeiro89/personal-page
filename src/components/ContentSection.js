import React from 'react';
import Divider from './Divider';

const ContentSection = ({ light, name, children }) => {
  const color = light ? 'secondary' : 'white';
  return (
    <section id={name}>
      <div className="container px-6 py-24 mx-auto">
        <h2 className={`text-center text-${color} text-4xl`}>
          {name}
        </h2>
        <Divider light={!light} />
        <div className="flex flex-wrap -mx-6">
          {children}
        </div>
      </div>
    </section>
  );
}

export default ContentSection;