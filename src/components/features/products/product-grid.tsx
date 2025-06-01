import React from 'react';
import ProductCard, { ProductCardProps } from './product-card';

interface ProductGridProps {
  products: ProductCardProps[],
  itemsPerRow: number
}

const ProductGrid: React.FC<ProductGridProps> = (props) => {
  const getGridCols = (itemsPerRow: number) => {
    switch (itemsPerRow) {
      case 2: return 'sm:grid-cols-2';
      case 3: return 'sm:grid-cols-2 lg:grid-cols-3';
      case 4: return 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
      case 5: return 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';
      default: return 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
    }
  };

  return (
    <div className='w-full py-6'>
      <div className="sm:hidden">
        <div className="flex gap-3 overflow-x-auto pb-4 px-4 -mx-4 snap-x snap-mandatory scrollbar-hide">
          {props.products.map((product, index) => (
            <div key={product.id || index} className='flex-none w-40 snap-start'>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
      
      <div className={`hidden sm:grid ${getGridCols(props.itemsPerRow)} gap-4 md:gap-6`}>
        {props.products.map((product, index) => (
          <div key={product.id || index} className='w-full'>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;