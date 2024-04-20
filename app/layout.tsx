import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wash Wise - Your Laundry Solution!",
  description: "Discover convenience and cleanliness with WashWise, your go-to destination for hassle-free laundry services. From washing and folding to dry cleaning, we make laundry easy and efficient. Experience smart solutions for your laundry needs at WashWise!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
