import React from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stheno App | Turn Your Life Around",
  description:
    "The App to help you turn your life around. Build willpower and discipline through goal setting, habit tracking, and self-reflection exercises.",
  keywords: "willpower, discipline, build willpower",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-[#D9D9D9]">
        <Navbar />
        <main className={inter.className}>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
