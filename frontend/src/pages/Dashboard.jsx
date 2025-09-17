import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../components/Card';
import { mockData } from '../mockdata.js';

const Dashboard = () => {
    const { trains } = mockData;
    const statusCounts = trains.reduce((acc, train) => {
        acc[train.status] = (acc[train.status] || 0) + 1;
        return acc;
    }, {});
    const chartData = Object.keys(statusCounts).map(key => ({ name: key, count: statusCounts[key] }));

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card title="Total Trains"><p className="text-4xl font-bold text-blue-600">{trains.length}</p></Card>
                <Card title="In Service"><p className="text-4xl font-bold text-green-600">{statusCounts['In Service'] || 0}</p></Card>
                <Card title="On Standby"><p className="text-4xl font-bold text-yellow-600">{statusCounts['Standby'] || 0}</p></Card>
                <Card title="Under Maintenance"><p className="text-4xl font-bold text-red-600">{statusCounts['Maintenance'] || 0}</p></Card>
            </div>
            <Card title="Fleet Status Overview">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#3B82F6" />
                    </BarChart>
                </ResponsiveContainer>
            </Card>
        </div>
    );
};

export default Dashboard;
