'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from './Card';
import Model from './Model';
import { Canvas } from '@react-three/fiber';

const AboutSection = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        console.log('inView:', inView);
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const headingVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
    };

    const overlayVariants = {
        hidden: { height: '100%' },
        visible: { height: '0%', transition: { duration: 2, ease: 'easeOut' } },
    };

    return (
        <div ref={ref} className="relative p-8 overflow-hidden bg-black">
            <motion.div

                initial="hidden"
                animate={controls}
                variants={overlayVariants}
                className="absolute inset-0 z-20 bg-black"
            />
            <motion.h1
                id='about'
                initial="hidden"
                animate={controls}
                variants={headingVariants}
                className="relative z-10 text-[7rem] leading-tight text-stroke uppercase"
            >
                about_
            </motion.h1>
            <div className="relative flex items-start w-full h-screen ">
                <div className='absolute top-0 left-0 block w-full h-screen max-lg:block'>
                    <Canvas flat linear camera={{ position: [0, 0, 5], fov: 50 }} >
                        <Model />
                    </Canvas>
                </div>
                <Card />
                <div className='hidden w-full h-full lg:block'>
                    <Canvas flat linear camera={{ position: [0, 0, 5], fov: 50 }} >
                        <Model />
                    </Canvas>
                </div>

            </div>

        </div >
    );
};

export default AboutSection;
