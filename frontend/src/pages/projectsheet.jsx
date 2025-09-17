import React from 'react';
import { mockData } from '../mockdata.js';
import Card from '../components/Card';
import StatusTable from '../components/StatusTable';

// --- Original Component ---

const ProjectSheet = () => {
    const columns = [ { Header: 'ID', accessor: 'id' }, { Header: 'Project Name', accessor: 'project' }, { Header: 'Assigned Teams', accessor: 'team' }, { Header: 'Status', accessor: 'status' }];
    const data = mockData.projects.map(p => ({...p, team: Array.isArray(p.team) ? p.team.join(', ') : p.team}));
    return <Card title="Ongoing Projects"><StatusTable columns={columns} data={data} /></Card>;
};

export default ProjectSheet;
