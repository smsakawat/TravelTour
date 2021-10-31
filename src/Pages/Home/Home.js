import React from "react";
import Banner from "../../components/Banner/Banner";
import Destinations from "../../components/Destinations/Destinations";
import Discount from "../../components/Discount/Discount";
import Tours from "../../components/Tours/Tours";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tours></Tours>
      <Destinations></Destinations>
      <Discount></Discount>
    </div>
  );
};

export default Home;
