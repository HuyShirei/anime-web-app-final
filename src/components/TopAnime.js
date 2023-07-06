// import React, useState and useEffect from the React library
import React, { useState, useEffect } from 'react';

// import axios for making API requests
import axios from 'axios';

// import AnimeCard component
import AnimeCard from './AnimeCard';

// define JIKAN_API_BASE_URL constant
const JIKAN_API_BASE_URL = 'https://api.jikan.moe/v4';

// TopAnime component
const TopAnime = () => {
  // declare topAnime state variable and setTopAnime function to update it
  const [topAnime, setTopAnime] = useState([]);

  // useEffect hook to make API request when component mounts
  useEffect(() => {
    const fetchTopAnime = async () => {
      try {
        // make API request to get top anime
        const response = await axios.get(`${JIKAN_API_BASE_URL}/top/anime`);
        // update topAnime state with response data
        setTopAnime(response.data.data);
      } catch (error) {
        // log error if API request fails
        console.error('Error fetching data:', error);
      }
    };

    // call fetchTopAnime function
    fetchTopAnime();
  }, []);
  return (
    <div>
      <h2>Top 25 Anime</h2>
      <div className="anime-list">
        {topAnime.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default TopAnime;
