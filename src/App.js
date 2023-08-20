import React from "react";
import AmazonNavbar from "./components/navbar.js";
import HomePage from "./pages/homePage/homePage";
import Footer from "./components/footer/footer";
import CategoryPage from "./pages/categories/categoriesPage";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/productPage/productPage";
import SignInSignUp from "./pages/signInSignUp/signInSignUp";
import { CartPage } from "./pages/cartPage/cartPage";
import { ProfilePage } from "./pages/profilePage/profilePage";
export default function App() {
  return (
    <>
      <AmazonNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/signin" element={<SignInSignUp />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </>
  );
}
