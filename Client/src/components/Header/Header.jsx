import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef(null); // Ref for the dropdown container

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener when the dropdown is open
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Handle scroll to show/hide header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-black h-9 text-center">
        <p className="font-normal text-sm text-white py-2">
          Sign up and get 20% off to your first order.{" "}
          <Link to={"/register"} className="underline">
            Sign Up Now
          </Link>
        </p>
      </div>
      <div className="bg-white">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo */}
          <Link to={"/"} className="font-['Merriweather'] text-[32px] font-extrabold mr-10">
            SHOP.CO
          </Link>

          {/* Nav Menu (Desktop) */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="font-normal text-base text-black hover:text-gray-500">
              Shop
            </a>
            <a href="#" className="font-normal text-base text-black hover:text-gray-500">
              On Sale
            </a>
            <a href="#" className="font-normal text-base text-black hover:text-gray-500">
              New Arrivals
            </a>
            <a href="#" className="font-normal text-base text-black hover:text-gray-500">
              Brands
            </a>
          </nav>

          {/* Search Bar */}
          <div className="ml-6">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-[577px] px-4 py-4 bg-[#F0F0F0] rounded-[62px] focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Cart and User Icons */}
          <div className="flex space-x-4 relative" ref={dropdownRef}>
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
            <button onClick={toggleDropdown} className="text-gray-700 hover:text-gray-900">
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

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-10 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;