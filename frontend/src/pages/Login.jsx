import React, { useState } from 'react';
import { mockData } from '../mockdata';
import Card from '../components/Card';
import { motion } from 'framer-motion';

const LoginPage = ({ onLogin }) => {
    const [userId, setUserId] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        const user = mockData.supervisors.find(s => s.id.toLowerCase() === userId.toLowerCase());
        if (user) {
            onLogin(user);
        } else {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card title="KMRL System Login" className="w-full max-w-md">
                <div className="space-y-4">
                    <p className="text-gray-600">Enter your Supervisor or Administrator ID to proceed.</p>
                    <input
                        type="text"
                        value={userId}
                        onChange={e => { setUserId(e.target.value); setError(''); }}
                        placeholder="e.g., S001 or A001"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <motion.button
                        onClick={handleLogin}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Login
                    </motion.button>
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;

