import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Merci RUYANGA",
  description: "Authentication system built by Merci RUYANGA using NestJS and Next.js",
  authors: [{ name: "RUYANGA Merci", url: "https://github.com/RUYANGA" }],
  keywords: ["Authentication", "Next.js", "NestJS", "Fullstack", "Merci RUYANGA"],
  creator: "Merci RUYANGA",
  metadataBase: new URL("https://blogs-v2-one.vercel.app"),
  openGraph: {
    title: "Merci RUYANGA Software Engineer ",
    description: "Fullstack Auth App with NestJS and Next.js",
    url: "https://auth-web-rho.vercel.app",
    siteName: "Auth App",
    locale: "en_US",
    type: "website",
  },
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
         <Toaster
          richColors
          position="top-center"
          duration={5000}
        />
        {children}
      </body>
    </html>
  );
}
