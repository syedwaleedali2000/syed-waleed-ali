import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedCursor from "./components/AnimatedCursor";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Syed Waleed Ali",
  description: "Front-End Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.variable}>
        <Navbar />
        <main className="min-h-screen pt-24">
          <AnimatedCursor />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
