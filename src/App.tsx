import React from 'react';
import {Footer} from './components/Footer';
import {Home} from './pages/Home';
import {Header} from './components/Header';
import './App.scss';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
