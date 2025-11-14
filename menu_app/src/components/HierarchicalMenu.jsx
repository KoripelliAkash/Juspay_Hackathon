import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import './HierarchicalMenu.css';

// Define animation variants for the panels
const panelVariants = {
  // 'center' is the active state
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  },
  // 'left' is the state for a panel that is being exited to the left
  left: {
    x: '-100%',
    opacity: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  },
  // 'right' is the state for a panel that is being exited to the right
  right: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  },
};

export const HierarchicalMenu = ({ isOpen, onClose, menuData, triggerRef }) => {
  const [navigationStack, setNavigationStack] = useState([{ title: 'Menu', items: menuData }]);
  const [animationDirection, setAnimationDirection] = useState('forward');
  
  const menuContainerRef = useRef(null);
  
  // Get the currently visible panel
  const currentPanel = navigationStack[navigationStack.length - 1];
  const currentLevel = navigationStack.length - 1;

  // Handle focus management and stack reset
  useEffect(() => {
    if (isOpen) {
      // Focus the menu container for accessibility
      // Use a timeout to focus after the animation is complete (400ms)
      const timer = setTimeout(() => {
        menuContainerRef.current?.focus();
      }, 400);
      return () => clearTimeout(timer);

    } else {
      // Return focus to the trigger button when closed
      triggerRef.current?.focus();
      
      // Reset the navigation stack after a short delay to allow exit animation
      const timer = setTimeout(() => {
         setNavigationStack([{ title: 'Menu', items: menuData }]);
      }, 400); // Should match exit animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'Backspace' && navigationStack.length > 1) {
        handleBackClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, navigationStack]);


  // --- EVENT HANDLERS ---
  const handleItemClick = (item) => {
    if (item.children && item.children.length > 0) {
      setAnimationDirection('forward');
      setNavigationStack([...navigationStack, { title: item.title, items: item.children }]);
    } else {
      console.log('Clicked item:', item.title);
      onClose();
    }
  };

  const handleBackClick = () => {
    setAnimationDirection('backward');
    setNavigationStack(navigationStack.slice(0, -1));
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* --- OVERLAY --- */}
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* --- MENU CONTAINER --- */}
          <div
            ref={menuContainerRef}
            className="menu-container"
            role="dialog"
            aria-modal="true"
            aria-label="Main Menu"
            id="hierarchical-menu"
            tabIndex="-1"
          >
            {/* --- BOTTOM SHEET --- 
                'layout' prop animates height changes automatically! */}
            <motion.div
              className="menu-sheet"
              layout
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {/* --- PANELS --- 
                  This AnimatePresence handles the sliding between panels */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentLevel} // This is crucial for AnimatePresence
                  className="menu-panel"
                  variants={panelVariants}
                  initial={animationDirection === 'forward' ? 'right' : 'left'}
                  animate="center"
                  exit={animationDirection === 'forward' ? 'left' : 'right'}
                >
                  {/* Panel Header */}
                  <div className="panel-header">
                    {currentLevel > 0 ? (
                      <button className="panel-back-button" onClick={handleBackClick}>
                        <ChevronLeft size={20} />
                        Back
                      </button>
                    ) : (
                      <div style={{ width: '70px' }} /> // Alignment placeholder
                    )}
                    
                    <h3 className="panel-title">{currentPanel.title}</h3>

                    {currentLevel === 0 ? (
                      <button className="panel-close-button" onClick={onClose} aria-label="Close menu">
                        <X size={20} />
                      </button>
                    ) : (
                      <div style={{ width: '40px' }} /> // Alignment placeholder
                    )}
                  </div>

                  {/* Panel Items */}
                  <ul className="panel-list">
                    {currentPanel.items.map((item) => {
                      const ItemIcon = item.icon;
                      const hasChildren = item.children && item.children.length > 0;
                      
                      return (
                        <li key={item.title}>
                          <button
                            className="panel-item-button"
                            onClick={() => handleItemClick(item)}
                          >
                            {ItemIcon && <ItemIcon className="item-icon" size={20} />}
                            <div className="item-text">
                              <span className="item-title">{item.title}</span>
                              <span className="item-description">{item.description}</span>
                            </div>
                            {hasChildren && <ChevronRight className="item-chevron" size={16} />}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};