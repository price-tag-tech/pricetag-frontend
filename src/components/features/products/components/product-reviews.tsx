import React, { useState } from "react";
import { StarIcon, HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftIcon, FunnelIcon } from "@heroicons/react/24/outline";
import RatingStars from "../../../ui/rating-stars";
import Button from "../../../common/Button";

interface ProductReviewsProps {
    rating: number;
    reviewCount: number;
}

// Mock review data
const mockReviews = [
    {
        id: 1,
        user: {
            name: "Adebayo Johnson",
            avatar: "/assets/users/avatar-1.jpg",
            verified: true
        },
        rating: 5,
        date: "2024-01-15",
        title: "Excellent quality and fast delivery!",
        content: "I'm really impressed with the quality of this shoe. The material feels premium and the fit is perfect. Delivery was faster than expected. Highly recommend!",
        helpful: 12,
        images: ["/assets/products/product-1.png"],
        verified_purchase: true
    },
    {
        id: 2,
        user: {
            name: "Sarah Okafor",
            avatar: "/assets/users/avatar-1.jpg",
            verified: true
        },
        rating: 4,
        date: "2024-01-10",
        title: "Good value for money",
        content: "Nice shoes, comfortable to wear. The color is exactly as shown in the pictures. Only minor issue is that it runs slightly small, so consider ordering a size up.",
        helpful: 8,
        images: [],
        verified_purchase: true
    },
    {
        id: 3,
        user: {
            name: "Michael Eze",
            avatar: "/assets/users/avatar-1.jpg",
            verified: false
        },
        rating: 5,
        date: "2024-01-08",
        title: "Perfect for daily wear",
        content: "Been wearing these for 2 weeks now and they're holding up great. Very comfortable for long walks and the style goes with everything.",
        helpful: 15,
        images: [],
        verified_purchase: true
    },
    {
        id: 4,
        user: {
            name: "Grace Okoro",
            avatar: "/assets/users/avatar-1.jpg",
            verified: true
        },
        rating: 3,
        date: "2024-01-05",
        title: "Decent but could be better",
        content: "The shoes are okay but not exceptional. The material quality is average and the sole could be more comfortable. It's decent for the price point.",
        helpful: 3,
        images: [],
        verified_purchase: true
    }
];

const ProductReviews: React.FC<ProductReviewsProps> = ({ rating, reviewCount }) => {
    const [selectedFilter, setSelectedFilter] = useState<'all' | '5' | '4' | '3' | '2' | '1'>('all');
    const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'helpful'>('newest');

    // Calculate rating distribution
    const ratingDistribution = {
        5: Math.floor(reviewCount * 0.6),
        4: Math.floor(reviewCount * 0.25),
        3: Math.floor(reviewCount * 0.1),
        2: Math.floor(reviewCount * 0.03),
        1: Math.floor(reviewCount * 0.02)
    };

    const filteredReviews = selectedFilter === 'all'
        ? mockReviews
        : mockReviews.filter(review => review.rating === parseInt(selectedFilter));

    return (
        <div className="space-y-8">
            {/* Rating Summary */}
            <div className="bg-gradient-to-br from-[#1dbf73]/5 to-[#1dbf73]/10 rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Overall Rating */}
                    <div className="text-center">
                        <div className="text-5xl font-bold text-[#1dbf73] mb-2">{rating}</div>
                        <RatingStars rating={rating} />
                        <p className="text-gray-600 mt-2">Based on {reviewCount} reviews</p>
                    </div>

                    {/* Rating Breakdown */}
                    <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((stars) => (
                            <div key={stars} className="flex items-center gap-3">
                                <span className="text-sm font-medium w-8">{stars}★</span>
                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-[#1dbf73] h-2 rounded-full transition-all duration-500"
                                        style={{
                                            width: `${(ratingDistribution[stars as keyof typeof ratingDistribution] / reviewCount) * 100}%`
                                        }}
                                    ></div>
                                </div>
                                <span className="text-sm text-gray-600 w-8">
                                    {ratingDistribution[stars as keyof typeof ratingDistribution]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Filters and Sort */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setSelectedFilter('all')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedFilter === 'all'
                                ? 'bg-[#1dbf73] text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        All Reviews
                    </button>
                    {[5, 4, 3, 2, 1].map((stars) => (
                        <button
                            key={stars}
                            onClick={() => setSelectedFilter(stars.toString() as any)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedFilter === stars.toString()
                                    ? 'bg-[#1dbf73] text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {stars}★ ({ratingDistribution[stars as keyof typeof ratingDistribution]})
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <FunnelIcon className="w-4 h-4 text-gray-500" />
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1dbf73] focus:border-transparent"
                    >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="helpful">Most Helpful</option>
                    </select>
                </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
                {filteredReviews.map((review) => (
                    <div key={review.id} className="bg-white border border-gray-200 rounded-2xl p-6">
                        <div className="flex items-start gap-4">
                            <img
                                src={review.user.avatar}
                                alt={review.user.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <h4 className="font-semibold text-gray-900">{review.user.name}</h4>
                                    {review.user.verified && (
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#1dbf73]/10 text-[#1dbf73]">
                                            Verified
                                        </span>
                                    )}
                                    {review.verified_purchase && (
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            Verified Purchase
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center gap-3 mb-3">
                                    <RatingStars rating={review.rating} />
                                    <span className="text-sm text-gray-500">
                                        {new Date(review.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>

                                <h5 className="font-medium text-gray-900 mb-2">{review.title}</h5>
                                <p className="text-gray-700 leading-relaxed mb-4">{review.content}</p>

                                {review.images.length > 0 && (
                                    <div className="flex gap-2 mb-4">
                                        {review.images.map((image, index) => (
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`Review image ${index + 1}`}
                                                className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                                            />
                                        ))}
                                    </div>
                                )}

                                <div className="flex items-center gap-4">
                                    <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1dbf73] transition-colors">
                                        <HandThumbUpIcon className="w-4 h-4" />
                                        Helpful ({review.helpful})
                                    </button>
                                    <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
                                        <HandThumbDownIcon className="w-4 h-4" />
                                        Not Helpful
                                    </button>
                                    <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1dbf73] transition-colors">
                                        <ChatBubbleLeftIcon className="w-4 h-4" />
                                        Reply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More */}
            <div className="text-center">
                <Button variant="outline" size="lg">
                    Load More Reviews
                </Button>
            </div>

            {/* Write Review */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Write a Review</h3>
                <p className="text-gray-600 mb-4">
                    Share your experience with this product to help other customers make informed decisions.
                </p>
                <Button variant="primary" leftIcon={<ChatBubbleLeftIcon className="w-4 h-4" />}>
                    Write Review
                </Button>
            </div>
        </div>
    );
};

export default ProductReviews;