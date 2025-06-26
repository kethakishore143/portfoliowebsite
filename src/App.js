import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/Aboutpage/About';

export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode ? 'dark-theme' : 'light-theme'}>
        <BrowserRouter>
          <Routes>
            <Route path="/portfoliowebsite" element={<Home />} />
            <Route path="/aboutpage" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;