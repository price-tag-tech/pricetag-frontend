import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, CircleDot, CircleCheck } from "lucide-react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

const messages = [
    {
        id: 1,
        user: {
            name: "John Doe",
            avatar: "/assets/users/avatar-1.jpg",
        },
        subject: "Help with setting up account",
        preview: "Hi, I tried setting up my account but I'm stuck on the business details...",
        timestamp: "July 22, 2025 • 2:10 PM",
        status: "unread",
    },
    {
        id: 2,
        user: {
            name: "Ada Eze",
            avatar: "/assets/users/avatar-2.jpg",
        },
        subject: "Can't find my invoice",
        preview: "Hey, I made a payment and expected an invoice but nothing has shown up.",
        timestamp: "July 21, 2025 • 5:47 PM",
        status: "read",
    },
    {
        id: 3,
        user: {
            name: "Chris Kalu",
            avatar: "/assets/users/avatar-3.jpg",
        },
        subject: "Is my verification done?",
        preview: "Just checking if my KYC is approved or if you need anything else from me.",
        timestamp: "July 20, 2025 • 10:02 AM",
        status: "read",
    },
];

const filterTabs = [
    { label: "All", value: "all" },
    { label: "Unread", value: "unread" },
    { label: "Read", value: "read" },
];

const Messages = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const navigate = useNavigate();

    const filteredMessages = messages
        .filter((msg) => {
            if (filter === "all") return true;
            return msg.status === filter;
        })
        .filter(
            (msg) =>
                msg.user.name.toLowerCase().includes(search.toLowerCase()) ||
                msg.subject.toLowerCase().includes(search.toLowerCase())
        );

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10">
            <div className="max-w-5xl mx-auto space-y-8">
                {/* Page Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-600" />
                            Messages
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">Inbox for support conversations</p>
                    </div>
                </div>

                {/* Search + Filter */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="bg-white px-4 py-2 flex items-center gap-3 rounded-lg shadow-sm w-full sm:w-2/3 border border-gray-100">
                        <Search size={18} className="text-gray-400" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by name or subject..."
                            className="w-full bg-transparent focus:outline-none text-sm text-gray-700"
                        />
                    </div>

                    <div className="flex gap-2">
                        {filterTabs.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setFilter(tab.value)}
                                className={`text-sm px-4 py-2 rounded-md font-medium border ${filter === tab.value
                                    ? "bg-green-600 text-white border-green-600"
                                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Message List */}
                <div className="space-y-4">
                    {filteredMessages.length === 0 ? (
                        <p className="text-center text-gray-500 text-sm mt-10">No messages found.</p>
                    ) : (
                        filteredMessages.map((msg) => (
                            <div
                                key={msg.id}
                                onClick={() => navigate(`/admin/message/${msg.id}`)}
                                className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition cursor-pointer"
                            >
                                <img
                                    src={msg.user.avatar}
                                    alt={msg.user.name}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-gray-200"
                                />
                                <div className="flex-1 space-y-1">
                                    <div className="flex justify-between items-center gap-4">
                                        <p className="text-sm sm:text-base font-medium text-gray-800">{msg.user.name}</p>
                                        <span className="text-xs text-gray-400 whitespace-nowrap">{msg.timestamp}</span>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-700 line-clamp-1">{msg.subject}</p>
                                    <p className="text-sm text-gray-500 line-clamp-2">{msg.preview}</p>
                                </div>
                                {msg.status === "unread" ? (
                                    <span className="text-xs flex items-center gap-1 text-green-700 bg-green-100 px-2 py-1 rounded-full">
                                        <CircleDot size={10} /> New
                                    </span>
                                ) : (
                                    <span className="text-xs flex items-center gap-1 text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                        <CircleCheck size={10} /> Read
                                    </span>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div >
    );
};

export default Messages;
