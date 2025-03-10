'use client';

import { useState, useEffect } from 'react';
import Logobar from "./Logobar";
import LanguageToggle from "./DesktopNavbar/LanguageToggle";
import ShortcutBar from "./DesktopNavbar/ShortcutBar";

// Navbars
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

// import { getRequestConfig } from 'next-intl/server';
// import { routing } from './routing';
import { useLocale } from 'next-intl'

interface ShortcutEnableProps {
    enabled: boolean;
    text: string;
    link: string;
}

// Responsive Navbar
const Navbar = ({ isMobile }: { isMobile: boolean }) => {
    return isMobile ? (
        <MobileNavbar />
    ) : (
        <>
            <Logobar />
            <DesktopNavbar />
            <LanguageToggle />
        </>
    );
};

const ShortcutEnable = ({ enabled, text, link }: ShortcutEnableProps) => {
    if (enabled) {
        return <ShortcutBar text={text} link={link} />;
    } else {
        return null;
    }
};

export default function MainNavbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false); // Step 1: Add mounted state
    const [shortcutEnabled] = useState(true); // Enable or Disable shortcut bar
    const [shortcutText] = useState('Hackathon - 2025'); // Text to display on the shortcut bar
    const locale = useLocale();
    const [shortcutLink] = useState(`/${locale}/events`); // Link to navigate when the shortcut bar is clicked

    useEffect(() => {
        setMounted(true); // Step 2: Mark as mounted
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1080);
        };
        handleResize(); // Check on load
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!mounted) return null; // Step 3: Conditionally render navbar

    return (
        <div className="my-[28px]">
            <div className="flex items-center justify-between w-full">
                {/* Centered elements */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-[15px] top-[28px]">
                    <Navbar isMobile={isMobile} />
                </div>

                {/* Shortcut button on the right */}
                <div className="ml-auto">
                    <ShortcutEnable enabled={!isMobile && shortcutEnabled} text={shortcutText} link={shortcutLink} />
                </div>
            </div>
        </div>
    );
}
