import { StarIcon } from "@heroicons/react/24/solid";

const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: fullStars }, (_, i) => (
        <StarIcon key={i} className="w-4 h-4 text-amber-400 drop-shadow-sm" />
      ))}

      {hasHalfStar && (
        <div key="half" className="relative w-4 h-4">
          <StarIcon className="w-4 h-4 text-gray-300 absolute" />
          <div className="w-1/2 overflow-hidden absolute">
            <StarIcon className="w-4 h-4 text-amber-400 drop-shadow-sm" />
          </div>
        </div>
      )}

      {Array.from({ length: emptyStars }, (_, i) => (
        <StarIcon key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      ))}
    </div>
  );
};

export default RatingStars;
