import React from "react";
import MainPage from "../../pages/Main";
import Navbar from "../Navbar";
import Filters from "../RestFilters";


const App = () => {
  return <div>
    <Navbar/>
    <MainPage/>
    <Filters/>
  </div>;
};

export default App;