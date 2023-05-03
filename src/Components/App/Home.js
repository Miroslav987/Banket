import React from "react";
import MainPage from "../../pages/Main";

import Filters from "../RestFilters";
import About from "../About";
import Footer from "../Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <MainPage />
      <Filters />
      <About />
      <Footer />
    </>
  );
};

export default App;
