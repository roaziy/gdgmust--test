import {NextIntlClientProvider, useTranslations, useMessages} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import MainNavbar from "../../components/navbar/MainNavbar";
import type { Metadata } from "next";
import "../../styles/globals.css";

// import CustomCursor from '@/components/CustomCursor/CustomCursor'; 

import {notFound} from 'next/navigation';


export const metadata: Metadata = {
  title: "Welcome to GDG on Campus MUST",
  description: "This is a website for GDG on Campus at Mongolian University of Science and Technology",
}; 

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  // const messages = await getMessages();
  const messages = await getMessages({ locale });
 
  
  return (
    <html lang={locale}>
      <head>
          <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="fixed top-0 left-0 w-full">
          {/* <CustomCursor /> */}
        </div>
        <div className="fixed top-0 left-0 w-full">
          <MainNavbar />
        </div>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
