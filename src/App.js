import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import axios from 'axios';
import { Button, Container, Card, Row } from 'react-bootstrap'
import modules from './modules';

function App() {
  const [currentTab, setCurrentTab] = useState('dashboard')

  return (
    <Router>


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <u1 className = "App-nav">
          {
            modules.map(module => (
              <li key={module.name} className={currentTab === module.name ? 'active' : ''}>
              <Link to={module.routeProps.path} onClick={() => setCurrentTab(module.name)}>{module.name}</Link>

            </li>
            ))
          }
        </u1>
      </header>
      <div className="App-content">
            {modules.map(module => (
              <Route {...module.routeProps} key={module.name} />
            ))}
          </div>
    </div>

    </Router>
  );
}

export default App;
