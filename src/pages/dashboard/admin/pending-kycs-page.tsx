import { useNavigate } from 'react-router-dom';
import Button from '../../../components/common/Button';

const KYCListPage = () => {
    const navigate = useNavigate();

    const kycRequests = [
        {
            id: 1,
            name: "Arewa Geek",
            email: "arewageek@gmail.com",
            phone: "+234 801 234 5678",
            photo: "/assets/users/avatar-1.jpg",
            submitted: "March 18, 2025",
            status: "pending",
        },
        {
            id: 2,
            name: "Fatima Bello",
            email: "fatima.bello@gmail.com",
            phone: "+234 802 123 4567",
            photo: "/assets/users/avatar-2.jpg",
            submitted: "March 20, 2025",
            status: "pending",
        },
        {
            id: 3,
            name: "Prince Godson",
            email: "prince.godson@gmail.com",
            phone: "+234 802 123 4567",
            photo: "/assets/users/avatar-2.jpg",
            submitted: "March 22, 2025",
            status: "pending",
        },
        {
            id: 4,
            name: "Robert Green",
            email: "prince.godson@gmail.com",
            phone: "+234 802 123 4567",
            photo: "/assets/users/avatar-2.jpg",
            submitted: "March 22, 2025",
            status: "pending",
        },
    ];

    return (
        <div className="w-full px-4 py-6 bg-gray-50 min-h-screen">
            <div className="w-full mx-auto space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">KYC Submissions</h2>
                        <p className="text-sm text-gray-500">Review recent identity verification requests</p>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {kycRequests.map((user) => (
                        <div key={user.id} className="bg-white rounded-xl shadow border border-gray-100 p-5 flex flex-col items-center text-center">
                            <img src={user.photo} alt={user.name} className="w-20 h-20 rounded-full object-cover border border-gray-200" />
                            <div className="mt-3 space-y-1">
                                <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                                <p className="text-sm text-gray-600">{user.email}</p>
                                <p className="text-sm text-gray-600">{user.phone}</p>
                                <p className="text-xs text-gray-400">Submitted on {user.submitted}</p>
                            </div>
                            <div className="mt-4 w-full">
                                <Button
                                    onClick={() => navigate(`/admin/kyc/${user.id}`)}
                                    className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md shadow"
                                >
                                    View Details
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KYCListPage;
