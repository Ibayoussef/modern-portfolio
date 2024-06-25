'use client';
import React, { useCallback, useMemo } from 'react';

const Navbar = () => {
    const links = useMemo(() => ['home', 'about', 'work', 'contact'], []);

    const scrollToSection = useCallback((section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="fixed top-0 left-0 z-[999999] flex flex-row items-start justify-between w-full p-8">
            <h2 className="font-thin uppercase">
                Ismail Bayoussef&apos;s <span className="bg-[#A72582]">Portfolio</span>
            </h2>
            <ul className="flex flex-col gap-2 font-thin uppercase">
                {links.map((link) => (
                    <li key={link} className="relative group" onClick={() => scrollToSection(link)}>
                        <p className="relative z-50 transition-all cursor-pointer group-hover:font-normal">{link}</p>
                        <div className="absolute top-0 left-0 w-0 h-full transition-all group-hover:w-full bg-[#A72582]"></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
