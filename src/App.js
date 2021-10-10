import React from 'react';
import './App.css';
import logo from './assets/logo.svg';
import GlobalNavBar from './components/GlobalNavBar';

const App = () => {
  return (
    <>
      <GlobalNavBar />
      <div>
        <div className="mt-20 text-center">
          <h2 className="text-5xl font-bold">iPhone 13 Pro</h2>
          <p className="text-3xl mt-2">โปรสมชื่อ</p>
        </div>
        <div className="mt-5 text-center text-xl text-blue-600">
          <a className="mr-4">ดูเพิ่มเติม</a>
          <a>ซื้อ</a>
        </div>
        <img
          src="/assets/hero_iphone13pro.jpg"
          className="hidden md:block mx-auto px-5 mt-10"
          style={{ maxWidth: '600px' }}
        />
        <img
          src="/assets/hero_iphone13pro_small.jpg"
          className="block md:hidden mx-auto px-5 mt-10"
          style={{ maxWidth: '300px' }}
        />
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
      </div>
    </>
  );
}

export default App;
