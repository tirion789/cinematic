import React from 'react';
import Home from './pages/home';
import Main from './pages/main';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';
import RequireAuth from './hoc/RequireAuth';
import RequireRegister from './hoc/ReguireRegister';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route
          path="/"
          element={
            <RequireRegister>
              <Main />
            </RequireRegister>
          }
        />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
