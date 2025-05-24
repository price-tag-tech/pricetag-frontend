
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Store {
  name: string;
  rating: number;
  reviews: number;
  author: string;
  image: string;
}

interface CardListProps {
  items: Store[];
  renderItem?: (item: Store, index: number) => React.ReactNode;
  renderRating?: (rating: number) => React.ReactNode;
  containerClassName?: string;
  cardClassName?: string;
}

interface CardProps extends CardListProps {
  title?: string;
  sectionClassName?: string;
}

// Default star rating renderer
const defaultRenderStars = (rating: number) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.3 && rating % 1 <= 0.7;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <span className="text-yellow-400 text-lg sm:text-xl inline-flex">
      {Array.from({ length: fullStars }, (_, index) => (
        <span key={`full-${index}`}>★</span>
      ))}
      {hasHalfStar && <span key="half">🟊</span>}
      {Array.from({ length: emptyStars }, (_, index) => (
        <span key={`empty-${index}`}>☆</span>
      ))}
    </span>
  );
};

// Default card renderer
const defaultRenderItem = (store: Store, index: number) => (
  <div
    key={index}
    className="min-w-[calc(100%-1rem)] sm:min-w-[220px] md:min-w-[240px] bg-white p-3 sm:p-4 rounded-lg shadow-md flex-shrink-0 flex flex-col text-left snap-center"
  >
    <h3 className="text-sm sm:text-base font-bold mb-1 truncate">{store.name}</h3>
    <div className="text-xs sm:text-sm text-gray-600 mb-2 flex items-center">
      <span className="font-bold mr-1">{store.rating.toFixed(1)}</span>
      {defaultRenderStars(store.rating)}
      <span className="ml-1">({store.reviews} Reviews)</span>
    </div>
    <div className="flex items-center w-full mt-auto pt-2">
      <img
        src={store.image}
        alt={store.name}
        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2 object-cover"
      />
      <p className="text-[10px] sm:text-xs text-gray-500 flex-grow truncate">{store.author}</p>
    </div>
  </div>
);

const CardList: React.FC<CardListProps> = ({
  items,
  renderItem = defaultRenderItem,
  renderRating = defaultRenderStars,
  containerClassName = '',
  cardClassName = '',
}) => {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.snap-center')?.clientWidth || 300;
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.snap-center')?.clientWidth || 300;
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const scrollEndReached = scrollLeft >= scrollWidth - clientWidth - 1;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(!scrollEndReached && scrollWidth > clientWidth);
    } else {
      setShowLeftButton(false);
      setShowRightButton(items.length > 0);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      handleScroll();
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }
  }, []); 

  return (
    <div className="relative">
      {showLeftButton && (
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white border shadow w-8 h-8 rounded-full flex items-center justify-center"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
        </button>
      )}
      <div
        ref={scrollRef}
        className={`flex snap-x snap-mandatory overflow-x-auto space-x-2 sm:space-x-4 pb-4 hide-scrollbar ${containerClassName}`}
      >
        {items.map((item, index) => (
          <div key={index} className={cardClassName}>
            {renderItem(item, index)}
          </div>
        ))}
      </div>
      {showRightButton && (
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white border shadow w-8 h-8 rounded-full flex items-center justify-center"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
        </button>
      )}
    </div>
  );
};

const Card: React.FC<CardProps> = ({
  items,
  title = 'Top Stores',
  sectionClassName = '',
  renderItem,
  renderRating,
  containerClassName,
  cardClassName,
}) => {
  return (
    <section className={`container mx-auto px-4 py-8 ${sectionClassName}`}>
      <div className="flex justify-center items-center mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-700">{title}</h2>
      </div>
      <CardList
        items={items}
        renderItem={renderItem}
        renderRating={renderRating}
        containerClassName={containerClassName}
        cardClassName={cardClassName}
      />
    </section>
  );
};

export default Card;