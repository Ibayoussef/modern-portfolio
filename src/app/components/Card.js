'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Card = ({ profile }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (centerY - y) / 20;
        const rotateY = (x - centerX) / 20;

        setRotateX(rotateX);
        setRotateY(rotateY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    const generateInterviewQuestions = (profile) => {
        const questions = [
            `Can you describe your experience?`,
            `What are some key projects you've worked on?`,
            `How do you approach solving complex problems?`,
            `What are some challenges you faced while working and how did you overcome them?`,
            `How do you stay updated with the latest trends?`,
            `Can you explain a technical concept you recently learned in simple terms?`,
            `How do you handle working under pressure and tight deadlines?`,
        ];
        return questions;
    };

    const questions = generateInterviewQuestions(profile);

    return (
        <motion.div
            className="relative p-8 mt-8 transition-transform transform border shadow-lg w-fit bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 rounded-xl hover:shadow-2xl backdrop-filter backdrop-blur-lg border-gray-200/20"
            style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ rotateX, rotateY }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
            <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-xl blur-md"></div>
            <div className="relative z-10 text-white">
                <h2 className="text-2xl font-bold">Questions about me:</h2>
                <ul className="mt-2 list-disc list-inside">
                    {questions.map((question, index) => (
                        <motion.li
                            key={index}
                            className="mt-1 text-sm cursor-pointer hover:text-blue-300"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            onClick={() => alert(question)}
                        >
                            {question}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default Card;
