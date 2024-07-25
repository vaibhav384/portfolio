import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Experiments from './components/Experiments';
import Footer from './components/Footer.js';
import { Element } from 'react-scroll';

import {
  BrowserRouter as 
  Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Navbar/> 

        <Routes basename="/portfolio">
          <Route path="/" element={
            <>
              <Element name="home">
                <Home />
              </Element>
              <Element name="projects">
                <Projects />
              </Element>
              <Element name="experiments">
                <Experiments />
              </Element>
              <Element name="footer">
                <Footer />
              </Element>
            </>
          } />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
