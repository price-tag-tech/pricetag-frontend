import { StarIcon } from "@heroicons/react/24/solid";
import { StarHalf } from "lucide-react";

const RatingStars = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className="flex text-2xl ">
            {Array.from({ length: fullStars }, (s: number) => (
                <StarIcon key={s} className="text-yellow-500 h-4 w-4" />
            ))}

            {hasHalfStar && <StarHalf key="half" className="text-yellow-500 h-4 w-4" />}
        </div>
    )
}

export default RatingStars