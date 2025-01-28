// src/App.jsx

import React from 'react';
import Home from './Home';
// import './App.css'; // Import global styles
import AddForm from './components/AddForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<AddForm/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
