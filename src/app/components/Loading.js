"use client"
import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { LoadingContext } from '../utils/LoadingContext';
function Loading() {
    const { loading } = useContext(LoadingContext);
    const variants = {
        initial: { y: '-100%' },
        animate: { y: '0%', transition: { duration: 0.5, ease: 'easeOut' } },
        exit: { y: '100%', transition: { duration: 0.5, ease: 'easeIn' } },
    };

    const circleVariants = {
        initial: { scale: 0, opacity: 0 },
        animate: {
            scale: [1, 1.2, 1],
            opacity: 1,
            transition: {
                duration: 1,
                ease: 'easeInOut',
                delay: 1,
                repeat: Infinity,
                repeatType: 'mirror',
            },
        },
        exit: { scale: 0, opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } },
    };

    const textVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut', delay: 1.5 } },
        exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } },
    };
    if (!loading) return <></>
    return (
        (
            <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black bg-opacity-50">
                <div className="grid w-full h-full grid-cols-1 gap-4 md:grid-cols-3">
                    <motion.div
                        className="blur-md bg-gradient-to-r from-purple-500 to-blue-500 opacity-30"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={{ ...variants, initial: { y: '-100%' }, exit: { y: '100%' } }}
                    ></motion.div>
                    <motion.div
                        className="blur-md bg-gradient-to-r from-purple-500 to-blue-500 opacity-30"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={{ ...variants, initial: { y: '100%' }, exit: { y: '-100%' } }}
                    ></motion.div>
                    <motion.div
                        className="blur-md bg-gradient-to-r from-purple-500 to-blue-500 opacity-30"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={{ ...variants, initial: { y: '-100%' }, exit: { y: '100%' } }}
                    ></motion.div>
                </div>
                <motion.div
                    className="absolute flex items-center justify-center w-24 h-24 text-white rounded-full bg-purple-700/50 "
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={circleVariants}
                >
                    <motion.p
                        className="text-xl font-bold"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={textVariants}
                    >
                        ISBAY
                    </motion.p>
                </motion.div>
            </div>
        )
    )
}

export default Loading