'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Card = ({ profile }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [answer, setAnswer] = useState(null);
    const [loading, setLoading] = useState(false);
    const [displayedAnswer, setDisplayedAnswer] = useState('');
    const [backVisible, setBackVisible] = useState(false);

    const handleMouseMove = useCallback((e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        setRotateX((centerY - y) / 20);
        setRotateY((x - centerX) / 20);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setRotateX(0);
        setRotateY(0);
    }, []);

    const generateInterviewQuestions = useCallback(() => [
        `Can you describe your experience?`,
        `What are some key projects you've worked on?`,
        `How do you approach solving complex problems?`,
        `What are some challenges you faced while working and how did you overcome them?`,
        `How do you stay updated with the latest trends?`,
        `Can you explain a technical concept you recently learned in simple terms?`,
        `How do you handle working under pressure and tight deadlines?`,
        `What technologies are you currently excited about and why?`,
        `Can you provide an example of a time you improved a process or workflow?`,
        `How do you prioritize your tasks when you have multiple deadlines?`,
        `What is your approach to code review and collaboration?`,
        `How do you ensure the quality and maintainability of your code?`,
        `Can you describe a situation where you had to learn a new technology quickly?`,
        `What are your strategies for debugging and troubleshooting issues?`,
        `How do you handle feedback and criticism regarding your work?`,
        `What is your experience with test-driven development (TDD) or other testing methodologies?`,
        `Can you discuss a time when you had to refactor a large codebase?`,
        `How do you manage your time and stay organized in a remote work environment?`,
        `What are some best practices you follow for writing clean and efficient code?`,
        `How do you approach performance optimization in your projects?`
    ], []);


    const questions = generateInterviewQuestions();

    const speakAnswer = useCallback((answerText) => {
        const voices = speechSynthesis.getVoices();
        const utterance = new SpeechSynthesisUtterance(answerText);
        utterance.voice = voices.find(voice => voice.name.includes('Google US English')) || voices.find(voice => voice.lang === 'en-US');
        speechSynthesis.speak(utterance);
    }, []);

    const handleQuestionClick = useCallback(async (question) => {
        setLoading(true);
        setDisplayedAnswer('');
        setBackVisible(false);
        try {
            const response = await axios.post('/api/llm', { question });
            setAnswer(response.data.answer);
            speakAnswer(response.data.answer);
        } catch (error) {
            console.error(error);
            setAnswer('Failed to fetch the answer.');
        } finally {
            setLoading(false);
        }
    }, [speakAnswer]);

    const handleBackClick = useCallback(() => {
        setAnswer(null);
    }, []);

    useEffect(() => {
        if (answer) {
            let currentText = '';
            const intervalId = setInterval(() => {
                if (currentText.length < answer.length) {
                    currentText += answer[currentText.length];
                    setDisplayedAnswer(currentText);
                } else {
                    clearInterval(intervalId);
                    setBackVisible(true);
                }
            }, 20);
            return () => clearInterval(intervalId);
        } else {
            speechSynthesis.cancel();
            setDisplayedAnswer('');
            setBackVisible(false);
        }
    }, [answer]);

    return (
        <motion.div
            className="relative max-h-full p-8 mt-8 overflow-auto transition-transform transform border shadow-lg w-fit bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 rounded-xl hover:shadow-2xl backdrop-filter backdrop-blur-lg border-gray-200/20"
            style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ rotateX, rotateY }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
            <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-xl blur-md"></div>
            <div className="relative z-10 text-white">
                <h2 className="text-2xl font-bold">Questions about me:</h2>
                {!answer ? (
                    <ul className="mt-2 list-disc list-inside">
                        {loading ? (
                            <div className="flex items-center justify-center mt-2">
                                <motion.div
                                    className="w-10 h-10 border-4 border-purple-400 rounded-full border-t-transparent animate-spin"
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                />
                            </div>
                        ) : questions.map((question, index) => (
                            <motion.li
                                key={index}
                                className="mt-1 text-sm cursor-pointer hover:text-blue-300"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                onClick={() => handleQuestionClick(question)}
                            >
                                {question}
                            </motion.li>
                        ))}
                    </ul>
                ) : (
                    <div>
                        <>
                            <p>{displayedAnswer}</p>
                            {backVisible && (
                                <a className="mt-4 text-blue-300 cursor-pointer hover:underline" onClick={handleBackClick}>Back</a>
                            )}
                        </>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Card;
