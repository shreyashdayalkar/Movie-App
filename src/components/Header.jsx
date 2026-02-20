import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo Section */}
        <div className="text-2xl font-bold text-red-500">
          MyOTT
        </div>

        {/* Navigation Section */}
        <nav className="flex gap-6 text-lg">
          <a href="#" className="hover:text-red-400 transition duration-200">
            Home
          </a>
          <a href="#" className="hover:text-red-400 transition duration-200">
            Movies
          </a>
          <a href="#" className="hover:text-red-400 transition duration-200">
            Trending
          </a>
          <a href="#" className="hover:text-red-400 transition duration-200">
            My List
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;