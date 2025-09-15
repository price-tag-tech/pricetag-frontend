import React from 'react'
import { formatCurrency } from '../../../utils/number-formatter';
import { useModalStore } from '../../../store/modal-store';
import EditModal from '../../../components/layout/modal/edit-modal';
import Status from '../../../components/ui/status';


const user = {
    id: 'user_001',
    name: 'Prince Godson',
    email: 'prince.godson@example.com',
    phone: '+234 812 345 6789',
    photo: '/assets/users/avatar-5.jpg',
    role: 'Business',
    status: 'active',
    subscription: {
        plan: 'Pro',
        expiresAt: '2025-12-31',
    },
    stores: [
        {
            id: 'store_001',
            name: 'GreenMart Nigeria',
            products: '120',
            services: '5',
            distance: '3.2km',
            price: {
                from: 25000,
                to: 250000
            },
            isVerified: true,
            logo: '/assets/users/avatar-5.jpg',
        },
        {
            id: 'store_002',
            name: 'FreshChoice Market',
            products: '90',
            services: '2',
            price: {
                from: 15000,
                to: 150000
            },
            isVerified: false,
            logo: '/assets/users/avatar-5.jpg',
        },
    ],
    activities: [
        {
            description: 'Updated store profile: GreenMart Nigeria',
            timestamp: '2025-07-12 14:45',
        },
        {
            description: 'Subscribed to Pro plan',
            timestamp: '2025-07-10 09:30',
        },
        {
            description: 'Created new store: FreshChoice Market',
            timestamp: '2025-07-08 11:22',
        },
    ],
};

const ProfileViewPage = () => {
    const { openModal } = useModalStore();

    const handleEdit = () => {
        const inputs = [
            {
                label: "Full Name",
                name: "name",
                type: "text",
                value: user.name
            },
            {
                label: "Email Address",
                name: "email",
                type: "text",
                value: user.email
            },
            {
                label: "Phone Number",
                name: "phone",
                type: "text",
                value: user.phone
            },
            {
                label: "Role",
                name: "role",
                type: "select",
                options: [
                    { label: "Super Admin", value: "super-admin" },
                    { label: "User Registration Admin", value: "user-registration-admin" },
                    { label: "Support Admin", value: "support-admin" },
                    { label: "Finance & Affiliate Admin", value: "finance-and-affiliate-admin" },
                    { label: "User", value: "user" },
                ],
                value: user.role
            },
            {
                label: "Status",
                name: "status",
                type: "select",
                options: [
                    { label: "Active", value: "active" },
                    { label: "Suspended", value: "suspended" },
                    { label: "Pending", value: "pending" },
                ],
                value: user.status
            },
        ];

        const handleSave = (formData: string[]) => {
            console.log("Updated data:", formData);
            alert("record saved");
        };

        openModal("edit", "Edit User", <EditModal inputs={inputs} save={handleSave} />);
    };



    return (
        <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <img
                        src={user.photo}
                        alt={user.name}
                        className="w-20 h-20 rounded-full object-cover border border-gray-200"
                    />
                    <div>
                        <h2 className="text-2xl font-semibold">{user.name}</h2>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        <p className="text-sm text-gray-500">{user.phone}</p>
                        <p className="text-sm text-gray-500">Joined on July 1, 2025</p>

                    </div>
                </div>

                <div className="flex gap-3">
                    <button onClick={handleEdit} className="bg-[#27ae60] hover:bg-[#219653] text-white px-4 py-2 rounded-lg text-sm">
                        Edit Profile
                    </button>
                    <button className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-4 py-2 rounded-lg text-sm">
                        Deactivate
                    </button>
                    <button className="bg-red-100 hover:bg-red-200 text-red-600 px-4 py-2 rounded-lg text-sm">
                        Delete
                    </button>
                </div>
            </div>

            {/* Profile Info */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">User Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
                    <div><span className="font-medium">Account Type:</span> {user.role}</div>
                    <div>
                        <span className="font-medium">Status:</span>{' '}
                        <Status label={user.status} state={user.status === 'active' ? 'success' : 'error'} />
                    </div>
                    <div>
                        <span className="font-medium">Subscription:</span>{' '}
                        {user.subscription ? (
                            <Status label={user.subscription.plan} state="success" />
                        ) : (
                            <Status label="No active subscription" state="default" />
                        )}
                    </div>
                </div>
            </div>

            {/* Store Section */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Stores</h2>
                {user.stores.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {user.stores.map((store) => (
                            <div key={store.id} className="border rounded-xl p-4 shadow-sm hover:shadow-md transition flex gap-4 items-start">
                                <img
                                    src={store.logo}
                                    alt={`${store.name} logo`}
                                    className="w-14 h-14 rounded-md object-cover border"
                                />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-semibold text-base">{store.name}</h3>
                                        {store.isVerified && (
                                            <Status label='Verified' state='success' />
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-600">Products: {store.products}</p>
                                    <p className="text-sm text-gray-600">Services: {store.services}</p>
                                    <p className="text-sm text-gray-600">Price: {formatCurrency(store.price.from)} - {formatCurrency(store.price.to)}</p>
                                    {store.distance && (
                                        <p className="text-sm text-gray-500">Distance: {store.distance}</p>
                                    )}
                                </div>
                            </div>

                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-sm italic">No stores found for this user.</p>
                )}
            </div>


            {/* Activity Log */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
                {user.activities.length > 0 ? (
                    <ul className="space-y-4">
                        {user.activities.map((log, idx) => (
                            <li key={idx} className="relative pl-6 border-l-2 border-gray-200">
                                <span className="absolute -left-2 top-1 w-3 h-3 bg-green-500 rounded-full"></span>
                                <p className="text-sm text-gray-800">{log.description}</p>
                                <p className="text-xs text-gray-500">{log.timestamp}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 text-sm italic">No activity recorded.</p>
                )}
            </div>

        </div>

    )
}

export default ProfileViewPage