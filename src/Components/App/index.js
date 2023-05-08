import React from "react";
// import MainPage from "../../pages/Main";
// import Navbar from "../Navbar";
// import Filters from "../RestFilters";
// import About from "../About";
// import Footer from "../Footer";
import ResaurantList from "../RestaurantList";


const App = () => {
  const images = Array.from({ length: 10 }, (_, i) => (
    `https://loremflickr.com/640/480?random=${i + 1}`
  ));
  return (<div>
      <ResaurantList images={images}/>

    {/* <Navbar/>
    <MainPage/>
    <Filters/>
    <About/>
    <Footer/> */}
  </div>)
};

export default App;
