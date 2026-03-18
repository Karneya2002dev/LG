import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import LGHeroSection from "./Accessories/Hero";
import ScrollToTop from "./ScrollToTop";
import Admin from "./Admin/Admin";
import MainLayout from "./MainLayout";
import EditProduct from "./Admin/EditProduct";


const App = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* MAIN WEBSITE ROUTES */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/accessories/"
          element={
            <MainLayout>
              <LGHeroSection />
            </MainLayout>
          }
        />

        {/* ADMIN ROUTE (NO HEADER/FOOTER) */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/edit/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
};

export default App;