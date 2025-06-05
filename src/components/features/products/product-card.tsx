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
    <div className="relative bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={props.imageUrl}
          alt={props.name}
          className="w-full h-full object-cover"
        />

        {props.discount && (
          <div className="absolute top-2 left-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] md:text-[9px] font-bold bg-red-500 text-white shadow-lg">
              -{props.discount}%
            </span>
          </div>
        )}

        <div className="absolute top-2 right-2">
          <button
            title="btn"
            className="w-7 h-7 md:w-6 md:h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
          >
            <svg
              className="w-3 h-3 md:w-2.5 md:h-2.5 text-gray-700"
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

        <div className="absolute bottom-2 left-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] md:text-[9px] font-medium bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg">
            {props.store}
          </span>
        </div>
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
              &#8358;{props.price.toLocaleString()}
            </span>
            {props.originalPrice && (
              <span className="text-xs md:text-[10px] text-gray-500 line-through">
                ₦{props.originalPrice}
              </span>
            )}
          </div>
          {props.discount && (
            <div className="flex items-center justify-between">
              <p className="text-xs md:text-[10px] text-emerald-600 font-medium">
                Save ${(props.originalPrice! - props.price).toFixed(2)}
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