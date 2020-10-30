import React from 'react';
import Divider from './Divider';

const ContentSection = ({ green, name, children }) => {
  const color = green ? 'white' : 'secondary';
  const backgroundColor = green ? 'primary' : 'white';

  return (
    <section id={name} className={`bg-${backgroundColor}`}>
      <div className="container px-6 py-24 mx-auto">
        <h2 className={`text-center text-${color} text-4xl`}>
          {name}
        </h2>
        <Divider light={green} />
        <div className="flex flex-wrap -mx-6">
          {children}
        </div>
      </div>
    </section>
  );
}

export default ContentSection;