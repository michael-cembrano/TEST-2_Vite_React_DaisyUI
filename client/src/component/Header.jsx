import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {isMenuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/contactus">Contact Us</a>
              </li>
            </ul>
          )}
        </div>
        <a href="/" className="btn btn-ghost text-xl hover:bg-base-200">
          Portfolio
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/" className="hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-primary">
              About
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:text-primary">
              Projects
            </a>
          </li>
          <li>
            <a href="/contactus" className="hover:text-primary">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {/* <a className="btn btn-primary btn-sm">Get Started</a> */}
      </div>
    </div>
  );
};

export default Header;
