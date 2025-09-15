import { useState } from "react";
import Button from "../../../components/common/Button";
import { Link } from "react-router-dom";

const mockReminders = [
    {
        id: 1,
        subject: "Complete KYC Verification",
        type: "Reminder",
        recipient: "john.doe@gmail.com",
        status: "Sent",
        date: "2025-07-10",
    },
    {
        id: 2,
        subject: "Submit Business Documents",
        type: "Reminder",
        recipient: "adaeze.okonkwo@gmail.com",
        status: "Pending",
        date: "2025-07-12",
    },
    {
        id: 3,
        subject: "Welcome to PaySilo",
        type: "Email",
        recipient: "fatima.kabir@gmail.com",
        status: "Sent",
        date: "2025-07-01",
    },
];

export default function EmailsAndReminders() {
    const [reminders] = useState(mockReminders);

    return (
        <div className="w-full px-4 py-8 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">Reminders & Emails</h1>
                    <Button onClick={() => window.location.href = "/admin/reminder/new"} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                        + New Message
                    </Button>
                </div>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                    <table className="min-w-full text-sm">
                        <thead className="bg-gray-100 text-gray-600">
                            <tr>
                                <th className="px-4 py-3 text-left font-medium">Subject</th>
                                <th className="px-4 py-3 text-left font-medium">Type</th>
                                <th className="px-4 py-3 text-left font-medium">Recipient</th>
                                <th className="px-4 py-3 text-left font-medium">Status</th>
                                <th className="px-4 py-3 text-left font-medium">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reminders.map((item) => (
                                <tr key={item.id} className="border-t border-gray-100 hover:bg-gray-50">
                                    <Link to={`/admin/reminder/${item.id}`}>
                                        <td className="px-4 py-3 text-gray-800 font-semibold cursor-pointer">{item.subject}</td>
                                    </Link>
                                    <td className="px-4 py-3 text-gray-600">{item.type}</td>
                                    <td className="px-4 py-3 text-gray-600">{item.recipient}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.status === 'Sent' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-gray-500">{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
} 
