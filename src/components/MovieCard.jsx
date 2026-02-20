import React from "react";

// Functional Component
const MovieCard = ({ movie }) => {
  //Props (Parent to Child)
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-60 hover:scale-105 duration-300 ">
      {/* Movie Poster */}
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">
          {movie.title}
        </h3>

        <p className="text-sm text-gray-600 mt-1">
          Year: {movie.year}
        </p>

        <p className="text-sm text-gray-700 mt-2 line-clamp-3">
          {movie.description}
        </p>

        <p className="text-yellow-500 font-semibold mt-3">
          ⭐ {movie.rating}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
