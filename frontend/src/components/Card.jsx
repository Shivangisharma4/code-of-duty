import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ title, children, fullHeight = false }) {
    return (
        <motion.div
            className={`bg-white p-6 rounded-xl shadow-md ${fullHeight ? 'h-full flex flex-col' : ''}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">{title}</h3>
            <motion.div className={`${fullHeight ? 'flex-1 overflow-hidden' : ''}`}>
                {children}
            </motion.div>
        </motion.div>
    );
};