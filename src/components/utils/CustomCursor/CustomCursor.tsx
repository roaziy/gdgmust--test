// 'use client';

// import { useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import useMouse from '@react-hook/mouse-position';

// const CustomCursor = () => {
//   const [cursorText, setCursorText] = useState('');
//   const [cursorVariant, setCursorVariant] = useState<'default' | 'hover'>('default');
//   const ref = useRef<HTMLDivElement>(null);
//   const mouse = useMouse(ref, { enterDelay: 100, leaveDelay: 100 });

//   let mouseXPosition = mouse.clientX ?? 0;
//   let mouseYPosition = mouse.clientY ?? 0;

//   const variants = {
//     default: {
//       opacity: 1,
//       height: 10,
//       width: 10,
//       backgroundColor: '#1e91d6',
//       x: mouseXPosition,
//       y: mouseYPosition,
//       transition: { type: 'spring', mass: 0.6 }
//     },
//     hover: {
//       opacity: 1,
//       height: 40,
//       width: 40,
//       backgroundColor: '#FFBCBC',
//       x: mouseXPosition - 15,
//       y: mouseYPosition - 15
//     }
//   };

//   const spring = { type: 'spring', stiffness: 500, damping: 28 };

//   const handleEnter = () => {
//     setCursorText('Hover');
//     setCursorVariant('hover');
//   };

//   const handleLeave = () => {
//     setCursorText('');
//     setCursorVariant('default');
//   };

//   return (
//     <div ref={ref} className="relative h-screen w-screen">
//       <motion.div
//         className="fixed z-50 flex items-center justify-center rounded-full pointer-events-none"
//         variants={variants}
//         animate={cursorVariant}
//         transition={spring}
//         draggable={false}
//       >
//         <span className="text-white text-xs">{cursorText}</span>
//       </motion.div>
//     </div>
//   );
// };

// export default CustomCursor;