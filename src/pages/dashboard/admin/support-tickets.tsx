import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const tickets = [
    {
        id: "STK-98432",
        user: "Sarah Malik",
        subject: "Can't access my dashboard",
        createdAt: "July 14, 2025",
        status: "Open",
        priority: "High",
    },
    {
        id: "STK-98433",
        user: "James Olu",
        subject: "Payment not reflecting",
        createdAt: "July 13, 2025",
        status: "Open",
        priority: "Medium",
    },
    {
        id: "STK-98434",
        user: "Emily Nwosu",
        subject: "Issue uploading documents",
        createdAt: "July 13, 2025",
        status: "Open",
        priority: "Low",
    },
];

const SupportTicket = () => {
    const [priorityFilter, setPriorityFilter] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTickets = tickets.filter((ticket) => {
        const matchesSearch =
            ticket.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ticket.id.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPriority = priorityFilter
            ? ticket.priority.toLowerCase() === priorityFilter.toLowerCase()
            : true;

        return matchesSearch && matchesPriority;
    });

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10">
            <div className="w-full mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Support Tickets</h1>
                        <p className="text-sm text-gray-500 mt-1">Manage and respond to user tickets</p>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                        <input
                            type="text"
                            placeholder="Search by user or ticket ID..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full sm:w-1/2 border border-gray-200 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        <select
                            value={priorityFilter}
                            onChange={(e) => setPriorityFilter(e.target.value)}
                            className="w-full sm:w-1/4 border border-gray-200 rounded-md px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="">All Priorities</option>
                            <option value="High">High Priority</option>
                            <option value="Medium">Medium Priority</option>
                            <option value="Low">Low Priority</option>
                        </select>
                    </div>
                </div>

                {/* Ticket Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredTickets.length === 0 ? (
                        <p className="text-center col-span-full text-gray-500">No tickets found.</p>
                    ) : (
                        filteredTickets.map((ticket) => (
                            <div
                                key={ticket.id}
                                className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 space-y-4 hover:shadow-md transition"
                            >
                                <div className="flex items-center justify-between">
                                    <span
                                        className={`text-xs font-semibold ${ticket.priority === "High"
                                            ? "text-red-600 bg-red-50"
                                            : ticket.priority === "Medium"
                                                ? "text-yellow-600 bg-yellow-50"
                                                : "text-green-600 bg-green-50"
                                            } px-2 py-1 rounded-full`}
                                    >
                                        {ticket.priority}
                                    </span>
                                    <span className="text-xs text-gray-400">{ticket.createdAt}</span>
                                </div>

                                <div className="space-y-1">
                                    <h2 className="text-gray-800 font-semibold">{ticket.subject}</h2>
                                    <p className="text-sm text-gray-500">From: {ticket.user}</p>
                                </div>

                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                                        {ticket.status}
                                    </span>
                                    <Link to="/admin/ticket/9" className="text-sm flex gap-2 items-center text-green-600 hover:underline font-medium">
                                        View Ticket <ArrowRight size={15} />
                                    </Link>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default SupportTicket;
