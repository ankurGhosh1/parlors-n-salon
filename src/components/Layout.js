// src/app/Layout.js
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { Inter } from "next/font/google";
import Footer from "./Footer";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-b from-lightYellow to-darkYellow">
      <Navbar />
      <main className={`${inter.className}`}>{children}</main>
      <Footer />
    </div>
  );
}
