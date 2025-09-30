import { useNavigate } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { useState } from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

const messageThread = {
    id: 1,
    user: {
        name: "John Doe",
        avatar: "/assets/users/avatar-1.jpg",
        email: "johndoe@gmail.com",
    },
    messages: [
        {
            from: "user",
            name: "John Doe",
            time: "July 22, 2025 • 2:10 PM",
            content: "Hi, I need help setting up my account. It gets stuck after adding my business details.",
        },
        {
            from: "admin",
            name: "Admin Team",
            time: "July 22, 2025 • 3:00 PM",
            content: "Hi John, thanks for reaching out. Could you confirm if you’ve uploaded all required documents?",
        },
        {
            from: "user",
            name: "John Doe",
            time: "July 22, 2025 • 3:15 PM",
            content: "Yes, I uploaded everything but it still shows incomplete.",
        },
    ],
};

const MessageThread = () => {
    const navigate = useNavigate();
    const [reply, setReply] = useState("");

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6">
            <div className="w-full md:w-4/5 space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <ChatBubbleLeftRightIcon className="h-6 w-6" />
                            Message Thread</h1>
                        <p className="text-sm text-gray-500">Conversation with {messageThread.user.name}</p>
                    </div>
                    <button
                        onClick={() => navigate(-1)}
                        className="text-sm text-green-600 font-medium flex items-center gap-1 hover:underline"
                    >
                        <ArrowLeft size={16} /> Back
                    </button>
                </div>

                {/* User Info */}
                <div className="bg-white rounded-2xl shadow border border-gray-100 p-4 flex items-center gap-4">
                    <img
                        src={messageThread.user.avatar}
                        alt={messageThread.user.name}
                        className="w-12 h-12 rounded-full object-cover border"
                    />
                    <div>
                        <p className="text-gray-800 font-medium">{messageThread.user.name}</p>
                        <p className="text-sm text-gray-500">{messageThread.user.email}</p>
                    </div>
                </div>

                {/* Conversation */}
                <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 space-y-4">
                    {messageThread.messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`flex flex-col sm:flex-row ${msg.from === "admin" ? "sm:justify-end" : ""}`}
                        >
                            <div
                                className={`max-w-md w-full rounded-xl p-4 text-sm ${msg.from === "admin"
                                    ? "bg-green-50 text-gray-800 sm:rounded-tr-none"
                                    : "bg-gray-100 text-gray-700 sm:rounded-tl-none"
                                    }`}
                            >
                                <p className="font-medium text-sm mb-1">{msg.name}</p>
                                <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                                <p className="text-xs text-gray-400 mt-2">{msg.time}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Reply Box */}
                <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 space-y-4">
                    <h2 className="text-lg font-semibold text-gray-800">Reply</h2>
                    <textarea
                        rows={4}
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                        placeholder="Write your reply..."
                        className="w-full text-sm rounded-md border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                    />
                    <button
                        onClick={() => {
                            setReply("");
                            // handle send logic
                        }}
                        disabled={!reply.trim()}
                        className="bg-green-600 text-white flex items-center gap-2 px-5 py-2 rounded-md text-sm hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send size={16} /> Send Reply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MessageThread;
