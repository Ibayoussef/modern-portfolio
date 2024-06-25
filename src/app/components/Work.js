'use client';
import React, { useEffect, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Work = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const headingVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
    }), []);

    const overlayVariants = useMemo(() => ({
        hidden: { height: '100%' },
        visible: { height: '0%', transition: { duration: 2, ease: 'easeOut' } },
    }), []);

    const cardVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }), []);

    const cardData = useMemo(() => [
        { title: 'Project 1', description: 'This is a description of Project 1.' },
        { title: 'Project 2', description: 'This is a description of Project 2.' },
        { title: 'Project 3', description: 'This is a description of Project 3.' },
        { title: 'Project 4', description: 'This is a description of Project 4.' },
        { title: 'Project 5', description: 'This is a description of Project 5.' },
        { title: 'Project 6', description: 'This is a description of Project 6.' },
    ], []);

    return (
        <div ref={ref} className="relative p-8 overflow-hidden bg-black">
            <motion.div
                initial="hidden"
                animate={controls}
                variants={overlayVariants}
                className="absolute inset-0 z-20 bg-black"
            />
            <motion.h1
                id='work'
                initial="hidden"
                animate={controls}
                variants={headingVariants}
                className="relative z-10 text-[7rem] leading-tight text-stroke uppercase"
            >
                work_
            </motion.h1>
            <div className="flex items-center justify-center w-full h-screen">
                <motion.div
                    className="grid grid-cols-1 grid-rows-2 gap-8 sm:grid-cols-2 lg:grid-cols-4"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 0 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2 } },
                    }}
                >
                    {cardData.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`relative p-4 overflow-hidden transition-transform transform border border-gray-200/20 rounded-lg shadow-lg bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 hover:shadow-2xl
              ${index % 3 === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}`}
                            variants={cardVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="absolute inset-0 z-50 transition-opacity opacity-20 bg-gradient-to-r from-purple-500/50 to-blue-500/50 blur-md"></div>
                            <Image src={'/placeholder.webp'} className='absolute inset-0 z-30 object-cover w-full h-full' alt='image' width={400} height={400} loading='lazy' />

                            <div className="relative z-50 w-full h-full p-4 text-white rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-10">
                                <h2 className="text-xl font-bold">{project.title}</h2>
                                <p className="mt-2 text-sm">{project.description}</p>
                                <button className="px-4 py-2 mt-4 text-sm font-semibold rounded-md bg-purple-700/50 hover:bg-purple-800/50">
                                    Learn More
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Work;
