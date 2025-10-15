import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto , Lato, Open_Sans , Montserrat} from "next/font/google";
import "./globals.css";
import Head from "next/head";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
   subsets :  ['latin'] , 
   variable : "--font-montserrat"
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Bah Mamadou Oury",
  description: "The best portfolio showcasing my work and skills.",
  icons: {
    icon: "/favicon.ico.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
   <html lang="en"  >
      <Head>
      <link rel="icon" href="/favicon.ico.jpg" type="image/jpeg" />
    </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}   bg-gradient-to-br from-blue-50 to-indigo-50
        ${roboto.variable} ${lato.variable} ${openSans.variable} ${montserrat.variable}
         antialiased `}
      > 
      
        {children}
   
      </body>
    </html>

  );
}
