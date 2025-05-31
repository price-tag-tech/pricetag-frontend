import React from 'react';
import ProductCard, { ProductCardProps } from './product-card';

interface ProductGridProps {
  products: ProductCardProps[],
  itemsPerRow: number
}

const ProductGrid: React.FC<ProductGridProps> = (props) => {
  return (
    <div className='w-full py-4'>
      <div className='flex flex-col md:flex-row'>
        {props.products.map((product, i) => (
          <div className={`w-full p-4 md:w-1/${props.itemsPerRow}`}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
