import React from "react";
import Hero from "./Hero";
import Chain from "./Chain";
import Sponsor from "./Sponsor";
import Goal from "./Goal";
import ProductList from "./Product";
import Portfolio_home from "./Portfolio_home";

const Home = () => {

  return (
    <div>
      <Hero/>
      <ProductList/>
      <Goal/>
      <Portfolio_home/>
      <Chain/>
      <Sponsor/>
    </div>
  );
};

export default React.memo(Home);
