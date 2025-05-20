import React, { useState } from 'react';
import Button from './Button';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch = () => {}, 
  placeholder = "Search and compare products" 
}) => {
  const [query, setQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Products');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  
  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-center items-start w-full max-w-[595px] h-14">
      {/* Main search area */}
      <div className="relative flex items-center w-[457px] h-14 rounded-lg bg-[#f6f6f6]">
        {/* Category selector dropdown */}
        <div className="relative flex items-center h-full ml-1">
          <button 
            onClick={toggleDropdown}
            className="flex items-center justify-between w-[7.25rem] h-[2.5625rem] rounded-lg bg-white px-3 focus:outline-none"
          >
            <span className="text-black font-['Poppins'] text-sm font-medium leading-normal">
              {selectedCategory}
            </span>
            <svg 
              width={10} 
              height={6} 
              viewBox="0 0 10 6" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
            >
              <path d="M10 0V1.71429L5 6L0 1.71429V0L5 4.28571L10 0Z" fill="#444444" />
            </svg>
          </button>
          
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-[7.25rem] mt-1 bg-white rounded-lg shadow-md z-10">
              <ul>
                {['Products', 'Services', 'Stores'].map((category) => (
                  <li 
                    key={category}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-black font-['Poppins'] text-sm"
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Search input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-grow h-full bg-transparent border-none outline-none pl-4 pr-2 text-[#636466] font-['Poppins'] text-xs"
        />
      </div>
      
      {/* Search button */}
      <Button 
        onClick={handleSearch}
        className="flex justify-center items-center w-[7.75rem] h-14 rounded-lg bg-[#1f1f1f] ml-2 hover:bg-black transition-colors"
        disableFocusRing={true}
        variant="secondary"
      >
        <svg 
          width={17} 
          height={17} 
          viewBox="0 0 17 17" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path d="M12.7719 11.7704L15.8057 14.8035L14.8034 15.8058L11.7704 12.772C10.6418 13.6767 9.23807 14.1687 7.79166 14.1667C4.27266 14.1667 1.41666 11.3107 1.41666 7.79169C1.41666 4.27269 4.27266 1.41669 7.79166 1.41669C11.3107 1.41669 14.1667 4.27269 14.1667 7.79169C14.1687 9.2381 13.6766 10.6418 12.7719 11.7704ZM11.351 11.2448C12.25 10.3204 12.752 9.08116 12.75 7.79169C12.75 5.05185 10.5308 2.83335 7.79166 2.83335C5.05182 2.83335 2.83332 5.05185 2.83332 7.79169C2.83332 10.5308 5.05182 12.75 7.79166 12.75C9.08113 12.7521 10.3203 12.25 11.2448 11.3511L11.351 11.2448Z" fill="white" />
        </svg>
        <span className="text-white font-['Poppins'] text-[.9375rem] leading-normal">
          Search
        </span>
      </Button>
    </div>
  );
};

export default SearchBar;
