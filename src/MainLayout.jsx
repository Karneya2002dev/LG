// layouts/MainLayout.jsx
import React from "react";


import Header from "./Header/Header";
import Footer from "./Header/Footer";
import FloatingButtons from "./Header/FloatingButton";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default MainLayout;