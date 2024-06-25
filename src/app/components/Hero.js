'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const AnimatedText = dynamic(() => import('./AnimatedLed'), { ssr: false });
const Button = dynamic(() => import('./Button'), { ssr: false });

const Hero = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef(null);

    const overlayVariants = {
        initial: { x: 0 },
        animate: { x: '-100%' }
    };

    const scrollToAbout = useCallback(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVideoLoaded(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div id="home" className="relative w-full min-h-screen">
            <div className="absolute top-0 left-0 z-40 w-full h-full bg-black opacity-60"></div>
            <div className="absolute top-0 left-0 z-30 w-full h-full" ref={videoRef}>
                {!!videoLoaded && (
                    <video className="object-cover w-full h-full" autoPlay loop muted playsInline>
                        <source src="/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
            <div className="absolute z-50 w-full text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div className="relative inline-block overflow-hidden">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={overlayVariants}
                        transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
                        className="absolute inset-0 z-40 bg-[#A72582]"
                    />
                    <h1 className="relative text-[3.75rem] leading-tight text-stroke uppercase">
                        full stack developer
                    </h1>
                </div>
                <div className="relative inline-block overflow-hidden">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={overlayVariants}
                        transition={{ duration: 1.5, ease: 'easeInOut', delay: 2 }}
                        className="absolute inset-0 z-40 bg-[#A72582]"
                    />
                    <h1 className="relative text-[7.5rem] leading-tight text-stroke">
                        ISMAIL BAYOUSSEF
                    </h1>
                </div>
                <div className="relative inline-block mt-4 overflow-hidden">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={overlayVariants}
                        transition={{ duration: 1.5, ease: 'easeInOut', delay: 3.5 }}
                        className="absolute inset-0 z-40 bg-[#A72582]"
                    />
                    <p className="relative text-[3.75rem]">
                        THE ONLY <AnimatedText>DEV</AnimatedText> YOU NEED
                    </p>
                </div>
            </div>
            <div className="absolute flex justify-center w-full bottom-8">
                <Button onClick={scrollToAbout}>
                    <div className="flex flex-row items-center gap-2">
                        <p>Scroll Down</p>
                        <ChevronDownIcon className="w-5 h-5" />
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default Hero;
