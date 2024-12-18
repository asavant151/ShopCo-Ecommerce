import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white md:hidden">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center">
          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-gray-900 mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo */}
          <Link to="/" className="font-['Merriweather'] text-2xl font-bold">SHOP.CO</Link>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md">
            <nav className="flex flex-col space-y-4 p-4">
              <a
                href="#"
                className="font-normal text-base text-black hover:text-gray-500"
              >
                Shop
              </a>
              <a
                href="#"
                className="font-normal text-base text-black hover:text-gray-500"
              >
                On Sale
              </a>
              <a
                href="#"
                className="font-normal text-base text-black hover:text-gray-500"
              >
                New Arrivals
              </a>
              <a
                href="#"
                className="font-normal text-base text-black hover:text-gray-500"
              >
                Brands
              </a>
            </nav>
          </div>
        )}

        {/* Cart and User Icons */}
        <div className="flex space-x-4">
          {/* Search Icon */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-gray-700 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="text-gray-700 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
          <button className="text-gray-700 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>
      </div>
      {isSearchOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-4 bg-[#F0F0F0] rounded-[62px] focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      )}
    </header>
  );
};

export default MobileHeader;
