import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";

const NewReminderPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen px-4 py-8 bg-gray-50">
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold text-gray-800">Send Email</h1>
                    <button
                        onClick={() => navigate(-1)}
                        className="text-sm text-gray-500 hover:underline"
                    >
                        Back to Reminders
                    </button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm space-y-4 border border-gray-100">
                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Subject</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter subject"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Recipients</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="e.g. all users, selected businesses, or custom emails"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Message</label>
                        <textarea
                            rows={6}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Write your email content here..."
                        ></textarea>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                        <div></div>
                        <Button className="px-6 py-2 rounded-md text-sm">
                            Send Email
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewReminderPage;
