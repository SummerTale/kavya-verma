import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import {Footer} from "@/components/Footer";
import ClickSpark from "@/components/ClickSpark";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kavya Verma | Full-Stack Developer",
  description:
    "Full-stack developer building clean, secure web applications with React, Next.js, and Node.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 text-zinc-900 antialiased">
        <ClickSpark
          sparkColor="#000000"
          sparkSize={12}
          sparkCount={8}
          duration={400}
        >
          <Header />
            {children}
          <Footer />
        </ClickSpark>
      </body>
    </html>
  );
}
