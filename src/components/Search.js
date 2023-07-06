// Import React, useState and useEffect hooks from the React library
import React, { useState, useEffect } from 'react';

// Import axios for making API requests
import axios from 'axios';

// Import AnimeCard component
import AnimeCard from './AnimeCard';

// Import Search.css stylesheet
import './Search.css'

// Define JIKAN_API_BASE_URL constant
const JIKAN_API_BASE_URL = 'https://api.jikan.moe/v4';

// Create Search component
const Search = () => {
  // Declare searchTerm state variable and setSearchTerm function
  const [searchTerm, setSearchTerm] = useState('');
  
  // Declare animes state variable and setAnimes function
  const [animes, setAnimes] = useState([]);

  // Create handleSearch function to make API request when form is submitted
  const handleSearch = async (event) => {
    // Prevent default form submission behaviour
    event.preventDefault();
  
    try {
      // Make API request using axios
      const response = await axios.get(`${JIKAN_API_BASE_URL}/anime?q=${searchTerm}&limit=20`);
      
      // Set animes state variable with response data
      setAnimes(response.data.data);
    } catch (error) {
      // Log error if API request fails
      console.error('Error fetching data:', error);
    }
  };  
  
  // Return JSX to render
  return (
    <div>
      {/* Create form with onSubmit handler */}
      <form onSubmit={handleSearch}>
        {/* Create input field with value and onChange handlers */}
        <input
          type="text"
          placeholder="Search for anime"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        {/* Create submit button */}
        <button type="submit">Search</button>
      </form>
      {/* Map over animes array and render AnimeCard component for each item */}
      {animes.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};

// Export Search component
export default Search;