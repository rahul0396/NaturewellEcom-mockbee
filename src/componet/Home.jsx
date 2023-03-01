import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Category from "./Category";
const Home = () => {
  // fetch("/api/products")
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));

  return (
    <div>
      <Slider />
      <Category />
    </div>
  );
};

export default Home;
