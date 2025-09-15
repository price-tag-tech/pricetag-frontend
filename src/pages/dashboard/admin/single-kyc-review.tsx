import { useState } from 'react';

const SingleKycReviewPage = () => {
    const user = {
        photo: "/assets/users/avatar-1.jpg",
        name: "Arewa Geek",
        email: "arewageek@gmail.com",
        phone: "+234 801 234 5678",
        status: "pending",
        joinDate: "March 18, 2025",
        documents: [
            { type: "Government ID", file: "/assets/users/avatar-3.jpg" },
            { type: "Proof of Address", file: "/assets/users/avatar-3.jpg" },
            { type: "Selfie", file: "/assets/users/avatar-3.jpg" },
        ],
    };

    return (
        <div className="w-full px-4 py-6 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">KYC Review</h2>
                        <p className="text-sm text-gray-500">Manually review and approve user verification</p>
                    </div>
                    <span className="text-sm px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 uppercase font-medium">{user.status}</span>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-xl shadow p-5 flex flex-col sm:flex-row gap-5">
                    <img src={user.photo} alt="User" className="w-20 h-20 rounded-full object-cover" />
                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <p className="text-sm text-gray-600">{user.phone}</p>
                        <p className="text-sm text-gray-500">Joined: {user.joinDate}</p>
                    </div>
                </div>

                {/* Documents */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Submitted Documents</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {user.documents.map((doc, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow p-3 space-y-2 border border-gray-100">
                                <p className="text-sm font-medium text-gray-700">{doc.type}</p>
                                <img
                                    src={doc.file}
                                    alt={doc.type}
                                    className="w-full h-40 object-cover rounded-md border border-gray-200"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 justify-end mt-6">
                    <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded shadow-sm">Reject</button>
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded shadow-sm">Approve</button>
                </div>
            </div>
        </div>
    );
};

export default SingleKycReviewPage;
