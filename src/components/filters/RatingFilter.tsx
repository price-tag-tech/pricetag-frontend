import React from 'react';
import FilterSection from './FilterSection';
import StarRating from '../common/StarRating';

interface RatingFilterProps {
  onRatingChange: (rating: number | null) => void;
  selectedRating: number | null;
}

const RatingFilter: React.FC<RatingFilterProps> = ({
  onRatingChange,
  selectedRating,
}) => {
  const ratingIcon = (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 15.77L16.18 19.5L14.54 12.47L20 7.74L12.81 7.13L10 0.5L7.19 7.13L0 7.74L5.46 12.47L3.82 19.5L10 15.77Z" fill="#1F1F1F"/>
    </svg>
  );

  return (
    <FilterSection title="Rating" icon={ratingIcon} defaultExpanded={true}>
      <div className="flex flex-col gap-3 py-2">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div 
            key={rating}
            className={`flex items-center cursor-pointer hover:bg-gray-100 py-1 px-2 rounded ${selectedRating === rating ? 'bg-gray-100' : ''}`}
            onClick={() => onRatingChange(rating === selectedRating ? null : rating)}
          >
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <svg 
                  key={i}
                  className="w-5 h-5" 
                  fill={i < rating ? "#FFCF31" : "#DEDEDE"} 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-[#636466] font-['Poppins'] text-sm">
              {rating === 1 ? "(1 Star & Up)" : `(${rating} Stars & Up)`}
            </span>
          </div>
        ))}
      </div>
    </FilterSection>
  );
};

export default RatingFilter;