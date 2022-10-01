
import './App.css';
import React from 'react';

import Home from './modules/home/Home';
import Header from './modules/header/Header';
function App() {

  return (
    <div className='App'>
      <Header user="user1"/>

      <Home/>

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