import React, { useMemo } from "react";
import Section from "../components/layout/Section";
import Card from "../components/common/Card";
import PopularProducts from "../components/HomePage/PopularItems";
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  TagIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import TopStores from "../components/HomePage/TopStores";
import HelpfulGuides from "../components/HomePage/HelpfulGuides";
import Button from "../components/common/Button";
import BecomeAnAgent from "../components/BecomeAnAgent";
import HeroSection from "../components/HomePage/HeroSection";
import { useStoreState } from "../store/search-store";
import ServiceListing from "../components/sections/services/service-listing";

const HomePage: React.FC = () => {
  //  store data
  // const stores = useMemo(
  //   () => [
  //     {
  //       name: "Prince G Shop",
  //       rating: 1.3,
  //       reviews: 0,
  //       author: "Ndubuisi Prince Godson",
  //       image: "/face.jpg",
  //     },
  //     {
  //       name: "Mee Mee",
  //       rating: 4.3,
  //       reviews: 10,
  //       author: "Ndubuisi Prince Godson",
  //       image: "/face.jpg",
  //     },
  //     {
  //       name: "Don Dave",
  //       rating: 4.3,
  //       reviews: 0,
  //       author: "Ndubuisi Prince Godson",
  //       image: "",
  //     },
  //     {
  //       name: "Jenny Store",
  //       rating: 4.3,
  //       reviews: 15,
  //       author: "Ndubuisi Prince Godson",
  //       image: "",
  //     },
  //     {
  //       name: "Melvin HD",
  //       rating: 4.3,
  //       reviews: 0,
  //       author: "Ndubuisi Prince Godson",
  //       image: "",
  //     },
  //     {
  //       name: "Big Daddy Store",
  //       rating: 4.3,
  //       reviews: 15,
  //       author: "Ndubuisi Prince Godson",
  //       image: "",
  //     },
  //   ],
  //   []
  // );

  const { filteredStores, isSearching } = useStoreState()


  // Debounced search function

  const handleGetStartedClick = () => {
    console.log("Get started now button clicked!");
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection />


      {/* Top Stores Section */}
      {isSearching && (filteredStores.length > 0 ? (
        <Card
          items={filteredStores.map((store) => ({
            ...store,
            image: store.image || "/placeholder.png",
          }))}
        />
      ) : (
        <p className="text-center mt-10 text-gray-500 text-lg">
          No stores found matching your search.
        </p>
      ))}

      <ServiceListing />

      <PopularProducts />

      {/* Take your business online - Full Width Section */}
      <Section className="bg-green-900 text-white py-16" fullWidth={true}>
        <div className="max-w-7xl px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side: Text and Button */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold leading-tight">
              Take your business online and <br /> start selling globally
            </h2>
            <div className="mt-6 flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex flex-col items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" fill="#4CAF50" />
                    <path
                      fill="#FFFFFF"
                      d="M9.5 16.6L5.4 12.5l1.1-1.1 3 3 7-7 1.1 1.1z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Lorem ipsum dolor sit amet
                    </h3>
                    <p className="mt-1 text-gray-300 text-sm">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" fill="#4CAF50" />
                    <path
                      fill="#FFFFFF"
                      d="M9.5 16.6L5.4 12.5l1.1-1.1 3 3 7-7 1.1 1.1z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Lorem ipsum dolor sit amet
                    </h3>
                    <p className="mt-1 text-gray-300 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Button className="mt-8 bg-white !text-green-900 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
              Register a store
            </Button>
          </div>

          {/* Right Side: Image and Overlays */}
          <div className="md:w-1/2 mt-8 md:mt-0 relative w-full h-[400px]">
            {/* Shopping Bag Image */}
            <img
              src="/bag.jpg"
              alt="Shopping Bag"
              className="absolute w-70 h-72 rounded-lg object-contain top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            />
            {/* Avatar Card */}
            <div className="absolute flex items-center top-1/3 left-0 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-lg z-10 w-48 h-11">
              <div className="flex items-center gap-2">
                <img
                  src="/face.jpg"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <span className="font-medium text-sm text-gray-500">
                    Digital Shopping
                  </span>
                  <p className="text-xs text-gray-500">100% efficiency</p>
                </div>
              </div>
            </div>
            {/* Chart Overlay */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg z-8 w-64">
              <p className="text-sm text-gray-600">Sales Overview</p>
              <img
                src="/map.webp"
                alt="Sales Overview"
                className="w-full h-24 object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 max-w-lg">
            Get paid by clients who buy your products and services
          </h2>

          {/* Icons Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Icon 1 */}
            <div>
              <div className="mb-4 flex justify-center">
                <DevicePhoneMobileIcon className="w-12 h-12  text-gray-800" />
              </div>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            {/* Icon 2 */}
            <div>
              <div className="mb-4 flex justify-center">
                <ComputerDesktopIcon className="w-12 h-12  text-gray-800" />
              </div>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            {/* Icon 3 */}
            <div>
              <div className="mb-4 flex justify-center">
                <TagIcon className="w-12 h-12  text-gray-800" />
              </div>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            {/* Icon 4 */}
            <div>
              <div className="mb-4 flex justify-center">
                <RocketLaunchIcon className="w-12 h-12 text-gray-800" />
              </div>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </Section>

      <TopStores />

      <HelpfulGuides />

      <BecomeAnAgent
        heading="Become a Pricetag agent and make money on the go!"
        buttonText="Get started now"
        onButtonClick={handleGetStartedClick}
      />

      {/* Chat With Support */}
      <a
        href="/support"
        className="fixed bottom-6 right-6 flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-green-600 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4 8-9 8a9.77 9.77 0 01-4-.84L3 20l1.18-3.544A8.964 8.964 0 013 12c0-4.418 4-8 9-8s9 3.582 9 8z"
          />
        </svg>
        Chat with support
      </a>
    </>
  );
};

export default HomePage;
