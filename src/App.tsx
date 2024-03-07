import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <div className="flex flex-col md:flex-row md:h-screen">
      <div className="bg-gray-800 text-white overflow-auto py-8 md:w-1/4 lg:w-1/4 xl:w-1/4 h-full">
        <Header />
      </div>
      <div className="flex-1 overflow-auto py-8 px-4">
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
