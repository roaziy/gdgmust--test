import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import Image from 'next/image';

//Image imports
import intro from "../../public/images/homepage/intro.jpg";
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <div className="flex items-center justify-between">
        <Image 
          src={intro} 
          alt="banner"
          draggable="false"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}