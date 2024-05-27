import type { Metadata } from "next";
import { Prata, Lato } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const prata = Prata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-prata",
});

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Think first",
  description:
    "Think first - write second. Making you think before you write, or risk having to start over...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${prata.variable} ${lato.variable}`}>
      <body className="bg-gradient-corner-radial">{children}</body>
      <GoogleAnalytics gaId="G-LSTJZQ1MZ3" />
    </html>
  );
}
