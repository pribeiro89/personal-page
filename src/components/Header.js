import React from 'react';
import Divider from './Divider';
import Navigation from './Navigation';

const Header = () => (
  <header className="block">
    <Navigation />
    <div className="pt-40 pb-24 bg-primary text-white text-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <img
          className="w-64 mb-12"
          alt="avatar"
          src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBob&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Heather&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Pale'
        />
        <h1 className="font-headings font-bold text-4xl md:text-6xl leading-tight my-0 uppercase">
          Hi there,<br />
          I'm Patricia Ribeiro!
          </h1>
        <Divider light={true} />
        <p className="text-xl md:text-2xl font-light my-0">Proud Geek & Software Developer</p>
      </div>
    </div>
  </header>
);

export default Header;