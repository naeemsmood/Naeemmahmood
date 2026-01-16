import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Image from "next/image";

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
      <body className="antialiased">
        <Image src="/logo.jpg" alt="Naeem Mahmood Logo" width={150} height={50} />

        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
