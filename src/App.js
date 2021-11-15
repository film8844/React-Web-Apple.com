import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import GlobalNavBar from './components/GlobalNavBar';
import Footer from './components/Footer';
import Bag from './pages/Bag';
import Help from './pages/Help';
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
      <Route path="/">
        <Home />
      </Route>
      <Route path="*">
        <GlobalNavBar />
        <p className="text-center">error 404</p>
        <Footer />
      </Route>
    </Switch>
  );
};

export default App;
