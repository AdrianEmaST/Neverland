import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from '../routes';

import './App.css'

function App() {
  

  return (
    <Router>
    <Routes>
      {/* Agrega rutas según el array en routes.js */}
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  </Router>
);
}

export default App
