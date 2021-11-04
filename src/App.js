import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import GlobalNavBar from './components/GlobalNavBar';
import Help from './pages/help';
import QuestionBox from './components/QuestionBox';
import CompareTest from './components/CompareTest';
import Bag from './pages/Bag';
import Iphone13Pro from './pages/Iphone13Pro';
import Iphone13 from './pages/Iphone13';
import IpadMini from './pages/IpadMini';
import Ipad from './pages/Ipad';

const App = () => {
  return (
    <Switch>
      <Route path="/iphone13pro" exact>
        <Iphone13Pro />
      </Route>
      <Route path="/iphone13" exact>
        <Iphone13 />
      </Route>
      <Route path="/ipadmini" exact>
        <IpadMini />
      </Route>
      <Route path="/ipad" exact>
        <Ipad />
      </Route>
      <Route path="/help" exact>
        <Help />
      </Route>
      <Route path="/bag" exact>
        <Bag />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="*">
        <GlobalNavBar />
        <p className="text-center">error 404</p>
        <CompareTest />
        {/* <QuestionBox/ > */}
      </Route>
    </Switch>
  );
};

export default App;
