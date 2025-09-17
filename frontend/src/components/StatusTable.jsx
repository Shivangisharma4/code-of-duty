import React from 'react';

export default function StatusTable({ columns, data }) {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-800';
            case 'In Progress': return 'bg-yellow-100 text-yellow-800';
            case 'Pending': return 'bg-red-100 text-red-800';
            case 'On Track': return 'bg-blue-100 text-blue-800';
            case 'At Risk':
            case 'Delayed': return 'bg-orange-100 text-orange-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-50">
                    <tr>
                        {columns.map((column) => (
                            <th key={column.Header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {column.Header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {data.map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                            {columns.map((column) => (
                                <td key={column.accessor} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    {column.accessor === 'status' ? (
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(row[column.accessor])}`}>
                                            {row[column.accessor]}
                                        </span>
                                    ) : (
                                        row[column.accessor]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};