import { useState } from "react";
import Input from "../../../ui/form/input";
import Select from "../../../ui/form/select";
import { useModalStore } from "../../../../store/modal-store";
import Button from "../../../common/Button";

interface CreateUserFormProps {
    isAdmin?: boolean
    onSubmit?: (data: any) => void;
}

const CreateUserForm = ({ isAdmin, onSubmit }: CreateUserFormProps) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        role: "",
        status: "active",
    });

    const [errors, setErrors] = useState({} as Record<string, string>);
    const { closeModal } = useModalStore();

    const handleChange = (field: string, value: string) => {
        setForm({ ...form, [field]: value });
    };

    const handleSubmit = () => {
        onSubmit?.(form);

        alert(`${isAdmin ? "Admin" : "User"} created successfully`);
        closeModal();
    };

    return (
        <div className="space-y-4 p-8">
            <div>
                <label className="block text-sm font-medium">Full Name</label>
                <Input name="name" value={form.name} change={val => handleChange('name', val)} placeholder="John Doe" />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium">Email</label>
                <Input name="email" value={form.email} change={val => handleChange('email', val)} placeholder="user@example.com" />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            {isAdmin && (
                <div>
                    <label className="block text-sm font-medium">Role</label>
                    <Select
                        name="status"
                        className="w-full px-3 py-2 border rounded-md"
                        change={val => handleChange('status', val)}
                        placeholder="Select Status"
                        options={[
                            { value: "superadmin", label: "Super Admin" },
                            { value: "user-registration-admin", label: "User Registration Admin" },
                            { value: "support-admin", label: "Support Admin" },
                        ]}
                    />
                </div>
            )}

            <div>
                <label className="block text-sm font-medium">Status</label>
                <Select
                    name="status"
                    className="w-full px-3 py-2 border rounded-md"
                    change={val => handleChange('status', val)}
                    placeholder="Select Status"
                    options={[
                        { value: "active", label: "Active" },
                        { value: "suspended", label: "Suspended" },
                    ]}
                />
            </div>

            <div className="pt-2">
                <Button
                    onClick={handleSubmit}
                    className="w-full px-4 py-2 rounded-md"
                >
                    Create {isAdmin ? "Admin" : "User"}
                </Button>
            </div>
        </div>
    );
};

export default CreateUserForm;
