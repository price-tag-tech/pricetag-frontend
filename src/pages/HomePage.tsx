import React from "react";
import Section from "../components/layout/Section";
import Card from "../components/common/Card";
import PopularProducts from "../components/HomePage/PopularItems";
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  TagIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import TopStores from "../components/HomePage/top-stores";
import HelpfulGuides from "../components/HomePage/HelpfulGuides";
import Button from "../components/common/Button";
import BecomeAnAgent from "../components/BecomeAnAgent";
import HeroSection from "../components/HomePage/HeroSection";
import { useStoreState } from "../store/search-store";
import ServiceListing from "../components/sections/services/service-listing";
import TrendingProducts from "../components/sections/products/trending-products";
import PopularServices from "../components/sections/services/popular-services";
import DealsAndPromotions from "../components/sections/deals-and-promotions";
import RecentlyViewed from "../components/sections/products/recently-viewed";
import CallToAction from "../components/sections/call-to-action";
import BoostYourGrowth from "../components/sections/boost-your-growth";

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

      <TrendingProducts />

      <PopularServices />

      <DealsAndPromotions />

      <RecentlyViewed />

      <TopStores />

      <CallToAction />

      <BecomeAnAgent
        heading="Become a Pricetag agent and make money on the go!"
        buttonText="Get started now"
        onButtonClick={handleGetStartedClick}
      />

      <BoostYourGrowth />

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
