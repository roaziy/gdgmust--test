import {NextIntlClientProvider, useTranslations, useMessages} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import MainNavbar from "../../components/navbar/MainNavbar";
import Footer from "../../components/footer/Footer";
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
          <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      {/* <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head> */}
      <body>
        {/* <div className="fixed top-0 left-0 w-full">
          <CustomCursor />
        </div> */}
        {/* <div className="fixed left-0 w-full"> */}
        <div className="w-full fixed">  
          <MainNavbar />
        </div>
        <div id="layout-container" className="min-h-screen flex flex-col">
          <NextIntlClientProvider messages={messages}>
            <div id="content" className="flex-grow">
              {children}
            </div>
          </NextIntlClientProvider>
          <div className="footer w-full">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
