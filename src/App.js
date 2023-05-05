import React, { useEffect } from "react";
import Mainrouter from "./Mainrouter";
import Navbar from "./Components/Navbar";
import { useActions } from "./Components/hooks/UseActions";

const App = () => {
  const { AccRefresh } = useActions();
  useEffect(() => {
    AccRefresh();
  }, []);
  let count = 0;
  let intervalId = setInterval(function () {
    count++;
    if (count == 100000000000000000000000000000000000000000n) {
      clearInterval(intervalId);
    }
    AccRefresh();
  }, 1800000);
  return (
    <>
      <Navbar />
      <Mainrouter />
    </>
  );
};

export default App;
