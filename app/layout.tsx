import { Geist } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Launch MVP - Simple Hero Page",
  description: "A minimal Next.js hero page MVP - simple, fast, and ready to customize",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
