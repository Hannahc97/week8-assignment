import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"]
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Travel and Thoughts",
  description: "Blogging website about travelling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={poppins.className}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
