<<<<<<< HEAD
"use client"; 

import { useEffect } from "react";
=======
"use client"; // Client Component banana zaroori hai
import { useEffect } from "react";
import type { Metadata } from "next";
>>>>>>> 80ef67d8dfa87cbf875371cd96ec42a88f06aacf
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const script = document.createElement("script");
<<<<<<< HEAD
    script.src = "//code.tidio.co/qbgboqylc6ts1v7vep1bv9dyu7fzdbvv.js"; 
=======
    script.src = "//code.tidio.co/qbgboqylc6ts1v7vep1bv9dyu7fzdbvv.js"; // ✅ Tumhari Tidio API Key
>>>>>>> 80ef67d8dfa87cbf875371cd96ec42a88f06aacf
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
