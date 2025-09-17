import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.js';

// Import pages and components
import Sidebar from './sidebar.jsx';
import LoginPage from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import TrainDetails from './pages/Traindata.jsx';
import SupervisorDetails from './pages/Supervisordata.jsx';
import DailyTaskSheet from './pages/tasksheet.jsx';
import ProjectSheet from './pages/projectsheet.jsx';
import Chat from './pages/Chatpage.jsx';
import AppSettings from './pages/Settings.jsx';
import Profile from './pages/Profile.jsx';

export default function App() {
    const [user, setUser] = useState(null);
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                console.log("Auth state changed, user:", firebaseUser.uid);
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);
    
    const handleLogin = (loggedInUser) => {
        setUser(loggedInUser);
        setCurrentPage('dashboard');
    };
    
    const handleLogout = () => {
        setUser(null);
    };

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen bg-gray-100"><h1>Loading App...</h1></div>;
    }

    if (!user) {
        return <LoginPage onLogin={handleLogin} />;
    }

    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard': return <Dashboard />;
            case 'train-details': return <TrainDetails />;
            case 'supervisor-details': return <SupervisorDetails />;
            case 'daily-task-sheet': return <DailyTaskSheet />;
            case 'project-sheet': return <ProjectSheet />;
            case 'group-chat': return <Chat user={user} chatId="kmrl-group-chat" chatName="KMRL General Chat" />;
            case 'team-chat': return <Chat user={user} chatId={`team-${user.team}`} chatName={`${user.team} Team Chat`} />;
            case 'settings': return <AppSettings />;
            case 'profile': return <Profile user={user} />;
            default: return <Dashboard />;
        }
    };
    
    return (
        <div className="flex bg-gray-100 min-h-screen font-sans">
            <Sidebar user={user} setPage={setCurrentPage} onLogout={handleLogout} currentPage={currentPage} />
            <main className="flex-1 p-6 overflow-auto">
                {renderPage()}
            </main>
        </div>
    );
}