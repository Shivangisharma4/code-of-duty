// This file contains all the static data for the application.
// In a real-world scenario, this data would come from a database via an API.

export const mockData = {
    trains: Array.from({ length: 25 }, (_, i) => ({
        id: `KMRL-T${101 + i}`,
        fitness: {
            rollingStock: new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            signalling: Math.random() > 0.1 ? 'VALID' : 'EXPIRED',
            telecom: Math.random() > 0.05 ? 'VALID' : 'EXPIRED',
        },
        jobCardStatus: Math.random() > 0.3 ? 'CLOSED' : 'OPEN',
        branding: i % 5 === 0 ? 'AD-ON' : (i % 5 === 1 ? 'AD-OFF' : 'NONE'),
        mileage: Math.floor(150000 + Math.random() * 200000),
        cleaning: ['DEEP', 'INTERIOR', 'EXTERIOR'][Math.floor(Math.random() * 3)],
        stabling: `IBL-${Math.ceil(Math.random() * 10)}`,
        status: Math.random() > 0.2 ? 'SERVICE' : 'MAINTENANCE',
    })),
    supervisors: [
        { id: 'S001', name: 'Anjali Menon', team: 'Alpha', role: 'supervisor' },
        { id: 'S002', name: 'Bimal Kumar', team: 'Alpha', role: 'supervisor' },
        { id: 'S003', name: 'David George', team: 'Bravo', role: 'supervisor' },
        { id: 'S004', name: 'Fatima Sheikh', team: 'Bravo', role: 'supervisor' },
        { id: 'S005', name: 'Gopal Varma', team: 'Charlie', role: 'supervisor' },
        { id: 'A001', name: 'Admin User', team: 'Management', role: 'administrator' }
    ],
    dailyTasks: [
        { id: 'T01', task: 'Inspect braking system on KMRL-T105', assignedTo: 'Alpha', status: 'Completed' },
        { id: 'T02', task: 'HVAC filter replacement on KMRL-T112', assignedTo: 'Bravo', status: 'In Progress' },
        { id: 'T03', task: 'Exterior wrap check for AD-ON trains', assignedTo: 'Charlie', status: 'Pending' },
        { id: 'T04', task: 'Telecom fitness re-certification for KMRL-T103', assignedTo: 'Alpha', status: 'Pending' },
    ],
    projects: [
        { id: 'P01', project: 'Bogie Overhaul Program - Phase 2', team: 'Alpha', status: 'On Track', deadline: '2025-10-15' },
        { id: 'P02', project: 'Digital Signage Upgrade', team: ['Bravo', 'Charlie'], status: 'Delayed', deadline: '2025-09-30' },
        { id: 'P03', project: 'Maximo Data Integration', team: 'Management', status: 'Completed', deadline: '2025-08-20' },
    ]
};
