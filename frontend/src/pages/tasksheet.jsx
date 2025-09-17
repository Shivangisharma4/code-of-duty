import React from 'react';
import { mockData } from '../mockdata.js';
import Card from '../components/Card';
import StatusTable from '../components/StatusTable';

// --- Original Component ---

const DailyTaskSheet = () => {
    const columns = [
        { Header: 'ID', accessor: 'id' },
        { Header: 'Task Description', accessor: 'task' },
        { Header: 'Assigned Team', accessor: 'assignedTo' },
        { Header: 'Status', accessor: 'status' }
    ];
    return (
        <Card title="Daily Task Sheet">
            <StatusTable columns={columns} data={mockData.dailyTasks} />
        </Card>
    );
};

export default DailyTaskSheet;
