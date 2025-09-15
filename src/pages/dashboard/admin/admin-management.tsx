import { ChevronsLeft, ChevronsRight } from "lucide-react";
import DataTable from "../../../components/ui/data-table";
import Button from "../../../components/common/Button";
import Status from "../../../components/ui/status";
import { useModalStore } from "../../../store/modal-store";
import CreateUserForm from "../../../components/layout/modal/create/create-user-form";

const AdminManagement = () => {

    const { openModal } = useModalStore();

    const tableData = [
        {
            image: "/assets/users/avatar-5.jpg",
            name: "Arewa Geek",
            email: "arewageek@gmail.com",
            userId: "USR-001",
            status: <Status state="success" label="Active" />,
            joinDate: "3/18/2025 - 6:39 AM",
        },
        {
            image: "/assets/users/avatar-2.jpg",
            name: "Austin Ameh",
            email: "ameh4dev@gmail.com",
            userId: "USR-002",
            status: <Status state="success" label="Active" />,
            joinDate: "3/18/2025 - 6:39 AM",
        },
        {
            image: "/assets/users/avatar-4.jpg",
            name: "Nultra",
            email: "nultra@gmail.com",
            userId: "USR-003",
            status: <Status state="success" label="Active" />,
            joinDate: "3/18/2025 - 6:39 AM",
        },
    ];

    const createNewAdmin = () => {
        openModal("edit", "Create New Admin", <CreateUserForm isAdmin />)
    }

    return (
        <div className="px-4 py-6 space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Admin Management</h2>
                <Button onClick={createNewAdmin} variant="text" size="sm" >Add New Admin</Button>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4">
                <DataTable
                    cols={["Name", "Email", "User ID", "Status", "Join Date"]}
                    keys={["name", "email", "userId", "status", "joinDate"]}
                    data={tableData}
                    serialized
                    action
                    onView={(row) => window.location.href = `/admin/user/${row.userId}`}
                />
            </div>

            <div className="w-full flex justify-end items-center gap-2">
                <Button variant="outline" size="sm" disabled className="flex items-center gap-2">
                    <ChevronsLeft className="h-4" />
                </Button>
                <div className="text-gray-500 text-sm font-semibold px-3 py-1">Page 1</div>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ChevronsRight className="h-4" />
                </Button>
            </div>
        </div>
    );
};

export default AdminManagement;
