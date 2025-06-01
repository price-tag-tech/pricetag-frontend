import React from 'react';
import ProductCard, { ProductCardProps } from './product-card';

interface ProductGridProps {
  products: ProductCardProps[],
  itemsPerRow: number
}

const ProductGrid: React.FC<ProductGridProps> = (props) => {
  const getGridCols = (itemsPerRow: number) => {
    switch (itemsPerRow) {
      case 2: return 'grid-cols-1 sm:grid-cols-2';
      case 3: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
      case 5: return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';
      default: return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
    }
  };

  return (
    <div className='w-full py-6'>
      <div className={`grid ${getGridCols(props.itemsPerRow)} gap-4 md:gap-6`}>
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