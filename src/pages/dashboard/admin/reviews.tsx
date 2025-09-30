import { Star, Filter, X } from "lucide-react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import RatingStars from "../../../components/ui/rating-stars";

interface Review {
    id: number;
    name: string;
    email: string;
    rating: number;
    content: string;
    date: string;
}
const reviews: Review[] = [
    {
        id: 1,
        name: "Jane Doe",
        email: "jane@email.com",
        rating: 5,
        content: "This app has been absolutely game-changing for our invoicing flow. Love it!",
        date: "July 22, 2025",
    },
    {
        id: 2,
        name: "Arewa Geek",
        email: "arewa@gmail.com",
        rating: 4,
        content: "Very reliable and easy to use. Just needs better mobile optimization in some views.",
        date: "July 20, 2025",
    },
];

export default function ReviewsPage() {
    const [selected, setSelected] = useState<Review | null>(null);

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6">
            <div className="w-full mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Customer Reviews</h1>
                        <p className="text-sm text-gray-500">Real feedback from users</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md shadow-sm text-sm hover:bg-gray-100 transition">
                        <Filter size={16} /> Filter & Sort
                    </button>
                </div>

                {/* Reviews List */}
                <div className="grid md:grid-cols-3 gap-4">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            onClick={() => setSelected(review)}
                            className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md cursor-pointer transition"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-gray-800 font-semibold">{review.name}</h3>
                                    <p className="text-xs text-gray-400">{review.email}</p>
                                </div>
                                <div className="flex gap-1">
                                    <RatingStars rating={5} />
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-2">{review.content}</p>
                            <p className="mt-2 text-xs text-gray-400">{review.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <Dialog open={!!selected} onClose={() => setSelected(null)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center px-4">
                    <Dialog.Panel className="max-w-md w-full bg-white rounded-xl p-6 shadow-xl border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <Dialog.Title className="text-lg font-semibold text-gray-900">
                                {selected?.name}
                            </Dialog.Title>
                            <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600 transition">
                                <X size={20} />
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mb-1">{selected?.email}</p>
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={16}
                                    className={clsx(
                                        selected && i < selected?.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                    )}
                                />
                            ))}
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{selected?.content}</p>
                        <p className="text-xs text-gray-400 mt-4">{selected?.date}</p>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
}
