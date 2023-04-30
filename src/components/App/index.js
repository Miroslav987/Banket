import React from "react";
import MainPage from "../../pages/Main";
import Navbar from "../Navbar";
import RestaurantsList from "../Restaurants";
import ActiveButton from "../Buttons";

const App = () => {
  return <div>
    <Navbar/>
    <MainPage/>
    <ActiveButton/>
    <RestaurantsList/>
  </div>;
};

export default App;
