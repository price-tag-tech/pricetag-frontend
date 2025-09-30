import { useNavigate } from 'react-router-dom';

const ticket = {
    id: 'STK-98432',
    subject: 'Unable to withdraw funds',
    user: {
        name: 'Samuel Alabi',
        email: 'samuelalabi@gmail.com',
        avatar: '/assets/users/avatar-1.jpg',
    },
    created: 'July 10, 2025',
    priority: 'High',
    status: 'Open',
    messages: [
        {
            from: 'user',
            name: 'Samuel Alabi',
            time: 'July 10, 2025 - 2:34 PM',
            content: "Hi, I’ve been trying to withdraw for 3 days but nothing is showing in my wallet. Can you please help?",
        },
        {
            from: 'admin',
            name: 'Support Agent',
            time: 'July 11, 2025 - 9:08 AM',
            content: "Hello Samuel, thanks for reaching out. Can you confirm if your wallet is connected properly?",
        },
    ],
};

export default function SingleTicketPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full px-4 py-8 bg-gray-50">
            <div className="max mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Ticket: {ticket.id}</h1>
                        <p className="text-sm text-gray-500">Created on {ticket.created}</p>
                    </div>
                    <button onClick={() => navigate(-1)} className="text-sm text-gray-500 hover:underline">Back to tickets</button>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow space-y-4">
                    <div className="flex items-center gap-4">
                        <img src={ticket.user.avatar} alt={ticket.user.name} className="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <p className="text-lg font-semibold text-gray-800">{ticket.user.name}</p>
                            <p className="text-sm text-gray-500">{ticket.user.email}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                        <div className="text-sm text-gray-600">
                            <span className="font-semibold text-gray-700">Subject: </span>{ticket.subject}
                        </div>
                        <div className="text-sm text-gray-600">
                            <span className="font-semibold text-gray-700">Priority: </span>
                            <span className={
                                ticket.priority === 'High' ? 'text-red-600' :
                                    ticket.priority === 'Medium' ? 'text-yellow-500' : 'text-green-600'
                            }>
                                {ticket.priority}
                            </span>
                        </div>
                        <div className="text-sm text-gray-600">
                            <span className="font-semibold text-gray-700">Status: </span>{ticket.status}
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow space-y-6">
                    <h2 className="text-lg font-semibold text-gray-800">Conversation</h2>
                    {ticket.messages.map((msg, idx) => (
                        <div key={idx} className="border border-gray-100 p-4 rounded-xl bg-gray-50">
                            <div className="flex justify-between text-sm mb-1">
                                <span className="font-semibold text-gray-700">{msg.name}</span>
                                <span className="text-gray-500">{msg.time}</span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">{msg.content}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-6 rounded-2xl shadow space-y-4">
                    <h2 className="text-lg font-semibold text-gray-800">Reply</h2>
                    <textarea
                        rows={5}
                        className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Write your message here..."
                    />
                    <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">Send Reply</button>
                </div>
            </div>
        </div>
    );
}
