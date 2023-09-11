import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Capitals - Guess the capital!",
  description: "Guess the capital of the country",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative flex min-h-screen min-w-full flex-col items-center rounded-md bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] antialiased dark:bg-slate-800`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
