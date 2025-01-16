import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Montserrat} from 'next/font/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  style: "normal",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Praxis Perspektivwechsel",
  description: "Praxis für Einzeltherapie, Paarberatung, Familientherapie und Coaching in Berlin",
  keywords: ["Systemische Therapie", "Paarberatung", "Familientherapie", "Coaching", "Berlin", "Praxis"],
  openGraph: {
    type: "website",
    title: "Meta Tags",
    description: "Praxis Perspektivwechsel ist eine Praxis spezialisiert auf Einzeltherapie, Paarberatung, Familientherapie und Coaching in Berlin",
    siteName: "Praxis Perspektivwechsel",
    url: "https://praxis-perspektivwechsel.de",
    locale: "de_DE",
    images: [{
      url: "https://praxis-perspektivwechsel.de/g.jpg",
      width: 1200,
      height: 630,
      alt: "Praxis Perspektivwechsel",
    },
  ]
}};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
