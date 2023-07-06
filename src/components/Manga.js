// Import React, useState and useEffect hooks from the React library
import React, { useState, useEffect } from 'react';

// Import axios for making API requests
import axios from 'axios';

// Import MangaCard component
import MangaCard from './MangaCard';

// Define the base URL of the Jikan API
const JIKAN_API_BASE_URL = 'https://api.jikan.moe/v4';

// TopManga component
const TopManga = () => {
  // Declare topManga state variable and setTopManga function to update it
  const [topManga, setTopManga] = useState([]);

  // Use useEffect hook to make an API request when the component mounts
  useEffect(() => {
    const fetchTopManga = async () => {
      try {
        // Make a GET request to the Jikan API
        const response = await axios.get(`${JIKAN_API_BASE_URL}/top/manga`);
        // Update the topManga state variable with the response data
        setTopManga(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchTopManga function
    fetchTopManga();
  }, []);

  // Render the component
  return (
    <div>
      <h2>Top 25 Manga</h2>
      <div className="Manga-list">
        {/* Map over the topManga array and render a MangaCard component for each item */}
        {topManga.map((manga) => (
          <MangaCard key={manga.mal_id} manga={manga} />
        ))}
      </div>
    </div>
  );
};

// Export the TopManga component
export default TopManga;