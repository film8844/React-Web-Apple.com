import React from 'react';
import { Route } from 'react-router';
import './App.css';
import logo from './assets/logo.svg';
import Home from './pages/Home';
import { BrowserRouter as  route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*" >
            <h1>error 404</h1>
          </Route>
        </Switch>
      </div>
      {/* <Home />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </>
  );
}

export default App;
