import { FC } from "react";
import Button from "../common/Button";
import { Expand, Pen, Trash2 } from "lucide-react";

interface TableProps {
    cols: string[];
    data: ({ image?: string, data: (string | any)[] })[];
    action?: boolean;
    serialized?: boolean;
    onView?: (row: any) => void;
    onEdit?: (row: any) => void;
    onDelete?: (row: any) => void;
}

const UserTable: FC<TableProps> = ({
    cols,
    data,
    action,
    serialized,
    onView,
    onEdit,
    onDelete,
}) => {
    return (
        <>
            {/* Desktop View */}
            <div className="hidden md:block w-full overflow-x-auto rounded-xl border shadow-sm">
                <table className="w-full text-sm table-auto">
                    <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
                        <tr>
                            {serialized && <th className="py-3 px-4 text-left">S/N</th>}
                            {cols.map((col, i) => (
                                <th key={i} className="py-3 px-4 text-left">
                                    {col}
                                </th>
                            ))}
                            {action && <th className="py-3 px-4 text-left">Action</th>}
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {data.map(({ image, data }, i) => (
                            <tr
                                key={i}
                                className="border-t hover:bg-gray-50 transition-colors duration-200"
                            >
                                {serialized && <td className="py-3 px-4">{i + 1}</td>}
                                {image && <td className="flex items-center gap-2">
                                    <img src={image} alt="" className="w-10 h-10 rounded-full" />
                                    {data[0]}
                                </td>}
                                {data.slice(1).map((cell, j) => (
                                    <td key={j} className="py-3 px-4">
                                        {cell}
                                    </td>
                                ))}
                                {action && (
                                    <td className="py-3 px-4">
                                        <div className="flex gap-2">
                                            <Button onClick={() => onView?.({ image, data })} size="sm" variant="outline">
                                                <Expand size={16} />
                                            </Button>
                                            <Button onClick={() => onEdit?.(data)} size="sm" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500">
                                                <Pen size={16} />
                                            </Button>
                                            <Button onClick={() => onDelete?.(data)} size="sm" variant="outline" className="border-red-500 text-red-500 hover:bg-red-500">
                                                <Trash2 size={16} />
                                            </Button>
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
                {data.map(({ image, data }, i) => (
                    <div
                        key={i}
                        className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col gap-y-2"
                    >
                        {serialized && (
                            <div className="text-xs text-gray-400 font-semibold">#{i + 1}</div>
                        )}

                        {image && data[0] && (
                            <div className="flex items-center gap-3">
                                <img src={image} alt="Avatar" className="w-12 h-12 rounded-full object-cover border" />
                                <div className="font-medium text-gray-900 text-base">{data[0]}</div>
                            </div>
                        )}

                        {/* Fields */}
                        <div className="space-y-2">
                            {data.slice(1).map((cell, j) => (
                                <div key={j} className="flex flex-col">
                                    <span className="text-[8pt] text-gray-500 font-medium uppercase tracking-wide">
                                        {cols?.[j + 1] ?? `Field ${j + 1}`}
                                    </span>
                                    <span className="text-sm text-gray-800">{cell}</span>
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        {action && (
                            <div className="flex gap-2 pt-2">
                                <div className="flex flex-grow gap-2">
                                    <Button
                                        onClick={() => onView?.({ image, data })}
                                        size="sm"
                                        variant="outline"
                                        className="flex-1">
                                        View
                                    </Button>
                                    <Button
                                        onClick={() => onEdit?.(data)}
                                        size="sm"
                                        variant="outline"
                                        className="border-orange-500 text-orange-500 hover:bg-orange-500 flex-1">
                                        Edit
                                    </Button>
                                    <Button
                                        onClick={() => onDelete?.(data)}
                                        size="sm"
                                        variant="outline"
                                        className="border-red-500 text-red-500 hover:bg-red-500 flex-1">
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </>
    );
};

export default UserTable;
