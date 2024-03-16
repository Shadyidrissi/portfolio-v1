import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Service from './components/pages/Service';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
