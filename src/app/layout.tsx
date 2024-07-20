import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { HeroScroll } from "@/components/ui/HeroScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BYTE CCNY",
  description: "Build Your Technical Experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <head>
        <link
          rel="icon"
          href="https://byte-media.s3.us-east-2.amazonaws.com/ccny_logo.png"
        />
        <meta
          name="description"
          content="Build Your Technical Experience at BYTE with other software engineers."
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="relative flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
