import { useState, useRef } from 'react';
import './App.css';
import { HierarchicalMenu } from './components/HierarchicalMenu';
import { menuData } from './data/menuData';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenuButtonRef = useRef(null);

  return (
    <div className="app-container">
      <button
        ref={openMenuButtonRef}
        className="open-menu-button"
        onClick={() => setIsMenuOpen(true)}
        aria-haspopup="true"
        aria-expanded={isMenuOpen}
        aria-controls="hierarchical-menu"
      >
        Open Menu
      </button>
      <HierarchicalMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        menuData={menuData}
        triggerRef={openMenuButtonRef}
      />
    </div>
  );
}

export default App;