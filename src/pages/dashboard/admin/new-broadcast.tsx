import { useState } from "react"
import Label from "../../../components/ui/form/label"
import Input from "../../../components/ui/form/input"
import Select from "../../../components/ui/form/select"
import { ChevronDown } from "lucide-react"
import Textarea from "../../../components/ui/form/textarea"

export default function NewBroadcast() {
    const [audience, setAudience] = useState("all")
    const [customEmails, setCustomEmails] = useState("")
    const [showButtonDropdown, setShowButtonDropdown] = useState(false)
    const [choiceButtonType, setChoiceButtonType] = useState("Send Broadcast")

    const buttonTypes = ["Send Broadcast", "Save to Draft", "Schedule Broadcast"];

    return (
        <div className="w-full md:w-2/3 px-4">
            {/* Page Title */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Send New Broadcast</h1>
                <p className="text-sm text-gray-600 mt-1">
                    Compose a new message and broadcast to al users
                </p>
            </div>

            {/* Broadcast Meta */}
            <div className="bg-white border rounded-xl p-6 shadow-sm space-y-4">
                <div className="flex flex-col gap-y-2">
                    <Label size="md">Subject</Label>
                    <Input
                        type="text" size="md"
                        placeholder="e.g. New Feature Announcement"
                    />
                </div>

                <h2 className="text-lg font-semibold text-gray-800">Audience</h2>

                <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                        <Input
                            type="radio"
                            name="audience"
                            value="all"
                            checked={audience === "all"}
                            change={() => setAudience("all")}
                            className="accent-blue-500"
                        />
                        <span className="text-sm text-gray-700">All users</span>
                    </label>

                    <label className="flex items-center space-x-2">
                        <Input
                            type="radio"
                            name="audience"
                            value="group"
                            checked={audience === "group"}
                            change={() => setAudience("group")}
                            className="accent-blue-500"
                        />
                        <span className="text-sm text-gray-700">Specific user group</span>
                    </label>

                    {audience === "group" && (
                        <Select options={[
                            { label: "User Registration Admin", value: "user-reg-admin" },
                            { label: "Support Admin", value: "support-admin" },
                            { label: "Finance & Affiliate Admin", value: "finance-affiliate-admin" },
                            { label: "Stores", value: "stores" },
                            { label: "Users", value: "users" },
                        ]} placeholder="--Select Role--" className="w-full mt-1 border rounded-md px-3 py-2 text-sm text-gray-700" />
                    )}

                    <label className="flex items-start space-x-2">
                        <Input
                            type="radio"
                            name="audience"
                            value="custom"
                            checked={audience === "custom"}
                            change={() => setAudience("custom")}
                            className="accent-blue-500 mt-1"
                        />
                        <div className="flex-1">
                            <span className="text-sm text-gray-700">Custom emails</span>
                            {audience === "custom" && (
                                <Textarea
                                    value={customEmails}
                                    change={setCustomEmails}
                                    placeholder="Paste comma-separated emails"
                                    rows={4}
                                    className="w-full mt-2 border rounded-md px-3 py-2 text-sm resize-none"
                                />
                            )}
                        </div>
                    </label>
                </div>
            </div>

            {/* Message */}
            <div className="bg-white border rounded-xl p-6 shadow-sm mt-8 space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Message</h2>
                <textarea
                    placeholder="Write your message here..."
                    rows={8}
                    className="w-full border rounded-md px-3 py-2 text-sm resize-y outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            {/* Actions */}
            <div className="flex justify-end mt-4">
                <div className="w-fit rounded-md text-sm flex items-center relative shadow">
                    <button className="px-4 text-white rounded-l-md py-3 h-full bg-brand-600 hover:bg-brand-700 transition duration-200 ease-in-out">
                        {choiceButtonType}
                    </button>
                    <button onClick={() => setShowButtonDropdown(prev => !prev)} className="px-4 py-3 rounded-r-md text-white bg-brand-700 hover:bg-brand-800 transition duration-200 ease-in-out">
                        <ChevronDown className={`${showButtonDropdown && "rotate-180"} transition duration-300 ease-out`} />
                    </button>
                    <div className={`${showButtonDropdown ? 'absolute' : 'hidden'} transition duration-300 ease-out w-fit min-w-40 bottom-12 right-0 bg-brand-50 text-gray-800 text-md shadow-inner flex flex-col rounded overflow-hidden divide-y`}>
                        {
                            buttonTypes.filter(key => key !== choiceButtonType).map(type => (
                                <div key={type} onClick={() => { setChoiceButtonType(type); setShowButtonDropdown(false) }} className="px-3 py-2 md:py-2 hover:bg-brand-200 transition-all cursor-pointer shadow-inner">
                                    {type}
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
