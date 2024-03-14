import './App.css';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Home from './sections/Home';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />

      <div className="flex flex-col md:px-16 py-4">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </>

  );
}

export default App;
