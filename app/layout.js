import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./Component/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog View",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1400px] mx-auto min-h-[calc(100svh-200px)]  bg-gray-300 text-black`}
      >
        <Nav></Nav>
        <div className="">{children}</div>
       
      </body>
    </html>
  );
}
