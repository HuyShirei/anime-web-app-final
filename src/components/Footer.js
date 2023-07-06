// Import React library
import React from 'react';

// Import Footer.css file
import './Footer.css';

// Create Footer component
const Footer = () => {
  return (
    // Render footer with className App-footer
    <footer className="App-footer">
      <p>&copy; {new Date().getFullYear()} Anime Web App. All rights reserved.</p>
    </footer>
  );
};

// Export Footer component
export default Footer;