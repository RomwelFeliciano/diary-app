import React from "react";

const Navbar = () => {
  return (
    <header className="w-full h-24 fixed top-0 px-20 bg-neutral-900 text-white flex justify-between items-center">
      <h2 className="text-2xl font-bold">My Diary</h2>
      <nav className="flex items-center gap-10">
        <h2 className="text-xl text-sky-400">Hello, juandelacruz@gmail.com</h2>
        <button className="border-2 border-sky-400 rounded-lg px-4 py-1 text-lg hover:bg-sky-400 hover:text-black transition-all duration-300 ease-in-out">
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
