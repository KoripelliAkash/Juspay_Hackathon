# Juspay Hackathon - Hierarchical Animated Menu

This project is a fully functional, animated, and accessible hierarchical menu component built for a Juspay hackathon. It's designed to replicate the provided UI mockups, offering a smooth, native-like navigation experience for nested menu items using React, Vite, and Framer Motion.

## 🚀 Live Demo

**[Live Link](https:

*(You can replace this link after you deploy to Vercel.)*

---

## ✨ Features

* **Smooth Animations:** Powered by **Framer Motion** for direction-aware slide animations between levels and an automatic height-adjusting container (`layout` prop).
* **Bottom-Sheet Modal:** A responsive design that appears as a bottom sheet on mobile and a centered modal on desktop, exactly like the screenshots.
* **Accessibility First:** Full keyboard support (using `Escape`, `Backspace`), proper focus management (returning focus to the trigger button), and ARIA roles.
* **Clean & Modern:** Uses `lucide-react` for modern icons and plain CSS with variables for easy theming.
* **Controlled Component:** The menu's open/closed state is controlled by the parent component (`App.jsx`), making it flexible.

---

## 🛠️ Tech Stack

* **Framework:** React.js
* **Build Tool:** Vite
* **Animation:** Framer Motion
* **Icons:** Lucide React
* **Styling:** Plain CSS with CSS Variables (in `index.css`)

---

## 📦 Local Development

To run this project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd <your-project-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Your project will be available at `http:

---

## Functions & Methods: The `HierarchicalMenu` Component

The core of this project is the `<HierarchicalMenu />` component. It is designed to be a "controlled component," meaning its open/closed state is managed by its parent.

### How to Use

The parent component (`App.jsx`) is responsible for two things:
1.  Holding the `isMenuOpen` state.
2.  Holding a `ref` to the button that opens the menu (for accessibility).

```jsx

import { useState, useRef } from 'react';
import { HierarchicalMenu } from './components/HierarchicalMenu';
import { menuData } from './data/menuData';

function App() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  
  const openMenuButtonRef = useRef(null);

  return (
    <div>
      {}
      <button
        ref={openMenuButtonRef}
        onClick={() => setIsMenuOpen(true)}
      >
        Open Menu
      </button>

      {}
      <HierarchicalMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        menuData={menuData}
        triggerRef={openMenuButtonRef}
      />
    </div>
  );
}