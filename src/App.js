import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import GlobalNavBar from './components/GlobalNavBar';
import Iphone13Pro from './pages/Iphone13Pro';
import Help from './pages/help';
import QuestionBox from './components/QuestionBox';

const App = () => {
  return (
    <Switch>
      <Route path="/iphone13pro" exact>
        <Iphone13Pro />
      </Route>
      <Route path="/help" exact>
        <Help />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="*">
        <GlobalNavBar />
        <p className="text-center">error 404</p>
        <QuestionBox/ >
      </Route>
    </Switch>
  );
};

export default App;
