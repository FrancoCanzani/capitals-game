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
        className={`${inter.className} relative rounded-md bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] antialiased min-w-full min-h-screen flex flex-col items-center`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
