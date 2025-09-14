import { FC } from "react";
import Button from "../common/Button";
import { Expand, Pen, Trash2 } from "lucide-react";
import Status, { StatusInterface } from "./status";

interface TableProps {
    cols: string[];
    keys?: string[];
    data: Record<string, any>[];
    statuses?: StatusInterface[] | string[];
    serialized?: boolean;
    action?: boolean;
    onView?: (row: any) => void;
    onEdit?: (row: any) => void;
    onDelete?: (row: any) => void;
}

const DataTable: FC<TableProps> = ({
    cols,
    keys,
    data,
    statuses,
    serialized,
    action,
    onView,
    onEdit,
    onDelete,
}) => {
    const labels = keys || cols;
    const includeImage = labels.includes("image");
    const includeName = labels.includes("name");

    const renderStatus = (val: string) => {
        const match = (statuses as (string | StatusInterface)[])?.find((s) =>
            typeof s === "string" ? s === val : s.label === val
        );

        const state = typeof match === "string" ? "default" : match?.state || "default";

        return <Status label={val} state={state} />;
    };


    return (    
        <>
            {/* Desktop View */}
            <div className="hidden md:block w-full overflow-x-auto rounded-xl border shadow-sm">
                <table className="w-full text-sm table-auto">
                    <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
                        <tr className="bg-gray-100">
                            {serialized && <th className="py-3 px-4 text-left">S/N</th>}
                            {labels.map((col, i) => (
                                <th key={i} className="py-3 px-4 text-left">
                                    {col}
                                </th>
                            ))}
                            {action && <th className="py-3 px-4 text-left">Action</th>}
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 bg-white">
                        {data.map((row, i) => (
                            <tr key={i} className="border-t hover:bg-gray-50 transition-colors">

                                {serialized && <td className="py-3 px-4">{i + 1}</td>}

                                {(includeImage || includeName) && (
                                    <td className="py-3 px-4 flex items-center gap-2">
                                        {includeImage && row.image && (
                                            <img
                                                src={row.image}
                                                alt="avatar"
                                                className="w-10 h-10 rounded-full"
                                            />
                                        )}
                                        {includeName && <span>{row.name}</span>}
                                    </td>
                                )}

                                {labels.map((key, j) => {
                                    if (key === "name" || key === "image") return null;
                                    const val = row[key];
                                    return (
                                        <td key={j} className="py-3 px-4">
                                            {key === "status" ? renderStatus(val) : val}
                                        </td>
                                    );
                                })}

                                {action && (
                                    <td className="py-3 px-4">
                                        <div className="flex gap-2">
                                            {onView && (
                                                <Button
                                                    onClick={() => onView(row)}
                                                    size="sm"
                                                    variant="outline"
                                                >
                                                    <Expand size={16} />
                                                </Button>
                                            )}
                                            {onEdit && (
                                                <Button
                                                    onClick={() => onEdit(row)}
                                                    size="sm"
                                                    variant="outline"
                                                    className="border-orange-500 text-orange-500 hover:bg-orange-500"
                                                >
                                                    <Pen size={16} />
                                                </Button>
                                            )}
                                            {onDelete && (
                                                <Button
                                                    onClick={() => onDelete(row)}
                                                    size="sm"
                                                    variant="outline"
                                                    className="border-red-500 text-red-500 hover:bg-red-500"
                                                >
                                                    <Trash2 size={16} />
                                                </Button>
                                            )}
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile View */}
            <div className="md:hidden space-y-4 mt-6">
                {data.map((row, i) => (
                    <div
                        key={i}
                        className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col gap-y-2"
                    >
                        {serialized && (
                            <div className="text-xs text-gray-400 font-semibold">#{i + 1}</div>
                        )}

                        {(includeName || includeImage) && (
                            <div className="flex items-center gap-3">
                                {includeImage && row.image && (
                                    <img
                                        src={row.image}
                                        alt="Avatar"
                                        className="w-12 h-12 rounded-full object-cover border"
                                    />
                                )}
                                {includeName && (
                                    <div className="font-medium text-gray-900 text-base">
                                        {row.name}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Fields */}
                        <div className="space-y-2 pt-1">
                            {labels
                                .filter((key) => key !== "name" && key !== "image")
                                .map((key, j) => (
                                    <div key={j} className="flex flex-col">
                                        <span className="text-[8pt] text-gray-500 font-medium uppercase tracking-wide">
                                            {key}
                                        </span>
                                        <span className="text-sm text-gray-800">
                                            {key === "status" ? renderStatus(row[key]) : row[key]}
                                        </span>
                                    </div>
                                ))}
                        </div>

                        {/* Actions */}
                        {action && (
                            <div className="flex gap-2 pt-3">
                                {onView && (
                                    <Button
                                        onClick={() => onView(row)}
                                        size="sm"
                                        variant="outline"
                                        className="flex-1"
                                    >
                                        View
                                    </Button>
                                )}
                                {onEdit && (
                                    <Button
                                        onClick={() => onEdit(row)}
                                        size="sm"
                                        variant="outline"
                                        className="border-orange-500 text-orange-500 hover:bg-orange-500 flex-1"
                                    >
                                        Edit
                                    </Button>
                                )}
                                {onDelete && (
                                    <Button
                                        onClick={() => onDelete(row)}
                                        size="sm"
                                        variant="outline"
                                        className="border-red-500 text-red-500 hover:bg-red-500 flex-1"
                                    >
                                        Delete
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default DataTable;
