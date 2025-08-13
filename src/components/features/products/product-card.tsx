import React from "react";
import RatingStars from "../../ui/rating-stars";
import Button from "../../common/Button";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export interface ProductCardProps {
  id: string;
  imageUrl: string;
  name: string;
  rating: number;
  reviews: number;
  price: number;
  store: string;
  originalPrice?: number;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover-lift transition-all duration-300 hover:shadow-2xl hover:border-[#1dbf73]/20">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={props.imageUrl}
          alt={props.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {props.discount && (
          <div className="absolute top-3 left-3 z-10">
            <div className="relative">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-red-500 to-red-600 text-white shadow-xl animate-pulse">
                -{props.discount}%
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur opacity-50 animate-pulse"></div>
            </div>
          </div>
        )}

        <div className="absolute top-3 right-3 z-10">
          <button
            title="Add to wishlist"
            className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 group/heart"
          >
            <svg
              className="w-5 h-5 text-gray-600 group-hover/heart:text-red-500 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-3 left-3 z-10">
          <span className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/95 backdrop-blur-md text-gray-800 shadow-xl border border-white/50">
            {props.store}
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-3 md:p-3 space-y-2 md:space-y-2">
        <div>
          <h3 className="text-sm md:text-xs font-semibold text-gray-900 leading-tight line-clamp-2">
            {props.name}
          </h3>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="flex">
            <RatingStars rating={props.rating} />
          </div>
          <span className="text-xs md:text-[10px] font-medium text-gray-600">
            ({props.reviews})
          </span>
        </div>

        <div className="space-y-0.5">
          <div className="flex items-center gap-1.5">
            <span className="text-lg md:text-base font-bold text-gray-900">
              ₦{props.price.toLocaleString()}
            </span>
            {props.originalPrice && (
              <span className="text-xs md:text-[10px] text-gray-500 line-through">
                ₦{props.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          {props.discount && (
            <div className="flex items-center justify-between">
              <p className="text-xs md:text-[10px] text-emerald-600 font-medium">
                Save ₦{(props.originalPrice! - props.price).toLocaleString()}
              </p>
              <Button className="px-1.5 py-1.5 rounded-md">
                <ShoppingCartIcon className="h-4 w-4" />
              </Button>
            </div>
          )}
          {!props.discount && (
            <div className="flex justify-end pt-1">
              <Button className="px-1.5 py-1.5 rounded-md">
                <ShoppingCartIcon className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;