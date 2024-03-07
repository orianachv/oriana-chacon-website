import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Name from './components/Name';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />

      <div className="flex flex-col md:px-16 py-4">
        <Name />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </>

  );
}

export default App;
