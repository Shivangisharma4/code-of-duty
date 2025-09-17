import React from 'react';
import { mockData } from '../mockdata.js';
import Card from '../components/Card';

// --- Original Component ---

const SupervisorDetails = () => {
     return (
        <Card title="Supervisor & Team Details">
            <div className="space-y-6">
                {mockData.teams.map(team => (
                    <div key={team.name}>
                        <h4 className="text-lg font-semibold mb-2 text-blue-700">{team.name} Team</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {team.members.map(memberId => {
                             const supervisor = mockData.supervisors.find(s => s.id === memberId);
                             if (!supervisor) return null;
                             return (
                                 <div key={supervisor.id} className="bg-gray-100 p-4 rounded-lg">
                                     <p className="font-bold">{supervisor.name}</p>
                                     <p className="text-sm text-gray-600">{supervisor.id}</p>
                                 </div>
                             )
                        })}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
};

export default SupervisorDetails;
