import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../common/Button"; 


/* Product Interface */
interface Product {
  id: number;
  image: string;
  vendorAvatar: string;
  vendorName: string;
  title: string;
  price: number;
  oldPrice: number;
}

/* Service Interface */
interface Service {
  id: number;
  image: string;
  vendorAvatar: string;
  vendorName: string;
  description: string; 
  rating: number;
  reviews: number;
  price: number; 
}

/* Mock Data (Products) */
const productsData: Product[] = [ 
  {
    id: 1, image: "/face.jpg", vendorAvatar: "/face.jpg", vendorName: "Prince G Shop",
    title: "High-Quality Face Cream", price: 36900, oldPrice: 49900,
  },
  {
    id: 2, image: "/face.jpg", vendorAvatar: "/face.jpg", vendorName: "Prince G Shop",
    title: "Organic Beard Oil", price: 36900, oldPrice: 49900,
  },
  {
    id: 3, image: "/face.jpg", vendorAvatar: "/face.jpg", vendorName: "Prince G Shop",
    title: "Luxury Watch Edition", price: 36900, oldPrice: 49900,
  },
  {
    id: 4, image: "/face.jpg", vendorAvatar: "/face.jpg", vendorName: "Prince G Shop",
    title: "Wireless Earbuds Pro", price: 36900, oldPrice: 49900,
  },
  {
    id: 5, image: "/face.jpg", vendorAvatar: "/face.jpg", vendorName: "Gadget World",
    title: "Smart Home Hub", price: 55000, oldPrice: 65000,
  },
];

/* Mock Data (Services) */
const servicesData: Service[] = [ 
  {
    id: 101, image: "/face.jpg", vendorAvatar: "/face.jpg",
    vendorName: "Dry Cleaner Pro", description: "Expert dry cleaning and laundry services for all your garments.",
    rating: 4.3, reviews: 10, price: 3900,
  },
  {
    id: 102, image: "/face.jpg", vendorAvatar: "/face.jpg",
    vendorName: "HandyMa'am Services", description: "Reliable and skilled handy-woman for all your home repairs.",
    rating: 4.5, reviews: 12, price: 5000,
  },
  {
    id: 103, image: "/face.jpg", vendorAvatar: "/face.jpg",
    vendorName: "Stitch Perfect", description: "Custom tailoring and alterations with a perfect fit guarantee.",
    rating: 4.8, reviews: 25, price: 6500,
  },
  {
    id: 104, image: "/face.jpg", vendorAvatar: "/face.jpg",
    vendorName: "Pipe Masters", description: "24/7 emergency plumbing services, leaks, and installations.",
    rating: 4.0, reviews: 8, price: 4200,
  },
  {
    id: 105, image: "/face.jpg", vendorAvatar: "/face.jpg",
    vendorName: "Sparkle Clean", description: "Professional home and office cleaning services for a pristine space.",
    rating: 4.6, reviews: 18, price: 5500,
  },
];


// Star Rating Function 
const renderStars = (rating: number) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating); 
  const emptyStars = totalStars - fullStars; 

  return (
    <span className="text-yellow-400 inline-flex items-center text-sm"> 
      {Array.from({ length: fullStars }, (_, index) => (
        <span key={`full-${index}`}>★</span>
      ))}
      {Array.from({ length: emptyStars }, (_, index) => (
        <span key={`empty-${index}`} className="text-gray-300">☆</span>
      ))}
    </span>
  );
};


const PopularItems: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeTab, setActiveTab] = useState<"products" | "services">("products");

  const itemsToDisplay = activeTab === "products" ? productsData : servicesData;

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    if (el) {
        el.addEventListener("scroll", updateScrollButtons, { passive: true });
    }
    window.addEventListener("resize", updateScrollButtons);
    return () => {
        if (el) {
            el.removeEventListener("scroll", updateScrollButtons);
        }
        window.removeEventListener("resize", updateScrollButtons);
    };
  }, [itemsToDisplay]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.8; 
    el.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  const currentTitle = activeTab === "products" ? "Popular Products" : "Popular Services";

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-left text-2xl sm:text-3xl font-bold mb-6">
          {currentTitle}
        </h2>
        <div className="flex justify-end gap-6 mb-8 text-sm font-medium items-center">
          <button
            onClick={() => setActiveTab("products")}
            className={`pb-1 border-b-2 ${
              activeTab === "products" ? "border-[#1dbf73] text-[#1dbf73]" : "border-transparent text-gray-600 hover:text-gray-800"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`pb-1 border-b-2 ${
              activeTab === "services" ? "border-[#1dbf73] text-[#1dbf73]" : "border-transparent text-gray-600 hover:text-gray-800"
            }`}
          >
            Services
          </button>
          <Button className="border border-gray-300 bg-white !text-gray-900 hover:bg-gray-50 hover:border-gray-400 py-1 px-2.5 sm:py-1 sm:px-3">
            <span className="mr-1 sm:mr-1.5">
              <svg
              width="16"
              height="10"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                d="M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z"
                fill="currentColor"
              />
              </svg>
            </span>
            Filters
          </Button>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <button
              aria-label="scroll left"
              onClick={() => scroll("left")}
              className="absolute left-0 top-[35%] -translate-x-1/2 -translate-y-1/2 z-10 bg-white border shadow-md w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
          )}
          {canScrollRight && (
            <button
              aria-label="scroll right"
              onClick={() => scroll("right")}
              className="absolute right-0 top-[35%] translate-x-1/2 -translate-y-1/2 z-10 bg-white border shadow-md w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={updateScrollButtons}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-2 hide-scrollbar px-1"
          >
            {itemsToDisplay.map((item) => (
              <div
                key={item.id}
                className="min-w-[270px] max-w-[270px] bg-white overflow-hidden flex flex-col"
              >
                <img src={item.image} alt={activeTab === "products" ? (item as Product).title : (item as Service).vendorName} className="w-full h-40 object-cover" />
                
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={item.vendorAvatar}
                      alt={item.vendorName}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-xs font-medium text-gray-700">{item.vendorName}</span>
                  </div>

                  {activeTab === "products" && (
                    <>
                      <p className="text-sm text-gray-600 h-10 mb-1 leading-tight">{(item as Product).title}</p>
                      <div className="flex items-baseline gap-2 mt-1 mb-3">
                        <span className="text-[#1dbf73] text-base font-semibold">₦ {(item as Product).price.toLocaleString()}</span>
                        {(item as Product).oldPrice && (
                          <span className="line-through text-gray-400 text-xs">₦ {(item as Product).oldPrice.toLocaleString()}</span>
                        )}
                      </div>
                    </>
                  )}

                  {activeTab === "services" && (
                    <>
                      <p className="text-xs text-gray-600 h-12 leading-normal">{(item as Service).description}</p>
                      <div className="flex items-center gap-1 mb-2 text-xs text-gray-500">
                        <span className="font-bold text-gray-700">{(item as Service).rating.toFixed(1)}</span>
                        {renderStars((item as Service).rating)}
                        <span>({(item as Service).reviews} Reviews)</span>
                      </div>
                      <div className="text-sm text-[#1dbf73] font-semibold mb-3">
                        From ₦ {(item as Service).price.toLocaleString()}
                      </div>
                    </>
                  )}
                  
                  
                  <div className="flex gap-2 mt-auto justify-start"> 
                    <Button variant="outline" size="sm" className="!text-xs !px-2.5 !py-1 border border-gray-500 text-gray-900"> 
                      Visit store
                    </Button>
                    {activeTab === "products" && (
                      <Button variant="secondary" size="sm" className="!text-xs !px-2.5 !py-1"> 
                        Add to cart
                      </Button>
                    )}
                    {activeTab === "services" && (
                      <Button variant="secondary" size="sm" className="!text-xs !px-2.5 !py-1">
                        Get contact
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;

