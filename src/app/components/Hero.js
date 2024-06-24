'use client'
import React from 'react';
import AnimatedText from './AnimatedLed';
import Button from './Button';
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion';
function Hero() {
    const overlayVariants = {
        initial: { x: 0 },
        animate: { x: '-100%' }
    };
    return (
        <div className="relative w-full min-h-screen">
            <div className='absolute top-0 left-0 z-40 w-full h-full bg-black opacity-60'></div>
            <video className="absolute top-0 left-0 z-30 object-cover w-full h-full" autoPlay loop muted>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute z-50 w-full text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div className="relative inline-block overflow-hidden">

                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={overlayVariants}
                        transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
                        className="absolute inset-0 z-40 bg-[#A72582]"
                    />
                    <h1 className="relative text-[3.75rem] leading-tight text-stroke uppercase">full stack developer</h1>


                </div>
                <div className="relative inline-block overflow-hidden">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={overlayVariants}
                        transition={{ duration: 1.5, ease: 'easeInOut', delay: 2 }}
                        className="absolute inset-0 z-40 bg-[#A72582]"
                    />
                    <h1 className="relative text-[7.5rem] leading-tight text-stroke">ISMAIL BAYOUSSEF</h1>
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
            <div className='absolute flex justify-center w-full bottom-8'>
                <Button > <div className='flex flex-row items-center gap-2'><p>Scroll Down</p><ChevronDownIcon className='w-5 h-5' /></div> </Button>
            </div>
        </div>
    );
}

export default Hero;
