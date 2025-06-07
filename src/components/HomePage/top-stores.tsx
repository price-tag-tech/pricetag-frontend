import React, { useState } from 'react';
import Button from '../common/Button';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { RefreshCcw, StoreIcon } from 'lucide-react';
import useToggle from '../../hooks/useToggle';


interface StoreData {
  id: string;
  owner: {
    name: string;
    avatarUrl: string;
  };
  name: string;
  products: string;
  services: string;
  distance?: string,
  priceRange: string;
  isVerified?: boolean
}

const sampleStores: StoreData[] = [
  {
    id: '1',
    owner: { name: 'Prince Godson', avatarUrl: '/assets/users/avatar-1.jpg' },
    name: 'PG Beauty and Co LTD',
    products: '270K',
    services: 'Dry Cleaning',
    priceRange: '20.00 - 100,000',
    distance: "14km away",
    isVerified: true
  },
  {
    id: '2',
    owner: { name: 'Mary Jane', avatarUrl: '/assets/users/avatar-2.jpg' },
    name: 'MJ Ventures',
    products: '1K',
    services: 'Dry Cleaning',
    priceRange: '400 - 1,500',
    distance: "3km away"
  },
  {
    id: '1',
    owner: { name: 'Prince Godson', avatarUrl: '/assets/users/avatar-3.jpg' },
    name: 'PG Beauty and Co LTD',
    products: '270K',
    services: 'Dry Cleaning',
    priceRange: '20.00 - 100,000',
    distance: "1",
    isVerified: true
  },
  {
    id: '2',
    owner: { name: 'Mary Jane', avatarUrl: '/assets/users/avatar-4.jpg' },
    name: 'MJ Ventures',
    products: '1K',
    services: 'Dry Cleaning',
    priceRange: '400 - 1,500',
  },

];

const FilterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="16"
    height="10"
    viewBox="0 0 18 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z"
      fill="currentColor"
    />
  </svg>
);


const TopStores: React.FC = () => {
  const handleFilterClick = () => console.log('Filters button clicked');
  const [isLoading, setIsLoading] = useState(false)

  const handleAllStoresClick = () => console.log('All Stores link clicked');
  const handleVisitStoreClick = (name: string) => console.log(`Visit store clicked for: ${name}`);
  const handleLoadMoreClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000)
  };

  return (
    <div className="bg-white px-5 sm:p-6 md:px-24 py-10 rounded-lg shadow-sm font-montserrat">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 whitespace-nowrap">Top Stores</h2>
          <Button
            size="md"
            onClick={handleFilterClick}
            leftIcon={<FilterIcon className="text-gray-700 " />}
            className="border border-gray-300 bg-white !text-gray-900 hover:bg-gray-50 hover:border-gray-400 py-1 px-2.5 sm:py-1 sm:px-3"
          >
            Filters
          </Button>
        </div>
        <div className="flex items-center">
          <a
            href="/all-stores"
            onClick={(e) => {
              e.preventDefault();
              handleAllStoresClick();
            }}
            className="text-sm font-medium text-[#1dbf73] hover:text-[#19a563] whitespace-nowrap"
          >
            All Stores
          </a>
        </div>
      </div>

      {/* Table Headers */}
      <div className="hidden md:grid grid-cols-12 gap-x-4 items-center pb-3 mb-3 border-b border-dashed border-gray-400 text-sm font-normal text-gray-500 capitalise">
        <div className="col-span-2 pl-2">Owner</div>
        <div className="col-span-2">Store Name</div>
        <div className="col-span-1 text-center">Products</div>
        <div className="col-span-2">Services</div>
        <div className="col-span-2">Distance</div>
        <div className="col-span-1 text-right pr-1">Price Range (₦)</div>
        <div className="col-span-2"></div>
      </div>

      {/* Stores List */}
      <div>
        {sampleStores.map((store, index) => (
          <div
            key={store.id}
            className={`
              grid grid-cols-1 md:grid-cols-12 gap-x-4 items-center py-4
              ${index < sampleStores.length ? 'border-b border-dashed border-gray-400' : ''}
              md:py-4
            `}
          >
            {/* Owner Info */}
            <div className="col-span-12 md:col-span-2 flex items-center mb-2 md:mb-0">
              <div>
                <div className='relative'>
                  <img
                    src={store.owner.avatarUrl}
                    alt={store.owner.name && ""}
                    className="w-10 md:w-16 h-10 md:h-16 rounded-full mr-3 flex-shrink-0 bg-gray-200 object-cover"
                  />
                  {store.isVerified && <CheckBadgeIcon className='h-6 text-brand-600 absolute top-0 right-[4pt]' />}
                </div>
              </div>
              <span className="text-md font-semibold text-gray-800 truncate">{store.owner.name}</span>
            </div>

            {/* Store Name */}
            <div className="col-span-12 md:col-span-2 text-sm text-gray-700 mb-1 md:mb-0">
              <span className="md:hidden font-semibold text-gray-500 text-xs mr-2">STORE:</span>
              {store.name}
            </div>

            {/* Products */}
            <div className="col-span-12 md:col-span-1 text-sm text-gray-700 mb-1 md:mb-0 md:text-center">
              <span className="md:hidden font-semibold text-gray-500 text-xs mr-2">PRODUCTS:</span>
              {store.products}
            </div>

            {/* Services */}
            <div className="col-span-12 md:col-span-2 text-sm text-gray-700 mb-1 md:mb-0">
              <span className="md:hidden font-semibold text-gray-500 text-xs mr-2">SERVICES:</span>
              {store.services}
            </div>

            {/* Distance to store */}
            <div className="col-span-12 md:col-span-2 text-sm text-gray-700 mb-1 md:mb-0">
              <span className="md:hidden font-semibold text-gray-500 text-xs mr-2">DISTANCE:</span>
              {store.distance ?? "Near you"}
            </div>

            {/* Price Range */}
            <div className="col-span-12 md:col-span-1 text-sm text-gray-700 mb-2 md:mb-0 md:text-right md:pr-1">
              <span className="md:hidden font-semibold text-gray-500 text-xs mr-2">PRICE (₦):</span>
              {store.priceRange}
            </div>

            {/* "Visit Store" Button */}
            <div className="col-span-12 md:col-span-2 flex md:justify-end mt-2 md:mt-0">
              <Button
                size="sm"
                onClick={() => handleVisitStoreClick(store.name)}
                className={`
                  w-full md:w-auto
                  border border-gray-500
                  bg-white !text-gray-900
                  hover:bg-gray-50 hover:border-gray-600
                  py-1 px-3
                  whitespace-nowrap   font-montserrat md:text-xs
                `}
              >
                <StoreIcon className='h-4' />
                Visit store
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-8 flex justify-center">
        <Button
          size="sm"
          onClick={handleLoadMoreClick}
          className="border border-gray-400 bg-white !text-gray-900 hover:bg-gray-100 hover:border-gray-500 py-1 px-5 sm:py-1.5 sm:px-6 font-montserrat"
        >
          Load More
          {isLoading && <RefreshCcw className='h-3 animate-spin' />}
        </Button>
      </div>
    </div>
  );
};

export default TopStores;