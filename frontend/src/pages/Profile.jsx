import React from 'react';
import Card from '../components/Card';


const Profile = ({ user }) => (
    <Card title="User Profile">
        <div className="space-y-2">
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Role:</strong> <span className="capitalize">{user.role}</span></p>
            <p><strong>Team:</strong> {user.team}</p>
        </div>
    </Card>
);

export default Profile;
