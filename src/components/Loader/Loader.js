import React from "react";
import LoaderContainer from "../../containers/LoaderContainer";
import Mehdi from "../../assets/images/Mehdi";
import { Box, LinearProgress } from "@material-ui/core";

const Loader = () => {
  return (
    <LoaderContainer>
      {/* <Mehdi width={250} /> */}
      <h1 style={{ textAlign: "center" }}>Juan Ryan</h1>
      <p style={{ textAlign: "center" }}>Senior Software Engineer</p>
    </LoaderContainer>
  );
};

export default Loader;
