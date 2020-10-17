import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project'
import Fitness from './components/Fitness'
import Readme from './components/Readme'
import Team from './components/Team'
import Burger from './components/Burger'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Project />
    <Fitness />
    <Readme />
    <Team />
    <Burger />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


