import React, { FC } from 'react'
import Button from '../common/Button'

interface TableProps {
    cols: string[]
    data: React.ReactNode[][]
    action?: boolean
    serialized?: boolean
    transparent?: boolean
}

const ResponsiveTable: FC<TableProps> = ({ cols, data, action, serialized, transparent }) => {
    return (
        <>
            {/* Desktop View */}
            <div className={`hidden md:block w-full overflow-x-auto rounded-xl ${transparent ?? ' border'} shadow-sm`}>
                <table className="w-full text-sm table-auto">
                    <thead className={`${transparent ?? "bg-gray-50"} text-gray-600 uppercase text-xs font-semibold`}>
                        <tr>
                            {serialized && <th className="py-3 px-4 text-left min-w-16">S/N</th>}
                            {cols.map((col, i) => (
                                <th key={i} className="py-3 px-4 text-left min-w-28 max-w-56">
                                    {col}
                                </th>
                            ))}
                            {action && <th className="py-3 px-4 text-left min-w-28">Action</th>}
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {data.map((row, i) => (
                            <tr
                                key={i}
                                className="border-t hover:bg-gray-50 transition-colors duration-200"
                            >
                                {serialized && <td className="py-3 px-4">{i + 1}</td>}
                                {row.map((cell, j) => (
                                    <td key={j} className="py-3 px-4">
                                        {cell}
                                    </td>
                                ))}
                                {action && (
                                    <td className="py-3 px-4">
                                        <div className="flex gap-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="border border-green-500 bg-green-100 text-green-600 font-medium hover:bg-green-200"
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="border border-red-500 bg-red-100 text-red-600 font-medium hover:bg-red-200"
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >

            {/* Mobile View */}
            <div className="md:hidden space-y-4 mt-6" >
                {
                    data.map((row, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-200 rounded-xl shadow-sm px-4 py-4 flex flex-col gap-y-3"
                        >
                            {serialized && (
                                <div className="text-xs text-gray-500 font-semibold">#{i + 1}</div>
                            )}

                            {row.map((cell, j) => (
                                <div key={j} className="text-sm text-gray-800">
                                    {cell}
                                </div>
                            ))}

                            {action && (
                                <div className="flex gap-3 pt-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full border border-green-500 bg-green-100 text-green-600 font-medium hover:bg-green-200"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full border border-red-500 bg-red-100 text-red-600 font-medium hover:bg-red-200"
                                    >
                                        Delete
                                    </Button>
                                </div>
                            )}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ResponsiveTable
