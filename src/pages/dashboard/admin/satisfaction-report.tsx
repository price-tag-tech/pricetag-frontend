"use client";

import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const reviewStats = {
    avgRating: 4.6,
    totalReviews: 1243,
    positivePercent: 87,
    lowestRatedStores: [
        { id: 1, name: "Doe Fashion", rating: 2.9 },
        { id: 2, name: "Godson Electronics", rating: 3.1 },
    ],
};

const satisfactionTrends = [
    { month: "Jan", rating: 4.2 },
    { month: "Feb", rating: 4.4 },
    { month: "Mar", rating: 4.6 },
    { month: "Apr", rating: 4.3 },
    { month: "May", rating: 4.5 },
    { month: "Jun", rating: 4.6 },
    { month: "Jul", rating: 4.7 },
];

const topRatedStores = [
    { id: 1, name: "Prince's Kitchen", rating: 4.9 },
    { id: 2, name: "Ameh Wearhouse", rating: 4.8 },
    { id: 3, name: "John’s Gadgets", rating: 4.8 },
];

export default function SatisfactionReportsPage() {
    const [openStore, setOpenStore] = useState<{ name: string; rating: number } | null>(null);

    return (
        <div className="w-full px-4 py-6 bg-gray-50 min-h-screen space-y-10">
            <div className="space-y-1">
                <h2 className="text-3xl font-bold text-gray-800">Satisfaction Reports</h2>
                <p className="text-sm text-gray-500">Insights from customer reviews across all stores</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <StatCard label="Average Rating" value={`${reviewStats.avgRating}/5`} />
                <StatCard label="Total Reviews" value={reviewStats.totalReviews.toString()} />
                <StatCard label="Positive Feedback" value={`${reviewStats.positivePercent}%`} />
                <StatCard label="Lowest Rated Stores" value={`${reviewStats.lowestRatedStores.length} stores`} />
            </div>

            {/* Chart */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Rating Trend (Last 6 Months)</h3>
                <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={satisfactionTrends}>
                        <XAxis dataKey="month" className="text-sm" />
                        <YAxis domain={[0, 5]} className="text-sm" />
                        <Tooltip />
                        <Bar dataKey="rating" fill="#10b981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Top Rated Stores */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Top Rated Stores</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {topRatedStores.map((store) => (
                        <div
                            key={store.id}
                            className="bg-gray-50 rounded-xl p-5 border flex items-center justify-between hover:shadow transition"
                        >
                            <div>
                                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{store.name}</h4>
                                <p className="text-sm text-gray-500">Rating: {store.rating}</p>
                            </div>
                            <StarIcon className="w-5 h-5 text-yellow-400" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lowest Rated Stores */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Stores Needing Attention</h3>
                <div className="space-y-4">
                    {reviewStats.lowestRatedStores.map((store) => (
                        <button
                            key={store.id}
                            onClick={() => setOpenStore(store)}
                            className="w-full text-left bg-red-50 hover:bg-red-100 transition p-4 rounded-xl flex justify-between items-center border border-red-200"
                        >
                            <div>
                                <h4 className="font-medium text-red-700 text-sm sm:text-base">{store.name}</h4>
                                <p className="text-sm text-red-600">Rating: {store.rating}</p>
                            </div>
                            <span className="text-sm font-medium bg-red-600 text-white px-3 py-1 rounded">Details</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Dialog */}
            <Transition.Root show={!!openStore} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setOpenStore(null)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-200"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-150"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
                                <Dialog.Title className="text-lg font-semibold text-gray-800">
                                    {openStore?.name}
                                </Dialog.Title>
                                <Dialog.Description className="mt-2 text-sm text-gray-500">
                                    This store has received consistently low ratings (current rating: {" "}
                                    <span className="text-red-600 font-medium">{openStore?.rating}</span>).
                                </Dialog.Description>
                                <p className="mt-4 text-sm text-gray-600">
                                    Review the store’s response to customer complaints and offer improvement suggestions.
                                </p>

                                <div className="mt-6 flex justify-end">
                                    <button
                                        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
                                        onClick={() => setOpenStore(null)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
}

function StatCard({ label, value }: { label: string; value: string }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border p-6 flex flex-col justify-between">
            <p className="text-sm text-gray-500 mb-1">{label}</p>
            <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        </div>
    );
}
