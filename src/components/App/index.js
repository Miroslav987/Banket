import React from "react";
import MainPage from "../../pages/Main";
import Navbar from "../Navbar";
import Filters from "../RestFilters";
import About from "../About";
import Footer from "../Footer";


const App = () => {
  return (<div>
    <Navbar/>
    <MainPage/>
    <Filters/>
    <About/>
    <Footer/>
  </div>)
};

export default App;
