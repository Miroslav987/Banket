import React from "react";
import MainPage from "../../pages/Main";
import Navbar from "../Navbar";
import Filters from "../RestFilters";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <MainPage />
      <Filters />
    </div>
  );
};
