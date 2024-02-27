import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App flex flex-col md:flex-row h-screen">
      <div className="bg-gray-800 text-white overflow-auto py-8 md:w-1/3 lg:w-1/4 xl:w-1/5 h-full">
        {/* Menú lateral que se ajustará basado en el tamaño de la pantalla */}
        <Header />
      </div>
      <div className="flex-1 overflow-auto py-8 px-4">
        {/* Contenido principal que se ajustará basado en el tamaño de la pantalla */}
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App