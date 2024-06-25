"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RevealSection = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,


        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            whileInView={"visible"}
            transition={{
                duration: 1, ease: [0.17, 0.67, 0.83, 0.67], when: 'beforeChildren',
                staggerChildren: 0.3,
            }}
            variants={variants}

        >
            {children}
        </motion.div>
    );
};

export default RevealSection;
