
import { ArrowLeft, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const reminder = {
    subject: "Verify your business information",
    recipients: "All pending businesses",
    sentAt: "July 14, 2025 • 10:45 AM",
    message: `Hello,\n\nPlease make sure your business profile is fully completed and your documents are up to date. This will help speed up your verification process.\n\nIf you've already completed it, you can ignore this reminder.\n\nThanks,\nThe Admin Team`,
};

const SingleReminder = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Page Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 flex gap-2 items-center">
                            <Mail size={25} />
                            Reminder Sent
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">Sent on {reminder.sentAt}</p>
                    </div>
                    <button
                        onClick={() => navigate(-1)}
                        className="text-sm text-green-600 hover:underline font-medium flex items-center gap-1"
                    >
                        <ArrowLeft />
                        Back to all reminders
                    </button>
                </div>

                {/* Reminder Card */}
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 space-y-6">
                    <div className="space-y-1">
                        <h2 className="text-xs text-gray-500 tracking-widest uppercase">Subject</h2>
                        <p className="text-lg font-semibold text-gray-800">{reminder.subject}</p>
                    </div>

                    <div className="space-y-1">
                        <h2 className="text-xs text-gray-500 tracking-widest uppercase">Recipients</h2>
                        <p className="text-sm text-gray-700">{reminder.recipients}</p>
                    </div>

                    <div className="space-y-1">
                        <h2 className="text-xs text-gray-500 tracking-widest uppercase">Message</h2>
                        <div className="whitespace-pre-wrap bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
                            {reminder.message}
                        </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                        <button className="bg-green-600 text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-green-700 transition">
                            Resend
                        </button>
                        <button className="bg-gray-100 text-gray-700 text-sm font-medium px-5 py-2 rounded-md hover:bg-gray-200 transition">
                            Edit Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReminder;
