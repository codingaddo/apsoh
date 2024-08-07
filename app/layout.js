"use client";
import { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";
import styles from "./styles/mouseanime.module.css";
import "./globals.css";
import BackToTop from "./components/BackToTop";
import Provider from "./context/Provider";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: "APSOH",
  description: "African Preparatory School of Hope",
};

export default function RootLayout({ children }) {
  const mousePointer = useRef(0);
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      const x = event.clientX;
      const y = event.clientY;
      mousePointer.current.style.left = x + 15 + "px";
      mousePointer.current.style.top = y + 15 + "px";
    });
  }, []);

  return (
    <html lang="en">
      <body className={""}>
        <Provider>
          <div ref={mousePointer} className={styles.mouseMove}></div>

          <TopNavbar />
          <Navbar />
          <BackToTop />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
