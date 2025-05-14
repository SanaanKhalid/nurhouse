import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHeading = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nur House",
  description: "Nur House - A premium co-working space in Chicago with events, desks, meeting rooms, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased flex flex-col",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
