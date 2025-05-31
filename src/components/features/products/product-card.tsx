import React from 'react';
import RatingStars from '../../ui/rating-stars';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Button from '../../common/Button';
import { Heart } from 'lucide-react';

export interface ProductCardProps {
  id: string, name: string, imageUrl: string, store: string, rating: number, reviews: number, price: number,
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  return (
    <div className='w-full flex flex-col gap-y-4 shadow'>
      <div className='w-full relative'>
        <img src={props.imageUrl} alt={props.name} className='bg-gray-200 h-[150pt] object-cover w-full' />
        <div className='rounded-full p-2 text-gray-500 bg-gray-50 absolute top-[5pt] right-[5pt]'>
          <Heart />
        </div>
      </div>

      <div className='flex flex-col gap-y-3 px-3 py-4'>
        <div className='flex flex-col'>
          <h4 className='font-light text-gray-600 md:text-lg'>
            {props.store}
          </h4>
          <h3 className='text-gray-800 font-normal text-xl md:text-2xl'>
            {props.name}
          </h3>
        </div>
        <div className='flex items-center gap-x-3'>
          <div className='flex gap-x-2 items-center'>
            <RatingStars rating={1} />
            <span className='font-semibold text-sm md:text-base'>
              4.3
            </span>
          </div>
          <span className='text-gray-700 text-sm md:text-base'>
            42 reviews
          </span>
        </div>
        <div className='flex-between '>
          <span className='font-bold text-xl md:text-3xl'>
            ${props.price}
          </span>
          <div>
            <Button className='px-[7pt] py-[7pt] rounded-md'>
              <ShoppingCartIcon className='h-6 w-6' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
