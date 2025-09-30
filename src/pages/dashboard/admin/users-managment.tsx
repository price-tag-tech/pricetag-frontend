import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Button from "../../../components/common/Button";
import Status from "../../../components/ui/status";
import DataTable from "../../../components/ui/data-table";
import { useModalStore } from "../../../store/modal-store";
import CreateUserForm from "../../../components/layout/modal/create/create-user-form";

const UsersManagementPage = () => {

    const { openModal } = useModalStore();

    const tableData = [
        {
            id: "u001",
            image: "/assets/users/avatar-5.jpg",
            name: "Arewa Geek",
            email: "arewageek@gmail.com",
            store: "Lorem Ipsum Store",
            status: <Status state="success" label="Active" />,
            joinDate: "3/18/2025 - 6:39 AM"
        },
        {
            id: "u002",
            image: "/assets/users/avatar-2.jpg",
            name: "Austin Ameh",
            email: "ameh4dev@gmail.com",
            store: "Lorem Ipsum Store",
            status: <Status state="success" label="Active" />,
            joinDate: "3/18/2025 - 6:39 AM"
        },
        {
            id: "u003",
            image: "/assets/users/avatar-4.jpg",
            name: "Nultra Trais",
            email: "nultra@gmail.com",
            store: "Lorem Ipsum Store",
            status: <Status state="success" label="Active" />,
            joinDate: "3/18/2025 - 6:39 AM"
        }
    ];

    const createUserAccount = () => {
        openModal("edit", "Create New User", <CreateUserForm />)
    }

    return (
        <div className="px-4 py-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">User Management</h2>
                <Button onClick={createUserAccount} variant="text" size="sm">Add New User</Button>
            </div>

            <DataTable
                cols={["Name", "Email", "User ID", "Status", "Join Date"]}
                keys={["name", "email", "id", "status", "joinDate"]}
                data={tableData}
                serialized
                action
                onView={() => window.location.href = "/admin/user/u001"}
            />

            <div className="w-full mt-4 flex justify-end items-center gap-2">
                <Button variant="outline" size="sm" disabled className="button-outline-secondary flex items-center gap-2">
                    <ChevronsLeft className="h-4" />
                </Button>
                <span className="text-gray-500 text-sm px-3 font-semibold">Page 1</span>
                <Button variant="outline" size="sm" className="button-outline-secondary flex items-center gap-2">
                    <ChevronsRight className="h-4" />
                </Button>
            </div>
        </div>
    );
};

export default UsersManagementPage;
