import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/logo/logo.svg";
import Button from "../common/Button";
import Container from "./Container";

interface HeaderProps {
  cartItemCount?: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative w-full max-w-[1434px] mx-auto px-4 mt-4">
      <Container>
      <div className="flex items-center justify-between h-[2.75rem] md:h-[3.4375rem]">
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

          <Link to="/" className="flex items-center h-full">
            <img
              src={logoImage}
              alt="PriceTag Logo"
              className="w-[6.5rem] md:w-[8.6875rem] h-[2.5rem] md:h-[3.4375rem] object-contain mt-3 md:mt-0"
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center justify-end space-x-6 h-full">
          <nav className="flex items-center space-x-6 h-full">
            <Link
              to="/stores"
              className="flex items-center h-full text-black text-center font-['Poppins'] text-[14px] font-[500] leading-normal hover:text-brand-500 transition-colors"
            >
              Find Stores
            </Link>
            <Link
              to="/become-agent"
              className="flex items-center h-full text-black text-center font-['Poppins'] text-[14px] font-[500] leading-normal hover:text-brand-500 transition-colors"
            >
              Become an Agent
            </Link>
            <Link
              to="/open-store"
              className="flex items-center h-full text-black text-center font-['Poppins'] text-[14px] font-[500] leading-normal hover:text-brand-500 transition-colors"
            >
              Open a Store
            </Link>
            <Link
              to="/login"
              className="flex items-center h-full text-black text-center font-['Poppins'] text-[14px] font-[500] leading-normal hover:text-brand-500 transition-colors"
            >
              Log In
            </Link>
          </nav>

          <Button
            variant="outline"
            size="md"
            to="/register"
            className="w-[8.5rem] h-10"
          >
            Sign up for free
          </Button>

          <div className="relative flex items-center h-full">
            <div className="relative flex-shrink-0 w-[1.375rem] h-[1.3125rem] cursor-pointer">
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
                <div className="absolute top-0 right-0 flex items-center justify-center flex-shrink-0 w-[0.9375rem] h-[0.9375rem] rounded-full bg-[#1f1f1f]">
                  <span className="text-white text-center font-['Poppins'] text-[10px] font-bold leading-normal">
                    {cartItemCount > 9 ? "9+" : cartItemCount}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:hidden flex items-center h-full z-20">
          <div className="relative flex-shrink-0 w-[1.375rem] h-[1.3125rem] cursor-pointer">
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
              <div className="absolute top-0 right-0 flex items-center justify-center flex-shrink-0 w-[0.9375rem] h-[0.9375rem] rounded-full bg-[#1f1f1f]">
                <span className="text-white text-center font-['Poppins'] text-[10px] font-bold leading-normal">
                  {cartItemCount > 9 ? "9+" : cartItemCount}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-10 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-6 overflow-y-auto">
          <nav className="flex flex-col space-y-6 mb-8">
            <Link
              to="/stores"
              className="text-black text-left font-['Poppins'] text-lg font-[500] leading-normal hover:text-brand-500 transition-colors"
              onClick={toggleMenu}
            >
              Find Stores
            </Link>
            <Link
              to="/become-agent"
              className="text-black text-left font-['Poppins'] text-lg font-[500] leading-normal hover:text-brand-500 transition-colors"
              onClick={toggleMenu}
            >
              Become an Agent
            </Link>
            <Link
              to="/open-store"
              className="text-black text-left font-['Poppins'] text-lg font-[500] leading-normal hover:text-brand-500 transition-colors"
              onClick={toggleMenu}
            >
              Open a Store
            </Link>
            <Link
              to="/login"
              className="text-black text-left font-['Poppins'] text-lg font-[500] leading-normal hover:text-brand-500 transition-colors"
              onClick={toggleMenu}
            >
              Log In
            </Link>
          </nav>
          
          <Button
            variant="outline"
            size="md"
            to="/register"
            className="w-full"
            onClick={toggleMenu}
          >
            Sign up for free
          </Button>
        </div>
      </div>
      </Container>
    </header>
  );
};

export default Header;