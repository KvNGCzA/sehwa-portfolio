import React from 'react';
import {Footer} from './components/Footer';
import {Home} from './pages/Home';
import {Header} from './components/Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
