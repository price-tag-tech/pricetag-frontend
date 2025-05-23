import React, { useState } from 'react';
import Button from '../../common/Button';

interface Location {
  state: string;
  city: string;
}

interface LocationSelectorProps {
  selectedLocation?: Location;
  onLocationChange: (location: Location) => void;
  className?: string;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  selectedLocation = { state: "Rivers", city: "Port Harcourt" },
  onLocationChange,
  className = ""
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const nigerianLocations: Location[] = [
    { state: "Rivers", city: "Port Harcourt" },
    { state: "Rivers", city: "Obio-Akpor" },
    { state: "Lagos", city: "Victoria Island" },
    { state: "Lagos", city: "Ikeja" },
    { state: "Lagos", city: "Lekki" },
    { state: "Lagos", city: "Surulere" },
    { state: "Abuja", city: "Central Area" },
    { state: "Abuja", city: "Garki" },
    { state: "Abuja", city: "Wuse" },
    { state: "Kano", city: "Sabon Gari" },
    { state: "Kano", city: "Fagge" },
    { state: "Oyo", city: "Ibadan" },
    { state: "Oyo", city: "Ogbomoso" },
    { state: "Delta", city: "Warri" },
    { state: "Delta", city: "Asaba" },
    { state: "Cross River", city: "Calabar" },
    { state: "Kaduna", city: "Kaduna" },
    { state: "Enugu", city: "Enugu" },
    { state: "Plateau", city: "Jos" },
    { state: "Akwa Ibom", city: "Uyo" }
  ];

  const handleLocationSelect = (location: Location) => {
    onLocationChange(location);
    setIsDropdownOpen(false);
  };

  const formatLocationDisplay = (location: Location) => {
    return `${location.state}, ${location.city}`;
  };

  const locationsByState = nigerianLocations.reduce((acc, location) => {
    if (!acc[location.state]) {
      acc[location.state] = [];
    }
    acc[location.state].push(location);
    return acc;
  }, {} as Record<string, Location[]>);

  return (
    <div className={`flex items-center w-[17.0625rem] ${className}`}>
      <div className="text-black font-['Poppins'] text-[.9375rem] font-medium leading-normal mr-3">
        Location:
      </div>
      <div className="relative flex-shrink-0 w-[11.875rem] h-12">
        <Button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full h-12 rounded-[0.625rem] border border-[#e7e7e9] bg-white px-4 flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:border-[#1dbf73]"
          aria-expanded={isDropdownOpen}
          aria-haspopup="listbox"
        >
          <span className="text-[#1f1f1f] font-['Poppins'] text-sm truncate">
            {formatLocationDisplay(selectedLocation)}
          </span>
          <svg 
            width={10} 
            height={6} 
            viewBox="0 0 10 6" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-200 flex-shrink-0 ${isDropdownOpen ? 'rotate-180' : ''}`}
          >
            <path d="M10 0V1.71429L5 6L0 1.71429V0L5 4.28571L10 0Z" fill="#444444" />
          </svg>
        </Button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 w-full mt-1 bg-white border border-[#e7e7e9] rounded-[0.625rem] shadow-lg z-50 max-h-64 overflow-y-auto">
            {Object.entries(locationsByState).map(([state, cities]) => (
              <div key={state} className="border-b border-gray-100 last:border-b-0">
                <div className="px-4 py-2 bg-gray-50 text-[#6e6e6e] font-['Poppins'] text-xs font-medium uppercase tracking-wide">
                  {state}
                </div>
                
                {cities.map((location) => (
                  <button
                    key={`${location.state}-${location.city}`}
                    onClick={() => handleLocationSelect(location)}
                    className={`w-full px-4 py-3 text-left text-[#1f1f1f] font-['Poppins'] text-sm hover:bg-gray-50 transition-colors ${
                      selectedLocation.state === location.state && selectedLocation.city === location.city
                        ? 'bg-[#1dbf73] bg-opacity-10 text-[#1dbf73]'
                        : ''
                    }`}
                  >
                    {location.city}
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}

        {isDropdownOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsDropdownOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default LocationSelector;