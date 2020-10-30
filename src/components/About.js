import React from 'react';
import ContentSection from './ContentSection';

const About = () => {
  return (
    <ContentSection green={true} name="about">
      <div className="px-6 text-white text-xl font-light">
        <p className="mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam nihil quod odit neque atque commodi ex ipsam magnam blanditiis necessitatibus excepturi, ducimus perspiciatis expedita sit voluptas praesentium qui. Delectus, nesciunt!
        </p>
        <p className="mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam nihil quod odit neque atque commodi ex ipsam magnam blanditiis necessitatibus excepturi, ducimus perspiciatis expedita sit voluptas praesentium qui. Delectus, nesciunt!
        </p>
      </div>
    </ContentSection>
  )
}

export default About;