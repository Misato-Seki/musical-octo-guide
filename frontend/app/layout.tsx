import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import NavBar from '@/components/NavBar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const josefinSlab = localFont({
  src: [
    {
      path: './fonts/JosefinSlab-SemiBold.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/JosefinSlab-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/JosefinSlab-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-josefin-slab',
});

export const metadata: Metadata = {
  title: "Misato Seki",
  description: "Misato's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSlab.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative">
          <NavBar />
          <main className="absolute top-16 md:top-0 md:left-64 w-[calc(100vw-16rem)]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
