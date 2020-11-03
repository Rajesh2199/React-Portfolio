import React from 'react';
import "./App.css";
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project'
import Fitness from './components/Fitness'
import Readme from './components/Readme'
import Team from './components/Team'
import Burger from './components/Burger'
import "materialize-css/dist/css/materialize.min.css"


function App() {
  return (
    <div className="App">
   <Header/>
    <Project />
    <Fitness />
    <Readme />
    <Team />
    <Burger />
    <Footer />
    </div>
  );
}

export default App;
