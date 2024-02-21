import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Banner from './assets/banner.png'
function App() {
  return (
    <div className="App flex h-screen">
      <div className="w-[40%] fixed h-full overflow-hidden py-12 px-8 lg:py-24">
        <Header />
      </div>
      <div className="w-[60%] ml-auto overflow-auto py-12 px-10 lg:py-24 grid gap-10">
        <div id="about" className="section">
          <About />
        </div>
        <div id="experience" className="section">
          <Experience />
        </div>
        <div id="skills" className="section">
          <Skills />
        </div>
        <div id="contact" className="section">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;

