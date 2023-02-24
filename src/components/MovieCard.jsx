import React from "react";
import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  return (
    <div className="MovieCard">
      <span className="MovieCard__type">{movie.Type}</span>
      <img
        src={
          movie.Poster === "N/A"
            ? "https://media.gettyimages.com/id/1244034031/vector/cinema-poster-with-cola-film-strip-and-clapper-vector.jpg?s=612x612&w=0&k=20&c=JN4E5qJgcq3qm89rSc2BIJT6AZ80MvRJie__r3OENY8="
            : movie.Poster
        }
        alt={movie.Title.slice(0, 10)}
      />
      <div className="MovieCard__details">
        <h3>{movie.Title}</h3>
        <span>{movie.Year}</span>
      </div>
    </div>
  );
};

export default MovieCard;
