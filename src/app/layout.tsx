import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClerkNextProvider from "./providers/ClerkProvider";

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
  description: "Generateur de texte  | Prompt ",
  icons: {
    icon: "/favicon.ico.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className="scroll-smooth"  suppressHydrationWarning>
      
      {/* <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
       <link rel="icon" href="/favicon.ico.jpg" type="image/jpg" />
      </head> */}
     
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <ClerkNextProvider>
           {children}
        </ClerkNextProvider>
      </body>
    </html>
  );
}
