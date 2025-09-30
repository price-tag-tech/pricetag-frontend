import { useNavigate } from 'react-router-dom';

const BusinessVerificationListPage = () => {
    const navigate = useNavigate();

    const pendingBusinesses = [
        {
            id: 1,
            name: "Green Market",
            logo: "/assets/stores/store-1.png",
            contact: "greenmarket@gmail.com",
            phone: "+234 801 234 5678",
            submitted: "March 18, 2025",
        },
        {
            id: 2,
            name: "Fatima Foods",
            logo: "/assets/stores/store-2.png",
            contact: "fatimafoods@gmail.com",
            phone: "+234 802 123 4567",
            submitted: "March 20, 2025",
        },
    ];

    return (
        <div className="w-full px-4 py-8 bg-gray-50 min-h-screen">
            <div className="w-full mx-auto space-y-8">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Pending Business Applications</h1>
                        <p className="text-sm text-gray-500">Review and approve newly registered businesses</p>
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pendingBusinesses.map((business) => (
                        <div
                            key={business.id}
                            className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden">
                                    <img src={business.logo} alt={business.name} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800 truncate">{business.name}</h2>
                                    <p className="text-sm text-gray-500 truncate">{business.contact}</p>
                                    <p className="text-xs text-gray-400">{business.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm mt-2">
                                <span className="text-gray-400">Submitted: {business.submitted}</span>
                                <button
                                    onClick={() => navigate(`/admin/businesses/${business.id}`)}
                                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 shadow-sm"
                                >
                                    View
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BusinessVerificationListPage;
