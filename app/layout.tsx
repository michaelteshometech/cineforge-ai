import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/landing/Navbar";


const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "CineForge AI",
  description:
    "Create cinematic films, advertisements, and animated worlds using artificial intelligence.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body
        className={`
          ${spaceGrotesk.variable}
          ${inter.variable}
        `}
      >

        <Navbar />
        {children}

      </body>

    </html>

  );

}