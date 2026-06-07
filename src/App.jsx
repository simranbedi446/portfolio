import React, { useState, useEffect } from 'react';
import './App.css';
import Notebook from './components/Notebook';

export default function App() {
  const [currentPage, setCurrentPage] = useState('cover');
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div style={{ 
      width: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      minHeight: '100vh', 
      justifyContent: isOpen ? 'flex-start' : 'center', 
      paddingTop: isOpen ? '80px' : '20px', 
      paddingBottom: isOpen ? '40px' : '20px', 
      boxSizing: 'border-box', 
      position: 'relative' 
    }}>
      
      {/* Top Controls Bar (Only theme toggle now) */}
      <div className="controls-bar">
        <button className="control-btn" onClick={toggleDarkMode}>
          {darkMode ? '☀️ Light Mode' : '🌙 Cozy Mode'}
        </button>
      </div>

      {/* Scrapbook Notebook Shell */}
      <Notebook 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
      />

      {/* Cozy Floor/Desk Label Footer */}
      <div style={{ marginTop: '25px', textAlign: 'center', opacity: 0.7, fontSize: '0.85rem' }}>
        <p className="handwriting" style={{ fontSize: '1.25rem', color: 'var(--text-subtle)' }}>
          Vinie's Guard Dog Post • Promoting Workspace Psychological Safety • © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
