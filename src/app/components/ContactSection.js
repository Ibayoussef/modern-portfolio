"use client";

import { useAnimation } from 'framer-motion';
import React, { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function ContactSection() {
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
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
    }), []);

    const overlayVariants = useMemo(() => ({
        hidden: { height: '100%' },
        visible: { height: '0%', transition: { duration: 2, ease: 'easeOut' } },
    }), []);

    const buttonVariants = useMemo(() => ({
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    }), []);

    return (
        <div ref={ref} className="relative p-8 overflow-hidden bg-black">
            <motion.div
                initial="hidden"
                animate={controls}
                variants={overlayVariants}
                className="absolute inset-0 z-20 bg-white"
            />
            <motion.h1
                id='contact'
                initial="hidden"
                animate={controls}
                variants={headingVariants}
                className="relative z-10 text-[10rem] leading-tight text-stroke text-white font-bold uppercase"
            >
                Contact_
            </motion.h1>
            <motion.div
                initial="hidden"
                animate={controls}
                variants={buttonVariants}
                className="relative z-10 mt-10"
            >
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-4 text-xl text-white bg-transparent border border-white focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-4 text-xl text-white bg-transparent border border-white focus:outline-none"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-4 text-xl text-white bg-transparent border border-white focus:outline-none"
                        rows="4"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full p-4 text-xl font-bold text-black bg-white"
                    >
                        Send Message
                    </button>
                </form>
            </motion.div>
        </div>
    );
}

export default ContactSection;
