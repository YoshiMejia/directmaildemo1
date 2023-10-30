'use client';
import './globals.css';
// import { NavHead } from './components/NavHead';
import Footer from './components/Footer';
import { SessionProvider } from 'next-auth/react';
import { cn } from '../lib/utils';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen font-sans antialiased grainy',
          inter.className
        )}
      >
        <SessionProvider>
          {/* <NavHead /> */}
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
