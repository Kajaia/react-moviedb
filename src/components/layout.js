import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

export default function Layout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.esm");
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Script src="https://kit.fontawesome.com/ac59870ee9.js" />
    </>
  );
}
