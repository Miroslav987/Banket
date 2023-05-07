import React, { useEffect } from "react";
import Mainrouter from "./Mainrouter";
import Navbar from "./Components/Navbar";
import { useActions } from "./Components/hooks/UseActions";
import { Box } from "@mui/material";

const App = () => {
  const { AccRefresh, getprofile } = useActions();
  useEffect(() => {
    AccRefresh();
    getprofile();
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
      {/* <Box mt="50px"> */}
      <Mainrouter />
      {/* </Box> */}
    </>
  );
};

export default App;
