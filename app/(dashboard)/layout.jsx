import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default DashboardLayout;
