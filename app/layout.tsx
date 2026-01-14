import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Image from "next/image";
import logo from "@/public/logo.jpg";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naeem Mahmood - Peak Performance Coach",
  description: "Peak Performance Coach | Keynote Speaker | Founder of Peak Humans. Helping leaders and organizations unlock their full potential.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Image src="/logo.jpg" alt="Naeem Mahmood Logo" width={150} height={50} />

        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
