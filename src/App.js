import React from 'react';

import { AboutUs, Founder, Footer, Gallery, Header, Awards } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    {/* <SpecialMenu /> */}
    {/* <Intro /> */}
    <Founder />
    <Gallery />
    <Awards />
    {/* <Gallery /> */}
    {/* <FindUs /> */}
    <Footer />
  </div>
);

export default App;
