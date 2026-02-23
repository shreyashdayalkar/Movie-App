import React, { useState, useEffect } from "react";
import movies from "../data/movies";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center bg-no-repeat bg-fixed overflow-x-hidden"
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp14818830.webp')",
      }}
    >
      <div className="min-h-screen w-full bg-black/40 p-6">
        <div className="max-w-xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search for a movie..."
            className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/30 placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-10 text-white drop-shadow-2xl">
          Movie List
        </h1>

        <div className="max-w-7xl mx-auto w-full">
          {filteredMovies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="w-full flex justify-center mt-20">
              <div className="bg-black/70 backdrop-blur-lg px-12 py-8 rounded-2xl border border-white/10 text-center shadow-2xl">
                <p className="text-white text-2xl font-medium">
                  No movies found matching "{debouncedQuery}"
                </p>
                <p className="text-gray-400 mt-2">
                  Try a different title or clear the search.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  View All Movies
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;