import React from 'react';
import Home from './pages/Home/home';
import Main from './pages/Main/main';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';
import RequireAuth from './hoc/RequireAuth';
import RequireRegister from './hoc/ReguireRegister';
import FullFilm from './pages/FullFilms/fullFilm';

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
        <Route
          path="/film/:id"
          element={
            <RequireAuth>
              <FullFilm />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}
export default App;

// element={<FullFilm />}
