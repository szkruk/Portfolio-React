import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Navbar from './components/Navbar/Navbar';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Skills />
      <Experience />
    </>
  );
}

export default App;
