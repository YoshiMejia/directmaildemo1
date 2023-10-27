'use client';
import './globals.css';
import { NavHead } from './components/NavHead';
import Footer from './components/Footer';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <NavHead />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
