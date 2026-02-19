import React from "react";
import movies from "../data/movies";
import MovieCard from "../components/MovieCard";

const Home = () => {
  return (
    <div
      className="min-h-screen p-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp14818830.webp')",
      }}
    >
      <div className="min-h-screen p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Movie List
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
