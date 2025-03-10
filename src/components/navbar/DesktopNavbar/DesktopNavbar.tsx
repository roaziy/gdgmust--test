'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { navItems } from "../navItems";

export default function Navbar() {
    const locale = useLocale();
    const [selected, setSelected] = useState<number | null>(null); // Default to null to prevent unwanted animation
    const [isLoaded, setIsLoaded] = useState(false); // Prevent initial animation flicker
    const [hovered, setHovered] = useState<number | null>(null);
    const pathname = usePathname();
    const router = useRouter();

    // Define dynamic width and positions for buttons
    const widths = [80, 85, 100, 85, 84];
    const positions = [4, 78, 156, 252, 327];

    useEffect(() => {
        let index = navItems.findIndex(item => pathname.toLowerCase().includes(item.label.toLowerCase()));
    
        if (pathname === `/${locale}/` || pathname === `/${locale}`) {
            if (pathname === `/${locale}`) index = 0;
            else if (window.location.hash=== `/${locale}`) index = 0;
            else if (window.location.hash === "#about") index = 1; 
            // else if (window.location.hash === "#other") index = 4;
            else index = 4; 
        }
    
        setSelected(index !== -1 ? index : 4); // Defaults to "Other" for unknown routes
        setIsLoaded(true); // Prevents unwanted animation on first render
    }, [pathname]);
    

    return (
        <div>        
            <div className="relative flex items-center bg-white px-2 h-[48px] rounded-full outline-none outline-1 outline-black outline-offset-0">
                {/* Motion Background */}
                {selected !== null && (
                    <motion.div
                        className="absolute rounded-full bg-[#dadada]"
                        initial={false} // Prevents initial animation
                        animate={isLoaded ? { left: positions[selected] } : {}} // Animates only after first render
                        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                        style={{
                            width: `${widths[selected] || 80}px`,
                            height: '40px',
                            left: positions[selected] // Instantly set correct position on first render
                        }}
                    />
                )}

                {/* Navigation Links */}
                {navItems.map((item, index) => (
                    <div
                        key={item.label}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        className="relative"
                    >
                        <button
                            className={`relative z-10 px-4 py-2 text-[16px] transition-colors ${
                                selected === index ? 'text-black' : 'text-gray-500 hover:text-black'
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                setSelected(index);
                                router.replace(`/${locale}${item.anchor}`);
                            }}
                        >
                            {item.label}
                        </button>

                        {/* Other section */}
                        {item.subItems.length > 0 && hovered === index && (
                            <motion.div
                                className="block absolute left-0 mt-4 bg-white outline-none rounded-[24px] outline-black outline-1 py-2
                                transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.18 }}
                            >
                                {item.subItems.map(sub => (
                                    <button
                                        key={sub.label}
                                        className="w-full text-center px-6 py-2 hover:bg-gray-100"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            router.replace(`/${locale}${sub.anchor}`);
                                        }}
                                    >
                                        {sub.label}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}