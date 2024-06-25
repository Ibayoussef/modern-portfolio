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
        {
            "title": "Visit Beni Mellal",
            "description": "Visit Beni Mellal is an engaging web platform designed to showcase the beauty and attractions of Beni Mellal, Morocco. Developed using React, the site offers a seamless user experience with an intuitive, responsive design. Visitors can explore a variety of content, including detailed descriptions of local landmarks, cultural highlights, and travel tips. The platform also features stunning visuals and interactive elements to enhance user engagement, making it an ideal digital guide for tourists and travel enthusiasts interested in discovering the unique charm of Beni Mellal.",
            "url": "https://www.visitbenimellal.com/en/"
        },
        {
            "title": "Visit Fes Meknes",
            "description": "Visit Fes Meknes is an informative web platform crafted to highlight the attractions and cultural richness of the Fes Meknes region in Morocco. Built using React, the site delivers a smooth, user-friendly experience with a modern, responsive design. Users can delve into comprehensive guides on local heritage sites, cultural events, and travel tips. The platform also includes captivating imagery and interactive features to enhance user engagement, making it a perfect digital companion for tourists and travel aficionados looking to explore the unique offerings of Fes Meknes.",
            "url": "https://www.visitfesmeknes.ma/en"
        },
        {
            "title": "Nima Platform",
            "description": "The NIMA platform by Tremau is a sophisticated content moderation solution designed to centralize and optimize Trust & Safety processes. Developed using Next.js during my tenure at Tremau, NIMA integrates manual and AI-enabled moderation to ensure data accuracy and security. It addresses issues like tool and data fragmentation, high volumes of user reports, and complex regulations. Key features include robust approval workflows, end-to-end moderation capabilities, and intelligent replication for minimal operational disruption, enhancing moderator productivity and streamlining moderation processes.",
            "url": "https://tremau.com/"
        },
        {
            "title": "Alchemy Data Migration Platform",
            "description": "Alchemy is a cutting-edge platform designed to streamline SAP S/4HANA migrations with precision and agility. Built using React and Redux Toolkit (RTK), Alchemy offers a secure, intuitive interface that automates data conversion processes, ensuring up to 76% improved efficiency.I developed the frontend leveraging React for component - based architecture and RTK for efficient state management.The platform features robust approval workflows, thorough pre- load / post - load validations, and intelligent replication to guarantee data accuracy and minimize operational downtime.Alchemy simplifies complex data mapping, making it an ideal solution for high - volume and intricate datasets, tailored to meet the unique demands of various industries, enhancing your SAP ecosystem journey.",
            "url": "https://cognitus.com/products/data-migration/"
        },
        {
            "title": "AsylumTix",
            "description": "AsylumTix is a ticket purchasing platform designed for Improv Asylum, developed using Angular and Capacitor. The platform streamlines the ticket buying process, offering an intuitive and responsive user experience. Users can easily browse and purchase tickets for various comedy shows, classes, and private events. AsylumTix ensures seamless integration with mobile devices, providing a convenient and efficient way to book tickets for all Improv Asylum offerings, from their main stage shows to specialized comedy tours and training programs.",
            "url": "https://improvasylum.com/"
        },
        {
            "title": "Riad Myra",
            "description": "Riad Myra is an elegant accommodation in the heart of Fez, offering luxurious rooms and suites with traditional Moroccan decor. Guests can enjoy fine cuisine in the central patio, breathtaking views, and exceptional hospitality. The riad features a restaurant, terrace, bar, and a relaxing spa, ensuring a comfortable and enriching stay. The project was developed using WordPress, providing a seamless and engaging user experience for booking stays and exploring the amenities of Riad Myra.",
            "url": "https://riadmyra.com/"
        }
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
                className="relative z-10 text-[10rem] leading-tight text-stroke uppercase"
            >
                work_
            </motion.h1>
            <div className="flex items-center justify-center w-full h-full">
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
                                <p className={`mt-2  text-sm ${index % 3 === 0 ? '' : 'overflow-auto   max-h-32'}`}>{project.description}</p>
                                <a href={project.url} target='_blank' className="block px-4 py-2 mt-4 text-sm font-semibold rounded-md w-fit bg-purple-700/50 hover:bg-purple-800/50">
                                    Learn More
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Work;
