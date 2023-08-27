import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Capitals - Guess the capital!',
  description: 'Guess the capital of the country',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} antialiased max-w-2xl flex flex-col mx-4 mt-4 lg:mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
