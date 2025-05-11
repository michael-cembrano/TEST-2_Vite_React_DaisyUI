import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md">
      <div className="flex-1 lg:flex-none">
        <div className="dropdown lg:hidden">
          <label 
            tabIndex={0} 
            className="btn btn-ghost"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul 
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${isOpen ? 'block' : 'hidden'}`}
            tabIndex={0}
          >
            <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="/about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="/projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="/contactus" onClick={() => setIsOpen(false)}>Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="flex-1 justify-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          <li><a href="/" className="hover:text-primary font-medium text-lg">Home</a></li>
          <li><a href="/about" className="hover:text-primary font-medium text-lg">About</a></li>
          <li><a href="/projects" className="hover:text-primary font-medium text-lg">Projects</a></li>
          <li><a href="/contactus" className="hover:text-primary font-medium text-lg">Contact Us</a></li>
        </ul>
      </div>

      <div className="flex-1 lg:flex-none justify-end">
        <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
