import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}


// 'use client';

// import { useState, useRef, RefObject } from 'react';
// import { motion } from 'framer-motion';
// import useMouse from '@react-hook/mouse-position';

// const CustomCursor = () => {
//   const [cursorText, setCursorText] = useState('');
//   const [cursorVariant, setCursorVariant] = useState<'default' | 'project' | 'contact'>('default');
//   const ref = useRef<HTMLDivElement>(null);
//   const mouse = useMouse(ref as RefObject<HTMLElement>, { enterDelay: 100, leaveDelay: 100 });

//   let mouseXPosition = mouse.clientX ?? 0;
//   let mouseYPosition = mouse.clientY ?? 0;

//   const variants = {
//     default: {
//       opacity: 1,
//       height: 10,
//       width: 10,
//       fontSize: '16px',
//       backgroundColor: '#1e91d6',
//       x: mouseXPosition,
//       y: mouseYPosition,
//       transition: { type: 'spring', mass: 0.6 }
//     },
//     project: {
//       opacity: 1,
//       backgroundColor: '#fff',
//       color: '#000',
//       height: 80,
//       width: 80,
//       fontSize: '18px',
//       x: mouseXPosition - 32,
//       y: mouseYPosition - 32
//     },
//     contact: {
//       opacity: 1,
//       backgroundColor: '#FFBCBC',
//       color: '#000',
//       height: 64,
//       width: 64,
//       fontSize: '32px',
//       x: mouseXPosition - 48,
//       y: mouseYPosition - 48
//     }
//   };

//   const spring = { type: 'spring', stiffness: 500, damping: 28 };

//   const projectEnter = () => {
//     setCursorText('View');
//     setCursorVariant('project');
//   };

//   const projectLeave = () => {
//     setCursorText('');
//     setCursorVariant('default');
//   };

//   const contactEnter = () => {
//     setCursorText('👋');
//     setCursorVariant('contact');
//   };

//   const contactLeave = () => {
//     setCursorText('');
//     setCursorVariant('default');
//   };

//   return (
//     <div ref={ref} className="relative h-screen w-screen overflow-hidden">
//       <motion.div
//         className="fixed z-50 flex items-center justify-center rounded-full pointer-events-none"
//         variants={variants}
//         animate={cursorVariant}
//         transition={spring}
//         style={{ height: 10, width: 10 }}
//       >
//         <span className="text-center text-black">{cursorText}</span>
//       </motion.div>

//       <div
//         className="h-64 w-64 bg-blue-500 rounded-lg cursor-none"
//         onMouseEnter={projectEnter}
//         onMouseLeave={projectLeave}
//       >
//         Project
//       </div>

//       <div
//         className="mt-10 text-lg underline cursor-none"
//         onMouseEnter={contactEnter}
//         onMouseLeave={contactLeave}
//       >
//         Want to Chat?
//       </div>
//     </div>
//   );
// };

// export default CustomCursor;
