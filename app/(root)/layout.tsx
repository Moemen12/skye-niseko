import type { Metadata } from "next";
import "../globals.css";
import React from "react";
import Header from "@/components/shared/Header";
import Image from "next/image";
import coloredLine from "../../public/assets/images/colored-line.gif";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Premium ski-in ski-out hotel in Niseko | Skye Niseko",
  description: "Enjoy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <div className="flex-none">
          <Image
            className="h-1 w-full"
            src={coloredLine}
            alt={"colored line"}
          />

          <Header />
        </div>
        <main>{children}</main>
        <div className="flex-none">
          <Footer />
        </div>
      </body>
    </html>
  );
}
