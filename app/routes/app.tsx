// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './_SNB.Home';
import AddNewPatient from './_SNB.AddNewPatient';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/addNewPatient" element={<AddNewPatient />} />
      </Routes>
    </Router>
  );
}

export default App;
