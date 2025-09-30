import { useNavigate } from "react-router-dom";

const data = {
    name: "Green Market",
    logo: "/assets/stores/store-1.png",
    contact: "greenmarket@gmail.com",
    phone: "+234 801 234 5678",
    submitted: "March 18, 2025",
    description:
        "An eco-conscious marketplace focused on organic produce and sustainable goods.",
    owner: {
        name: "Adaeze Okonkwo",
        email: "adaeze.okonkwo@gmail.com",
    },
    documents: [
        { name: "Business Certificate", file: "certificate.pdf" },
        { name: "Tax ID Document", file: "tax-id.pdf" },
    ],
};

const BusinessVerificationPage = () => {
    const navigate = useNavigate();

    if (!data)
        return (
            <div className="p-8 text-center text-gray-500">Business not found</div>
        );

    return (
        <div className="w-full px-4 py-10 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100 shadow">
                        <img
                            src={data.logo}
                            alt={data.name}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
                        <p className="text-sm text-gray-500 mt-1">
                            Submitted on {data.submitted}
                        </p>
                    </div>
                </div>

                {/* Contact + Owner */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-5 rounded-lg shadow">
                        <h2 className="text-sm font-semibold text-gray-500 mb-2">
                            Contact Info
                        </h2>
                        <p className="text-base text-gray-700">
                            <strong>Email:</strong> {data.contact}
                        </p>
                        <p className="text-base text-gray-700 mt-1">
                            <strong>Phone:</strong> {data.phone}
                        </p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow">
                        <h2 className="text-sm font-semibold text-gray-500 mb-2">
                            Business Owner
                        </h2>
                        <p className="text-base text-gray-700">
                            <strong>Name:</strong> {data.owner.name}
                        </p>
                        <p className="text-base text-gray-700 mt-1">
                            <strong>Email:</strong> {data.owner.email}
                        </p>
                    </div>
                </div>

                {/* Description */}
                <div className="bg-white p-5 rounded-lg shadow">
                    <h2 className="text-sm font-semibold text-gray-500 mb-2">
                        Business Description
                    </h2>
                    <p className="text-base text-gray-700 leading-relaxed">
                        {data.description}
                    </p>
                </div>

                {/* Documents */}
                <div className="bg-white p-5 rounded-lg shadow">
                    <h2 className="text-sm font-semibold text-gray-500 mb-3">
                        Uploaded Documents
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {data.documents.map((doc, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition"
                            >
                                <p className="font-medium text-gray-700">{doc.name}</p>
                                <p className="text-green-600 text-sm mt-1 cursor-pointer underline">
                                    {doc.file}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
                    <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
                        Approve
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition">
                        Reject
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        className="sm:ml-auto text-sm text-gray-500 hover:underline"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BusinessVerificationPage;
