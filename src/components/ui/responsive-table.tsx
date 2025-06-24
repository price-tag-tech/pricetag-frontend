import React, { FC } from 'react'
import Button from '../common/Button';

interface TableProps {
    cols: string[];
    data: React.ReactNode[][];
    action?: boolean;
    serialized?: boolean
}

const ResponsiveTable: FC<TableProps> = ({ cols, data, action, serialized }) => {
    return (
        <>
            {/* desktop view */}
            <table className="hidden md:block w-full table-auto text-sm overflow-x-auto">
                <thead>
                    <tr className="border-b text-left text-gray-800 font-semibold">
                        {serialized && <th className="py-3 px-4 w-10">S/N</th>}
                        {cols.map((col, i) => (
                            <th key={i} className="py-3 px-4">{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className='w-[100vw] overflow-x-hidden'>
                    {data.map((row, i) => (
                        <tr key={i}>
                            {serialized && <td key={i} className="py-3 px-4 min-w-16">{i + 1}</td>}
                            {row.map((cell, j) => (
                                <td key={j} className="py-3 px-4 min-w-20">{cell}</td>
                            ))}
                            {action && (
                                <td className="py-3 px-4 flex gap-3">
                                    <Button variant="outline" size="sm" className='border-2 border-green-500 bg-green-100 text-green-500 font-montserrat hover:bg-green-200' style={{ color: "#22c55e" }}>
                                        Edit
                                    </Button>
                                    <Button variant="outline" size="sm" className='border-2 border-red-500 bg-red-100 text-green-500 font-montserrat hover:bg-red-200' style={{ color: "#ef4444" }}>
                                        Delete
                                    </Button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* mobile view */}
            <div className="md:hidden space-y-4">
                {data.map((row, i) => (
                    <div
                        key={i}
                        className="bg-white border border-gray-200 rounded-xl shadow-sm px-4 py-3 flex flex-col gap-y-3"
                    >
                        {/* Optional: Serial Number Badge */}
                        {serialized && (
                            <div className="text-xs text-gray-500 font-semibold">
                                #{i + 1}
                            </div>
                        )}

                        {/* Row cells (just values) */}
                        {row.map((cell, j) => (
                            <div key={j} className="text-sm text-gray-800">
                                {cell}
                            </div>
                        ))}

                        {/* Optional: Action Buttons */}
                        {action && (
                            <div className="flex gap-3 pt-1">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full border border-green-500 bg-green-100 text-green-600 font-medium hover:bg-green-200 hover:text-green-600"
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full border border-red-500 bg-red-100 text-red-600 font-medium hover:bg-red-200 hover:text-red-600"
                                >
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </>
    );
};

export default ResponsiveTable