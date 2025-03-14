'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { navItems } from "../navItems";

export default function Navbar() {
    const locale = useLocale();
    const [selected, setSelected] = useState<number | null>(null);
    const [hovered, setHovered] = useState<number | null>(null);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Prevents flickering

    const pathname = usePathname();
    const router = useRouter();

    const widths = [80, 85, 100, 85, 84];
    const positions = [4, 78, 156, 252, 327];

    useEffect(() => {
        let index = navItems.findIndex(item => pathname.toLowerCase().includes(item.label.toLowerCase()));
        if (pathname === `/${locale}/` || pathname === `/${locale}`) {
            index = 0;
        }
        setSelected(index !== -1 ? index : 4);
    }, [pathname]);

    // 🛠️ Function to prevent flickering
    const handleMouseEnter = (index: number) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setHovered(index);
        if (navItems[index].subItems.length > 0) setIsSubmenuOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHovered(null);
            setIsSubmenuOpen(false);
        }, 300); // Small delay to allow smooth movement
    };

    // 🚀 **NEW FIX**: Force close submenu when moving back to navbar (except "Other")
    const handleNavbarMouseEnter = (index: number) => {
        if (index !== 4) {  // If NOT "Other," force close submenu
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setHovered(null);
            setIsSubmenuOpen(false);
        }
    };

    return (
        <div>
            <div className="relative flex items-center bg-white px-2 h-[48px] rounded-full outline-none outline-1 outline-black outline-offset-0">
                {selected !== null && (
                    <motion.div
                        className="absolute rounded-full bg-[#dadada]"
                        initial={false}
                        animate={{ left: positions[selected] }}
                        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                        style={{
                            width: `${widths[selected] || 80}px`,
                            height: '40px',
                            left: positions[selected],
                        }}
                    />
                )}

                {navItems.map((item, index) => (
                    <div
                        key={item.label}
                        className="relative"
                        onMouseEnter={() => {
                            handleMouseEnter(index);
                            handleNavbarMouseEnter(index); // ✅ New fix applied here
                        }}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button
                            className={`relative z-10 px-4 py-2 text-[16px] transition-colors select-none ${
                                selected === index ? 'text-black' : 'text-gray-500 hover:text-black'
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                setSelected(index);
                                router.replace(`/${locale}${item.anchor}`);
                            }}
                            disabled={index===4}
                        >
                            {item.label}
                        </button>

                        {/* Submenu */}
                        {item.subItems.length > 0 && (hovered === index || isSubmenuOpen) && (
                            <motion.div
                                id={`submenu-${index}`}
                                className="absolute -left-8 mt-4 bg-white rounded-[24px] outline-black outline-1 outline-none outline-offset-0 py-2 px-2 min-w-[100px]"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {item.subItems.map(sub => (
                                    <button
                                        key={sub.label}
                                        className="w-full text-center px-6 py-2 hover:text-gray-500 whitespace-nowrap"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setHovered(null);
                                            setIsSubmenuOpen(false);
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