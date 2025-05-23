import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

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
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const handleLocationChange = (location: Location) => {
    setSelectedLocation(location);
    // filter stores based on location
    console.log('Location changed to:', location);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching for:', searchQuery);
  };

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
    // Implement filter logic here
    console.log('Filter toggled:', !isFilterOpen);
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
  const filteredStores = allStores.filter(store => {
    const matchesLocation = store.location.state === selectedLocation.state && 
                           store.location.city === selectedLocation.city;
    const matchesSearch = searchQuery === "" || 
                         store.storeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         store.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         store.services.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesLocation && matchesSearch;
  });

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
      <div className="mb-6 flex items-center justify-between">
        <LocationSelector
          selectedLocation={selectedLocation}
          onLocationChange={handleLocationChange}
        />
        
        {/* Search and Filter Section */}
        <div className="flex-shrink-0 w-[414px] h-12 flex items-center gap-3">
          {/* Search Input */}
          <form onSubmit={handleSearch} className="relative flex-1">
            <div className="relative w-[17.9375rem] h-[2.4rem] rounded-lg bg-[#f6f6f6]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a store"
                className="w-full h-full rounded-lg bg-transparent px-4 pr-12 text-[#1f1f1f] font-['Poppins'] text-sm focus:outline-none focus:ring-2 focus:ring-[#1dbf73] focus:ring-opacity-50"
              />
              <button
              title='btn'
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#1f1f1f] hover:text-[#1dbf73] transition-colors"
              >
                <svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.7733 11.7703L15.8071 14.8034L14.8048 15.8057L11.7717 12.7719C10.6431 13.6766 9.23939 14.1687 7.79297 14.1666C4.27397 14.1666 1.41797 11.3106 1.41797 7.79163C1.41797 4.27263 4.27397 1.41663 7.79297 1.41663C11.312 1.41663 14.168 4.27263 14.168 7.79163C14.17 9.23804 13.678 10.6418 12.7733 11.7703ZM11.3523 11.2448C12.2513 10.3203 12.7533 9.0811 12.7513 7.79163C12.7513 5.05179 10.5321 2.83329 7.79297 2.83329C5.05314 2.83329 2.83464 5.05179 2.83464 7.79163C2.83464 10.5308 5.05314 12.75 7.79297 12.75C9.08244 12.752 10.3216 12.25 11.2461 11.351L11.3523 11.2448Z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </form>
          
          <button
            onClick={handleFilterToggle}
            className={`flex-shrink-0 w-[6.25rem] h-10 rounded-[0.625rem] border border-[#e7e7e9] bg-white flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors ${
              isFilterOpen ? 'bg-[#1dbf73] bg-opacity-10 border-[#1dbf73]' : ''
            }`}
          >
            <svg width={16} height={9} viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.75C0 0.551088 0.105357 0.360322 0.292893 0.21967C0.48043 0.0790178 0.734784 0 1 0H15C15.2652 0 15.5196 0.0790178 15.7071 0.21967C15.8946 0.360322 16 0.551088 16 0.75C16 0.948912 15.8946 1.13968 15.7071 1.28033C15.5196 1.42098 15.2652 1.5 15 1.5H1C0.734784 1.5 0.48043 1.42098 0.292893 1.28033C0.105357 1.13968 0 0.948912 0 0.75ZM2 4.5C2 4.30109 2.10536 4.11032 2.29289 3.96967C2.48043 3.82902 2.73478 3.75 3 3.75H13C13.2652 3.75 13.5196 3.82902 13.7071 3.96967C13.8946 4.11032 14 4.30109 14 4.5C14 4.69891 13.8946 4.88968 13.7071 5.03033C13.5196 5.17098 13.2652 5.25 13 5.25H3C2.73478 5.25 2.48043 5.17098 2.29289 5.03033C2.10536 4.88968 2 4.69891 2 4.5ZM4 8.25C4 8.05109 4.10536 7.86032 4.29289 7.71967C4.48043 7.57902 4.73478 7.5 5 7.5H11C11.2652 7.5 11.5196 7.57902 11.7071 7.71967C11.8946 7.86032 12 8.05109 12 8.25C12 8.44891 11.8946 8.63968 11.7071 8.78033C11.5196 8.92098 11.2652 9 11 9H5C4.73478 9 4.48043 8.92098 4.29289 8.78033C4.10536 8.63968 4 8.44891 4 8.25Z" fill="#1F1F1F" />
            </svg>
            <span className="text-[#1f1f1f] font-['Poppins'] text-sm font-medium">
              Filters
            </span>
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="w-full border-b border-dashed border-[#676565] bg-gray-50">
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
        <div className="divide-y divide-dashed divide-[#676565]">
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
          <div className="border-t border-dashed border-[#676565] bg-gray-50 p-6">
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
          <div className="border-t border-dashed border-[#676565] bg-gray-50 p-6">
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
            {searchQuery ? 
              `No stores found for "${searchQuery}" in ${selectedLocation.state}, ${selectedLocation.city}` :
              `No stores available in ${selectedLocation.state}, ${selectedLocation.city}`
            }
          </div>
          <p className="text-[#6e6e6e] font-['Poppins'] text-sm">
            {searchQuery ? 
              "Try adjusting your search terms or selecting a different location" :
              "Try selecting a different location"
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default Stores;