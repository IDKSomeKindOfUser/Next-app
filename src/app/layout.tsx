import type {Metadata} from "next";
import {Noto_Sans} from "next/font/google";
import "./globals.css";
import React from "react";

const notoSans = Noto_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={notoSans.className}>{children}</body>
        </html>
    );
}
