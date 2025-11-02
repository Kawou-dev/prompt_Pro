import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClerkNextProvider from "./providers/ClerkProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prompt AI Pro",
  description: "Generateur de texte | Prompt",
  icons: {
    icon: "/favicon.ico.jpg",   // <-- Mets ton image ici
    apple: "/favicon.ico.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
        <ClerkNextProvider>
          {/* <Navbar /> */}
          {children}
        </ClerkNextProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
