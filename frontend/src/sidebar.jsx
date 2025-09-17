import React from 'react';
import { LayoutDashboard, Train, Users, ClipboardList, Briefcase, MessageSquare, MessagesSquare, Settings, User, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

const NavItem = ({ item, setPage, isActive }) => {
    return (
        <motion.button
            onClick={() => setPage(item.id)}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex items-center px-4 py-2 text-left text-sm rounded-lg transition-colors ${
                isActive ? 'bg-blue-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
        </motion.button>
    );
};

export default function Sidebar({ user, setPage, currentPage, onLogout }) {
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['administrator', 'supervisor'] },
        { id: 'train-details', label: 'Train Details', icon: Train, roles: ['administrator'] },
        { id: 'supervisor-details', label: 'Supervisor Details', icon: Users, roles: ['administrator'] },
        { id: 'daily-task-sheet', label: 'Daily Tasks', icon: ClipboardList, roles: ['administrator', 'supervisor'] },
        { id: 'project-sheet', label: 'Projects', icon: Briefcase, roles: ['administrator', 'supervisor'] },
        { id: 'group-chat', label: 'Group Chat', icon: MessageSquare, roles: ['administrator', 'supervisor'] },
        { id: 'team-chat', label: 'Team Chat', icon: MessagesSquare, roles: ['supervisor'] },
    ];

    const settingsItems = [
        { id: 'profile', label: 'Profile', icon: User, roles: ['administrator', 'supervisor'] },
        { id: 'settings', label: 'Settings', icon: Settings, roles: ['administrator', 'supervisor'] },
    ];

    return (
        <aside className="w-64 bg-white text-gray-800 flex flex-col shadow-lg flex-shrink-0">
            <div className="p-6 border-b border-gray-200">
                <h1 className="text-xl font-bold text-blue-600">KMRL Planner</h1>
                <p className="text-sm text-gray-500">Welcome, {user.name}</p>
            </div>
            <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
                {navItems.filter(item => item.roles.includes(user.role)).map(item => (
                    <NavItem key={item.id} item={item} setPage={setPage} isActive={currentPage === item.id} />
                ))}
            </nav>
            <div className="px-4 py-4 border-t border-gray-200">
                {settingsItems.filter(item => item.roles.includes(user.role)).map(item => (
                    <NavItem key={item.id} item={item} setPage={setPage} isActive={currentPage === item.id} />
                ))}
                 <motion.button
                    onClick={onLogout}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center px-4 py-2 mt-2 text-left text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                >
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                </motion.button>
            </div>
        </aside>
    );
};
