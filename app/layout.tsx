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
      <body className={`${inter.className} antialiased flex flex-col items-center`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
