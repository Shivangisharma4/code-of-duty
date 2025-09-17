import React from 'react';

export default function Table({ headers, rows }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        {headers.map((header, i) => (
                            <th scope="col" className="px-6 py-3" key={i}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr className="bg-white border-b hover:bg-gray-50" key={i}>
                            {row.map((cell, j) => (
                                 <td className={`px-6 py-4 ${j === 0 ? 'font-medium text-gray-900' : ''}`} key={j}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};