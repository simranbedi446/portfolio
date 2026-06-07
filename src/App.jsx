import React, { useState, useEffect } from 'react';
import './App.css';
import Notebook from './components/Notebook';

export default function App() {
  const [currentPage, setCurrentPage] = useState('cover');
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="app-shell">
      {/* Theme toggle — inline on mobile, absolute on desktop */}
      <div className="controls-bar">
        <button className="control-btn" onClick={toggleDarkMode}>
          {darkMode ? '☀️ Light Mode' : '🌙 Cozy Mode'}
        </button>
      </div>

      {/* Scrapbook Notebook */}
      <Notebook
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* Footer label */}
      <div className="app-footer">
        <p className="handwriting" style={{ fontSize: '1.1rem', color: 'var(--text-subtle)', margin: 0 }}>
          Vinie's Guard Dog Post • Psychological Safety • © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
