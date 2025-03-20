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


// import React from "react";
// import group47 from "./group-47.png";
// import line6 from "./line-6.svg";
// import "./style.css";

// export const box: React.FC = () => {
//   return (
//     <div className="box">
//         <img className="group" alt="Group" src={group47.src} />
//         <img className="group" alt="Group" src={group47.src} />

//         <div className="overlap">
//           <p className="text-wrapper">
//             Nice text, noice text, buy a merch bruh, noice text, buy a merch
//             bruh, noice text, buy a merch bruh, noice text, buy a merch bruh,
//             noice text, buy a merch bruh
//           </p>

//           <button className="button">
//             <div className="overlap-group">
//               <div className="div">Visit store</div>
//             </div>
//           </button>
//         </div>

//         <div className="text-wrapper-2">MERCH</div>

//         <img className="line" alt="Line" src={line6.src} />
//     </div>
//   );
// };