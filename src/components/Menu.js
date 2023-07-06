// Import React and Link from react-router-dom
import React from 'react';
import { Link } from 'react-router-dom';

// Import Menu.css file
import './Menu.css';
import logo from './logo.png';

// Create a functional component called Menu
const Menu = ({ isLoggedIn, handleLogout }) => {
  // Return the navigation menu
  return (
    <div className="menu">
      <Link to="/">
        <div className="menu-logo">
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/top-anime">Top Anime</Link>
      <Link to="/manga">Top Manga</Link>
      {/* Check if user is logged in */}
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">Login/Signup</Link>
      )}
    </div>
  );
};

// Export the Menu component
export default Menu;
