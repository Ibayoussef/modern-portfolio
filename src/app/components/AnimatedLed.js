'use client';

import { motion } from 'framer-motion';

const AnimatedText = ({ children }) => {
    const textShadowVariants = {
        initial: {
            textShadow: "0 0 10px rgba(167, 37, 130, 1), 0 0 20px rgba(167, 37, 130, 1), 0 0 30px rgba(167, 37, 130, 1), 0 0 40px rgba(167, 37, 130, 1)",
            opacity: 1
        },
        animate: {
            textShadow: [
                "0 0 10px rgba(167, 37, 130, 0.2), 0 0 20px rgba(167, 37, 130, 0.2), 0 0 30px rgba(167, 37, 130, 0.2), 0 0 40px rgba(167, 37, 130, 0.2)",
                "0 0 10px rgba(167, 37, 130, 1), 0 0 20px rgba(167, 37, 130, 1), 0 0 30px rgba(167, 37, 130, 1), 0 0 40px rgba(167, 37, 130, 1)"
            ],
            opacity: [0.6, 1],
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror"
            }
        }
    };

    return (
        <motion.span
            className='text-[#A72582] text-[3.75rem]' // Adjust text size as needed
            initial="initial"
            animate="animate"
            variants={textShadowVariants}
        >
            {children}
        </motion.span>
    );
};

export default AnimatedText;
