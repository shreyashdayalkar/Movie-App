import React from "react";

// Functional Component
const MovieCard = ({ movie }) => {
  //Props (Parent to Child)
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-60 hover:scale-105 duration-300 ">
      <img src={movie.poster} alt={movie.title} 
      className="w-full h-72 object-cover rounded-lg"/>

      <h3 className="text-xl font-semibold mt-3">{movie.title}</h3>

      <p className="text-gray-600">Year: {movie.year}</p>

      <p className="text-yellow-500 font-medium">Rating: ⭐ {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
