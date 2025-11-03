import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alphe.AI - Revolutionary AI Infrastructure",
  description: "Guaranteed 60-70% cost savings on AI infrastructure. The inevitable solution every company needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full">
      <body
        className={`${spaceGrotesk.variable} antialiased w-full`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
