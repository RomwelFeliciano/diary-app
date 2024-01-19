import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-10 flex h-24 w-full items-center justify-between bg-neutral-900 px-20 text-white">
      <h2 className="text-2xl font-bold">My Diary</h2>
      <nav className="flex items-center gap-10">
        <h2 className="text-xl text-green-400">
          Hello, juandelacruz@gmail.com
        </h2>
        <button className="rounded-lg border-2 border-green-400 px-4 py-1 text-lg transition-all duration-300 ease-in-out hover:bg-green-400 hover:text-black">
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
