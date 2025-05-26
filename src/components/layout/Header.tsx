import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../../assets/logo/logo.svg";
import Button from "../common/Button";
import Container from "./Container";

interface HeaderProps {
  cartItemCount?: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper function to check if a route is active
  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Sticky Header */}
      <header 
        className=" top-0 left-0 right-0 z-50 mt-2 transition-all duration-500 ease-out"
      >
        <div className="relative w-full max-w-[1434px] mx-auto transition-all duration-300 ease-out">
          <Container>
            <div className="flex items-center justify-between h-[2.75rem] md:h-[3.4375rem] py-2 transition-all duration-300 ease-out">
              {/* Left section: Hamburger (mobile only) and Logo */}
              <div className="flex items-center h-full">
                <button
                  className="lg:hidden z-20 flex items-center justify-center h-full w-10 text-black focus:outline-none mr-1"
                  onClick={toggleMenu}
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                  <div className="relative w-5">
                    <span
                      aria-hidden="true"
                      className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                        isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                      }`}
                    />
                    <span
                      aria-hidden="true"
                      className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                        isMenuOpen ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    <span
                      aria-hidden="true"
                      className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                        isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                      }`}
                    />
                  </div>
                </button>

                <Link to="/" className="flex items-center h-full group">
                  <img
                    src={logoImage}
                    alt="PriceTag Logo"
                    className="w-[6.5rem] md:w-[8.6875rem] h-[2.5rem] md:h-[3.4375rem] object-contain mt-3 md:mt-0 transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center justify-end space-x-6 h-full">
                <nav className="flex items-center space-x-6 h-full">
                  <Link
                    to="/stores"
                    className="flex items-center h-full text-black text-center font-['Poppins'] text-[14px] font-[500] leading-normal hover:text-green-600 transition-all duration-300 ease-out relative group"
                  >
                    <span className="relative z-10">Find Stores</span>
                    <div className="absolute inset-0 bg-green-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                  </Link>
                  <Link
                    to="/become-agent"
                    className="flex items-center h-full text-black text-center font-['Poppins'] text-[14px] font-[500] leading-normal hover:text-green-600 transition-all duration-300 ease-out relative group"
                  >
                    <span className="relative z-10">Become an Agent</span>
                    <div className="absolute inset-0 bg-green-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                  </Link>
                  <Link
                    to="/open-store"
                    className="flex items-center h-full text-black text-center font-['Poppins'] text-[14px] font-[500] leading-normal hover:text-green-600 transition-all duration-300 ease-out relative group"
                  >
                    <span className="relative z-10">Open a Store</span>
                    <div className="absolute inset-0 bg-green-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                  </Link>
                  <Link
                    to="/login"
                    className="flex items-center h-full text-black text-center font-['Poppins'] text-[14px] font-[500] leading-normal hover:text-green-600 transition-all duration-300 ease-out relative group"
                  >
                    <span className="relative z-10">Log In</span>
                    <div className="absolute inset-0 bg-green-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                  </Link>
                </nav>

                <Button
                  variant="outline"
                  size="md"
                  to="/register"
                  className="w-[8.5rem] h-10 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg"
                >
                  Sign up for free
                </Button>

                <div className="relative flex items-center h-full group">
                  <div className="relative flex-shrink-0 w-[1.375rem] h-[1.3125rem] cursor-pointer transition-transform duration-300 ease-out group-hover:scale-110">
                    <div className="flex flex-shrink-0 justify-center items-center w-3.5 h-[0.8125rem]">
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.1812 7.15C10.706 7.15 11.1679 6.8835 11.4058 6.4805L13.9108 2.262C14.1697 1.833 13.8339 1.3 13.3021 1.3H2.94591L2.28815 0H0V1.3H1.39948L3.91855 6.2335L2.9739 7.8195C2.46309 8.6905 3.13484 9.75 4.19844 9.75H12.5953V8.45H4.19844L4.96816 7.15H10.1812ZM3.61066 2.6H12.1125L10.1812 5.85H5.26904L3.61066 2.6ZM4.19844 10.4C3.42873 10.4 2.80596 10.985 2.80596 11.7C2.80596 12.415 3.42873 13 4.19844 13C4.96816 13 5.59792 12.415 5.59792 11.7C5.59792 10.985 4.96816 10.4 4.19844 10.4ZM11.1958 10.4C10.4261 10.4 9.80336 10.985 9.80336 11.7C9.80336 12.415 10.4261 13 11.1958 13C11.9656 13 12.5953 12.415 12.5953 11.7C12.5953 10.985 11.9656 10.4 11.1958 10.4Z"
                          fill="#1F1F1F"
                        />
                      </svg>
                    </div>

                    {cartItemCount > 0 && (
                      <div className="absolute top-0 right-0 flex items-center justify-center flex-shrink-0 w-[0.9375rem] h-[0.9375rem] rounded-full bg-[#1f1f1f] animate-pulse">
                        <span className="text-white text-center font-['Poppins'] text-[10px] font-bold leading-normal">
                          {cartItemCount > 9 ? "9+" : cartItemCount}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile Cart Icon */}
              <div className="lg:hidden flex items-center h-full z-20 group">
                <div className="relative flex-shrink-0 w-[1.375rem] h-[1.3125rem] cursor-pointer transition-transform duration-300 ease-out group-hover:scale-110">
                  <div className="flex flex-shrink-0 justify-center items-center w-3.5 h-[0.8125rem]">
                    <svg
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.1812 7.15C10.706 7.15 11.1679 6.8835 11.4058 6.4805L13.9108 2.262C14.1697 1.833 13.8339 1.3 13.3021 1.3H2.94591L2.28815 0H0V1.3H1.39948L3.91855 6.2335L2.9739 7.8195C2.46309 8.6905 3.13484 9.75 4.19844 9.75H12.5953V8.45H4.19844L4.96816 7.15H10.1812ZM3.61066 2.6H12.1125L10.1812 5.85H5.26904L3.61066 2.6ZM4.19844 10.4C3.42873 10.4 2.80596 10.985 2.80596 11.7C2.80596 12.415 3.42873 13 4.19844 13C4.96816 13 5.59792 12.415 5.59792 11.7C5.59792 10.985 4.96816 10.4 4.19844 10.4ZM11.1958 10.4C10.4261 10.4 9.80336 10.985 9.80336 11.7C9.80336 12.415 10.4261 13 11.1958 13C11.9656 13 12.5953 12.415 12.5953 11.7C12.5953 10.985 11.9656 10.4 11.1958 10.4Z"
                        fill="#1F1F1F"
                      />
                    </svg>
                  </div>

                  {cartItemCount > 0 && (
                    <div className="absolute top-0 right-0 flex items-center justify-center flex-shrink-0 w-[0.9375rem] h-[0.9375rem] rounded-full bg-[#1f1f1f] animate-pulse">
                      <span className="text-white text-center font-['Poppins'] text-[10px] font-bold leading-normal">
                        {cartItemCount > 9 ? "9+" : cartItemCount}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
              className={`fixed inset-0 bg-white z-10 transform transition-all duration-500 ease-out lg:hidden ${
                isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
            >
              <div className="flex flex-col h-full pt-20 px-6 pb-6 overflow-y-auto">
                <nav className="flex flex-col space-y-6 mb-8">
                  <Link
                    to="/stores"
                    className="text-black text-left font-['Poppins'] text-lg font-[500] leading-normal hover:text-green-600 transition-all duration-300 ease-out transform hover:translate-x-2"
                    onClick={toggleMenu}
                  >
                    Find Stores
                  </Link>
                  <Link
                    to="/become-agent"
                    className="text-black text-left font-['Poppins'] text-lg font-[500] leading-normal hover:text-green-600 transition-all duration-300 ease-out transform hover:translate-x-2"
                    onClick={toggleMenu}
                  >
                    Become an Agent
                  </Link>
                  <Link
                    to="/open-store"
                    className="text-black text-left font-['Poppins'] text-lg font-[500] leading-normal hover:text-green-600 transition-all duration-300 ease-out transform hover:translate-x-2"
                    onClick={toggleMenu}
                  >
                    Open a Store
                  </Link>
                  <Link
                    to="/login"
                    className="text-black text-left font-['Poppins'] text-lg font-[500] leading-normal hover:text-green-600 transition-all duration-300 ease-out transform hover:translate-x-2"
                    onClick={toggleMenu}
                  >
                    Log In
                  </Link>
                </nav>
                
                <Button
                  variant="outline"
                  size="md"
                  to="/register"
                  className="w-full transition-all duration-300 ease-out hover:scale-105"
                  onClick={toggleMenu}
                >
                  Sign up for free
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200/50 z-40 shadow-lg">
        <div className="flex items-center justify-around px-4 py-2">
          {/* Home */}
          <Link
            to="/"
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-300 ease-out transform hover:scale-105 ${
              isActiveRoute('/') 
                ? 'text-green-600 bg-green-50 shadow-md scale-105' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <svg 
              className={`w-6 h-6 mb-1 transition-all duration-300 ease-out ${
                isActiveRoute('/') ? 'transform scale-110' : ''
              }`} 
              fill={isActiveRoute('/') ? 'currentColor' : 'none'} 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-xs font-medium">Home</span>
          </Link>

          {/* Stores */}
          <Link
            to="/stores"
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-300 ease-out transform hover:scale-105 ${
              isActiveRoute('/stores') 
                ? 'text-green-600 bg-green-50 shadow-md scale-105' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <svg 
              className={`w-6 h-6 mb-1 transition-all duration-300 ease-out ${
                isActiveRoute('/stores') ? 'transform scale-110' : ''
              }`} 
              fill={isActiveRoute('/stores') ? 'currentColor' : 'none'} 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span className="text-xs font-medium">Stores</span>
          </Link>

          {/* Search */}
          <Link
            to="/products/search"
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-300 ease-out transform hover:scale-105 ${
              isActiveRoute('/products/search') 
                ? 'text-green-600 bg-green-50 shadow-md scale-105' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <svg 
              className={`w-6 h-6 mb-1 transition-all duration-300 ease-out ${
                isActiveRoute('/products/search') ? 'transform scale-110' : ''
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="text-xs font-medium">Search</span>
          </Link>

          {/* Profile */}
          <Link
            to="/profile"
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-300 ease-out transform hover:scale-105 ${
              isActiveRoute('/profile') 
                ? 'text-green-600 bg-green-50 shadow-md scale-105' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <svg 
              className={`w-6 h-6 mb-1 transition-all duration-300 ease-out ${
                isActiveRoute('/profile') ? 'transform scale-110' : ''
              }`} 
              fill={isActiveRoute('/profile') ? 'currentColor' : 'none'} 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-xs font-medium">Profile</span>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-300 ease-out transform hover:scale-105 relative ${
              isActiveRoute('/cart') 
                ? 'text-green-600 bg-green-50 shadow-md scale-105' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <div className="relative">
              <svg 
                className={`w-6 h-6 mb-1 transition-all duration-300 ease-out ${
                  isActiveRoute('/cart') ? 'transform scale-110' : ''
                }`} 
                fill={isActiveRoute('/cart') ? 'currentColor' : 'none'} 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                />
              </svg>
              {cartItemCount > 0 && (
                <div className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-red-500 rounded-full animate-bounce">
                  <span className="text-white text-[10px] font-bold">
                    {cartItemCount > 9 ? "9+" : cartItemCount}
                  </span>
                </div>
              )}
            </div>
            <span className="text-xs font-medium">Cart</span>
          </Link>
        </div>
      </nav>

      {/* Add top padding to body content to prevent overlap with fixed header */}
      <div className="h-[2.75rem] md:h-[3.4375rem]" />
    </>
  );
};

export default Header;