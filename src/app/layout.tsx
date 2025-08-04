import type {Metadata} from "next";
// import {Geist, Geist_Mono} from "next/font/google";
import "../styles/globals.css";
import CookieConsentBanner from "@/components/shared/CookieConsentBanner/CookieConsentBanner";
import Head from "next/head";

// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "Бюро переводов «Параллельный мир»",
    description: "Технический перевод. Медицинский перевод. Юридический перевод. Перевод текста.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <html lang="en">
        <Head>
            <link rel="icon" href="/src/app/favicon.ico" />
        </Head>
        <body
            // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        <CookieConsentBanner/>
        </body>
        </html>
    );
}
