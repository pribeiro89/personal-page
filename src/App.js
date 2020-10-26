import React from 'react';
import ContentSection from './components/ContentSection';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <ContentSection light={true}>
        Portfolio goes here
      </ContentSection>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
