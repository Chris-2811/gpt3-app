import { useState } from 'react';
import './App.css';
import './Index.css';

import {
  Blog,
  Features,
  Possibility,
  Footer,
  Hero,
  WhatGPT3,
} from './container';
import { Header, Brand, CTA } from './components';

function App() {
  return (
    <>
      <a href="#maincontent" className="skip-link">
        Skip to main content
      </a>
      <header>
        <div className="bg-gradient">
          <Header />
          <Hero />
        </div>
      </header>
      <main id="maincontent">
        <Brand />
        <div className="bg-gradient-two">
          <WhatGPT3 />
          <Features />
          <Possibility />
        </div>
        <CTA />
        <Blog />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
