import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import DefaultLayout from './components/layouts/DefaultLayout';
import OtherLayout from './components/layouts/OtherLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<OtherLayout />}>
          <Route index element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
