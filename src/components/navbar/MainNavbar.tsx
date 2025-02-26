'use client';

import { useState } from 'react';
import Navbar from "./Navbar";
import Logobar from "./Logobar";
import LanguageToggle from "./LanguageToggle";
import ShortcutBar from "./ShortcutBar";

// import { getRequestConfig } from 'next-intl/server';
// import { routing } from './routing';
import { useLocale } from 'next-intl'

interface ShortcutEnableProps {
    enabled: boolean;
    text: string;
    link: string;
}

const ShortcutEnable = ({ enabled, text, link }: ShortcutEnableProps) => {
    if (enabled) {
        return <ShortcutBar text={text} link={link} />;
    } else {
        return null;
    }
};

export default function MainNavbar() {
    const [shortcutEnabled] = useState(true); // Enable or Disable shortcut bar
    const [shortcutText] = useState('Test - 2025'); // Text to display on the shortcut bar
    const locale = useLocale();
    const [shortcutLink] = useState(`/${locale}/events`); // Link to navigate when the shortcut bar is clicked

    return (
        <div className="my-[28px]">
            <div className="flex items-center justify-between w-full">
                {/* Centered elements */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-[15px] top-[28px]">
                    <Logobar />
                    <Navbar />
                    <LanguageToggle />
                </div>

                {/* Shortcut button on the right */}
                <div className="ml-auto">
                    <ShortcutEnable enabled={shortcutEnabled} text={shortcutText} link={shortcutLink} />
                </div>
            </div>
        </div>
    );
}