import React from "react";
import Hero from "./Hero";
import Chain from "./Chain";
import Sponsor from "./Sponsor";
import Goal from "./Goal";

const Home = () => {

  return (
    <div>
      <Hero/>
      <Goal/>
      <Chain/>
      <Sponsor/>
    </div>
  );
};

export default React.memo(Home);
