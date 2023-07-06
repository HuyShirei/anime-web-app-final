// Import React library
import React from 'react';

// Import Link component from react-router-dom library
import { Link } from 'react-router-dom';

// Import Home.css stylesheet
import './Home.css';

// Create Home component
const Home = () => {
  return (
    // Render home container div with content
    <div className="home-container">
      <h1>Welcome to our Anime website</h1>
      <p>
        We provide a collection of the best anime series and movies for you to discover, watch, and enjoy. Our website is the perfect destination for all anime lovers out there.
      </p>
      {/* Link to search page */}
      <Link to="/search" className="cta-button">
        Search for Anime
      </Link>
    </div>
  );
};

// Export Home
export default Home;
