'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
// import {routing} from './routing';
import { useLocale } from 'next-intl';

// import Logobar from './Logobar';

const navItems = ['Home', 'About', 'Members', 'Events', 'Other'];

export default function Navbar() {
    const locale = useLocale();
    const [selected, setSelected] = useState(-1);
    const [isLoaded, setIsLoaded] = useState(false); // New state to track first render
    const pathname = usePathname();
    const router = useRouter();

    // Define dynamic width and positions for buttons
    const widths = [80, 85, 100, 85, 84];
    const positions = [5, 78, 156, 252, 327];

    useEffect(() => {
        let index = navItems.findIndex(item => pathname.toLowerCase().includes(item.toLowerCase()));
    
        // Handle Home and Hash Links correctly
        if (pathname === `/${locale}/` || pathname === `/${locale}`) {
            if (window.location.hash === "#about") index = 1; // "About"
            else if (window.location.hash === "#other") index = 4; // "Other"
            else index = 0; // Default to "Home"
        }
    
        // Ensure the animation updates correctly
        setTimeout(() => {
            setSelected(index !== -1 ? index : 0);
        }, 50);
    }, [pathname]);
    

    return (
        <div>        
            <div className="">
                {/* Logo
                <Logobar /> */}

                {/* Navigation */}
                {/* <div className="relative flex items-center bg-white px-2 py-[4px] rounded-full outline-black outline-1 outline-none outline-offset-0">*/}
                <div className="relative flex items-center bg-white px-2 h-[48px] rounded-full outline-none outline-1 outline-black outline-offset-0">
                    {/* Motion Background */}
                    {selected !== -1 && (
                        <motion.div
                            className="absolute rounded-full bg-[#dadada]"
                            initial={{ left: positions[selected] || 5 }} // Default to Home's position
                            animate={{ left: positions[selected] }}
                            transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                            style={{
                                width: `${widths[selected] || 80}px`,
                                height: '40px',
                            }}
                        />
                    )}

                    {/* Navigation Links */}
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            className={`relative z-10 px-4 py-2 text-[16px] transition-colors ${
                                selected === index ? 'text-black' : 'text-gray-500'
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                setSelected(index);
                                router.replace(
                                    item === 'Home'
                                        ? `/${locale}/#`
                                        : item === 'About'
                                        ? `/${locale}/#about`
                                        : item === 'Other'
                                        ? `/${locale}/#other`
                                        : `/${locale}/${item.toLowerCase()}`
                                );
                            }}
                            style={{ userSelect: 'none', cursor: 'pointer' }}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
