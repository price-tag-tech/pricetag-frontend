import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Store {
  id: string;
  owner: string;
  ownerImage: string;
  storeName: string;
  productCount: string;
  priceRange: string;
  services: string;
  location: {
    state: string;
    city: string;
  };
}

interface Location {
  state: string;
  city: string;
}

const LocationSelector: React.FC<{
  selectedLocation: Location;
  onLocationChange: (location: Location) => void;
  className?: string;
}> = ({ selectedLocation, onLocationChange, className = "" }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const nigerianLocations: Location[] = [
    { state: "Rivers", city: "Port Harcourt" },
    { state: "Rivers", city: "Obio-Akpor" },
    { state: "Lagos", city: "Victoria Island" },
    { state: "Lagos", city: "Ikeja" },
    { state: "Lagos", city: "Lekki" },
    { state: "Abuja", city: "Central Area" },
    { state: "Abuja", city: "Garki" },
    { state: "Kano", city: "Sabon Gari" },
    { state: "Oyo", city: "Ibadan" },
    { state: "Delta", city: "Warri" },
    { state: "Delta", city: "Asaba" }
  ];

  const handleLocationSelect = (location: Location) => {
    onLocationChange(location);
    setIsDropdownOpen(false);
  };

  const formatLocationDisplay = (location: Location) => {
    return `${location.state}, ${location.city}`;
  };

  return (
    <div className={`flex items-center w-[17.0625rem] ${className}`}>
      <div className="text-black font-['Poppins'] text-[.9375rem] font-medium leading-normal mr-3">
        Location:
      </div>
      <div className="relative flex-shrink-0 w-[11.875rem] h-10">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="fit-content h-10 rounded-[0.625rem] border border-[#e7e7e9] bg-white flex items-center gap-2 px-2 hover:bg-gray-50 transition-colors focus:outline-none focus:border-[#1dbf73]"
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
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 w-full mt-1 bg-white border border-[#e7e7e9] rounded-[0.625rem] shadow-lg z-50 max-h-48 overflow-y-auto">
            {nigerianLocations.map((location) => (
              <button
                key={`${location.state}-${location.city}`}
                onClick={() => handleLocationSelect(location)}
                className={`w-full px-4 py-3 text-left text-[#1f1f1f] font-['Poppins'] text-sm hover:bg-gray-50 transition-colors first:rounded-t-[0.625rem] last:rounded-b-[0.625rem] ${
                  selectedLocation.state === location.state && selectedLocation.city === location.city
                    ? 'bg-[#1dbf73] bg-opacity-10 text-[#1dbf73]'
                    : ''
                }`}
              >
                {formatLocationDisplay(location)}
              </button>
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

const Stores: React.FC = () => {
  const [visibleStores, setVisibleStores] = useState<number>(5);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] = useState<Location>({
    state: "Rivers",
    city: "Port Harcourt"
  });

  const handleLocationChange = (location: Location) => {
    setSelectedLocation(location);
    // filter stores based on location
    console.log('Location changed to:', location);
  };

  // Sample store data 
  const allStores: Store[] = [
    {
      id: '1',
      owner: 'Prince Godson',
      ownerImage: '/path-to-avatar1.jpg',
      storeName: 'PG Beauty and Co LTD',
      productCount: '200K',
      priceRange: '20,00 - 100,000',
      services: 'Dry Cleaning',
      location: { state: 'Rivers', city: 'Port Harcourt' }
    },
    {
      id: '2',
      owner: 'Mary Jane',
      ownerImage: '/path-to-avatar2.jpg',
      storeName: 'MJ Ventures',
      productCount: '1K',
      priceRange: '400 - 1,500',
      services: 'Dry Cleaning',
      location: { state: 'Lagos', city: 'Victoria Island' }
    },
    {
      id: '3',
      owner: 'David Ugo',
      ownerImage: '/path-to-avatar3.jpg',
      storeName: 'David Ugo and Sons',
      productCount: '2,300',
      priceRange: '3,000 - 20,000',
      services: 'Dry Cleaning',
      location: { state: 'Abuja', city: 'Central Area' }
    },
    {
      id: '4',
      owner: 'Desmond Obi',
      ownerImage: '/path-to-avatar4.jpg',
      storeName: "Obi's Enterprice",
      productCount: '30K',
      priceRange: '4,500 - 16,000',
      services: 'Dry Cleaning',
      location: { state: 'Rivers', city: 'Port Harcourt' }
    },
    {
      id: '5',
      owner: 'Toluwatobi Olaruni',
      ownerImage: '/path-to-avatar5.jpg',
      storeName: 'TOL Automobile',
      productCount: '200',
      priceRange: '800 - 14,500',
      services: 'Dry Cleaning',
      location: { state: 'Oyo', city: 'Ibadan' }
    },
    // Additional stores for load more functionality
    {
      id: '6',
      owner: 'Sarah Johnson',
      ownerImage: '/path-to-avatar6.jpg',
      storeName: 'SJ Fashion Hub',
      productCount: '15K',
      priceRange: '2,000 - 50,000',
      services: 'Fashion & Beauty',
      location: { state: 'Lagos', city: 'Lekki' }
    },
    {
      id: '7',
      owner: 'Ahmed Hassan',
      ownerImage: '/path-to-avatar7.jpg',
      storeName: 'Hassan Electronics',
      productCount: '8K',
      priceRange: '5,000 - 200,000',
      services: 'Electronics',
      location: { state: 'Kano', city: 'Sabon Gari' }
    },
    {
      id: '8',
      owner: 'Grace Adebayo',
      ownerImage: '/path-to-avatar8.jpg',
      storeName: 'Grace Food Palace',
      productCount: '500',
      priceRange: '100 - 5,000',
      services: 'Food & Beverages',
      location: { state: 'Delta', city: 'Warri' }
    }
  ];

  // Filter stores based on selected location
  const filteredStores = allStores.filter(store => 
    store.location.state === selectedLocation.state && 
    store.location.city === selectedLocation.city
  );

  const displayedStores = filteredStores.slice(0, visibleStores);
  const hasMoreStores = visibleStores < filteredStores.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      setVisibleStores(prev => Math.min(prev + 5, filteredStores.length));
      setIsLoading(false);
    }, 1000);
  };

  const handleVisitStore = (storeId: string) => {
    // Navigate to store page or handle store visit
    console.log(`Visiting store with ID: ${storeId}`);
  };

  return (
    <div className="w-full max-w-[1423px] mx-auto px-4 py-6">
      {/* Top Section with Location Dropdown */}
      <div className="mb-6">
        <LocationSelector
          selectedLocation={selectedLocation}
          onLocationChange={handleLocationChange}
        />
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="w-full border-b border-[#676565] bg-gray-50">
          <div className="flex items-center px-6 py-4">
            <div className="flex-1 min-w-[250px] text-[#6e6e6e] font-['Poppins'] text-sm font-medium">
              Owner
            </div>
            <div className="flex-1 min-w-[200px] text-[#6e6e6e] font-['Poppins'] text-sm font-medium">
              Store Name
            </div>
            <div className="flex-1 min-w-[120px] text-[#6e6e6e] font-['Poppins'] text-sm font-medium">
              Products
            </div>
            <div className="flex-1 min-w-[180px] text-[#6e6e6e] font-['Poppins'] text-sm font-medium">
              Price Range (₦)
            </div>
            <div className="flex-1 min-w-[150px] text-[#6e6e6e] font-['Poppins'] text-sm font-medium">
              Services
            </div>
            <div className="w-[140px] text-[#6e6e6e] font-['Poppins'] text-sm font-medium">
              Action
            </div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-[#676565]">
          {displayedStores.map((store, index) => (
            <div key={store.id} className="w-full">
              <div className="flex items-center px-6 py-4 hover:bg-gray-50 transition-colors">
                {/* Owner */}
                <div className="flex-1 min-w-[250px] flex items-center">
                  <div className="w-[3.125rem] h-[3.125rem] rounded-full bg-gray-200 overflow-hidden mr-3 flex-shrink-0">
                    <img
                      src={store.ownerImage}
                      alt={store.owner}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(store.owner)}&background=1dbf73&color=fff&size=50`;
                      }}
                    />
                  </div>
                  <span className="text-[#1f1f1f] font-['Poppins'] text-sm font-semibold">
                    {store.owner}
                  </span>
                </div>

                {/* Store Name */}
                <div className="flex-1 min-w-[200px]">
                  <span className="text-[#1f1f1f] font-['Poppins'] text-xs">
                    {store.storeName}
                  </span>
                </div>

                {/* Product Count */}
                <div className="flex-1 min-w-[120px]">
                  <span className="text-[#1f1f1f] font-['Poppins'] text-xs">
                    {store.productCount}
                  </span>
                </div>

                {/* Price Range */}
                <div className="flex-1 min-w-[180px]">
                  <span className="text-[#1f1f1f] font-['Poppins'] text-xs">
                    {store.priceRange}
                  </span>
                </div>

                {/* Services */}
                <div className="flex-1 min-w-[150px]">
                  <span className="text-[#1f1f1f] font-['Poppins'] text-xs">
                    {store.services}
                  </span>
                </div>

                {/* Visit Store Button */}
                <div className="w-[140px] flex justify-center">
                  <button
                    onClick={() => handleVisitStore(store.id)}
                    className="w-24 h-[2.3125rem] rounded-lg border border-[#1f1f1f] text-[#1f1f1f] font-['Poppins'] text-[.8125rem] font-medium hover:bg-[#1f1f1f] hover:text-white transition-colors flex items-center justify-center"
                  >
                    Visit store
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        {hasMoreStores && (
          <div className="border-t border-[#676565] bg-gray-50 p-6">
            <div className="flex justify-center">
              <button
                onClick={handleLoadMore}
                disabled={isLoading}
                className="w-36 h-12 rounded-lg border border-[#e7e7e9] bg-white text-black font-['Poppins'] text-sm hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                    Loading...
                  </div>
                ) : (
                  'Load More'
                )}
              </button>
            </div>
          </div>
        )}

        {/* No More Stores Message */}
        {!hasMoreStores && filteredStores.length > 5 && (
          <div className="border-t border-[#676565] bg-gray-50 p-6">
            <div className="text-center text-[#6e6e6e] font-['Poppins'] text-sm">
              All stores have been loaded
            </div>
          </div>
        )}
      </div>

      {/* Empty State */}
      {filteredStores.length === 0 && (
        <div className="text-center py-12">
          <div className="text-[#6e6e6e] font-['Poppins'] text-lg mb-4">
            No stores available in {selectedLocation.state}, {selectedLocation.city}
          </div>
          <p className="text-[#6e6e6e] font-['Poppins'] text-sm">
            Try selecting a different location
          </p>
        </div>
      )}
    </div>
  );
};

export default Stores;