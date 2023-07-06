// Import React and the MangaCard.css stylesheet
import React from 'react';
import { Link } from 'react-router-dom';
import './MangaCard.css';

// Create a functional component for displaying manga information
const MangaCard = ({ manga }) => {
  return (
    // Render the manga card with the manga information
    <div className="manga-card">
       <img src={manga.images.jpg.image_url} />
      <div className="manga-details">
      <h3><Link to={`https://myanimelist.net/manga/${manga.mal_id}`} target="_blank" >{manga.title}</Link></h3>
        <p>{manga.synopsis}</p>
        <ul>
          <li>Score: {manga.score}</li>
          <li>Rank: {manga.rank}</li>
          <li>Popularity: {manga.popularity}</li>
        </ul>
      </div>
    </div>
  );
};

// Export the MangaCard component
export default MangaCard;