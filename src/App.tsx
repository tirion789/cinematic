import React from 'react';
import Home from './pages/home';
import Main from './pages/main';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
