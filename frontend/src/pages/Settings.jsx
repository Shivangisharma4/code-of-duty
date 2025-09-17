import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import Card from '../components/Card';

const Settings = () => {
    const [notifications, setNotifications] = useState({ email: true, push: false });
    const [theme, setTheme] = useState('light');
    
    return (
         <Card title="Settings">
            <div className="space-y-6">
                <div>
                    <h4 className="text-lg font-semibold">Notifications</h4>
                    <div className="space-y-2 mt-2">
                         <label className="flex items-center"><input type="checkbox" checked={notifications.email} onChange={() => setNotifications(p => ({...p, email: !p.email}))} className="mr-2"/> Email Notifications</label>
                         <label className="flex items-center"><input type="checkbox" checked={notifications.push} onChange={() => setNotifications(p => ({...p, push: !p.push}))} className="mr-2"/> Push Notifications</label>
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-semibold">Theme</h4>
                    <div className="flex space-x-2 mt-2">
                        <button onClick={() => setTheme('light')} className={`px-4 py-1 rounded ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Light <Sun className="inline-block ml-1" size={16}/></button>
                        <button onClick={() => setTheme('dark')} className={`px-4 py-1 rounded ${theme === 'dark' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Dark <Moon className="inline-block ml-1" size={16}/></button>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Settings;
