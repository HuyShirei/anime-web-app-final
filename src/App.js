// Import React, useEffect and useState from the react library
import React, { useEffect, useState } from 'react';
// Import axios for making API calls
import axios from 'axios';
// Import components from react-router-dom
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Import custom components
import Auth from './components/Auth';
import Menu from './components/Menu';
import Home from './components/Home';
import TopAnime from './components/TopAnime';
import Manga from './components/Manga';
import About from './components/About';
import Footer from './components/Footer';
import Search from './components/Search';
// Import App.css stylesheet
import './App.css';

// Define JIKAN_API_BASE_URL constant
const JIKAN_API_BASE_URL = 'https://api.jikan.moe/v4';

// Create App component
function App() {
  // Declare searchTerm state variable and setSearchTerm function
  const [searchTerm, setSearchTerm] = useState('');
  // Declare animes state variable and setAnimes function
  const [animes, setAnimes] = useState([]);
  // Declare isLoggedIn state variable and setIsLoggedIn function
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Create handleLogin function to set isLoggedIn state to true if valid email and password are provided
  const handleLogin = (email, password) => {
    if (isValidEmail(email) && password) {
      setIsLoggedIn(true);
    } else {
      console.log('Invalid email or password');
    }
  };
  
  // Create handleSignup function to set isLoggedIn state to true if valid email and password are provided
  const handleSignup = (email, password) => {
    if (isValidEmail(email) && password) {
      setIsLoggedIn(true);
    } else {
      console.log('Invalid email or password');
    }
  };
  
  // Create isValidEmail function to validate email address
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };  

  // Create handleLogout function to set isLoggedIn state to false
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Use useEffect hook to fetch data from JIKAN API when searchTerm changes
  useEffect(() => {
    if (!searchTerm) return;

    const fetchAnimes = async () => {
      try {
        const response = await axios.get(`${JIKAN_API_BASE_URL}/anime?filter[text]=${searchTerm}`);
        setAnimes(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAnimes();
  }, [searchTerm]);

  // Render App component
  return (
    <Router>
      <div className="App">
        <Menu isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={<Auth onLogin={handleLogin} onSignup={handleSignup} />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/top-anime" element={<TopAnime />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/search" element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Export App component
export default App;