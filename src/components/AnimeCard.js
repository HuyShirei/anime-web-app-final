import React from 'react';
import { Link } from 'react-router-dom';
import './AnimeCard.css';

const AnimeCard = ({ anime }) => {
  return (
    <div className="anime-card">
       <img src={anime.images.jpg.image_url} />
      <div className="anime-details">
        <h3><Link to={`https://myanimelist.net/anime/${anime.mal_id}`} target="_blank" >{anime.title}</Link></h3>
        <p>{anime.synopsis}</p>
        <ul>
          <li>Score: {anime.score}</li>
          <li>Rank: {anime.rank}</li>
          <li>Popularity: {anime.popularity}</li>
        </ul>
      </div>
    </div>
  );
};

export default AnimeCard;
