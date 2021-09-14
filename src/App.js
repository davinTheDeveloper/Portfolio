import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Name from './Name/Name';
import BioLinks from './BioLinks/BioLinks';
import Intro from './Intro/Intro';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import FooterBar from './FooterBar/FooterBar';


function App() {
  return (
    <div className="App">
    <Router>
        <Route exact path="/">
          <Header />
          <Name />
          <BioLinks />
          <Intro />
          <About />
          <Projects />
          <Contact />
          <FooterBar />
          </Route>
      </Router>
    </div>
  );
}

export default App;
