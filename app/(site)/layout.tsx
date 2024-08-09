import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL as string;

export const metadata: Metadata = {
  metadataBase: new URL(NEXT_PUBLIC_URL),
  title: "Interior",
  description: "Interior Agency",
  icons: [
    {
      url: "/meta/favicon.ico",
    },
    {
      url: "/public/meta/favicon.ico",
    },
    {
      url: "/meta/favicon-16x16.png",
      rel: "icon",
      type: "image/png",
    },
    {
      url: "/meta/favicon-32x32.png",
      rel: "icon",
      type: "image/png",
    },
  ],
  manifest: "/meta/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
