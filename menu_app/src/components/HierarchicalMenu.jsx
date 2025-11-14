import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion'; 
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import './HierarchicalMenu.css';


const panelVariants = {
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  },
  left: {
    x: '-100%',
    opacity: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  },
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

  
  const dragControls = useDragControls();
  
  const currentPanel = navigationStack[navigationStack.length - 1];
  const currentLevel = navigationStack.length - 1;

  
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        menuContainerRef.current?.focus();
      }, 400);
      return () => clearTimeout(timer);
    } else {
      triggerRef.current?.focus();
      const timer = setTimeout(() => {
         setNavigationStack([{ title: 'Menu', items: menuData }]);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  
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

  
  const handleDragEnd = (event, info) => {
    const dragThreshold = 100;
    const velocityThreshold = 500;

    if (info.offset.y > dragThreshold || info.velocity.y > velocityThreshold) {
      onClose();
    }
  };

  
  const startDrag = (event) => {
    dragControls.start(event);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <div
            ref={menuContainerRef}
            className="menu-container"
            role="dialog"
            aria-modal="true"
            aria-label="Main Menu"
            id="hierarchical-menu"
            tabIndex="-1"
          >
            <motion.div
              className="menu-sheet"
              layout
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}

              
              drag="y"
              dragControls={dragControls} 
              dragConstraints={{ top: 0 }} 
              onDragEnd={handleDragEnd}
              dragSnapToOrigin
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentLevel}
                  className="menu-panel"
                  variants={panelVariants}
                  initial={animationDirection === 'forward' ? 'right' : 'left'}
                  animate="center"
                  exit={animationDirection === 'forward' ? 'left' : 'right'}
                >
                  
                  {}
                  <div 
                    className="drag-target-area" 
                    onPointerDown={startDrag} 
                  >
                    <div className="drag-handle-container" aria-hidden="true">
                      <div className="drag-handle" />
                    </div>
                    
                    <div className="panel-header">
                      {currentLevel > 0 ? (
                        <button className="panel-back-button" onClick={handleBackClick}>
                          <ChevronLeft size={20} />
                          Back
                        </button>
                      ) : (
                        <div style={{ width: '70px' }} />
                      )}
                      
                      <h3 className="panel-title">{currentPanel.title}</h3>

                      {currentLevel === 0 ? (
                        <button className="panel-close-button" onClick={onClose} aria-label="Close menu">
                          <X size={20} />
                        </button>
                      ) : (
                        <div style={{ width: '40px' }} />
                      )}
                    </div>
                  </div>
                  
                  {}
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