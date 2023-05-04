import React from "react";
import MainPage from "../../pages/Main";
import Navbar from "../Navbar";
import Filters from "../RestFilters";
import Footer from "../Footer";

export const Home = () => {
  return (
    <>
      <MainPage />
      <Filters />
      <Footer />
    </>
  );
};
