import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/features/products/product-card';
import FilterSection from '../components/filters/FilterSection';
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ShareIcon,
  StarIcon,
  ChartBarIcon,
  TruckIcon,
  ChatBubbleLeftRightIcon,
  AdjustmentsHorizontalIcon,
  ViewColumnsIcon,
  Squares2X2Icon,
  ListBulletIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';
import {
  StarIcon as StarIconSolid,
  HeartIcon as HeartIconSolid
} from '@heroicons/react/24/solid';

interface StoreOwner {
  id: string;
  name: string;
  avatar: string;
}

interface StoreLocation {
  state: string;
  city: string;
}

interface StoreData {
  id: string;
  name: string;
  owner: StoreOwner;
  location: StoreLocation;
  rating: number;
  reviewCount: number;
  salesCount: number;
  contactPhone: string;
  contactEmail: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  imageUrl: string;
  rating: number;
  reviews: number;
  store: string;
  category: string;
  type: 'product' | 'service';
}

const StorefrontPage: React.FC = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const [activeTab, setActiveTab] = useState<'all' | 'products' | 'services'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Products');
  const [sortBy, setSortBy] = useState('relevance');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isStoreFollowed, setIsStoreFollowed] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Mock store data - replace with actual API call
  const storeData: StoreData = {
    id: storeId || '1',
    name: 'PG Stores',
    owner: {
      id: '1',
      name: 'Prince Godson',
      avatar: '/assets/users/avatar-1.jpg'
    },
    location: {
      state: 'Rivers',
      city: 'Port Harcourt'
    },
    rating: 4.3,
    reviewCount: 10,
    salesCount: 180420,
    contactPhone: '09037404',
    contactEmail: 'princegodson24@gmail.com'
  };

  // Mock products data - replace with actual API call
  const allProducts: Product[] = [
    {
      id: '1',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 36900,
      originalPrice: 99000,
      discount: 63,
      imageUrl: '/assets/products/product-1.png',
      rating: 4.5,
      reviews: 12,
      store: 'Prince G Shop',
      category: 'Fashion',
      type: 'product'
    },
    {
      id: '2',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 36900,
      originalPrice: 99000,
      imageUrl: '/assets/products/product-2.png',
      rating: 4.2,
      reviews: 8,
      store: 'Prince G Shop',
      category: 'Fashion',
      type: 'product'
    },
    {
      id: '3',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 36900,
      imageUrl: '/assets/products/product-3.png',
      rating: 4.8,
      reviews: 15,
      store: 'Prince G Shop',
      category: 'Shoes',
      type: 'product'
    },
    {
      id: '4',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 3800,
      imageUrl: '/assets/services/services-1.png',
      rating: 4.3,
      reviews: 10,
      store: 'Dry Cleaner',
      category: 'Cleaning',
      type: 'service'
    },
    {
      id: '5',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 3800,
      imageUrl: '/assets/services/services-2.png',
      rating: 4.3,
      reviews: 10,
      store: 'Dry Cleaner',
      category: 'Cleaning',
      type: 'service'
    },
    {
      id: '6',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 3800,
      imageUrl: '/assets/services/services-3.png',
      rating: 4.3,
      reviews: 10,
      store: 'Dry Cleaner',
      category: 'Cleaning',
      type: 'service'
    },
    {
      id: '7',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 36900,
      originalPrice: 99000,
      imageUrl: '/assets/products/product-4.png',
      rating: 4.6,
      reviews: 20,
      store: 'Prince G Shop',
      category: 'Electronics',
      type: 'product'
    },
    {
      id: '8',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 36900,
      originalPrice: 99000,
      imageUrl: '/assets/products/product-5.png',
      rating: 4.4,
      reviews: 18,
      store: 'Prince G Shop',
      category: 'Fashion',
      type: 'product'
    },
    {
      id: '9',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 36900,
      originalPrice: 99000,
      imageUrl: '/assets/products/product-6.png',
      rating: 4.7,
      reviews: 25,
      store: 'Prince G Shop',
      category: 'Shoes',
      type: 'product'
    }
  ];

  const categories = ['Products', 'Fashion', 'Shoes', 'Electronics', 'Home & Garden'];
  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'price-low-high', label: 'Price - Low To Low' },
    { value: 'price-high-low', label: 'Price - High To Low' }
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesTab = activeTab === 'all' ||
      (activeTab === 'products' && product.type === 'product') ||
      (activeTab === 'services' && product.type === 'service');

    const matchesSearch = searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleGetContact = (type: 'service') => {
    console.log('Get contact for:', type);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
          <img
            src="/assets/hero/hero-1.jpg"
            alt="Store background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute top-20 left-10 w-72 h-72 bg-[#1dbf73]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative pt-16 pb-12 sm:pt-24 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-12 shadow-2xl">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full lg:w-auto">
                  <div className="relative group">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-3 border-white/30 shadow-xl sm:shadow-2xl group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={storeData.owner.avatar}
                        alt={storeData.owner.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 sm:-bottom-1.5 sm:-right-1.5 md:-bottom-2 md:-right-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[#1dbf73] rounded-full border-2 sm:border-2 md:border-3 border-white shadow-lg flex items-center justify-center">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>
                  <div className="text-center sm:text-left flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-300 font-medium mb-1">Store Owner</p>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 truncate">Ngubusi {storeData.owner.name}</h2>
                    <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                      <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#1dbf73]" />
                      <span className="text-[#1dbf73] font-medium text-xs sm:text-sm truncate">{storeData.location.state}, {storeData.location.city}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3 sm:gap-4 w-full lg:w-auto">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 h-12 bg-[#1dbf73]/20 rounded-lg sm:rounded-xl mb-1 mx-auto">
                      <StarIconSolid className="w-5 h-5 sm:w-6 h-6 text-[#1dbf73]" />
                    </div>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-white">{storeData.rating}</p>
                    <p className="text-xs text-gray-300 hidden sm:block">Rating</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 h-12 bg-blue-500/20 rounded-lg sm:rounded-xl mb-1 mx-auto">
                      <ChatBubbleLeftRightIcon className="w-5 h-5 sm:w-6 h-6 text-blue-400" />
                    </div>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-white">{storeData.reviewCount}</p>
                    <p className="text-xs text-gray-300 hidden sm:block">Reviews</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 h-12 bg-purple-500/20 rounded-lg sm:rounded-xl mb-1 mx-auto">
                      <ChartBarIcon className="w-5 h-5 sm:w-6 h-6 text-purple-400" />
                    </div>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-white">180.42K</p>
                    <p className="text-xs text-gray-300 hidden sm:block">Sales</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 h-12 bg-orange-500/20 rounded-lg sm:rounded-xl mb-1 mx-auto">
                      <TruckIcon className="w-5 h-5 sm:w-6 h-6 text-orange-400" />
                    </div>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-white">80%</p>
                    <p className="text-xs text-gray-300 hidden sm:block">Delivery</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-[#1dbf73] to-[#17a866] bg-clip-text text-transparent">
                  {storeData.name}
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-6 sm:mb-8">
                Discover amazing products and services from our trusted store
              </p>
    
              <div className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto mb-6 sm:mb-8">
                <form onSubmit={handleSearch} className="relative">
                  <div className="flex flex-col sm:flex-row bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden border border-gray-200">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-3 sm:px-6 sm:py-4 bg-gray-50 text-gray-900 border-0 focus:outline-none focus:ring-0 w-full sm:w-auto font-medium text-sm sm:text-base border-b sm:border-b-0 sm:border-r border-gray-200"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="What do you want to buy from me?"
                      className="flex-1 px-4 py-3 sm:px-6 sm:py-4 text-gray-900 border-0 focus:outline-none focus:ring-0 text-base placeholder-gray-500"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 sm:px-8 sm:py-4 bg-[#1dbf73] hover:bg-[#17a866] text-white transition-all duration-300 focus:outline-none focus:ring-0 font-medium hover:scale-105 active:scale-95 w-full sm:w-auto"
                    >
                      <MagnifyingGlassIcon className="w-5 h-5 mx-auto sm:mx-0" />
                      <span className="hidden sm:inline ml-2">Search</span>
                    </button>
                  </div>
                </form>
              </div>
    
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <button className="flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-[#1dbf73] hover:bg-[#17a866] rounded-lg sm:rounded-xl transition-all duration-300 font-medium text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 w-full sm:w-auto justify-center">
                  <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">View Store Location</span>
                </button>
    
                <button
                  onClick={() => setShowContactModal(true)}
                  className="flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl transition-all duration-300 font-medium text-white border border-white/30 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
                >
                  <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Contact Store</span>
                </button>
    
                <button className="flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl transition-all duration-300 font-medium text-white border border-white/30 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center">
                  <ShareIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Share Store</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section Header */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {storeData.name} Collection
              </h2>
              <p className="text-gray-600">
                Explore our curated selection of products and services
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${activeTab === 'all'
                    ? 'bg-[#1dbf73] text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                    }`}
                >
                  All Items
                </button>
                <button
                  onClick={() => setActiveTab('products')}
                  className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${activeTab === 'products'
                    ? 'bg-[#1dbf73] text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                    }`}
                >
                  Products
                </button>
                <button
                  onClick={() => setActiveTab('services')}
                  className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${activeTab === 'services'
                    ? 'bg-[#1dbf73] text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                    }`}
                >
                  Services
                </button>
              </div>

              <button className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#1dbf73] border-2 border-[#1dbf73] rounded-xl hover:bg-[#1dbf73] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                <StarIcon className="w-4 h-4" />
                Drop a Review
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="lg:hidden">
                <button
                  onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 hover:from-gray-100 hover:to-gray-200 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <FunnelIcon className="w-5 h-5 text-[#1dbf73]" />
                    <span className="font-semibold text-gray-900">FILTERS</span>
                  </div>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${isFiltersOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div className="hidden lg:block px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FunnelIcon className="w-5 h-5 text-[#1dbf73]" />
                    <span className="font-semibold text-gray-900">FILTERS</span>
                  </div>
                  <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-500" />
                </div>
              </div>

              <div className={`${isFiltersOpen ? 'block' : 'hidden'} lg:block`}>
                <FilterSection
                  title="Products"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>}
                >
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer group">
                      <input type="checkbox" className="rounded border-gray-300 text-[#1dbf73] focus:ring-[#1dbf73] w-4 h-4" defaultChecked />
                      <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">All Products</span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <input type="checkbox" className="rounded border-gray-300 text-[#1dbf73] focus:ring-[#1dbf73] w-4 h-4" />
                      <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">Top selling products</span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <input type="checkbox" className="rounded border-gray-300 text-[#1dbf73] focus:ring-[#1dbf73] w-4 h-4" />
                      <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">Sponsored products</span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <input type="checkbox" className="rounded border-gray-300 text-[#1dbf73] focus:ring-[#1dbf73] w-4 h-4" />
                      <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">Products with free delivery</span>
                    </label>
                  </div>
                </FilterSection>

                <FilterSection
                  title="Price Range"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>}
                >
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <label className="flex items-center cursor-pointer group">
                        <input type="checkbox" className="rounded border-gray-300 text-[#1dbf73] focus:ring-[#1dbf73] w-4 h-4" />
                        <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">Under ₦2,000</span>
                      </label>
                      <label className="flex items-center cursor-pointer group">
                        <input type="checkbox" className="rounded border-gray-300 text-[#1dbf73] focus:ring-[#1dbf73] w-4 h-4" />
                        <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">₦2,000 - ₦10,000</span>
                      </label>
                      <label className="flex items-center cursor-pointer group">
                        <input type="checkbox" className="rounded border-gray-300 text-[#1dbf73] focus:ring-[#1dbf73] w-4 h-4" />
                        <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">₦10,000 - ₦100,000</span>
                      </label>
                      <label className="flex items-center cursor-pointer group">
                        <input type="checkbox" className="rounded border-gray-300 text-[#1dbf73] focus:ring-[#1dbf73] w-4 h-4" />
                        <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">₦100,000 above</span>
                      </label>
                    </div>

                    <div className="pt-2">
                      <p className="text-sm font-medium text-gray-800 mb-3">Custom Price Range</p>
                      <div className="flex gap-3">
                        <input
                          type="number"
                          placeholder="₦ Min"
                          value={priceRange.min}
                          onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1dbf73] focus:border-transparent transition-all"
                        />
                        <input
                          type="number"
                          placeholder="₦ Max"
                          value={priceRange.max}
                          onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1dbf73] focus:border-transparent transition-all"
                        />
                      </div>
                      <button className="w-full mt-3 px-4 py-2 bg-[#1dbf73] hover:bg-[#17a866] text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                        Apply Range
                      </button>
                    </div>
                  </div>
                </FilterSection>
                
                <FilterSection
                  title="Categories"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v0a2 2 0 01-2 2H10a2 2 0 01-2-2v0z" />
                  </svg>}
                >
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer group">
                      <input type="checkbox" className="rounded border-gray-300 text-[#1dbf73] focus:ring-[#1dbf73] w-4 h-4" defaultChecked />
                      <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">All Categories</span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <input type="checkbox" className="rounded border-gray-300 text-[#1dbf73] focus:ring-[#1dbf73] w-4 h-4" />
                      <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">Fashion</span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <input type="checkbox" className="rounded border-gray-300 text-[#1dbf73] focus:ring-[#1dbf73] w-4 h-4" />
                      <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">Shoes</span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <input type="checkbox" className="rounded border-gray-300 text-[#1dbf73] focus:ring-[#1dbf73] w-4 h-4" />
                      <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">Electronics</span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <input type="checkbox" className="rounded border-gray-300 text-[#1dbf73] focus:ring-[#1dbf73] w-4 h-4" />
                      <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">Home & Garden</span>
                    </label>
                  </div>
                </FilterSection>
                
                <FilterSection
                  title="Rating"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>}
                >
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer group">
                      <input type="checkbox" className="rounded border-gray-300 text-[#1dbf73] focus:ring-[#1dbf73] w-4 h-4" defaultChecked />
                      <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">All Ratings</span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <input type="checkbox" className="rounded border-gray-300 text-[#1dbf73] focus:ring-[#1dbf73] w-4 h-4" />
                      <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">4 Stars & Above</span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <input type="checkbox" className="rounded border-gray-300 text-[#1dbf73] focus:ring-[#1dbf73] w-4 h-4" />
                      <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">3 Stars & Above</span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <input type="checkbox" className="rounded border-gray-300 text-[#1dbf73] focus:ring-[#1dbf73] w-4 h-4" />
                      <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">2 Stars & Above</span>
                    </label>
                  </div>
                </FilterSection>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {activeTab === 'all' ? 'All Items' : activeTab === 'products' ? 'Products' : 'Services'}
                  </h3>
                  <span className="px-3 py-1 bg-[#1dbf73]/10 text-[#1dbf73] rounded-full text-sm font-medium">
                    {filteredProducts.length} items
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-all duration-200 ${viewMode === 'grid'
                        ? 'bg-white shadow-sm text-[#1dbf73]'
                        : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                      <Squares2X2Icon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-all duration-200 ${viewMode === 'list'
                        ? 'bg-white shadow-sm text-[#1dbf73]'
                        : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                      <ListBulletIcon className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 font-medium">Sort:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1dbf73] focus:border-transparent bg-white shadow-sm"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className={`grid gap-6 ${viewMode === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1'
              }`}>
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="relative group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <ProductCard
                      id={product.id}
                      imageUrl={product.imageUrl}
                      name={product.name}
                      rating={product.rating}
                      reviews={product.reviews}
                      price={product.price}
                      store={product.store}
                      originalPrice={product.originalPrice}
                      discount={product.discount}
                    />
                  </div>

                  {product.type === 'service' && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl flex items-end justify-center pb-6">
                      <button
                        onClick={() => handleGetContact('service')}
                        className="px-6 py-3 bg-white text-gray-900 text-sm font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 flex items-center gap-2"
                      >
                        <PhoneIcon className="w-4 h-4" />
                        Get Contact
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 009.586 13H7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No items found</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  We couldn't find any items matching your criteria. Try adjusting your search or filter settings.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveTab('all');
                  }}
                  className="px-6 py-3 bg-[#1dbf73] text-white font-medium rounded-xl hover:bg-[#17a866] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="text-center mt-12">
                <button
                  className="px-8 py-4 bg-gradient-to-r from-[#1dbf73] to-[#17a866] text-white font-semibold rounded-xl hover:from-[#17a866] hover:to-[#1dbf73] transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
                  onClick={() => setIsLoading(true)}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-3">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading More...
                    </div>
                  ) : (
                    'Load More Products'
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showContactModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-black/50 backdrop-blur-sm" onClick={() => setShowContactModal(false)} />

            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Contact Store</h3>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#1dbf73]/10 rounded-xl flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-[#1dbf73]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">{storeData.contactPhone}084</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">{storeData.contactEmail}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">{storeData.location.state}, {storeData.location.city}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => window.open(`tel:${storeData.contactPhone}084`)}
                  className="flex-1 px-4 py-3 bg-[#1dbf73] text-white font-medium rounded-xl hover:bg-[#17a866] transition-colors"
                >
                  Call Now
                </button>
                <button
                  onClick={() => window.open(`mailto:${storeData.contactEmail}`)}
                  className="flex-1 px-4 py-3 bg-gray-100 text-gray-900 font-medium rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorefrontPage;
