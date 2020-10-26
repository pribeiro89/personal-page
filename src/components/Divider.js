import React from "react";

const Divider = ({ light }) => {
  const color = light ? 'white' : 'secondary';

  return (
    <div className={`
      flex items-center justify-center w-full mx-0 mt-4 mb-5 
    `}>
      <div className={`rounded-2xl mr-4 h-1 w-24 bg-${color} border-${color}`}></div>
      <div className={`text-3xl text-${color}`}>
        <i className="fas fa-star"></i>
      </div>
      <div className={`rounded-2xl ml-4 h-1 w-24 bg-${color} border-${color}`}></div>
    </div>
  );
};

export default Divider;