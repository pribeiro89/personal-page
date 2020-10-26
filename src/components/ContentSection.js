import React from 'react';
import Divider from './Divider';

const ContentSection = ({ light, children }) => {
  const color = light ? 'secondary' : 'white';
  return (
    <section className="py-24">
      <div className="container px-6 mx-auto">
        <h2 className={`text-center text-${color} text-4xl`}>
          Portfolio
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