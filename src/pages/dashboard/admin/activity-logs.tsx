import DataTable from "../../../components/ui/data-table"
import { useModalStore } from "../../../store/modal-store"

const logs = [
    {
        name: "Bola Ade",
        image: "/assets/users/avatar-5.jpg",
        activity: "User logged in successfully.",
        time: "2025-07-14T17:49:15+01:00"
    },
    {
        name: "Emeka O.",
        image: "/assets/users/avatar-5.jpg",
        activity: "Viewed the analytics dashboard.",
        time: "2025-07-14T17:48:30+01:00"
    },
]

const ActivityLogs = () => {

    return (
        <div className="max-w-5xl px-4 py-6 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Activity Logs</h2>

            {logs.map((log, index) => (
                <div key={index} className="flex gap-4 items-start bg-white border rounded-xl shadow-sm p-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full overflow-hidden border">
                        <img src={log.image} alt={log.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-gray-800">{log.name}</h4>
                            <time className="text-xs text-gray-500">
                                {new Date(log.time).toLocaleString(undefined, {
                                    dateStyle: "medium",
                                    timeStyle: "short"
                                })}
                            </time>
                        </div>
                        <p className="text-sm text-gray-700 mt-1">{log.activity}</p>
                    </div>
                </div>
            ))}
        </div>


    )
}


// {/* Modal */}
// {/* {selectedLog && (
//     <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">

//     </div>
// )} */}

export default ActivityLogs