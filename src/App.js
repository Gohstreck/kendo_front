
import './App.css';
import React from 'react';

import Home from './modules/home/Home';
import LookDojo from './modules/lookDojo/LookDojo';
import {Route, Routes} from 'react-router-dom'
function App() {

  return (
    <div className='App'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/lookDojo" element={<LookDojo/>}/>
        </Routes>

    </div>
  );
}

export default App;


/*
    <div className="App">
      <header className="App-header">
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
    <Router>
      <Routes>
        <Route exact path= "/home" component = {<Home/>} />

      </Routes>


    </Router>


*/