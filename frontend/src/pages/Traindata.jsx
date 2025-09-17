import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { mockData } from '../mockdata';
import Card from '../components/Card';
import { motion } from 'framer-motion';
const TrainDetails = () => {
    const [expandedTrain, setExpandedTrain] = useState(null);
    const FitnessPill = ({ status }) => {
        const color = status === 'valid' ? 'bg-green-100 text-green-800' : status === 'warning' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800';
        return <span className={`px-2 py-1 text-xs font-medium rounded-full ${color}`}>{status}</span>;
    };

    return (
        <Card title="Train Fleet Details">
            <div className="space-y-2">
                {mockData.trains.map(train => (
                    <div key={train.id} className="border rounded-lg overflow-hidden">
                        <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50" onClick={() => setExpandedTrain(expandedTrain === train.id ? null : train.id)}>
                            <div className="font-bold">{train.id}</div>
                            <div>{train.status}</div>
                            <div>{train.branding}</div>
                            {expandedTrain === train.id ? <ChevronDown /> : <ChevronRight />}
                        </div>
                        <AnimatePresence>
                        {expandedTrain === train.id && (
                             <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="bg-gray-50 px-4 pb-4"
                            >
                                <div className="pt-4 border-t grid grid-cols-2 gap-4">
                                     <p><strong>Mileage:</strong> {train.mileage.toLocaleString()} km</p>
                                     <p><strong>Next Maintenance:</strong> {train.nextMaintenance}</p>
                                     <div className="col-span-2">
                                         <strong>Fitness Certificates:</strong>
                                         <div className="flex space-x-2 mt-1">
                                             <FitnessPill status={train.fitness.rollingStock} /> Rolling Stock
                                             <FitnessPill status={train.fitness.signalling} /> Signalling
                                             <FitnessPill status={train.fitness.telecom} /> Telecom
                                         </div>
                                     </div>
                                 </div>
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default TrainDetails;

