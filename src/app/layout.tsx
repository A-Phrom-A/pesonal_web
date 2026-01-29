import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpotlightBackground } from "@/components/SpotlightBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KITTISAK TANTRATORN",
  description: "A modern dark minimalist portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased`}>
        <SpotlightBackground />
        {children}
      </body>
    </html>
  );
}
