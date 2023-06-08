import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';

const anchors = ['AboutMe', 'Skills', 'Experience', 'Projects'];

function App() {
  return (
    <>
      <Navbar anchors={anchors} />
      <ReactFullpage
        scrollingSpeed={500}
        credits={{ enabled: true, position: 'right' }}
        anchors={anchors}
        css3={true}
        menu="#myMenu"
        navigation={true}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section" id="about-me-section">
                <AboutMe />
              </div>
              <div className="section" id="skills-section">
                <Skills />
              </div>
              <div className="section" id="experience-section">
                s
              </div>
              <div className="section" id="projects-section">
                a
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById('react-root'));

export default App;
