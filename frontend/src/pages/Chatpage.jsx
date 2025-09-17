import React, { useState, useEffect, useRef } from 'react';
import { collection, addDoc, query, onSnapshot, orderBy, serverTimestamp } from 'firebase/firestore';
import { Send } from 'lucide-react';
import Card from '../components/Card';
import { db, appId } from '../firebase';

// --- Original Component (Modified to accept db and appId as props) ---

const Chat = ({ user, chatId, chatName }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);
    
    useEffect(() => {
        if (!db || !appId) {
            console.error("Firebase db or appId is not provided to the Chat component.");
            return;
        };

        const chatCollectionPath = `/artifacts/${appId}/public/data/${chatId}`;
        const q = query(collection(db, chatCollectionPath), orderBy("timestamp"));
        
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setMessages(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }, (error) => {
            console.error("Error fetching chat messages: ", error);
        });

        return () => unsubscribe();
    }, [chatId, db, appId]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (newMessage.trim() === '' || !db || !appId) return;
        const chatCollectionPath = `/artifacts/${appId}/public/data/${chatId}`;
        await addDoc(collection(db, chatCollectionPath), {
            text: newMessage,
            sender: { id: user.id, name: user.name },
            timestamp: serverTimestamp(),
        });
        setNewMessage('');
    };
    
    return (
        <Card title={chatName} className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map(msg => (
                    <div key={msg.id} className={`flex items-start gap-3 ${msg.sender.id === user.id ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 ${msg.sender.id === user.id ? 'bg-blue-500' : 'bg-gray-400'}`}>
                            {msg.sender.name.charAt(0)}
                        </div>
                        <div className={`p-3 rounded-lg max-w-xs ${msg.sender.id === user.id ? 'bg-blue-100' : 'bg-gray-200'}`}>
                            <p className="text-sm font-bold">{msg.sender.name}</p>
                            <p className="text-sm">{msg.text}</p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSendMessage} className="flex gap-2 p-4 border-t">
                <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} placeholder="Type a message..." className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none" />
                <button type="submit" className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600"><Send size={18} /></button>
            </form>
        </Card>
    );
};

export default Chat;
