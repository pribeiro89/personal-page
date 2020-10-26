import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import ContentSection from './components/ContentSection';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Header from './components/Header';
import Countdown from './projects/Countdown/Countdown';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Route exact path="/" component={Home} />
      <Route path="/countdown" component={Countdown} />
    </HashRouter>
  );
}

const Home = () => (
  <div>
    <Header />
    <ContentSection light={true}>
      Portfolio goes here
        </ContentSection>
    <Footer />
    <Copyright />
  </div>
);

export default App;
